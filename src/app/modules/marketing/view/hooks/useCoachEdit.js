import { useRef } from 'react';
import CoachEdit from '../data/coachEdit';

export default function useCoachRegistration() {
    const repositoryRef = useRef(new CoachEdit());

    const editCoach = async (registrationData, coachId) => {
        // eslint-disable-next-line no-useless-catch
        try {
            const { status } = await repositoryRef.current.edit(registrationData, coachId);
            console.log('useHookStatus: ', status);

            // const coach = {
            //     coachId: data.data.coachId,
            //     coachName: data.data.coachName,
            //     level: data.data.level,
            //     targetAge: data.data.targetAge,
            //     numOfRating: data.data.numOfRating,
            //     rating: data.data.rating,
            //     qualification: data.data.qualification,
            //     archivement: data.data.archivement,
            //     timeslot: data.data.timeslot,
            //     experience: data.data.experience,
            //     feePerSession: data.data.feePerSession,
            //     location: data.data.location,
            //     state: data.data.state,
            //     area: data.data.area,
            //     contact: data.data.contact,
            //     file: `http://localhost:3000/${data.data.file}`,
            // };
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
