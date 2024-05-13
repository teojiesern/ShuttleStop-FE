import { createContext } from 'react';

const CustomerInfoContext = createContext({
    customerInfo: {
        customerID: '',
        username: '',
        email: '',
        phoneNo: '',
        gender: '',
        birthday: '',
        address: '',
    },
    setCustomerInfo: () => {},
});

export default CustomerInfoContext;
