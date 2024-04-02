import styled from 'styled-components';
import Footer from '../../../platform/components/Footer/Footer';
import Header from '../../../platform/components/Header/Header';

const Container = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: 2rem 5rem;
    min-height: calc(100vh - 4rem);
`;

export default function MainScreen() {
    return (
        <Container>
            <Header />
            <h1>Main screen</h1>
            <Footer />
        </Container>
    );
}
