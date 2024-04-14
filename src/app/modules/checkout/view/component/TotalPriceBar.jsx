import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import useModal from '../../../../platform/modal/useModal';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import ShippingOptionModal from '../../modal/ShippingOptionModal';
import useShipping from '../hooks/useShipping';

const Container2 = styled.div`
    display: block;
    padding: 1.5rem 2rem;
    border: 1px solid ${COLORS.darkGrey};
    margin-bottom: 1rem;
    text-align: center;
    align-items: center;
`;
const ShippingContainer = styled.div`
    display: flex;
    align-items: center;
`;
const ShippingMethodHead = styled.span`
    flex: 5.5 5.5 55%;
    color: ${COLORS.black};
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    text-align: right;
`;
const ShippingMethod = styled.span`
    flex: 1.5 1.5 15%;
    color: ${COLORS.black};
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
`;
const ChangeShippingMethod = styled.button`
    flex: 1 1 10%;
    background: none;
    color: #007ce0;
    border: none;
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
`;
const ShippingPrice = styled.span`
    flex: 1 1 10%;
    color: ${COLORS.black};
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
`;
const OrderTotalContainer = styled.div`
    display: flex;
    margin-top: 1rem;
    align-item: center;
`;
const OrderTotalHead = styled.span`
    flex: 7 7 65%;
    color: ${COLORS.black};
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    text-align: right;
`;
const TotalPrice = styled.span`
    flex: 2 2 20%;
    color: ${COLORS.black};
    font-size: ${FONTSIZE.medium};
    font-weight: ${FONTWEIGHT.REGULAR};
    padding-right: 1.5rem;
    text-align: right;
`;

export default function TotalPriceBar() {
    const { showModal, hideModal } = useModal();
    const { shippingOption } = useShipping();

    const handleChangeClick = () => {
        showModal({
            modal: <ShippingOptionModal hideModal={hideModal} />,
            disableBackdropDismiss: true,
        });
    };

    return (
        <Container2>
            <ShippingContainer>
                <ShippingMethodHead>Shipping Method:</ShippingMethodHead>
                {shippingOption === 'standardDelivery' ? (
                    <ShippingMethod>Standard Delivery</ShippingMethod>
                ) : (
                    <ShippingMethod>Self Collection</ShippingMethod>
                )}

                <ChangeShippingMethod onClick={handleChangeClick}>
                    <p>Change</p>
                </ChangeShippingMethod>
                <ShippingPrice>RM5.90</ShippingPrice>
            </ShippingContainer>
            <OrderTotalContainer>
                <OrderTotalHead>Order Total (1 item):</OrderTotalHead>
                <TotalPrice>RM734.90</TotalPrice>
            </OrderTotalContainer>
        </Container2>
    );
}
