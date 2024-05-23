import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useEffect } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import useModal from '../../../../platform/modal/useModal';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';

const CenteredDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: 40vh;
    width: 100%;
`;

const Title = styled.h1`
    font-size: ${FONTSIZE['xxx-large']};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    color: ${COLORS.black};
`;

export default function SavedModal() {
    const { hideModal } = useModal();

    useEffect(() => {
        const timer = setTimeout(() => {
            hideModal();
        }, 2000);

        return () => clearTimeout(timer);
    });

    return (
        <CenteredDiv>
            <CheckCircleIcon style={{ fontSize: 150, color: `${COLORS.green}` }} />
            <Title>Profile Saved</Title>
        </CenteredDiv>
    );
}
