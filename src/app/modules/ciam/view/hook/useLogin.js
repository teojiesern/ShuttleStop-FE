import { useRef } from 'react';
import CIAMRepositoryImpl from '../../data/repository/CIAMRepositoryImpl';

export default function useLogin() {
    const repostitoryRef = useRef(new CIAMRepositoryImpl());

    const login = async ({ email, password }) => {
        // eslint-disable-next-line no-useless-catch
        try {
            const { data } = await repostitoryRef.current.login({ email, password });

            return data;
        } catch (error) {
            throw error;
        }
    };

    return {
        login,
    };
}
