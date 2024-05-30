import { ImageURL } from '../../../platform/constants/PlatformConstants';
import Network from '../../../platform/network/Network';

export default class SCMyIncomeRepositoryImpl {
    #BASE_URL = '/seller-service';

    #ROUTES = {
        ORDERS: (shopId) => `${this.#BASE_URL}/order/${shopId}`,
    };

    getPreviousOrders = async (payload) => {
        const { status, data } = await Network.getInstance().get(this.#ROUTES.ORDERS(payload.shopId));

        const mappedData = data.map((d) => ({
            ...d,
            productImage: `${ImageURL}${d.productImage}`,
        }));

        return { status, data: mappedData };
    };
}
