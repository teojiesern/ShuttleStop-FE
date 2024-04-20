import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import NavLinkStylesUtil from '../../../platform/utils/NavLinkStylesUtil';

const BorderContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid ${COLORS.grey};
    padding: 1rem;
    justify-content: space-around;
`;

const HeaderNavLink = styled(NavLink)`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.black};
    text-decoration: none;
`;

export default function MyPurchaseHeader() {
    return (
        <BorderContainer>
            <HeaderNavLink
                style={NavLinkStylesUtil.activeStyleWithFontWeight}
                to="/customer/my-purchase/to-ship"
            >
                To Ship
            </HeaderNavLink>
            <HeaderNavLink
                style={NavLinkStylesUtil.activeStyleWithFontWeight}
                to="/customer/my-purchase/to-receive"
            >
                To Receive
            </HeaderNavLink>
            <HeaderNavLink
                style={NavLinkStylesUtil.activeStyleWithFontWeight}
                to="/customer/my-purchase/completed"
            >
                Completed
            </HeaderNavLink>
        </BorderContainer>
    );
}
