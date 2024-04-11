import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../Colors';
import FONTSIZE from '../../style/FontSize';
import FONTWEIGHT from '../../style/FontWeight';
import NavLinkStylesUtil from '../../utils/NavLinkStylesUtil';

const NavLinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledNavLink = styled(NavLink)`
    color: ${(props) => props.style({ isActive: props.isActive }).color};
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
            <StyledNavLink
                to="/customer/racquets"
                style={NavLinkStylesUtil.activeStyle}
            >
                RACQUETS
            </StyledNavLink>
            <StyledNavLink
                to="/customer/footwears"
                style={NavLinkStylesUtil.activeStyle}
            >
                FOOTWEARS
            </StyledNavLink>
            <StyledNavLink
                to="/customer/apparels"
                style={NavLinkStylesUtil.activeStyle}
            >
                APPARELS
            </StyledNavLink>
            <StyledNavLink
                to="/customer/bags"
                style={NavLinkStylesUtil.activeStyle}
            >
                BAGS
            </StyledNavLink>
            <StyledNavLink
                to="/customer/shuttlecocks"
                style={NavLinkStylesUtil.activeStyle}
            >
                SHUTTLECOCKS
            </StyledNavLink>
            <StyledNavLink
                to="/customer/accessories"
                style={NavLinkStylesUtil.activeStyle}
            >
                ACCESSORIES
            </StyledNavLink>
            <StyledNavLink
                to="/marketing/competitions"
                style={NavLinkStylesUtil.activeStyle}
            >
                COMPETITIONS
            </StyledNavLink>
            <StyledNavLink
                to="/marketing/coaches"
                style={NavLinkStylesUtil.activeStyle}
            >
                COACHES
            </StyledNavLink>
        </NavLinkContainer>
    );
}
