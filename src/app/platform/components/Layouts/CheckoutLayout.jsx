import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import CheckoutModuleHeader from '../Header/CheckoutModuleHeader';

const LayoutContainer = styled.div`
    padding: 2rem 5rem;
`;

const Content = styled.div`
    padding: 1rem 0;
`;

export default function CheckoutLayout() {
    return (
        <LayoutContainer>
            <CheckoutModuleHeader />
            <Content>
                <Outlet />
            </Content>
        </LayoutContainer>
    );
}
