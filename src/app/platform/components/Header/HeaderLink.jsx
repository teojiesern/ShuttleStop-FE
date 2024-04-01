import { Link } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../Colors';
import FONTSIZE from '../../style/FontSize';
import FONTWEIGHT from '../../style/FontWeight';

const Container = styled.div`
    display: flex;
    justify-content: ${(props) => props.align};
    gap: 1rem;
`;

const StyledLink = styled(Link)`
    color: ${COLORS.darkGrey};
    text-decoration: none;
    font-weight: ${FONTWEIGHT.REGULAR};
    font-size: ${FONTSIZE['x-small']};
`;

export default function HeaderLink({ align = 'end' }) {
    return (
        <Container align={align}>
            <StyledLink to="/seller-center">Seller Center</StyledLink>
            <StyledLink to="/authentication/login">Log In</StyledLink>
            <StyledLink to="/authentication/signup">Sign Up</StyledLink>
        </Container>
    );
}
