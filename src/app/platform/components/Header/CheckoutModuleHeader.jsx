import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../Colors';
import Logo from '../../icons/logo.svg';
import FONTSIZE from '../../style/FontSize';
import FONTWEIGHT from '../../style/FontWeight';
import HeaderLink from './HeaderLink';
import SearchField from './SearchField';

const RootContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ElementContainer = styled.div`
    display: flex;
    gap: 1rem;
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
export default function CheckoutModuleHeader() {
    const navigate = useNavigate();

    return (
        <RootContainer>
            <HeaderLink />
            <HeaderContainer>
                <Link to="/">
                    <img
                        src={Logo}
                        width={400}
                    />
                </Link>
                <ElementContainer>
                    <SearchField />
                    <IconButton onClick={() => navigate('/checkout')}>
                        <ShoppingCartOutlinedIcon />
                    </IconButton>
                </ElementContainer>
            </HeaderContainer>
            <HeaderTitle>Shoppping Cart</HeaderTitle>
        </RootContainer>
    );
}
