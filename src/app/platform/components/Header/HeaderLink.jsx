import { Link } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../Colors';

const Container = styled.div`
    display: flex;
    justify-content: ${(props) => props.align};
    padding: 0 2rem;
    gap: 1rem;
`;

const StyledLink = styled(Link)`
    color: ${COLORS.darkGrey};
    text-decoration: none;
`;

export default function HeaderLink({ align = 'end' }) {
    return (
        <Container align={align}>
            <StyledLink to="/">Seller Center</StyledLink>
            <StyledLink to="/">Log In</StyledLink>
            <StyledLink to="/">Sign Up</StyledLink>
        </Container>
    );
}
