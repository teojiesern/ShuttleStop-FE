import {
    CourierOptions,
    PaymentOptions,
    ShippingOptions,
} from '../../../modules/sellerCenter/constants/SellerCenterConstants';

export default class ShopSettingsFakeRepositoryImpl {
    getShopSettings = async () => ({
        status: 200,
        data: {
            shopName: 'YONEX',
            shopLogo: '',
            shopDescription: 'YONEX is a Japanese sport equipment manufacturer for badminton, golf, and tennis.',
            activeCourierOptions: [CourierOptions.POSLAJU, CourierOptions.JNT_EXPRESS, CourierOptions.DHL],
            // These two must be default to be there when implementing BE
            activeShippingOptions: [ShippingOptions.STANDARD_DELIVERY],
            activePaymentOptions: [PaymentOptions.ONLINE_BANKING],
        },
    });
}
