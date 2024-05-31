import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import NavLinkStylesUtil from '../../../../platform/utils/NavLinkStylesUtil';

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

const SideNavHeader = styled(Link)`
    font-size: ${FONTSIZE.small};
    color: ${COLORS.black};
    text-decoration: none;
`;

const SideNavLink = styled(NavLink)`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.black};
    text-decoration: none;
    margin-left: 2rem;
`;

export default function SellerCenterSideNav() {
    const [activeHeader, setActiveHeader] = useState('My Account');
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('my-purchase')) {
            setActiveHeader('My Purchase');
        } else if (location.pathname.includes('my-address')) {
            setActiveHeader('My Account');
        }
    }, [location]);

    return (
        <SideNavContainer>
            <SectionGroup>
                <SideNavHeader
                    style={
                        activeHeader === 'My Account'
                            ? { fontWeight: `${FONTWEIGHT.BOLD}` }
                            : { fontWeight: `${FONTWEIGHT.REGULAR}` }
                    }
                    to="customer/my-profile"
                >
                    My Account
                </SideNavHeader>
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
                <SideNavHeader
                    to="/customer/my-purchase/to-ship"
                    style={
                        activeHeader === 'My Purchase'
                            ? { fontWeight: `${FONTWEIGHT.BOLD}` }
                            : { fontWeight: `${FONTWEIGHT.REGULAR}` }
                    }
                >
                    My Purchase
                </SideNavHeader>
            </SectionGroup>
        </SideNavContainer>
    );
}
