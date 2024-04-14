import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import useModal from '../../../platform/modal/useModal';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import OrderPlacedModal from '../modal/OrderPlacedModal';
import CheckoutProduct from './component/CheckoutProduct';
import PaymentDetails from './component/PaymentDetails';
import ProductOrderedHead from './component/ProductOrderedHead';
import SelectPaymentMethod from './component/SelectPaymentMethod';
import ShippingDetailsBar from './component/ShippingDetailsBar';
import TotalPriceBar from './component/TotalPriceBar';
import useShipping from './hooks/useShipping';

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
`;
const Container = styled.div`
    display: block;
    margin-bottom: 1rem;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 1.5rem 2rem;
    border: 1px solid ${COLORS.darkGrey};
`;
const PlaceOrderButton = styled.button`
    padding: 1rem 2rem;
    color: ${COLORS.white};
    background: ${COLORS.green};
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    margin-right: 1.5rem;
    border: none;
    cursor: pointer;
`;

export default function CheckoutScreen() {
    const { showModal } = useModal();
    const { shippingOption, updateShippingOption } = useShipping();

    const handlePlaceOrderClick = () => {
        showModal({ modal: <OrderPlacedModal /> });
    };

    return (
        <Wrapper>
            <Container>
                <ShippingDetailsBar shippingOption={shippingOption} />
            </Container>
            <Container>
                <ProductOrderedHead />
                <CheckoutProduct />
                <TotalPriceBar
                    shippingOption={shippingOption}
                    updateShippingOption={updateShippingOption}
                />
            </Container>
            <Container>
                <SelectPaymentMethod />
                <PaymentDetails />
                <ButtonContainer>
                    <PlaceOrderButton onClick={handlePlaceOrderClick}>
                        <p>PLACE ORDER</p>
                    </PlaceOrderButton>
                </ButtonContainer>
            </Container>
        </Wrapper>
    );
}
