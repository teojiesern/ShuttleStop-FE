import { createContext } from 'react';

const AppColdStartContext = createContext({
    isLogin: false,
    registeredSeller: false,
    setIsLogin: () => {},
    setRegisteredSeller: () => {},
});

export default AppColdStartContext;
