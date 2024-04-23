import Storefront from '@mui/icons-material/Storefront';
import { Button } from '@mui/material';
import { useCallback, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import useModal from '../../../platform/modal/useModal';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../platform/style/PlatformReusableStyles';
import CartContext from '../../customer/context/CartContext';
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

    const { cart, removeFromCart } = useContext(CartContext);
    const { showModal, hideModal } = useModal();
    const { shippingOption, updateShippingOption } = useShipping();
    const navigate = useNavigate();

    const navigateWithCleanup = useCallback(() => {
        navigate('/');
        if (Array.isArray(checkedProducts)) {
            checkedProducts.forEach((itemId) => removeFromCart(itemId));
        }
    }, [checkedProducts, removeFromCart, navigate]);

    const handlePlaceOrderClick = useCallback(() => {
        showModal({
            modal: (
                <OrderPlacedModal
                    hideModal={hideModal}
                    navigate={navigateWithCleanup}
                />
            ),
        });
    }, [showModal, hideModal, navigateWithCleanup]);

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

    if (from === 'buyNow') {
        const buyNowProduct = JSON.parse(searchParams.get('products'));

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
                                src={buyNowProduct.imgSrc}
                                alt={buyNowProduct.name}
                                width="54px"
                            />
                            <COReusableStyles.Text style={{ textAlign: 'start' }}>
                                {buyNowProduct.name}
                                <p style={{ color: COLORS.darkGrey, fontSize: FONTSIZE['x-small'] }}>
                                    {[
                                        buyNowProduct.options.color ? buyNowProduct.options.color : '',
                                        buyNowProduct.options.size ? buyNowProduct.options.size : '',
                                        buyNowProduct.options.grade ? buyNowProduct.options.grade : '',
                                    ]
                                        .filter(Boolean)
                                        .join(', ')}
                                </p>
                            </COReusableStyles.Text>
                        </ItemStoreContainer>
                        <COReusableStyles.Text>RM{buyNowProduct.price.toFixed(2)}</COReusableStyles.Text>
                        <COReusableStyles.Text>{buyNowProduct.quantity}</COReusableStyles.Text>
                        <COReusableStyles.Text>
                            RM{(buyNowProduct.price * buyNowProduct.quantity).toFixed(2)}
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
                            <TotalPrice>RM{(buyNowProduct.price * buyNowProduct.quantity).toFixed(2)}</TotalPrice>
                        </OrderTotalLayout>
                    </Container>
                </COReusableStyles.BorderConatiner>

                <COReusableStyles.BorderConatiner>
                    <SelectPaymentMethod />
                    <COReusableStyles.Divider />

                    <Container>
                        <PaymentDetailsLayout>
                            <TextAlignEnd>Order Subtotal: </TextAlignEnd>
                            <TextAlignEnd>RM{(buyNowProduct.price * buyNowProduct.quantity).toFixed(2)}</TextAlignEnd>
                        </PaymentDetailsLayout>
                        <PaymentDetailsLayout>
                            <TextAlignEnd>Shipping Subtotal: </TextAlignEnd>
                            <TextAlignEnd>RM5.90</TextAlignEnd>
                        </PaymentDetailsLayout>
                        <PaymentDetailsLayout>
                            <TextAlignEnd>Total Payment: </TextAlignEnd>
                            <TotalPayment>
                                RM{(buyNowProduct.price * buyNowProduct.quantity + 5.9).toFixed(2)}
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
                {checkedProducts.map((element, index) => {
                    const product = cart.find((item) => item.id === element);
                    totalPrice += product.quantity * product.price;

                    return (
                        <>
                            <Container>
                                {index === 0 && <COReusableStyles.Title>Products Ordered</COReusableStyles.Title>}
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
                <SelectPaymentMethod />
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
