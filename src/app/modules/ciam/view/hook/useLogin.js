import { useRef } from 'react';
import CIAMRepositoryImpl from '../../data/repository/CIAMRepositoryImpl';

export default function useLogin() {
    const repostitoryRef = useRef(new CIAMRepositoryImpl());

    const login = async () => {
        // eslint-disable-next-line no-useless-catch
        try {
            const { data } = await repostitoryRef.current.login();

            return data;
        } catch (error) {
            throw error;
        }
    };

    return {
        login,
    };
}
