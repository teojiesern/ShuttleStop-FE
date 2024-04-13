import { createContext } from 'react';

const ShopSettingsContext = createContext({
    activeCourierOptions: [],
    activeShippingOptions: [],
    activePaymentOptions: [],
    shopName: '',
    shopDescription: '',
    shopLogo: '',
    setShopSettings: () => {},
});

export default ShopSettingsContext;
