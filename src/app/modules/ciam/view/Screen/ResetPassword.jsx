import { Visibility, VisibilityOff } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import TickedModal from '../../../../platform/modal/TickedModal';
import useModal from '../../../../platform/modal/useModal';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import useChangePassword from '../hook/useChangePassword';
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

export default function ResetPassword() {
    const navigate = useNavigate();
    const { state: { email } = {} } = useLocation();

    const [submitted, setSubmitted] = useState(false);
    const [values, setValues] = useState({
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const { changePassword } = useChangePassword();
    const { showModal } = useModal();

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
        if (submitted) {
            const fieldErrors = FormValidation({ ...values, [name]: value });
            setErrors((prevErrors) => ({ ...prevErrors, [name]: fieldErrors[name] }));
        }
    };

    const handleSubmit = useCallback(
        async (event) => {
            event.preventDefault();
            setSubmitted(true);
            const formErrors = FormValidation(values);
            if (Object.keys(formErrors).length === 0) {
                await changePassword({ email, newPassword: values.password });
                showModal({
                    modal: (
                        <TickedModal
                            title="Your password has been changed successfully"
                            description="Please login again with your newly set password."
                        />
                    ),
                });
                navigate('../Login');
            } else {
                setErrors(formErrors);
            }
        },
        [changePassword, email, navigate, showModal, values],
    );

    return (
        <Container
            component="main"
            maxWidth="sm"
        >
            <ContainerBox>
                <TextMdSemiBold>Reset Password</TextMdSemiBold>

                <form onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        autoComplete="password"
                        type={showPassword ? 'text' : 'password'}
                        autofocus
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
                    <StyledButton>Confirm</StyledButton>
                </form>
            </ContainerBox>
        </Container>
    );
}
