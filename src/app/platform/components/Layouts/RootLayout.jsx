import { Outlet, ScrollRestoration } from 'react-router-dom';
import ColdStartProvider from '../../app/provider/ColdStartProvider';

export default function RootLayout() {
    return (
        <ColdStartProvider>
            <ScrollRestoration />
            <Outlet />
        </ColdStartProvider>
    );
}
