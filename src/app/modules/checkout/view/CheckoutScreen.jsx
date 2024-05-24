import Storefront from '@mui/icons-material/Storefront';
import { Button } from '@mui/material';
import { useCallback, useContext, useEffect, useState } from 'react';
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

    const [isPaymentSelected, setIsPaymentSelected] = useState(false);
    const [groupedProduct, setGroupedProducts] = useState({});
    const [availablePaymentOption, setAvailablePaymentOption] = useState([true, true]);
    const { cart, removeFromCart } = useContext(CartContext);
    const { showModal, hideModal } = useModal();
    const { getShop } = useShop();
    const { shippingOption, updateShippingOption } = useShipping();
    const navigate = useNavigate();

    const navigateWithCleanup = useCallback(() => {
        navigate('/');
        if (Array.isArray(checkedProducts)) {
            checkedProducts.forEach((itemId) => removeFromCart(itemId));
        }
    }, [checkedProducts, removeFromCart, navigate]);

    const handlePlaceOrderClick = useCallback(() => {
        if (isPaymentSelected) {
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
    }, [showModal, hideModal, navigateWithCleanup, isPaymentSelected]);

    const handleChangeClick = () => {
        showModal({
            modal: (
                <ShippingOptionModal
                    hideModal={hideModal}
                    shippingOption={shippingOption}
                    updateShippingOption={updateShippingOption}
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
        if (from !== 'buyNow') {
            const groupProducts = async () => {
                const groups = {};
                const promises = checkedProducts.map(async (product) => {
                    const shop = await getShop('520386e5-8b73-4e2f-a038-7800bf31164d');
                    if (!groups[shop.name]) {
                        groups[shop.name] = {
                            shop,
                            products: [],
                        };
                        setSupportedPaymentOption(shop);
                    }
                    groups[shop.name].products.push(product);
                });

                await Promise.all(promises);
                setGroupedProducts(groups);
            };
            groupProducts();
        } else {
            const groupProducts = async () => {
                const groups = {};
                const shop = await getShop('520386e5-8b73-4e2f-a038-7800bf31164d');
                groups[shop.name] = {
                    shop,
                    checkedProducts,
                };
                setSupportedPaymentOption(shop);
            };
            groupProducts();
        }
    }, [from, checkedProducts, getShop, availablePaymentOption]);

    if (from === 'buyNow') {
        return (
            <Wrapper>
                <COReusableStyles.BorderConatiner>
                    <ShippingDetailsBar shippingOption={shippingOption} />
                </COReusableStyles.BorderConatiner>
                <COReusableStyles.BorderConatiner>
                    <Container>
                        <COReusableStyles.Title>Products Ordered</COReusableStyles.Title>
                        <ProductOrderedLayout>
                            <ItemStoreContainer>
                                <Storefront />
                                <COReusableStyles.Text>Titan Badminton Store</COReusableStyles.Text>
                            </ItemStoreContainer>
                            <Label>Unit Price</Label>
                            <Label>Quantity</Label>
                            <Label>Total Price</Label>
                        </ProductOrderedLayout>
                    </Container>
                    <COReusableStyles.Divider />

                    <ProductOrderedLayout>
                        <ItemStoreContainer>
                            <img
                                src={checkedProducts.imgSrc}
                                alt={checkedProducts.name}
                                width="54px"
                            />
                            <COReusableStyles.Text style={{ textAlign: 'start' }}>
                                {checkedProducts.name}
                                <p style={{ color: COLORS.darkGrey, fontSize: FONTSIZE['x-small'] }}>
                                    {[
                                        checkedProducts.options.color ? checkedProducts.options.color : '',
                                        checkedProducts.options.size ? checkedProducts.options.size : '',
                                        checkedProducts.options.grade ? checkedProducts.options.grade : '',
                                    ]
                                        .filter(Boolean)
                                        .join(', ')}
                                </p>
                            </COReusableStyles.Text>
                        </ItemStoreContainer>
                        <COReusableStyles.Text>RM{checkedProducts.price.toFixed(2)}</COReusableStyles.Text>
                        <COReusableStyles.Text>{checkedProducts.quantity}</COReusableStyles.Text>
                        <COReusableStyles.Text>
                            RM{(checkedProducts.price * checkedProducts.quantity).toFixed(2)}
                        </COReusableStyles.Text>
                    </ProductOrderedLayout>
                    <COReusableStyles.Divider />
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
                        <OrderTotalLayout>
                            <COReusableStyles.Text style={{ textAlign: 'right' }}>
                                Order Total (1 item):
                            </COReusableStyles.Text>

                            <div />
                            <TotalPrice>RM{(checkedProducts.price * checkedProducts.quantity).toFixed(2)}</TotalPrice>
                        </OrderTotalLayout>
                    </Container>
                </COReusableStyles.BorderConatiner>

                <COReusableStyles.BorderConatiner>
                    <SelectPaymentMethod
                        setIsPaymentSelected={setIsPaymentSelected}
                        availablePaymentOption={availablePaymentOption}
                    />
                    <COReusableStyles.Divider />

                    <Container>
                        <PaymentDetailsLayout>
                            <TextAlignEnd>Order Subtotal: </TextAlignEnd>
                            <TextAlignEnd>
                                RM{(checkedProducts.price * checkedProducts.quantity).toFixed(2)}
                            </TextAlignEnd>
                        </PaymentDetailsLayout>
                        <PaymentDetailsLayout>
                            <TextAlignEnd>Shipping Subtotal: </TextAlignEnd>
                            <TextAlignEnd>RM5.90</TextAlignEnd>
                        </PaymentDetailsLayout>
                        <PaymentDetailsLayout>
                            <TextAlignEnd>Total Payment: </TextAlignEnd>
                            <TotalPayment>
                                RM{(checkedProducts.price * checkedProducts.quantity + 5.9).toFixed(2)}
                            </TotalPayment>
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

    let totalPrice = 0;

    return (
        <Wrapper>
            <COReusableStyles.BorderConatiner>
                <ShippingDetailsBar shippingOption={shippingOption} />
            </COReusableStyles.BorderConatiner>
            <COReusableStyles.BorderConatiner>
                <Container>
                    <COReusableStyles.Title>Products Ordered</COReusableStyles.Title>
                </Container>
                {Object.entries(groupedProduct).map(([shopName, group]) => (
                    <>
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
                        {group.products.map((element) => {
                            const product = cart.find((item) => item.id === element);
                            totalPrice += product.quantity * product.price;
                            return (
                                <>
                                    <ProductOrderedLayout>
                                        <ItemStoreContainer>
                                            <img
                                                src={product.imgSrc}
                                                alt={product.name}
                                                width="54px"
                                            />
                                            <COReusableStyles.Text style={{ textAlign: 'start' }}>
                                                {product.name}
                                                <p style={{ color: COLORS.darkGrey, fontSize: FONTSIZE['x-small'] }}>
                                                    {[
                                                        product.options.color ? product.options.color : '',
                                                        product.options.size ? product.options.size : '',
                                                        product.options.grade ? product.options.grade : '',
                                                    ]
                                                        .filter(Boolean)
                                                        .join(', ')}
                                                </p>
                                            </COReusableStyles.Text>
                                        </ItemStoreContainer>
                                        <COReusableStyles.Text>RM{product.price.toFixed(2)}</COReusableStyles.Text>
                                        <COReusableStyles.Text>{product.quantity}</COReusableStyles.Text>
                                        <COReusableStyles.Text>
                                            RM{(product.price * product.quantity).toFixed(2)}
                                        </COReusableStyles.Text>
                                    </ProductOrderedLayout>
                                    <COReusableStyles.Divider />
                                </>
                            );
                        })}
                    </>
                ))}
                <Container>
                    <ShippingLayout>
                        <COReusableStyles.Text style={{ textAlign: 'right' }}>Shipping Method:</COReusableStyles.Text>
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
                    <OrderTotalLayout>
                        {checkedProducts.length === 1 ? (
                            <COReusableStyles.Text style={{ textAlign: 'right' }}>
                                Order Total (1 item):
                            </COReusableStyles.Text>
                        ) : (
                            <COReusableStyles.Text style={{ textAlign: 'right' }}>
                                Order Total ({checkedProducts.length} items):
                            </COReusableStyles.Text>
                        )}
                        <div />
                        <TotalPrice>RM{totalPrice.toFixed(2)}</TotalPrice>
                    </OrderTotalLayout>
                </Container>
            </COReusableStyles.BorderConatiner>

            <COReusableStyles.BorderConatiner>
                <SelectPaymentMethod
                    setIsPaymentSelected={setIsPaymentSelected}
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
                        <TextAlignEnd>RM5.90</TextAlignEnd>
                    </PaymentDetailsLayout>
                    <PaymentDetailsLayout>
                        <TextAlignEnd>Total Payment: </TextAlignEnd>
                        <TotalPayment>RM{(totalPrice + 5.9).toFixed(2)}</TotalPayment>
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
