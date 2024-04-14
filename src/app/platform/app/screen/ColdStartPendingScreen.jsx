import Lottie from 'react-lottie';
import styled from 'styled-components';
import COLORS from '../../Colors';
import lottieBadmintonLoading from '../../animation/lottieBadmintonLoading.json';
import FONTSIZE from '../../style/FontSize';
import FONTWEIGHT from '../../style/FontWeight';

const CenteredDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: 100vh;
`;

const Title = styled.h1`
    font-size: ${FONTSIZE['xxx-large']};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    color: ${COLORS.black};
`;

export default function ColdStartPendingScreen() {
    return (
        <CenteredDiv>
            <Lottie
                options={{ animationData: lottieBadmintonLoading }}
                isClickToPauseDisabled
                width={400}
                height={400}
            />
            <Title>Just a moment, we&apos;re setting things up for you...</Title>{' '}
        </CenteredDiv>
    );
}
