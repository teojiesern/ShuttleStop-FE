import Network from '../../../../platform/network/Network';

export default class CoachDetails {
    #BASE_URL = '/marketing-service';

    #ROUTES = {
        COACHGRID: `${this.#BASE_URL}/coach-profile`,
    };

    getCoachDetails = async (coachId) => {
        try {
            const { status, data } = await Network.getInstance().get(`${this.#ROUTES.COACHGRID}/${coachId}`);

            // Check if request was successful
            if (status === 200) {
                // Mapping data if needed
                const mappedData = {
                    coachId: data.coachId,
                    coachName: data.coachName,
                    level: data.level,
                    targetAge: data.targetAge,
                    rating: data.rating,
                    numOfRating: data.numOfRating,
                    qualification: data.qualification,
                    experience: data.experience,
                    archivement: data.archivement,
                    timeslot: data.timeslot,
                    location: data.location,
                    state: data.state,
                    area: data.area,
                    feePerSession: data.feePerSession,
                    contact: data.contact,
                    file: `http://localhost:3000/${data.file}`,
                };

                return { status, data: mappedData };
            }
        } catch (error) {
            // Handle network error
            console.error('Failed to fetch coach details:', error.message);
            return { status: 500, data: null };
        }
    };
}
