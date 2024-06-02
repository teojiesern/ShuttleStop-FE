import Network from '../../../../platform/network/Network';

export default class CIAMRepositoryImpl {
    #BASE_URL = '/authentication-service';

    #ROUTES = {
        LOGIN: `${this.#BASE_URL}/login`,
        SEND_OTP: `${this.#BASE_URL}/send-otp`,
        CHANGE_PASSWORD: '/customer-service/change-password',
        LOGOUT: `${this.#BASE_URL}/logout`,
    };

    login = async (payload) => {
        const { status, data } = await Network.getInstance().post(this.#ROUTES.LOGIN, payload);

        return { status, data };
    };

    logout = async () => {
        const { status, data } = await Network.getInstance().post(this.#ROUTES.LOGOUT);

        return { status, data };
    };

    sendOTP = async (payload) => {
        const { status, data } = await Network.getInstance().post(this.#ROUTES.SEND_OTP, payload);

        return { status, data };
    };

    changePassword = async (payload) => {
        const { status, data } = await Network.getInstance().patch(this.#ROUTES.CHANGE_PASSWORD, payload);

        return { status, data };
    };
}
