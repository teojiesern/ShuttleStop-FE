import { useMemo, useRef } from 'react';
import CompetitionsDetail from '../data/competitionsDetail';

export default function useCompetitionDetail() {
    const repositoryRef = useRef(new CompetitionsDetail());

    const getDetails = async (selectedYear) => {
        const response = await repositoryRef.current.getDetails();
        const { competitions } = response.data;

        // Filter competitions by the selected year
        const filteredCompetitions = selectedYear
            ? competitions.filter((competition) => new Date(competition.date).getFullYear() === selectedYear)
            : competitions; // If no year is provided, return all competitions

        return filteredCompetitions;
    };

    return useMemo(
        () => ({
            getDetails,
        }),
        [],
    );
}
