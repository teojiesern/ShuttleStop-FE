import Lottie from 'react-lottie';
import styled from 'styled-components';
import COLORS from '../Colors';
import lottieCrossed from '../animation/lottieCrossed.json';
import FONTSIZE from '../style/FontSize';
import FONTWEIGHT from '../style/FontWeight';

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

const Description = styled.p`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.darkGrey};
`;

export default function CrossedModal({ title, description }) {
    return (
        <CenteredDiv>
            <Lottie
                options={{ animationData: lottieCrossed, autoplay: true, loop: false }}
                width={200}
                height={200}
                isClickToPauseDisabled
            />
            {title && <Title>{title}</Title>}
            {description && <Description>{description}</Description>}
        </CenteredDiv>
    );
}
