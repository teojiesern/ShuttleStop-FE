import CheckCircle from '@mui/icons-material/CheckCircle';
import { useEffect, useState } from 'react';
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
const CountDown = styled.p`
    color: ${COLORS.darkGrey};
    font-size: ${FONTSIZE['x-small']};
    font-weight: ${FONTWEIGHT.REGULAR};
    font-style: italic;
`;

export default function OrderPlacedModal({ hideModal, navigate }) {
    const [countDown, setCountDown] = useState(3);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountDown((prevCountDown) => prevCountDown - 1);
        }, 1000);

        if (countDown === 0) {
            clearInterval(intervalId);
            hideModal();
            navigate('/');
        }

        return () => clearInterval(intervalId);
    }, [countDown, hideModal, navigate]);

    return (
        <CenteredDiv>
            <IconContainer>
                <CheckCircle fontSize="120px" />
            </IconContainer>
            <Title>Your order has been successfully placed</Title>
            <Desc>Thank you for shopping with us!</Desc>
            <br />
            <CountDown>
                <i>Navigate to Home in {countDown} second(s)</i>
            </CountDown>
        </CenteredDiv>
    );
}
