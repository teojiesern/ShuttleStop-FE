import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './app/platform/router';
import GlobalStyle from './app/platform/style/GlobalStyle';
import './fonts.css';
import './reset.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalStyle />
        <RouterProvider router={router} />
    </React.StrictMode>,
);
