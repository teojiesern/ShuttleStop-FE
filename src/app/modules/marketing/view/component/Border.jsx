import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';

const Line = styled.div`
    position: absolute;
    bottom: -1rem; /* Adjust the positioning of the line relative to the navigation links */
    left: 0;
    width: 100%;
    border-bottom: 1px solid ${COLORS['light-grey']};
`;

export default function Lines() {
    return <Line />;
}
