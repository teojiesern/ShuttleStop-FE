import { Outlet, ScrollRestoration } from 'react-router-dom';
import ColdStartProvider from '../../app/provider/ColdStartProvider';
import ShopSettingsProvider from '../../app/provider/ShopSettingsProvider';

export default function RootLayout() {
    return (
        <ColdStartProvider>
            <ShopSettingsProvider>
                <ScrollRestoration />
                <Outlet />
            </ShopSettingsProvider>
        </ColdStartProvider>
    );
}
