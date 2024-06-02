import { useCallback, useRef } from 'react';
import CIAMRepositoryImpl from '../../data/repository/CIAMRepositoryImpl';

export default function useForgotPassword() {
    const repostitoryRef = useRef(new CIAMRepositoryImpl());

    const sendOTP = useCallback(async ({ email }) => {
        const { data } = await repostitoryRef.current.sendOTP({ email });

        return data.OTPNumber;
    }, []);

    return {
        sendOTP,
    };
}
