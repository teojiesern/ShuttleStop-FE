import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import GoogleIcon from '../assets/google-icon.svg';

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

const TextSmRegular = styled.p`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 1rem 0;
    display: block;
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

const OrContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
`;

const Line = styled.div`
    flex: 1;
    height: 1px;
    width: 100%;
    background-color: ${COLORS['content-light-grey']};
`;

const OrText = styled.span`
    padding: 0 16px;
    color: ${COLORS.darkGrey};
`;

const BtnContinueWithGoogle = styled.button`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    font-family: montserrat;
    border: solid ${COLORS['content-light-grey']};
    border-width: 1px;
    border-radius: 0;
    background-color: ${COLORS.white};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    margin: 1rem 0;
`;

const GoogleIconImg = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 1rem;
`;

const RowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

export default function Signup() {
    const [username, setUsername] = useState('');
    // const [usernameError, setUsernameError] = useState('');

    const [emailTel, setEmailTel] = useState('');
    // const [emailTelError, setEmailTelError] = useState('');

    const [password, setPassword] = useState('');
    // const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, emailTel, password);
        navigate('../login');
    };

    return (
        <Container
            component="main"
            maxWidth="sm"
        >
            <ContainerBox>
                <TextMdSemiBold>Create Account</TextMdSemiBold>

                <form onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoFocus
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email-mobile"
                        label="Email Address/Mobile Number"
                        name="email-mobile"
                        autoComplete="email tel"
                        value={emailTel}
                        onChange={(e) => setEmailTel(e.target.value)}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <StyledButton>Create Account</StyledButton>
                </form>
                <OrContainer>
                    <Line />
                    <OrText>or</OrText>
                    <Line />
                </OrContainer>

                <BtnContinueWithGoogle>
                    <GoogleIconImg
                        src={GoogleIcon}
                        alt="Google Icon"
                    />
                    Continue with Google
                </BtnContinueWithGoogle>

                <RowContainer>
                    <TextSmRegular>Already have an account?</TextSmRegular>
                    <StyledLink to="/authentication/login">Login</StyledLink>
                </RowContainer>
            </ContainerBox>
        </Container>
    );
}
