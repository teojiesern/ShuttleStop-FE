import { useMemo } from 'react';
// import CompetitionsDetail from '../data/competitionsDetail';

export default function useCompetitionDetail() {
    const getDetails = async () => {
        const response = await fetch('http://localhost:3000/marketing-service/competitions');

        if (!response.ok) {
            throw new Error('Failed to fetch competition details');
        }

        const data = await response.json();
        return data;
    };

    return useMemo(
        () => ({
            getDetails,
        }),
        [],
    );
}
