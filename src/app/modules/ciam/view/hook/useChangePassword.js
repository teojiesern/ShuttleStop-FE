import { useCallback, useRef } from 'react';
import CIAMRepositoryImpl from '../../data/repository/CIAMRepositoryImpl';

export default function useChangePassword() {
    const repostitoryRef = useRef(new CIAMRepositoryImpl());

    const changePassword = useCallback(async ({ email, newPassword }) => {
        await repostitoryRef.current.changePassword({ email, newPassword });
    }, []);

    return {
        changePassword,
    };
}
