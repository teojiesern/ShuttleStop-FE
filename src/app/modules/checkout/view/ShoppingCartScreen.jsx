import styled from 'styled-components';
import CartHead from './component/CartHead';
import CartProduct from './component/CartProduct';
import CheckoutBar from './component/CheckoutBar';
import StoreName from './component/StoreName';

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
`;
const Container = styled.div`
    display: block;
    margin-bottom: 1rem;
`;

export default function ShoppingCartScreen() {
    return (
        <Wrapper>
            <Container>
                <CartHead />
            </Container>
            <Container>
                <StoreName />
                <CartProduct />
            </Container>
            <CheckoutBar />
        </Wrapper>
    );
}
