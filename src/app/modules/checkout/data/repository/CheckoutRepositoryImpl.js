import Network from '../../../../platform/network/Network';

export default class CheckoutRepositoryImpl {
    #BASE_URL = '/checkout-service';

    #ROUTES = {
        CREATE_ORDER: `${this.#BASE_URL}/create-order`,
    };

    createOrder = async (payload) => {
        const { status, data } = await Network.getInstance().post(this.#ROUTES.CREATE_ORDER, payload);

        return { status, data };
    };
}
