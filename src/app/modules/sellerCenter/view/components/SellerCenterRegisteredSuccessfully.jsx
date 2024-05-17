import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../../platform/style/PlatformReusableStyles';
import useSellerCenterRegistration from '../hooks/useSellerCenterRegistration';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
`;

const ContentHeader = styled.h3`
    font-size: ${FONTSIZE.medium};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    color: ${COLORS.black};
`;

const ContentDescription = styled.p`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.darkGrey};
`;

export default function SellerCenterRegisteredSuccessfully({ registrationData }) {
    const { registerSeller } = useSellerCenterRegistration(registrationData);
    const navigate = useNavigate();

    return (
        <Container>
            <ContentContainer>
                <CheckOutlinedIcon
                    style={{
                        backgroundColor: COLORS.green,
                        color: 'white',
                        width: '90',
                        height: '90',
                        borderRadius: '9999px',
                        padding: '1rem',
                    }}
                />
                <ContentHeader>Registered Successfully</ContentHeader>
                <ContentDescription>You can now proceed to add your first product</ContentDescription>
            </ContentContainer>
            <Button
                style={{ ...PlatformReusableStyles.PrimaryButtonStyles, padding: '1rem' }}
                onClick={async () => {
                    await registerSeller();
                    navigate('/seller-center', { replace: true });
                }}
            >
                Start Adding Products Now
            </Button>
        </Container>
    );
}
