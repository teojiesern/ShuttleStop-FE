import { useMemo, useRef } from 'react';
import CoachDetail from '../data/coachDetail';

export default function useCoachDetail() {
    const repositoryRef = useRef(new CoachDetail());

    const getCoachDetails = async () => {
        const response = await repositoryRef.current.getCoachDetais();
        return response.data;
    };

    return useMemo(
        () => ({
            getCoachDetails,
        }),
        [],
    );
}
