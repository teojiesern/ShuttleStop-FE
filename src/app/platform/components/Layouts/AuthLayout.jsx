import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const LayoutContainer = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: 2rem 5rem;
    min-height: calc(100vh - 4rem);
`;

const Content = styled.div`
    padding: 1rem 0;
`;

export default function AuthLayout() {
    return (
        <LayoutContainer>
            <Header />
            <Content>
                <Outlet />
            </Content>
            <Footer />
        </LayoutContainer>
    );
}
