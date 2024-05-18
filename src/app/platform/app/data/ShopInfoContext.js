import { createContext } from 'react';

const ShopInfoContext = createContext({
    shopName: '',
    shopDescription: '',
    shopPickupAddress: '',
    shopEmail: '',
    shopPhoneNumber: '',
    shopLogoPath: '',
    shopSupportedCourierOption: [],
    shopSupportedShippingOption: [],
    shopSupportedPaymentOption: [],
    shopProducts: [],
    shopOwner: '',
    setShopInfo: () => {},
});

export default ShopInfoContext;
