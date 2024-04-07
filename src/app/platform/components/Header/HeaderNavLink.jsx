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
                style={({ isActive }) => ({
                    color: isActive ? COLORS.green : COLORS.black,
                })}
            >
                RACQUETS
            </StyledNavLink>
            <StyledNavLink
                to="/customer/footwear"
                style={({ isActive }) => ({
                    color: isActive ? COLORS.green : COLORS.black,
                })}
            >
                FOOTWEAR
            </StyledNavLink>
            <StyledNavLink
                to="/customer/apparels"
                style={({ isActive }) => ({
                    color: isActive ? COLORS.green : COLORS.black,
                })}
            >
                APPARELS
            </StyledNavLink>
            <StyledNavLink
                to="/customer/bags"
                style={({ isActive }) => ({
                    color: isActive ? COLORS.green : COLORS.black,
                })}
            >
                BAGS
            </StyledNavLink>
            <StyledNavLink
                to="/customer/shuttlecocks"
                style={({ isActive }) => ({
                    color: isActive ? COLORS.green : COLORS.black,
                })}
            >
                SHUTTLECOCKS
            </StyledNavLink>
            <StyledNavLink
                to="/customer/accessories"
                style={({ isActive }) => ({
                    color: isActive ? COLORS.green : COLORS.black,
                })}
            >
                ACCESSORIES
            </StyledNavLink>
            <StyledNavLink
                to="/marketing/competitions"
                style={({ isActive }) => ({
                    color: isActive ? COLORS.green : COLORS.black,
                })}
            >
                COMPETITIONS
            </StyledNavLink>
            <StyledNavLink
                to="/marketing/coaches"
                style={({ isActive }) => ({
                    color: isActive ? COLORS.green : COLORS.black,
                })}
            >
                COACHES
            </StyledNavLink>
        </NavLinkContainer>
    );
}
