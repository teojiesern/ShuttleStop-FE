import { createContext } from 'react';

const CustomerInfoContext = createContext({
    customerInfo: {
        customerID: '',
        username: '',
        name: '',
        email: '',
        phoneNo: '',
        gender: '',
        birthday: '',
        address: '',
    },
    setCustomerInfo: () => {},
});

export default CustomerInfoContext;
