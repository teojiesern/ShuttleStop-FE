import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { IconButton } from '@mui/material';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import lottieCrossed from '../../../../platform/animation/lottieCrossed.json';
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

export default function SCMyOrdersToShipErrorModal({ hideModal }) {
    return (
        <>
            <IconButton
                onClick={hideModal}
                style={{ position: 'absolute', top: '2rem', right: '2rem' }}
            >
                <CloseOutlinedIcon />
            </IconButton>
            <CenteredDiv>
                <Lottie
                    options={{ animationData: lottieCrossed, autoplay: true, loop: false }}
                    width={200}
                    height={200}
                    isClickToPauseDisabled
                />
                <Title>Please select at least one order to be shipped</Title>
            </CenteredDiv>
        </>
    );
}
