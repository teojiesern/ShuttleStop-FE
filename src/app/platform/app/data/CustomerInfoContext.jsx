import { createContext } from 'react';

const CustomerInfoContext = createContext({
    customerInfo: {
        customerID: '',
        username: '',
        email: '',
        phoneNo: '',
        gender: '',
        birthday: '',
        address: {
            street: '',
            city: '',
            postcode: '',
            country: '',
            state: '',
        },
        profileImgPath: '',
    },
    setCustomerInfo: () => {},
});

export default CustomerInfoContext;
