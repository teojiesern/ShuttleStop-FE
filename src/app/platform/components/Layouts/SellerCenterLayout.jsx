import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../Footer/Footer';
import SellerCenterModuleHeader from '../Header/SellerCenterModuleHeader';

const LayoutContainer = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 3rem;
    padding: 2rem 5rem;
    min-height: calc(100vh - 4rem);
`;

export default function SellerCenterLayout() {
    return (
        <LayoutContainer>
            <SellerCenterModuleHeader />
            <Outlet />
            <Footer />
        </LayoutContainer>
    );
}
