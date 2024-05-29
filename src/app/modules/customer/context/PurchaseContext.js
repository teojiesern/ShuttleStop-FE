import { createContext } from 'react';

const PurchasesContext = createContext({
    ToShipPurchases: [],
    ShippingPurchases: [],
    CompletedPurchases: [],
    setToShipPurchases: () => {},
    setShippingPurchases: () => {},
    setCompletedPurchases: () => {},
});

export default PurchasesContext;
