import Place from '@mui/icons-material/Place';
import { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import CustomerInfoContext from '../../../../platform/app/data/CustomerInfoContext';
import useModal from '../../../../platform/modal/useModal';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import collectionPointsList from '../../data/collectionPointsList';
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

export default function ShippingDetailsBar({ shippingOption, availableShippingOption }) {
    const [cusPhoneNo, setCusPhoneNo] = useState(null);
    const customer = useContext(CustomerInfoContext);
    const { showModal, hideModal } = useModal();

    const handleEditAddressClick = useCallback(() => {
        showModal({
            modal: (
                <EditAddressModal
                    hideModal={hideModal}
                    customerInfo={customer?.customerInfo}
                    setCustomerInfo={customer?.setCustomerInfo}
                />
            ),
        });
    }, [showModal, hideModal, customer?.customerInfo, customer?.setCustomerInfo]);

    useEffect(() => {
        if (customer?.customerInfo) {
            const cleanPhoneNo = (customer && customer.customerInfo.phoneNo).replace(/\D/g, '');
            if (cleanPhoneNo.length === 10) {
                setCusPhoneNo(`(+60) ${cleanPhoneNo.slice(1, 3)} ${cleanPhoneNo.slice(3, 6)} ${cleanPhoneNo.slice(6)}`);
            } else {
                setCusPhoneNo(
                    `(+60) ${cleanPhoneNo.slice(1, 3)} ${cleanPhoneNo.slice(3, 5)} ${cleanPhoneNo.slice(5, 8)} ${cleanPhoneNo.slice(8)}`,
                );
            }
        }
    }, [cusPhoneNo, customer?.customerInfo]);

    const getAddress = () => {
        if (shippingOption === 'standardDelivery') {
            return customer?.customerInfo && customer?.customerInfo.address.street !== '' ? (
                <COReusableStyles.Text>
                    {`${[
                        customer?.customerInfo.address.street,
                        `${customer?.customerInfo.address.postcode} ${customer?.customerInfo.address.city}`,
                        customer?.customerInfo.address.state,
                        customer?.customerInfo.address.country,
                    ]
                        .filter(Boolean)
                        .join(', ')}`}
                </COReusableStyles.Text>
            ) : (
                <HintText>No address record</HintText>
            );
        }
        return (
            <COReusableStyles.Text>
                {collectionPointsList.find((point) => point.address === shippingOption)?.name}
            </COReusableStyles.Text>
        );
    };

    if (!availableShippingOption[0] && !availableShippingOption[1]) {
        <Wrapper>
            <COReusableStyles.Text>
                The shops do not support common shipping option. Please split the order.
            </COReusableStyles.Text>
        </Wrapper>;
    }

    return (
        <Wrapper>
            <AddressHead>
                <Place style={{ fontSize: FONTSIZE.large, marginRight: '1rem' }} />
                {shippingOption === 'standardDelivery' ? 'Standard Delivery' : 'Self Collection Point'}
            </AddressHead>
            <CustomerDetailsContainer>
                <CustomerNameContainer>
                    {customer?.customerInfo && customer?.customerInfo.username} {cusPhoneNo}
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
