import Network from '../../../platform/network/Network';

export default class SellerRepositoryImpl {
    #BASE_URL = '/seller-service';

    #ROUTES = {
        SELLER: `${this.#BASE_URL}/information`,
        SHOP: (sellerId) => `${this.#BASE_URL}/shop/${sellerId}`,
    };

    getSellerInformation = async () => {
        const { status, data } = await Network.getInstance().get(this.#ROUTES.SELLER);
        const mappedData = {
            sellerId: data.seller.sellerId,
            sellerName: data.seller.name,
            sellerIcNumber: data.seller.icNumber,
            sellerTotalIncome: data.seller.totalIncome,
        };

        return { status, data: mappedData };
    };

    getShopInformation = async (sellerId) => {
        const { status, data } = await Network.getInstance().get(this.#ROUTES.SHOP(sellerId));

        const mappedData = {
            shopName: data.shop.name,
            shopDescription: data.shop.description || '',
            shopPickupAddress: data.shop.pickupAddress,
            shopEmail: data.shop.email,
            shopPhoneNumber: data.shop.phoneNumber,
            shopLogoPath: `http://localhost:3000/${data.shop.logoPath}`,
            shopSupportedCourierOption: data.shop.shopSupportedCourierOption,
            shopSupportedShippingOption: data.shop.shopSupportedShippingOption,
            shopSupportedPaymentOption: data.shop.shopSupportedPaymentOption,
            shopProducts: data.shop.products,
            shopOwner: data.shop.owner,
        };

        return { status, data: mappedData };
    };
}
