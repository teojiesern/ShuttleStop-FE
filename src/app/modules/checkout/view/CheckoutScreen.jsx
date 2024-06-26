import Storefront from '@mui/icons-material/Storefront';
import { Button } from '@mui/material';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import CrossedModal from '../../../platform/modal/CrossedModal';
import useModal from '../../../platform/modal/useModal';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../platform/style/PlatformReusableStyles';
import CartContext from '../../customer/context/CartContext';
import useShop from '../../customer/view/hooks/useShop';
import OrderPlacedModal from '../modal/OrderPlacedModal';
import ShippingOptionModal from '../modal/ShippingOptionModal';
import SelectPaymentMethod from './component/SelectPaymentMethod';
import ShippingDetailsBar from './component/ShippingDetailsBar';
import useOrder from './hooks/useOrder';
import useShipping from './hooks/useShipping';
import COReusableStyles from './styles/COReusableStyles';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    gap: 1rem;
`;
const ProductOrderedLayout = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 7fr 1fr 1fr 1fr;
    gap: 1rem;
    align-items: center;
`;
const ItemStoreContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
    gap: 1rem;
`;
const Label = styled.span`
    color: ${COLORS.darkGrey};
    font-size: ${FONTSIZE['x-small']};
    font-weight: ${FONTWEIGHT.REGULAR};
    text-align: center;
`;
const ShippingLayout = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 6.5fr 1.5fr 1fr 1fr;
    align-items: center;
    gap: 1rem;
`;
const OrderTotalLayout = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 8fr 1fr 1fr;
    align-items: center;
    gap: 1rem;
`;
const ChangeShippingMethod = styled.button`
    background: none;
    color: #007ce0;
    border: none;
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    cursor: pointer;
`;
const TotalPrice = styled.span`
    color: ${COLORS.black};
    font-size: ${FONTSIZE.medium};
    font-weight: ${FONTWEIGHT.REGULAR};
    padding-right: 1.5rem;
    text-align: center;
`;
const PaymentDetailsLayout = styled.div`
    display: grid;
    grid-template-columns: 8fr 2fr;
    align-items: center;
    gap: 1rem;
`;
const TotalPayment = styled.span`
    color: ${COLORS.green};
    font-size: ${FONTSIZE.medium};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    text-align: end;
`;
const TextAlignEnd = styled.span`
    color: ${COLORS.black};
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    text-align: end;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export default function CheckoutScreen() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const from = searchParams.get('from');
    const checkedProducts = JSON.parse(searchParams.get('products'));

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const [groupedProduct, setGroupedProducts] = useState({});
    const [availablePaymentOption, setAvailablePaymentOption] = useState([true, true]);
    const [availableShippingOption, setAvailableShippingOption] = useState([true, true]);
    const { removeFromCart } = useContext(CartContext);
    const { showModal, hideModal } = useModal();
    const { getShop } = useShop();
    const { createOrder } = useOrder();
    const { shippingOption, updateShippingOption } = useShipping();
    const navigate = useNavigate();

    const navigateWithCleanup = useCallback(() => {
        navigate('/');
        if (Array.isArray(checkedProducts)) {
            checkedProducts.forEach((item) => removeFromCart(item));
        }
    }, [checkedProducts, removeFromCart, navigate]);

    const handlePlaceOrderClick = useCallback(() => {
        const payload = {
            groupedProduct,
            shippingOption,
            selectedPaymentMethod,
        };

        if (selectedPaymentMethod !== null) {
            createOrder(payload);
            showModal({
                modal: (
                    <OrderPlacedModal
                        hideModal={hideModal}
                        navigate={navigateWithCleanup}
                    />
                ),
                disableBackdropDismiss: true,
            });
        } else {
            showModal({
                modal: <CrossedModal title="You have not selected any payment method" />,
            });
            setTimeout(() => {
                hideModal();
            }, 3000);
        }
    }, [showModal, hideModal, navigateWithCleanup, selectedPaymentMethod, createOrder, groupedProduct, shippingOption]);

    const handleChangeClick = () => {
        showModal({
            modal: (
                <ShippingOptionModal
                    hideModal={hideModal}
                    shippingOption={shippingOption}
                    updateShippingOption={updateShippingOption}
                    availableShippingOption={availableShippingOption}
                />
            ),
            disableBackdropDismiss: true,
        });
    };

    useEffect(() => {
        const setSupportedPaymentOption = (shop) => {
            if (!shop.shopSupportedPaymentOption.includes('Online Banking') && availablePaymentOption[0]) {
                setAvailablePaymentOption((prevOptions) => [false, prevOptions[1]]);
            } else if (!shop.shopSupportedPaymentOption.includes('Cash on Delivery') && availablePaymentOption[1]) {
                setAvailablePaymentOption((prevOptions) => [prevOptions[0], false]);
            }
        };
        const setSupportedShippingOption = (shop) => {
            if (!shop.shopSupportedShippingOption.includes('Standard Delivery') && availableShippingOption[0]) {
                setAvailableShippingOption((prevOptions) => [false, prevOptions[1]]);
            } else if (!shop.shopSupportedShippingOption.includes('Self Pickup') && availableShippingOption[1]) {
                setAvailableShippingOption((prevOptions) => [prevOptions[0], false]);
            }
        };
        if (from !== 'buyNow') {
            const groupProducts = async () => {
                const groups = {};
                const promises = checkedProducts.map(async (item) => {
                    const shop = await getShop(item.product.productId);
                    if (!groups[shop.name]) {
                        groups[shop.name] = {
                            shop,
                            products: [],
                        };
                        setSupportedPaymentOption(shop);
                        setSupportedShippingOption(shop);
                    }
                    groups[shop.name].products.push(item);
                });

                await Promise.all(promises);

                Object.values(groups).forEach((group) => {
                    group.products.sort((a, b) => checkedProducts.indexOf(a) - checkedProducts.indexOf(b));
                });

                setGroupedProducts(groups);
            };
            groupProducts();
        } else {
            const groupProducts = async () => {
                const groups = {};
                const shop = await getShop(checkedProducts.product.productId);
                groups[shop.name] = {
                    shop,
                    products: [],
                };
                setSupportedPaymentOption(shop);
                setSupportedShippingOption(shop);

                groups[shop.name].products.push(checkedProducts);
                setGroupedProducts(groups);
            };
            groupProducts();
        }
    }, [from, getShop, availablePaymentOption, availableShippingOption]);

    let totalPrice = 0;
    const numOfShops = Object.keys(groupedProduct).length;

    return (
        <Wrapper>
            <COReusableStyles.BorderConatiner>
                <ShippingDetailsBar
                    shippingOption={shippingOption}
                    availableShippingOption={availableShippingOption}
                />
            </COReusableStyles.BorderConatiner>
            <COReusableStyles.BorderConatiner>
                <Container>
                    <COReusableStyles.Title>Products Ordered</COReusableStyles.Title>
                </Container>
                {Object.entries(groupedProduct).map(([shopName, group]) => (
                    <React.Fragment key={shopName}>
                        <COReusableStyles.Divider />
                        <Container>
                            <ProductOrderedLayout>
                                <ItemStoreContainer>
                                    <Storefront />
                                    <COReusableStyles.Text>{shopName}</COReusableStyles.Text>
                                </ItemStoreContainer>
                                <Label>Unit Price</Label>
                                <Label>Quantity</Label>
                                <Label>Total Price</Label>
                            </ProductOrderedLayout>
                        </Container>
                        <COReusableStyles.Divider />
                        {group.products.map((item) => {
                            totalPrice += item.quantity * item.selectedVariantPrice;
                            return (
                                <React.Fragment key={item.product.productId}>
                                    <ProductOrderedLayout>
                                        <ItemStoreContainer>
                                            <img
                                                src={item.product.thumbnailImage}
                                                alt={item.product.name}
                                                width="54px"
                                                height="54px"
                                            />
                                            <COReusableStyles.Text style={{ textAlign: 'start' }}>
                                                {item.product.name}
                                                <p style={{ color: COLORS.darkGrey, fontSize: FONTSIZE['x-small'] }}>
                                                    {item.selectedVariant}
                                                </p>
                                            </COReusableStyles.Text>
                                        </ItemStoreContainer>
                                        <COReusableStyles.Text>
                                            RM{item.selectedVariantPrice.toFixed(2)}
                                        </COReusableStyles.Text>
                                        <COReusableStyles.Text>{item.quantity}</COReusableStyles.Text>
                                        <COReusableStyles.Text>
                                            RM{(item.selectedVariantPrice * item.quantity).toFixed(2)}
                                        </COReusableStyles.Text>
                                    </ProductOrderedLayout>
                                    <COReusableStyles.Divider />
                                </React.Fragment>
                            );
                        })}
                        <Container>
                            <ShippingLayout>
                                <COReusableStyles.Text style={{ textAlign: 'right' }}>
                                    Shipping Method:
                                </COReusableStyles.Text>
                                {shippingOption === 'standardDelivery' ? (
                                    <COReusableStyles.Title style={{ textAlign: 'center' }}>
                                        Standard Delivery
                                    </COReusableStyles.Title>
                                ) : (
                                    <COReusableStyles.Title style={{ textAlign: 'center' }}>
                                        Self Collection
                                    </COReusableStyles.Title>
                                )}
                                <ChangeShippingMethod onClick={handleChangeClick}>
                                    <p>Change</p>
                                </ChangeShippingMethod>
                                <COReusableStyles.Text>RM5.90</COReusableStyles.Text>
                            </ShippingLayout>
                        </Container>
                    </React.Fragment>
                ))}
                <COReusableStyles.Divider />
                <Container>
                    <OrderTotalLayout>
                        {checkedProducts?.length > 1 ? (
                            <COReusableStyles.Text style={{ textAlign: 'right' }}>
                                Order Total ({checkedProducts.length} items):
                            </COReusableStyles.Text>
                        ) : (
                            <COReusableStyles.Text style={{ textAlign: 'right' }}>
                                Order Total (1 item):
                            </COReusableStyles.Text>
                        )}
                        <div />
                        <TotalPrice>RM{(totalPrice + 5.9 * numOfShops).toFixed(2)}</TotalPrice>
                    </OrderTotalLayout>
                </Container>
            </COReusableStyles.BorderConatiner>
            <COReusableStyles.BorderConatiner>
                <SelectPaymentMethod
                    setSelectedPaymentMethod={setSelectedPaymentMethod}
                    availablePaymentOption={availablePaymentOption}
                />
                <COReusableStyles.Divider />

                <Container>
                    <PaymentDetailsLayout>
                        <TextAlignEnd>Order Subtotal: </TextAlignEnd>
                        <TextAlignEnd>RM{totalPrice.toFixed(2)}</TextAlignEnd>
                    </PaymentDetailsLayout>
                    <PaymentDetailsLayout>
                        <TextAlignEnd>Shipping Subtotal: </TextAlignEnd>
                        <TextAlignEnd>RM{(5.9 * numOfShops).toFixed(2)}</TextAlignEnd>
                    </PaymentDetailsLayout>
                    <PaymentDetailsLayout>
                        <TextAlignEnd>Total Payment: </TextAlignEnd>
                        <TotalPayment>RM{(totalPrice + 5.9 * numOfShops).toFixed(2)}</TotalPayment>
                    </PaymentDetailsLayout>
                </Container>
                <COReusableStyles.Divider />
                <ButtonContainer>
                    <Button
                        style={{ ...PlatformReusableStyles.PrimaryButtonStyles }}
                        onClick={handlePlaceOrderClick}
                    >
                        <p>PLACE ORDER</p>
                    </Button>
                </ButtonContainer>
            </COReusableStyles.BorderConatiner>
        </Wrapper>
    );
}
