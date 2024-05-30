import { createContext } from 'react';

const PurchasesContext = createContext({
    ToShipPurchases: [],
    ShippingPurchases: [],
    CompletedPurchases: [],
    StatusChange: true,
    setToShipPurchases: () => {},
    setShippingPurchases: () => {},
    setCompletedPurchases: () => {},
    setStatusChange: () => {},
});

export default PurchasesContext;
