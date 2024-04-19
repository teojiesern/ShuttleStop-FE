import { Visibility, VisibilityOff } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import GoogleIcon from '../assets/google-icon.svg';
import FormValidation from '../utils/FormValidation';

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
    const navigate = useNavigate();

    const [values, setValues] = useState({
        username: '',
        emailTel: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        const newObj = { ...values, [e.target.name]: e.target.value };
        setValues(newObj);
        const passwordErrors = FormValidation({ ...values, [name]: value });
        setErrors((prevErrors) => ({ ...prevErrors, [name]: passwordErrors[name] }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formErrors = FormValidation(values);
        if (Object.keys(formErrors).length === 0) {
            navigate('../login');
        } else {
            setErrors(formErrors);
        }
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
                        onChange={handleInput}
                        error={!!errors.username}
                        helperText={errors.username}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="emailTel"
                        label="Email Address/Mobile Number"
                        name="emailTel"
                        autoComplete="email tel"
                        onChange={handleInput}
                        error={!!errors.emailTel}
                        helperText={errors.emailTel}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        autoComplete="current-password"
                        onChange={handleInput}
                        error={!!errors.password}
                        helperText={errors.password}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleTogglePasswordVisibility}
                                        onMouseDown={(event) => event.preventDefault()}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
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
