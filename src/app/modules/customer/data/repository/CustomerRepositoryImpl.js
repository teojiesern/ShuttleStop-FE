import Network from '../../../../platform/network/Network';

export default class CustomerRepositoryImpl {
    #BASE_URL = '/customer-service';

    #ROUTES = {
        CUSTOMER: `${this.#BASE_URL}`,
        REGISTER: `${this.#BASE_URL}/signup`,
    };

    getCustomer = async () => {
        const { status, data } = await Network.getInstance().get(this.#ROUTES.CUSTOMER);

        return { status, data };
    };

    registerCustomer = async (user) => {
        const { status, data } = await Network.getInstance().post(this.#ROUTES.REGISTER, user);

        return { status, data };
    };
}
