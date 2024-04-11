import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';

const SideNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-width: 20%;
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

export default function SellerCenterSideNav() {
    return (
        <SideNavContainer>
            <SectionGroup>
                <SideNavHeader>Orders</SideNavHeader>
                <SideNavLink
                    style={activeStyle}
                    to="my-orders"
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
    );
}
