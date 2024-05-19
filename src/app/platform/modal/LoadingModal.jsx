import Lottie from 'react-lottie';
import styled from 'styled-components';
import loadingAnimationData from '../animation/loading.json';

const CenteredDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
`;

export default function LoadingModal() {
    return (
        <CenteredDiv>
            <Lottie
                options={{ animationData: loadingAnimationData, autoplay: true, loop: true }}
                width={500}
                height={500}
                isClickToPauseDisabled
            />
        </CenteredDiv>
    );
}
