import { useCallback } from 'react';
import styled from 'styled-components';
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

    const handleEditAddress = useCallback(() => {
        showModal({
            modal: <EditAddressModal hideModal={hideModal} />,
        });
    }, [hideModal, showModal]);

    return (
        <OuterContainer>
            <InnerContainer style={{ width: '90%' }}>
                <ContentContainer>
                    <FormLabel>Name</FormLabel>
                    <AddressText>Aaron Chia</AddressText>
                </ContentContainer>

                <ContentContainer>
                    <FormLabel>Mobile Number</FormLabel>
                    <AddressText>(+60)12-345 6789</AddressText>
                </ContentContainer>

                <ContentContainer>
                    <FormLabel>Address</FormLabel>
                    <AddressText>1, Jalan 17/7, 46100 Petaling Jaya, Selangor</AddressText>
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
