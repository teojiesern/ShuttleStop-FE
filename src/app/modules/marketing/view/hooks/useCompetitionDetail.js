import { useMemo } from 'react';
import CompetitionRepositoryImp from '../data/CompetitionRepositoryImp';
// import CompetitionsDetail from '../data/competitionsDetail';

export default function useCompetitionDetail() {
    const repository = useMemo(() => new CompetitionRepositoryImp(), []);

    return useMemo(
        () => ({
            getDetails: repository.getDetails,
        }),
        [repository],
    );
}
