import Network from '../../../../platform/network/Network';

export default class CompetitionRepositoryImp {
    #BASE_URL = '/marketing-service';

    #ROUTES = {
        COMPETITIONS: `${this.#BASE_URL}/competitions`,
    };

    getDetails = async () => {
        const response = await Network.getInstance().get(this.#ROUTES.COMPETITIONS);
        return response.data;
    };
}
