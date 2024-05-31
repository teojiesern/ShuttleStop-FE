import { useCallback, useRef } from 'react';
import CoachDetail from '../data/coachDetail';

export default function useCoachDetail() {
    const repositoryRef = useRef(new CoachDetail());

    const getCoachDetails = useCallback(async () => {
        try {
            const { data } = await repositoryRef.current.getCoachDetails();
            return data;
        } catch (error) {
            console.error('Error fetching coach details:', error);
            throw error;
        }
    }, []);

    return { getCoachDetails };
}
