import { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useLogout from '../../../modules/ciam/view/hook/useLogout';
import COLORS from '../../Colors';
import CustomerStatusContext from '../../app/data/CustomerStatusContext';
import FONTSIZE from '../../style/FontSize';
import FONTWEIGHT from '../../style/FontWeight';

const Container = styled.div`
    display: flex;
    justify-content: ${(props) => props.align};
    align-items: center;
    gap: 1rem;
`;

const StyledLink = styled(Link)`
    color: ${COLORS.darkGrey};
    text-decoration: none;
    font-weight: ${FONTWEIGHT.REGULAR};
    font-size: ${FONTSIZE['x-small']};
`;

export default function HeaderLink({ align = 'end' }) {
    const { isLogin } = useContext(CustomerStatusContext);
    const { logout } = useLogout();

    const handleLogout = useCallback(async () => {
        await logout();
        window.location.href = '/';
    }, [logout]);

    return (
        <Container align={align}>
            <StyledLink to="/seller-center">Seller Center</StyledLink>
            {isLogin ? (
                <>
                    <StyledLink to="/customer/my-profile">My Account</StyledLink>
                    <StyledLink
                        to="#"
                        onClick={handleLogout}
                    >
                        Logout
                    </StyledLink>
                </>
            ) : (
                <>
                    <StyledLink to="/authentication/login">Log In</StyledLink>
                    <StyledLink to="/authentication/signup">Sign Up</StyledLink>
                </>
            )}
        </Container>
    );
}
