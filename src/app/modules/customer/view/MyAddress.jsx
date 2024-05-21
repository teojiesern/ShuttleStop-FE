import { useCallback, useContext } from 'react';
import styled from 'styled-components';
import CustomerInfoContext from '../../../platform/app/data/CustomerInfoContext';
import COLORS from '../../../platform/Colors';
import useModal from '../../../platform/modal/useModal';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import EditAddressModal from '../../checkout/modal/EditAddressModal';

const OuterContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: right;
    padding: 2rem;
    gap: 2rem;
`;

const ContentContainer = styled.div`
    display: flex;
    gap: 2rem;
    width: 80%;
`;

const FormLabel = styled.label`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.darkGrey};
    text-align: right;
    display: inline-block;
    width: 200px;
`;

const AddressText = styled.p`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.black};
    text-align: left;
    display: inline-block;
`;

const StyledButton = styled.button`
    background-color: ${COLORS.white};
    border: none;
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    font-family: montserrat;
`;

export default function MyAddress() {
    const { showModal, hideModal } = useModal();

    const { customerInfo, setCustomerInfo } = useContext(CustomerInfoContext);

    let fullAddress = '-';
    if (customerInfo && customerInfo.address.street !== '') {
        fullAddress = `${[customerInfo.address.street, customerInfo.address.city, customerInfo.address.postcode]
            .filter(Boolean)
            .join(', ')} ${[customerInfo.address.country, customerInfo.address.state].filter(Boolean).join(', ')}`;
    }

    const handleEditAddress = useCallback(() => {
        showModal({
            modal: (
                <EditAddressModal
                    hideModal={hideModal}
                    customerInfo={customerInfo}
                    setCustomerInfo={setCustomerInfo}
                />
            ),
        });
    }, [hideModal, showModal]);

    return (
        <OuterContainer>
            <InnerContainer style={{ width: '90%' }}>
                <ContentContainer>
                    <FormLabel>Username</FormLabel>
                    <AddressText>{customerInfo && customerInfo.username}</AddressText>
                </ContentContainer>

                <ContentContainer>
                    <FormLabel>Mobile Number</FormLabel>
                    <AddressText>{customerInfo && customerInfo.phoneNo}</AddressText>
                </ContentContainer>

                <ContentContainer>
                    <FormLabel>Address</FormLabel>
                    <AddressText>{fullAddress}</AddressText>
                </ContentContainer>
            </InnerContainer>

            <InnerContainer style={{ width: '10%' }}>
                <StyledButton
                    onClick={handleEditAddress}
                    style={{ color: COLORS['semantic-blue'], cursor: 'pointer' }}
                >
                    Edit
                </StyledButton>
            </InnerContainer>
        </OuterContainer>
    );
}
