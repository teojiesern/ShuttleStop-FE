import Network from '../../../platform/network/Network';

export default class SCRegistrationRepositoryImpl {
    #BASE_URL = '/seller-service';

    #ROUTES = {
        SIGNUP: `${this.#BASE_URL}/signup`,
    };

    signup = async (formData) => {
        const { status, data } = await Network.getInstance().post(this.#ROUTES.SIGNUP, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        const mappedData = {
            seller: {
                sellerName: data.seller.name,
                sellerIcNumber: data.seller.icNumber,
                sellerTotalIncome: data.seller.totalIncome,
                sellerId: data.seller.sellerId,
            },
            shop: {
                shopName: data.shop.name,
                shopPickupAddress: data.shop.pickupAddress,
                shopEmail: data.shop.email,
                shopPhoneNumber: data.shop.phoneNumber,
                shopLogoPath: data.shop.logoPath,
                shopSupportedCourierOption: data.shop.shopSupportedCourierOption,
                shopSupportedShippingOption: data.shop.shopSupportedShippingOption,
                shopSupportedPaymentOption: data.shop.shopSupportedPaymentOption,
                shopProducts: data.shop.products,
                shopOwner: data.shop.owner,
            },
        };

        return { status, data: mappedData };
    };
}
