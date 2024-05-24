import { useRef } from 'react';
import CoachEdit from '../data/coachEdit';

export default function useCoachRegistration() {
    const repositoryRef = useRef(new CoachEdit());

    const editCoach = async (registrationData, coachId) => {
        // eslint-disable-next-line no-useless-catch
        try {
            const { status } = await repositoryRef.current.edit(registrationData, coachId);
            console.log('useHookStatus: ', status);

            return {
                status,
            };
        } catch (error) {
            throw error;
        }
    };

    return {
        editCoach,
    };
}
