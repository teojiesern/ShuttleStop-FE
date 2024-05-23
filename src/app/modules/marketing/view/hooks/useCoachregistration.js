import { useRef } from 'react';
import CoachRegistration from '../data/coachRegistration';

export default function useCoachRegistration() {
    const repositoryRef = useRef(new CoachRegistration());

    const registerCoach = async (registrationData) => {
        // eslint-disable-next-line no-useless-catch
        try {
            const { status } = await repositoryRef.current.register(registrationData);
            console.log('useHookStatus: ', status);

            return status;
        } catch (error) {
            throw error;
        }
    };

    return {
        registerCoach,
    };
}
