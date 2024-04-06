import styled from 'styled-components';
import COLORS from '../../../../../platform/Colors';

const StyledButton = styled.button`
    border-radius: 100%;
    height: 0.5rem;
    width: 0.5rem;
    border: none;
    background-color: ${(props) => (props.selected ? COLORS.green : COLORS['content-light-grey'])};
    /* box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75); */
`;

export default function DotButton(props) {
    const { children, selected } = props;

    return <StyledButton selected={selected}>{children}</StyledButton>;
}
