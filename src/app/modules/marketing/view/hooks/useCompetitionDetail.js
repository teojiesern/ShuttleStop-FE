import { useMemo, useRef } from 'react';
import CompetitionsDetail from '../data/competitionsDetail';

export default function useCompetitionDetail() {
    const repositoryRef = useRef(new CompetitionsDetail());

    const getDetails = async () => {
        const response = await repositoryRef.current.getDetais();
        return response.data;
    };

    return useMemo(
        () => ({
            getDetails,
        }),
        [],
    );
}
