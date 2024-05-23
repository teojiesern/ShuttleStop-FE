import Network from '../../../../platform/network/Network';

export default class CoachRegistration {
    #BASE_URL = '/marketing-service';

    #ROUTES = {
        REGISTER: `${this.#BASE_URL}/coach-registration`,
    };

    register = async (formData) => {
        const { status } = await Network.getInstance().post(this.#ROUTES.REGISTER, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log('Status', status);
        return { status };
    };
}
