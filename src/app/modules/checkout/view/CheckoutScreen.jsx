import Storefront from '@mui/icons-material/Storefront';
import { Button } from '@mui/material';
import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import useModal from '../../../platform/modal/useModal';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../platform/style/PlatformReusableStyles';
import CartContext from '../../customer/context/CartContext';
import OrderPlacedModal from '../modal/OrderPlacedModal';
import SelectPaymentMethod from './component/SelectPaymentMethod';
import ShippingDetailsBar from './component/ShippingDetailsBar';
import TotalPriceBar from './component/TotalPriceBar';
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
    const { buyNowProduct } = useContext(CartContext);

    const { showModal, hideModal } = useModal();
    const { shippingOption, updateShippingOption } = useShipping();
    const navigate = useNavigate();

    const handlePlaceOrderClick = useCallback(() => {
        showModal({
            modal: (
                <OrderPlacedModal
                    hideModal={hideModal}
                    navigate={navigate}
                />
            ),
        });
    }, [showModal, hideModal, navigate]);

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

                <TotalPriceBar
                    shippingOption={shippingOption}
                    updateShippingOption={updateShippingOption}
                />
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
                        <TotalPayment>RM{(buyNowProduct.price * buyNowProduct.quantity + 5.9).toFixed(2)}</TotalPayment>
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
