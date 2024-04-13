import { createContext } from 'react';

const CustomerStatusContext = createContext({
    isLogin: false,
    registeredSeller: false,
    setCustomerStatus: () => {},
});

export default CustomerStatusContext;
