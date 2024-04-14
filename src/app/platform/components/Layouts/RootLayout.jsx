import { Outlet, ScrollRestoration } from 'react-router-dom';
import ColdStartInitializationProvider from '../../app/provider/ColdStartInitializationProvider';

export default function RootLayout() {
    return (
        <ColdStartInitializationProvider>
            <ScrollRestoration />
            <Outlet />
        </ColdStartInitializationProvider>
    );
}
