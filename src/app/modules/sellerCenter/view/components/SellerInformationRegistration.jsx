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
    width: 300px;
`;

export default function SellerInformationRegistration({ registrationData, errors, setErrors }) {
    const [sellerName, setSellerName] = useState(registrationData.current.sellerName);
    const [sellerIC, setSellerIC] = useState(registrationData.current.sellerIC);

    const handleNameChange = useCallback(
        (event) => {
            setSellerName(event.target.value);
            registrationData.current.sellerName = event.target.value;
            setErrors({ ...errors, sellerName: '' });
        },
        [errors, registrationData, setErrors],
    );

    const handleICChange = useCallback(
        (event) => {
            setSellerIC(event.target.value);
            registrationData.current.sellerIC = event.target.value;
            setErrors({ ...errors, sellerIC: '' });
        },
        [errors, registrationData, setErrors],
    );

    return (
        <Container>
            <ContentContainer>
                <FormLabel>Full Name</FormLabel>
                <TextField
                    label="Enter your name..."
                    size="small"
                    style={{ minWidth: '50%' }}
                    value={sellerName}
                    onChange={handleNameChange}
                    error={!!errors.sellerName}
                    helperText={errors.sellerName}
                />
            </ContentContainer>
            <ContentContainer>
                <FormLabel>IC Number/Passport Number</FormLabel>
                <TextField
                    label="Enter your IC/Passport Number..."
                    size="small"
                    type="number"
                    style={{ minWidth: '50%' }}
                    value={sellerIC}
                    onChange={handleICChange}
                    error={!!errors.sellerIC}
                    helperText={errors.sellerIC}
                />
            </ContentContainer>
        </Container>
    );
}
