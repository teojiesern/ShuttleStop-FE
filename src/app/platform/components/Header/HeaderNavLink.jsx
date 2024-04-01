import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../Colors';
import FONTSIZE from '../../style/FontSize';
import FONTWEIGHT from '../../style/FontWeight';

const NavLinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledNavLink = styled(NavLink)`
    color: ${COLORS.black};
    text-decoration: none;
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    font-size: ${FONTSIZE.small};

    /* region animation */
    &:after {
        transition: all ease-in-out 0.3s;
        background: none repeat scroll 0 0 ${COLORS.green};
        content: '';
        display: block;
        height: 2px;
        width: 0;
    }

    &:hover:after {
        width: 100%;
    }
`;

export default function HeaderNavLink() {
    return (
        <NavLinkContainer>
            <StyledNavLink to="/">RACQUETS</StyledNavLink>
            <StyledNavLink to="/">FOOTWEAR</StyledNavLink>
            <StyledNavLink to="/">APPAREL</StyledNavLink>
            <StyledNavLink to="/">BAGS</StyledNavLink>
            <StyledNavLink to="/">SHUTTLECOCKS</StyledNavLink>
            <StyledNavLink to="/">ACCESSORIES</StyledNavLink>
            <StyledNavLink to="/">COMPETITIONS</StyledNavLink>
            <StyledNavLink to="/">COACHES</StyledNavLink>
        </NavLinkContainer>
    );
}
