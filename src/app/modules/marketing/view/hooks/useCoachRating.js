import { useRef } from 'react';
import CoachRating from '../data/coachRating';

export default function useCoachRating() {
    const repositoryRef = useRef(new CoachRating());

    const coachRating = async (coachId, oldRating) => {
        // eslint-disable-next-line no-useless-catch
        try {
            const { status, data } = await repositoryRef.current.rating(coachId, oldRating);

            return {
                coachRating: {
                    rating: data.coach.rating,
                    numOfRating: data.coach.numOfRating,
                    currentStatus: status,
                },
            };
        } catch (error) {
            throw error;
        }
    };

    return {
        coachRating,
    };
}
