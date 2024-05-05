import Network from '../../../../platform/network/Network';

export default class CustomerRepositoryImpl {
    #BASE_URL = '/customer-service';

    #ROUTES = {
        CUSTOMER: `${this.#BASE_URL}`,
    };

    getCustomer = async () => {
        const { status, data } = await Network.getInstance().get(this.#ROUTES.CUSTOMER);

        return { status, data };
    };
}
