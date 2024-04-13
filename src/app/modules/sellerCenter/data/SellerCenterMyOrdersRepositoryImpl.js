import Network from '../../../platform/network/Network';

export default class SellerCenterMyOrdersRepositoryImpl {
    #BASE_URL = '/seller-center-service';

    #ROUTES = {
        // TODO: Update with actual route when BE is ready
        GET_TO_SHIP_ORDERS: `${this.#BASE_URL}/sessions/password-authentications`,
    };

    getToShipOrders = async () => {
        const { status, data } = await Network.getInstance().get(this.#ROUTES.LOGIN);
        return { status, data };
    };
}
