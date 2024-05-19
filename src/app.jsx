import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import CartProvider from './app/modules/customer/context/CartProvider';
import { CustomerInfoProvider } from './app/platform/app/data/CustomerInfoContext';
import router from './app/platform/components/navigation/router';
import ModalManager from './app/platform/modal/internal/ModalManager';
import ModalView from './app/platform/modal/internal/ModalView';
import GlobalStyle from './app/platform/style/GlobalStyle';
import theme from './app/platform/theme/theme';
import './globalStyles/fonts.css';
import './globalStyles/reset.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CustomerInfoProvider>
                <CartProvider>
                    <GlobalStyle />
                    <RouterProvider router={router} />
                    <ModalView ref={ModalManager.ref} />
                </CartProvider>
            </CustomerInfoProvider>
        </ThemeProvider>
    </React.StrictMode>,
);
