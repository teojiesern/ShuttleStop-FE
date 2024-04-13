import Lottie from 'react-lottie';
import styled from 'styled-components';
import lottieBadmintonLoading from '../../animation/lottieBadmintonLoading.json';

const CenteredDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: 100vh;
`;

export default function ColdStartPendingScreen() {
    return (
        <CenteredDiv>
            <Lottie options={{ animationData: lottieBadmintonLoading }} />
        </CenteredDiv>
    );
}
