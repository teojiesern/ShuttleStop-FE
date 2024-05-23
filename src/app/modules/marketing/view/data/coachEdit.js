import Network from '../../../../platform/network/Network';

export default class CoachEdit {
    #BASE_URL = '/marketing-service';

    #ROUTES = {
        EDIT: `${this.#BASE_URL}/coach-edit`,
    };

    edit = async (formData, coachId) => {
        try {
            const { status, data } = await Network.getInstance().post(`${this.#ROUTES.EDIT}/${coachId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            return { status, data };
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    };
}
