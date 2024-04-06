import styled from 'styled-components';
import COLORS from '../../../../../platform/Colors';

const StyledButton = styled.button`
    border-radius: 100%;
    height: 0.5rem;
    width: 0.5rem;
    border: none;
    background-color: ${(props) => (props.selected ? COLORS.green : COLORS['content-light-grey'])};
    cursor: pointer;
`;

export default function DotButton(props) {
    const { children, selected, ...otherProps } = props;

    return (
        <StyledButton
            selected={selected}
            {...otherProps}
        >
            {children}
        </StyledButton>
    );
}
