import Lottie from 'react-lottie';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import lottieTicked from '../../../../platform/animation/lottieTicked.json';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';

const CenteredDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    min-height: 50vh;
`;

const Title = styled.h1`
    font-size: ${FONTSIZE.medium};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    color: ${COLORS.black};
`;

export default function SCUpdateSettingsSuccessModal() {
    return (
        <CenteredDiv>
            <Lottie
                options={{ animationData: lottieTicked, autoplay: true, loop: true }}
                width={200}
                height={200}
                isClickToPauseDisabled
            />
            <Title>Shop Settings updated successfully!</Title>
        </CenteredDiv>
    );
}
