import { isAxiosError } from 'axios';
import { useCallback, useRef } from 'react';
import CustomerRepositoryImpl from '../../data/repository/CustomerRepositoryImpl';

export default function useCustomer() {
    const repostitoryRef = useRef(new CustomerRepositoryImpl());

    const getCustomer = useCallback(async () => {
        try {
            const { data } = await repostitoryRef.current.getCustomer();

            return data;
        } catch (error) {
            if (isAxiosError(error)) {
                console.log('this is the errors', error.response.data);
            }
        }
    }, []);

    return {
        getCustomer,
    };
}
