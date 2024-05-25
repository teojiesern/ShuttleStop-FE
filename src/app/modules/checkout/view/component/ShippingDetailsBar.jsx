import Place from '@mui/icons-material/Place';
import { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import CustomerInfoContext from '../../../../platform/app/data/CustomerInfoContext';
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
const HintText = styled.span`
    color: ${COLORS.darkGrey};
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    font-style: italic;
    text-align: center;
`;

export default function ShippingDetailsBar({ shippingOption }) {
    const [cusPhoneNo, setCusPhoneNo] = useState(null);
    const { customerInfo, setCustomerInfo } = useContext(CustomerInfoContext);
    const { showModal, hideModal } = useModal();

    const handleEditAddressClick = useCallback(() => {
        showModal({
            modal: (
                <EditAddressModal
                    hideModal={hideModal}
                    customerInfo={customerInfo}
                    setCustomerInfo={setCustomerInfo}
                />
            ),
        });
    }, [showModal, hideModal]);

    useEffect(() => {
        if (customerInfo) {
            const cleanPhoneNo = (customerInfo && customerInfo.phoneNo).replace(/\D/g, '');
            if (cleanPhoneNo.length === 10) {
                setCusPhoneNo(`(+60) ${cleanPhoneNo.slice(1, 3)} ${cleanPhoneNo.slice(3, 6)} ${cleanPhoneNo.slice(6)}`);
            } else {
                setCusPhoneNo(
                    `(+60) ${cleanPhoneNo.slice(1, 3)} ${cleanPhoneNo.slice(3, 5)} ${cleanPhoneNo.slice(5, 8)} ${cleanPhoneNo.slice(8)}`,
                );
            }
        }
    }, [cusPhoneNo, customerInfo]);

    const getAddress = () => {
        if (shippingOption === 'standardDelivery') {
            return customerInfo && customerInfo.address.street !== '' ? (
                <COReusableStyles.Text>
                    {`${[
                        customerInfo.address.street,
                        `${customerInfo.address.postcode} ${customerInfo.address.city}`,
                        customerInfo.address.state,
                        customerInfo.address.country,
                    ]
                        .filter(Boolean)
                        .join(', ')}`}
                </COReusableStyles.Text>
            ) : (
                <HintText>No address record</HintText>
            );
        }
        return <COReusableStyles.Text>CollectCo JustPrint Penang</COReusableStyles.Text>;
    };

    return (
        <Wrapper>
            <AddressHead>
                <Place style={{ fontSize: FONTSIZE.large, marginRight: '1rem' }} />
                {shippingOption === 'standardDelivery' ? 'Standard Delivery' : 'Self Collection Point'}
            </AddressHead>
            <CustomerDetailsContainer>
                <CustomerNameContainer>
                    {customerInfo && customerInfo.username} {cusPhoneNo}
                </CustomerNameContainer>
                {getAddress()}
                {shippingOption === 'standardDelivery' && (
                    <EditAddressButton onClick={handleEditAddressClick}>
                        <p>Edit</p>
                    </EditAddressButton>
                )}
            </CustomerDetailsContainer>
        </Wrapper>
    );
}
