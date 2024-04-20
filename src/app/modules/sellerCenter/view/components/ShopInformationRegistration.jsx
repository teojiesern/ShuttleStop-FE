/* eslint-disable no-param-reassign */
import { TextField } from '@mui/material';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import DropBox from '../../../../platform/components/dropbox/DropBox';
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
    align-items: start;
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

export default function ShopInformationRegistration({ registrationData, errors, setErrors }) {
    const [shopName, setShopName] = useState(registrationData.current.shopName);
    const [pickupAddress, setPickupAddress] = useState(registrationData.current.pickupAddress);
    const [email, setEmail] = useState(registrationData.current.email);
    const [phoneNumber, setPhoneNumber] = useState(registrationData.current.phoneNumber);
    const [files, setFiles] = useState([]);

    const handleShopNameChange = useCallback(
        (event) => {
            setShopName(event.target.value);
            registrationData.current.shopName = event.target.value;
            setErrors({ ...errors, shopName: '' });
        },
        [errors, registrationData, setErrors],
    );

    const handlePickupAddressChange = useCallback(
        (event) => {
            setPickupAddress(event.target.value);
            registrationData.current.pickupAddress = event.target.value;
            setErrors({ ...errors, pickupAddress: '' });
        },
        [errors, registrationData, setErrors],
    );

    const handleEmailChange = useCallback(
        (event) => {
            setEmail(event.target.value);
            registrationData.current.email = event.target.value;
            setErrors({ ...errors, email: '' });
        },
        [errors, registrationData, setErrors],
    );

    const handlePhoneNumberChange = useCallback(
        (event) => {
            setPhoneNumber(event.target.value);
            registrationData.current.phoneNumber = event.target.value;
            setErrors({ ...errors, phoneNumber: '' });
        },
        [errors, registrationData, setErrors],
    );

    const handleFilesChange = useCallback(
        (newFiles) => {
            setFiles(newFiles);
            registrationData.current.files = newFiles;
            setErrors({ ...errors, files: '' });
        },
        [errors, registrationData, setErrors],
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
                    error={!!errors.shopName}
                    helperText={errors.shopName}
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
                    error={!!errors.pickupAddress}
                    helperText={errors.pickupAddress}
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
                    error={!!errors.email}
                    helperText={errors.email}
                />
            </ContentContainer>
            <ContentContainer>
                <FormLabel>Phone Number</FormLabel>
                <TextField
                    label="Enter your Phone Number..."
                    size="small"
                    type="number"
                    style={{ minWidth: '50%' }}
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    error={!!errors.phoneNumber}
                    helperText={errors.phoneNumber}
                />
            </ContentContainer>
            <ContentContainer style={{ alignItems: 'start' }}>
                <FormLabel>Shop Logo</FormLabel>
                <div style={{ width: '50%' }}>
                    <DropBox
                        files={files}
                        setFiles={handleFilesChange}
                        consumerError={errors.files}
                    />
                </div>
            </ContentContainer>
        </Container>
    );
}
