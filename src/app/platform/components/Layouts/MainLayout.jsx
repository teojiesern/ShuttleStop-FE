import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0rem 5rem 2rem 5rem;
`;

export default function MainLayout() {
    return (
        <LayoutContainer>
            Main Layout
            <Outlet />
            Footer
        </LayoutContainer>
    );
}
