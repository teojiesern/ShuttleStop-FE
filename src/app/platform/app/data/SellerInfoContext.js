import { createContext } from 'react';

const SellerInfoContext = createContext({
    sellerName: '',
    sellerIcNumber: '',
    sellerTotalIncome: 0,
    sellerId: '',
    sellerBankAccount: '',
    sellerBankAccountNumber: '',
    sellerNameInBankAccount: '',
    setSellerInfo: () => {},
});

export default SellerInfoContext;
