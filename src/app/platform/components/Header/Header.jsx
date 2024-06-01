import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../icons/logo.svg';
import HeaderLink from './HeaderLink';
import HeaderNavLink from './HeaderNavLink';

// region styles
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

// any updates here should be reflected in `CheckoutModuleHeader.jsx`
export default function Header() {
    const navigate = useNavigate();

    return (
        <RootContainer>
            <HeaderContainer>
                <Link to="/">
                    <img
                        src={Logo}
                        width={400}
                    />
                </Link>
                <ElementContainer>
                    <HeaderLink />
                    <IconButton onClick={() => navigate('/checkout')}>
                        <ShoppingCartOutlinedIcon />
                    </IconButton>
                </ElementContainer>
            </HeaderContainer>
            <HeaderNavLink />
        </RootContainer>
    );
}
