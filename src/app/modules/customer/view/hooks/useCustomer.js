import { isAxiosError } from 'axios';
import { useCallback, useRef } from 'react';
import CustomerRepositoryImpl from '../../data/repository/CustomerRepositoryImpl';

export default function useCustomer() {
    const repositoryRef = useRef(new CustomerRepositoryImpl());

    const getCustomer = useCallback(async () => {
        try {
            const { data } = await repositoryRef.current.getCustomer();

            return data;
        } catch (error) {
            if (isAxiosError(error)) {
                console.log('this is the errors', error.response.data);
            }
        }
    }, []);

    const updateCustomer = useCallback(
        async (updatedInfo) => {
            try {
                const currentCustomer = await getCustomer();
                if (!currentCustomer) {
                    throw new Error('No customer is currently logged in');
                }

                const { status, data } = await repositoryRef.current.updateCustomer(updatedInfo);
                return { status, data };
            } catch (error) {
                if (isAxiosError(error)) {
                    console.log('this is the errors', error.response.data);
                }
            }
        },
        [getCustomer],
    );

    return {
        getCustomer,
        updateCustomer,
    };
}
