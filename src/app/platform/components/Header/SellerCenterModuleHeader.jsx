import { Link } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../Colors';
import Logo from '../../icons/logo.svg';
import FONTSIZE from '../../style/FontSize';
import FONTWEIGHT from '../../style/FontWeight';

const RootContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 3rem;
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ReturnToShoppingText = styled(Link)`
    font-size: ${FONTSIZE['x-small']};
    color: ${COLORS.darkGrey};
    font-weight: ${FONTWEIGHT.REGULAR};
    text-decoration: none;
`;

const HeaderTitle = styled.h1`
    font-size: ${FONTSIZE.large};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    color: ${COLORS.green};
`;

/**
 *
 * exact copy of `Header.jsx`, just without navLinks
 * any updates here should be reflected in `Header.jsx`
 *
 * */
export default function SellerCenterModuleHeader() {
    return (
        <RootContainer>
            <HeaderContainer>
                <Link to="/">
                    <img
                        src={Logo}
                        width={400}
                    />
                </Link>
                <ReturnToShoppingText to="/">Return to shopping</ReturnToShoppingText>
            </HeaderContainer>
            <HeaderTitle>Seller Center</HeaderTitle>
        </RootContainer>
    );
}
