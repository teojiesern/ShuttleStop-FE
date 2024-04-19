import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';

const ContainerBox = styled(Box)`
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    border: 1px solid ${COLORS['content-light-grey']};
    padding: 2rem 3rem;
`;

const TextMdSemiBold = styled.p`
    font-size: ${FONTSIZE.medium};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
`;

const StyledButton = styled.button`
    background-color: ${COLORS.green};
    border: none;
    color: ${COLORS.white};
    height: 40px;
    width: 100%;
    cursor: pointer;
    margin: 1rem 0px;
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    font-family: montserrat;
`;

const StyledOtpInput = styled(MuiOtpInput)`
    margin: 1rem 0;
`;

const ErrorMessage = styled.p`
    color: ${COLORS.red};
`;

export default function Verification() {
    const [otp, setOtp] = useState('');
    const [isValidOtp, setIsValidOtp] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleChange = (newValue) => {
        if (/^\d{6}$/.test(newValue)) {
            setOtp(newValue); // Set the OTP if it meets the criteria
            setIsValidOtp(true); // Set isValidOtp to true if OTP is valid
        } else {
            setOtp(newValue); // Still update the OTP state even if it's invalid
            setIsValidOtp(false); // Set isValidOtp to false if OTP is invalid
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        if (isValidOtp) {
            navigate('../login/forgot-password/verification/reset-password');
        }
    };

    return (
        <Container
            component="main"
            maxWidth="sm"
        >
            <ContainerBox>
                <TextMdSemiBold>Enter Verification Code</TextMdSemiBold>

                <form onSubmit={handleSubmit}>
                    <StyledOtpInput
                        length={6}
                        value={otp}
                        onChange={handleChange}
                    />
                    {!isValidOtp && submitted && <ErrorMessage>Please enter a valid OTP.</ErrorMessage>}
                    <StyledButton>Next</StyledButton>
                </form>
            </ContainerBox>
        </Container>
    );
}
