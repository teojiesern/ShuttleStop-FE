import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import useModal from '../../../../platform/modal/useModal';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import ShippingOptionModal from '../../modal/ShippingOptionModal';
import COReusableStyles from '../styles/COReusableStyles';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
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

export default function TotalPriceBar({ shippingOption, updateShippingOption }) {
    const { showModal, hideModal } = useModal();

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

    return (
        <Wrapper>
            <ShippingLayout>
                <COReusableStyles.Text style={{ textAlign: 'right' }}>Shipping Method:</COReusableStyles.Text>
                {shippingOption === 'standardDelivery' ? (
                    <COReusableStyles.Title style={{ textAlign: 'center' }}>Standard Delivery</COReusableStyles.Title>
                ) : (
                    <COReusableStyles.Title style={{ textAlign: 'center' }}>Self Collection</COReusableStyles.Title>
                )}
                <ChangeShippingMethod onClick={handleChangeClick}>
                    <p>Change</p>
                </ChangeShippingMethod>
                <COReusableStyles.Text>RM5.90</COReusableStyles.Text>
            </ShippingLayout>
            <OrderTotalLayout>
                <COReusableStyles.Text style={{ textAlign: 'right' }}>Order Total (1 item):</COReusableStyles.Text>
                <div />
                <TotalPrice>RM734.90</TotalPrice>
            </OrderTotalLayout>
        </Wrapper>
    );
}
