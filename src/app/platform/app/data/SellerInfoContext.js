import { createContext } from 'react';

const SellerInfoContext = createContext({
    sellerName: '',
    sellerIcNumber: '',
    sellerTotalIncome: 0,
    sellerId: '',
    setSellerInfo: () => {},
});

export default SellerInfoContext;
