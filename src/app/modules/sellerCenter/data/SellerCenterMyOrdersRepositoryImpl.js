import Network from '../../../platform/network/Network';

export default class SellerCenterMyOrdersRepositoryImpl {
    #BASE_URL = '/seller-service';

    #ROUTES = {
        TO_SHIP_ORDERS: (shopId) => `${this.#BASE_URL}/orders/to-ship/${shopId}`,
        SHIPPING_ORDERS: (shopId) => `${this.#BASE_URL}/orders/shipping/${shopId}`,
        COMPLETED_ORDERS: (shopId) => `${this.#BASE_URL}/orders/completed/${shopId}`,
    };

    getToShipOrders = async (payload) => {
        const { status, data } = await Network.getInstance().get(this.#ROUTES.TO_SHIP_ORDERS(payload.shopId));
        return { status, data };
    };

    getShippingOrders = async (payload) => {
        const { status, data } = await Network.getInstance().get(this.#ROUTES.SHIPPING_ORDERS(payload.shopId));
        return { status, data };
    };

    getDeliveredOrders = async (payload) => {
        const { status, data } = await Network.getInstance().get(this.#ROUTES.COMPLETED_ORDERS(payload.shopId));
        return { status, data };
    };

    shipOrders = async (orderIds) => {
        const { status, data } = await Network.getInstance().post(this.#ROUTES.GET_TO_SHIP_ORDERS, { orderIds });
        return { status, data };
    };
}
