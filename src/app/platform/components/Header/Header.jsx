import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IconButton } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../icons/logo.svg';
import HeaderLink from './HeaderLink';
import HeaderNavLink from './HeaderNavLink';
import SearchField from './SearchField';

// region styles
const RootContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 5rem;
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

export default function Header() {
    return (
        <>
            <RootContainer>
                <HeaderLink />
                <HeaderContainer>
                    <Link to="/">
                        <img
                            src={Logo}
                            width={300}
                        />
                    </Link>
                    <ElementContainer>
                        <SearchField />
                        <IconButton>
                            <ShoppingCartOutlinedIcon />
                        </IconButton>
                    </ElementContainer>
                </HeaderContainer>
                <HeaderNavLink />
            </RootContainer>
            <Outlet />
        </>
    );
}
