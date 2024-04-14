import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
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

const TextFieldBox = styled(Box)`
    margin: 1.5rem 0 0 0;
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

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export default function ResetPassword() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Container
            component="main"
            maxWidth="sm"
        >
            <ContainerBox>
                <TextMdSemiBold>Reset Password</TextMdSemiBold>

                <TextFieldBox
                    component="form"
                    onSubmit={handleSubmit}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        autoComplete="password"
                        type="password"
                        autofocus
                    />
                    <StyledLink to="/authentication/login">
                        <StyledButton>Confirm</StyledButton>
                    </StyledLink>
                </TextFieldBox>
            </ContainerBox>
        </Container>
    );
}
