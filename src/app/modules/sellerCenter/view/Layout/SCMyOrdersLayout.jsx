import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import NavLinkStylesUtil from '../../../../platform/utils/NavLinkStylesUtil';

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`;

const NavLinkContainer = styled.div`
    display: flex;
    gap: 2rem;
`;

const StyledNavLink = styled(NavLink)`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    color: ${COLORS.black};
    text-decoration: none;
`;

export default function SCMyOrdersLayout() {
    return (
        <ContentContainer>
            <NavLinkContainer>
                <StyledNavLink
                    style={NavLinkStylesUtil.activeStyle}
                    to=""
                    end
                >
                    To Ship
                </StyledNavLink>
                <StyledNavLink
                    style={NavLinkStylesUtil.activeStyle}
                    to="shipping"
                >
                    Shipping
                </StyledNavLink>
                <StyledNavLink
                    style={NavLinkStylesUtil.activeStyle}
                    to="delivered"
                >
                    Completed
                </StyledNavLink>
            </NavLinkContainer>
            <Outlet />
        </ContentContainer>
    );
}
