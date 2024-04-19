import Place from '@mui/icons-material/Place';
import { useCallback } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import useModal from '../../../../platform/modal/useModal';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import EditAddressModal from '../../modal/EditAddressModal';
import COReusableStyles from '../styles/COReusableStyles';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const AddressHead = styled.span`
    display: flex;
    color: ${COLORS.green};
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    text-align: center;
    align-items: center;
    margin-bottom: 1rem;
`;
const CustomerDetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    text-align: center;
    align-items: center;
`;
const CustomerNameContainer = styled.span`
    color: ${COLORS.black};
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.BOLD};
`;
const EditAddressButton = styled.button`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    border: none;
    background: none;
    color: #007ce0;
    cursor: pointer;
`;

export default function ShippingDetailsBar({ shippingOption }) {
    const { showModal, hideModal } = useModal();

    const handleEditAddressClick = useCallback(() => {
        showModal({ modal: <EditAddressModal hideModal={hideModal} /> });
    }, [showModal, hideModal]);

    return (
        <Wrapper>
            <AddressHead>
                <Place style={{ fontSize: FONTSIZE.large, marginRight: '1rem' }} />
                {shippingOption === 'standardDelivery' ? 'Standard Delivery' : 'Self Collection Point'}
            </AddressHead>
            <CustomerDetailsContainer>
                <CustomerNameContainer>Aron Chia (+60) 12 345 6789</CustomerNameContainer>
                {shippingOption === 'standardDelivery' ? (
                    <COReusableStyles.Text>1, Jalan Penang, 10400 Georgetown, Penang</COReusableStyles.Text>
                ) : (
                    <COReusableStyles.Text>CollectCo JustPrint Penang</COReusableStyles.Text>
                )}
                {shippingOption === 'standardDelivery' && (
                    <EditAddressButton onClick={handleEditAddressClick}>
                        <p>Edit</p>
                    </EditAddressButton>
                )}
            </CustomerDetailsContainer>
        </Wrapper>
    );
}
