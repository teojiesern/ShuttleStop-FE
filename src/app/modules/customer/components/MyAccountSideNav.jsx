import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import NavLinkStylesUtil from '../../../platform/utils/NavLinkStylesUtil';

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

export default function SellerCenterSideNav() {
    return (
        <SideNavContainer>
            <SectionGroup>
                <SideNavHeader>My Account</SideNavHeader>
                <SideNavLink
                    style={NavLinkStylesUtil.activeStyleWithFontWeight}
                    to="customer/my-profile"
                >
                    My Profile
                </SideNavLink>
                <SideNavLink
                    style={NavLinkStylesUtil.activeStyleWithFontWeight}
                    to="customer/my-address"
                >
                    My Address
                </SideNavLink>
            </SectionGroup>
        </SideNavContainer>
    );
}
