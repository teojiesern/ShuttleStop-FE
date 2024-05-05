import Network from '../../../../platform/network/Network';

export default class CIAMRepositoryImpl {
    #BASE_URL = '/authentication-service';

    #ROUTES = {
        LOGIN: `${this.#BASE_URL}/login`,
    };

    login = async () => {
        const { status, data } = await Network.getInstance().post(this.#ROUTES.LOGIN);

        return { status, data };
    };
}
