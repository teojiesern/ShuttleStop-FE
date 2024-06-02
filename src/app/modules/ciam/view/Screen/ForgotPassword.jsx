import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import useLoadingModal from '../../../../platform/modal/useLoadingModal';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import useForgotPassword from '../hook/useForgotPassword';
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

export default function ForgotPassword() {
    const navigate = useNavigate();

    const [submitted, setSubmitted] = useState(false);
    const [values, setValues] = useState({
        emailTel: '',
    });
    const [errors, setErrors] = useState({});

    const { sendOTP } = useForgotPassword();
    const { showLoadingModal, hideLoadingModal } = useLoadingModal();

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
                showLoadingModal();
                const validOTP = await sendOTP({ email: values.emailTel });
                hideLoadingModal();
                navigate('../login/forgot-password/verification', { state: { validOTP } });
            } else {
                setErrors(formErrors);
            }
        },
        [hideLoadingModal, navigate, sendOTP, showLoadingModal, values],
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
                        id="emailTel"
                        label="Email Address"
                        name="emailTel"
                        autoComplete="email tel"
                        autofocus
                        onChange={handleInput}
                        error={!!errors.emailTel}
                        helperText={errors.emailTel}
                    />
                    <StyledButton>Next</StyledButton>
                </form>
            </ContainerBox>
        </Container>
    );
}
