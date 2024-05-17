import Network from '../../../platform/network/Network';

export default class SellerRepositoryImpl {
    #BASE_URL = '/seller-service';

    #ROUTES = {
        SELLER: `${this.#BASE_URL}/information`,
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
}
