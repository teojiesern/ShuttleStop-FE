import Network from '../../../platform/network/Network';

export default class SellerCenterMyOrdersRepositoryImpl {
    #BASE_URL = '/seller-service';

    #ROUTES = {
        // TODO: Update with actual route when BE is ready
        GET_TO_SHIP_ORDERS: `${this.#BASE_URL}/...`,
    };

    getToShipOrders = async () => {
        const { status, data } = await Network.getInstance().get(this.#ROUTES.GET_TO_SHIP_ORDERS);
        return { status, data };
    };

    shipOrders = async (orderIds) => {
        const { status, data } = await Network.getInstance().post(this.#ROUTES.GET_TO_SHIP_ORDERS, { orderIds });
        return { status, data };
    };

    getShippingOrders = async () => {
        const { status, data } = await Network.getInstance().get(this.#ROUTES.GET_TO_SHIP_ORDERS);
        return { status, data };
    };

    getDeliveredOrders = async () => {
        const { status, data } = await Network.getInstance().get(this.#ROUTES.GET_TO_SHIP_ORDERS);
        return { status, data };
    };
}
