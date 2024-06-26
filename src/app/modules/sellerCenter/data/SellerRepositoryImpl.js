import Network from '../../../platform/network/Network';

export default class SellerRepositoryImpl {
    #BASE_URL = '/seller-service';

    #ROUTES = {
        SELLER: `${this.#BASE_URL}/information`,
        SHOP: (sellerId) => `${this.#BASE_URL}/shop/${sellerId}`,
        UPDATE_SHOP: `${this.#BASE_URL}/update-shop`,
    };

    getSellerInformation = async () => {
        const { status, data } = await Network.getInstance().get(this.#ROUTES.SELLER);
        const mappedData = {
            sellerId: data.seller.sellerId,
            sellerName: data.seller.name,
            sellerIcNumber: data.seller.icNumber,
            sellerTotalIncome: data.seller.totalIncome,
            sellerBankAccount: data.seller.bankAccount,
            sellerBankAccountNumber: data.seller.accountNumber,
            sellerNameInBankAccount: data.seller.nameInBankAccount,
        };

        return { status, data: mappedData };
    };

    getShopInformation = async (sellerId) => {
        const { status, data } = await Network.getInstance().get(this.#ROUTES.SHOP(sellerId));

        const mappedData = {
            shopId: data.shop.shopId,
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

    updateShopInformation = async (shopData) => {
        const { status, data } = await Network.getInstance().patch(this.#ROUTES.UPDATE_SHOP, shopData);

        return { status, data };
    };

    // Form data variant of updateShopInformation, used for file updates
    updateShopInformationFile = async (formData) => {
        const { status, data } = await Network.getInstance().patch(this.#ROUTES.UPDATE_SHOP, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return { status, data };
    };
}
