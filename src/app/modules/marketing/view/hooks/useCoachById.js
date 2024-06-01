import { useCallback, useRef } from 'react';
import CoachDetail from '../data/coachDetailById';

export default function useCoachDetail(coachId) {
    const repositoryRef = useRef(new CoachDetail());

    const getCoachDetails = useCallback(async () => {
        try {
            const { data } = await repositoryRef.current.getCoachDetails(coachId);
            return data;
        } catch (error) {
            console.error('Error fetching coach details:', error);
            throw error;
        }
    }, [coachId]);

    return { getCoachDetails };
}
