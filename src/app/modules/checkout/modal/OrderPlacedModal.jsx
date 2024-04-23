import { useEffect, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import TickedModal from '../../../platform/modal/TickedModal';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';

const CenteredDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 3rem;
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
            navigate();
        }

        return () => clearInterval(intervalId);
    }, [countDown, hideModal, navigate]);

    return (
        <CenteredDiv>
            <TickedModal
                title="Your order has been successfully placed"
                description="Thank you for shopping with us!"
            />
            <CountDown>
                <i>Navigate to Home in {countDown} second(s)</i>
            </CountDown>
        </CenteredDiv>
    );
}
