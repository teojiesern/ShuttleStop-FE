import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';

const Container = styled.div`
    display: grid;
    padding: 1.5rem 2rem;
    border: 1px solid ${COLORS.darkGrey};
`;
const TotalContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: right;
    margin-bottom: 1rem;
`;
const Head = styled.span`
    flex: 7 7 70%;
    color: ${COLORS.black};
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
`;
const OrderSubtotal = styled.span`
    flex: 2 2 15%;
    color: ${COLORS.black};
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    padding-right: 1.5rem;
`;
const ShippingSubtotal = styled.span`
    flex: 2 2 15%;
    color: ${COLORS.black};
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    padding-right: 1.5rem;
`;
const TotalPayment = styled.span`
    flex: 2 2 15%;
    color: ${COLORS.green};
    font-size: ${FONTSIZE.medium};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    padding-right: 1.5rem;
`;

export default function PaymentDetails() {
    return (
        <Container>
            <TotalContainer>
                <Head>Order Subtotal:</Head>
                <OrderSubtotal>RM729.00</OrderSubtotal>
            </TotalContainer>
            <TotalContainer>
                <Head>Shipping Subtotal:</Head>
                <ShippingSubtotal>RM5.90</ShippingSubtotal>
            </TotalContainer>
            <TotalContainer>
                <Head>Total Payment:</Head>
                <TotalPayment>RM734.90</TotalPayment>
            </TotalContainer>
        </Container>
    );
}
