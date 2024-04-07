import { Outlet, ScrollRestoration } from 'react-router-dom';

export default function RootLayout() {
    return (
        <>
            <ScrollRestoration />
            <Outlet />
        </>
    );
}
