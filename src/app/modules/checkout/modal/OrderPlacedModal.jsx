import CheckCircle from '@mui/icons-material/CheckCircle';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';

const CenteredDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 5rem 2rem;
`;
const IconContainer = styled.div`
    color: ${COLORS.green};
    font-size: 120px;
`;
const Title = styled.h1`
    color: ${COLORS.black};
    font-size: ${FONTSIZE.medium};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
`;
const Desc = styled.h3`
    color: ${COLORS.darkGrey};
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
`;

export default function OrderPlacedModal() {
    return (
        <CenteredDiv>
            <IconContainer>
                <CheckCircle fontSize="120px" />
            </IconContainer>
            <Title>Your order has been successfully placed</Title>
            <Desc>Thank you for shopping with us!</Desc>
        </CenteredDiv>
    );
}
