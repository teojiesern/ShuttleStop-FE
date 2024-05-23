import Network from '../../../../platform/network/Network';

export default class CoachDetails {
    #BASE_URL = '/marketing-service';

    #ROUTES = {
        COACHGRID: `${this.#BASE_URL}/coaches`,
    };

    getCoachDetails = async () => {
        try {
            const { status, data } = await Network.getInstance().get(this.#ROUTES.COACHGRID);

            // Check if request was successful
            if (status === 200) {
                // Mapping data if needed
                const mappedData = data.map((coach) => ({
                    coachId: coach.coachId,
                    coachName: coach.coachName,
                    level: coach.level,
                    targetAge: coach.targetAge,
                    rating: coach.rating,
                    numOfRating: coach.numOfRating,
                    qualification: coach.qualification,
                    experience: coach.experience,
                    archivement: coach.archivement,
                    timeslot: coach.timeslot,
                    location: coach.location,
                    state: coach.state,
                    area: coach.area,
                    feePerSession: coach.feePerSession,
                    contact: coach.contact,
                    file: `http://localhost:3000/${coach.file}`,
                }));

                return { status, data: mappedData };
            }
        } catch (error) {
            // Handle network error
            console.error('Failed to fetch coach details:', error.message);
            return { status: 500, data: null };
        }
    };
}
