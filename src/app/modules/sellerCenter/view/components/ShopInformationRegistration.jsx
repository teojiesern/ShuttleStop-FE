/* eslint-disable no-param-reassign */
import { TextField } from '@mui/material';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 90%;
    gap: 2rem;
`;

const FormLabel = styled.label`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.darkGrey};
    text-align: right;
    display: inline-block;
    width: 200px;
`;

export default function ShopInformationRegistration({ registrationData }) {
    const [shopName, setShopName] = useState(registrationData.current.shopName);
    const [pickupAddress, setPickupAddress] = useState(registrationData.current.pickupAddress);
    const [email, setEmail] = useState(registrationData.current.email);
    const [phoneNumber, setPhoneNumber] = useState(registrationData.current.phoneNumber);

    const handleShopNameChange = useCallback(
        (event) => {
            setShopName(event.target.value);
            registrationData.current.shopName = event.target.value;
        },
        [registrationData],
    );

    const handlePickupAddressChange = useCallback(
        (event) => {
            setPickupAddress(event.target.value);
            registrationData.current.pickupAddress = event.target.value;
        },
        [registrationData],
    );

    const handleEmailChange = useCallback(
        (event) => {
            setEmail(event.target.value);
            registrationData.current.email = event.target.value;
        },
        [registrationData],
    );

    const handlePhoneNumberChange = useCallback(
        (event) => {
            setPhoneNumber(event.target.value);
            registrationData.current.phoneNumber = event.target.value;
        },
        [registrationData],
    );

    return (
        <Container>
            <ContentContainer>
                <FormLabel>Shop Name</FormLabel>
                <TextField
                    label="Shop Name..."
                    size="small"
                    style={{ minWidth: '50%' }}
                    value={shopName}
                    onChange={handleShopNameChange}
                />
            </ContentContainer>
            <ContentContainer>
                <FormLabel>Pickup Address</FormLabel>
                <TextField
                    label="Enter your Pickup address..."
                    size="small"
                    style={{ minWidth: '50%' }}
                    value={pickupAddress}
                    onChange={handlePickupAddressChange}
                />
            </ContentContainer>
            <ContentContainer>
                <FormLabel>Email</FormLabel>
                <TextField
                    label="Enter your Email..."
                    size="small"
                    type="email"
                    style={{ minWidth: '50%' }}
                    value={email}
                    onChange={handleEmailChange}
                />
            </ContentContainer>
            <ContentContainer>
                <FormLabel>Phone Number</FormLabel>
                <TextField
                    label="Enter your Phone Number..."
                    size="small"
                    type="tel"
                    style={{ minWidth: '50%' }}
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                />
            </ContentContainer>
            {/* TODO: Shop Logo */}
        </Container>
    );
}
