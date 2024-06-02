import { useCallback, useRef } from 'react';
import CIAMRepositoryImpl from '../../data/repository/CIAMRepositoryImpl';

export default function useLogout() {
    const repostitoryRef = useRef(new CIAMRepositoryImpl());

    const logout = useCallback(async () => {
        await repostitoryRef.current.logout();
    }, []);

    return {
        logout,
    };
}
