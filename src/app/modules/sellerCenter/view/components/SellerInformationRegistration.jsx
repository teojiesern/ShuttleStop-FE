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
    width: 300px;
`;

export default function SellerInformationRegistration({ registrationData }) {
    const [sellerName, setSellerName] = useState(registrationData.current.sellerName);
    const [sellerIC, setSellerIC] = useState(registrationData.current.sellerIC);

    const handleNameChange = useCallback(
        (event) => {
            setSellerName(event.target.value);
            registrationData.current.sellerName = event.target.value;
        },
        [registrationData],
    );

    const handleICChange = useCallback(
        (event) => {
            setSellerIC(event.target.value);
            registrationData.current.sellerIC = event.target.value;
        },
        [registrationData],
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
                />
            </ContentContainer>
            <ContentContainer>
                <FormLabel>IC Number/Passport Number</FormLabel>
                <TextField
                    label="Enter your IC/Passport Number..."
                    size="small"
                    type="tel"
                    style={{ minWidth: '50%' }}
                    value={sellerIC}
                    onChange={handleICChange}
                />
            </ContentContainer>
        </Container>
    );
}
