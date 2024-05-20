import Place from '@mui/icons-material/Place';
import { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import { CustomerInfoContext } from '../../../../platform/app/data/CustomerInfoContext';
import useModal from '../../../../platform/modal/useModal';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import useCustomer from '../../../customer/view/hooks/useCustomer';
import EditAddressModal from '../../modal/EditAddressModal';

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
    const [loading, setLoading] = useState(false);
    const [cusPhoneNo, setCusPhoneNo] = useState(null);
    const { customerInfo, setCustomerInfo } = useContext(CustomerInfoContext);
    const { getCustomer } = useCustomer();
    const { showModal, hideModal } = useModal();

    const handleEditAddressClick = useCallback(() => {
        showModal({ modal: <EditAddressModal hideModal={hideModal} /> });
    }, [showModal, hideModal]);

    useEffect(() => {
        async function fetchData() {
            try {
                const customer = await getCustomer();

                setCustomerInfo({
                    customerID: customer.customerID,
                    username: customer.username,
                    name: customer.name,
                    email: customer.email,
                    phoneNo: customer.phoneNo,
                    gender: customer.gender,
                    birthday: customer.birthday,
                    address: {
                        street: customer.address.street,
                        city: customer.address.city,
                        postcode: customer.address.postcode,
                        country: customer.address.country,
                        state: customer.address.state,
                    },
                });
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        if (!customerInfo) {
            setLoading(true);
            fetchData();
        }
    }, [getCustomer, setCustomerInfo, customerInfo]);

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
        console.log(cusPhoneNo);
    }, [cusPhoneNo, customerInfo, loading]);

    if (loading) {
        return <div>Loading</div>;
    }

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
                address
                {shippingOption === 'standardDelivery' && (
                    <EditAddressButton onClick={handleEditAddressClick}>
                        <p>Edit</p>
                    </EditAddressButton>
                )}
            </CustomerDetailsContainer>
        </Wrapper>
    );
}
