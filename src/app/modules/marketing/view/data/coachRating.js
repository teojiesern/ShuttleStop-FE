import Network from '../../../../platform/network/Network';

export default class CoachRatinh {
    #BASE_URL = '/marketing-service';

    #ROUTES = {
        RATING: `${this.#BASE_URL}/coach-rating`,
    };

    rating = async (coachId, formData) => {
        const { status, data } = await Network.getInstance().post(`${this.#ROUTES.RATING}/${coachId}`, formData, {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const mappedData = {
            coach: {
                rating: data.rating,
                numOfRating: data.numOfRating,
            },
        };

        return { status, data: mappedData };
    };
}
