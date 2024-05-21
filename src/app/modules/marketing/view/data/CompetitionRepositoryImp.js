import Network from '../../../../platform/network/Network';

export default class CompetitionRepositoryImp {
    #BASE_URL = '/marketing-service';

    #ROUTES = {
        COMPETITIONS: `${this.#BASE_URL}/competitions`,
    };

    getDetails = async () => {
        const { status, data } = await Network.getInstance().get(this.#ROUTES.COMPETITIONS);

        if (status !== 200) {
            throw new Error('Failed to fetch competition details');
        }

        return data;
    };
}
