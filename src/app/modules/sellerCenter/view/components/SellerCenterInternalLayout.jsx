import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';

const Container = styled.div`
    display: flex;
`;

const SideNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-right: 2rem;
`;

const SectionGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const SideNavHeader = styled.h3`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.BOLD};
    color: ${COLORS.black};
`;

const SideNavLink = styled(NavLink)`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.black};
    text-decoration: none;
    margin-left: 2rem;
`;

const activeStyle = ({ isActive }) => ({
    color: isActive ? COLORS.green : COLORS.black,
    fontWeight: isActive ? FONTWEIGHT.SEMI_BOLD : FONTWEIGHT.REGULAR,
});

export default function SellerCenterInternalLayout() {
    return (
        <Container>
            <SideNavContainer>
                <SectionGroup>
                    <SideNavHeader>Orders</SideNavHeader>
                    <SideNavLink
                        style={activeStyle}
                        to=""
                        end
                    >
                        My Orders
                    </SideNavLink>
                    <SideNavLink
                        style={activeStyle}
                        to="shipping-settings"
                    >
                        Shipping Settings
                    </SideNavLink>
                </SectionGroup>
                <SectionGroup>
                    <SideNavHeader>Products</SideNavHeader>
                    <SideNavLink
                        style={activeStyle}
                        to="my-products"
                    >
                        My Products
                    </SideNavLink>
                    <SideNavLink
                        style={activeStyle}
                        to="add-new-products"
                    >
                        Add New Products
                    </SideNavLink>
                </SectionGroup>
                <SectionGroup>
                    <SideNavHeader>Finance</SideNavHeader>
                    <SideNavLink
                        style={activeStyle}
                        to="my-income"
                    >
                        My Income
                    </SideNavLink>
                </SectionGroup>
                <SectionGroup>
                    <SideNavHeader>Shop</SideNavHeader>
                    <SideNavLink
                        style={activeStyle}
                        to="shop-profile"
                    >
                        Shop Profile
                    </SideNavLink>
                </SectionGroup>
            </SideNavContainer>
            <Outlet />
        </Container>
    );
}
