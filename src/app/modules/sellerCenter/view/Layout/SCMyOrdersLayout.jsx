import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

// const BorderContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     border: 1px solid ${COLORS.grey};
//     padding: 1rem;
// `;

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

const activeStyle = ({ isActive }) => ({
    color: isActive ? COLORS.green : COLORS.black,
});

export default function SCMyOrdersLayout() {
    return (
        <ContentContainer>
            <NavLinkContainer>
                <StyledNavLink
                    style={activeStyle}
                    to=""
                    end
                >
                    To Ship
                </StyledNavLink>
                <StyledNavLink
                    style={activeStyle}
                    to="shipping"
                >
                    Shipping
                </StyledNavLink>
                <StyledNavLink
                    style={activeStyle}
                    to="completed"
                >
                    Completed
                </StyledNavLink>
            </NavLinkContainer>
            <Outlet />
        </ContentContainer>
    );
}
