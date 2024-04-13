import { createContext } from 'react';

const ShopSettingsContext = createContext({
    shippingSettings: {
        activeCourierOptions: [],
        activeShippingOptions: [],
        activePaymentOptions: [],
    },
    shopProfile: {
        shopName: '',
        shopDescription: '',
        shopLogo: '',
    },
    setShippingSettings: () => {},
    setShopProfile: () => {},
});

export default ShopSettingsContext;
