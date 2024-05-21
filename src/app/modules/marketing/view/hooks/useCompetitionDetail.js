import { useRef } from 'react';
import CompetitionRepositoryImp from '../data/CompetitionRepositoryImp';

export default function useCompetitionDetail() {
    const repositoryRef = useRef(new CompetitionRepositoryImp());

    const getDetails = async () => {
        // eslint-disable-next-line no-useless-catch
        try {
            const response = await repositoryRef.current.getDetails();
            return response;
        } catch (error) {
            throw error;
        }
    };

    return {
        getDetails,
    };
}
