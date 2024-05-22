import { isAxiosError } from 'axios';
import { useCallback, useRef } from 'react';
import CustomerRepositoryImpl from '../../data/repository/CustomerRepositoryImpl';

export default function useShop() {
    const repositoryRef = useRef(new CustomerRepositoryImpl());

    const getShop = useCallback(async (productId) => {
        try {
            const { data } = await repositoryRef.current.getShop(productId);

            return data;
        } catch (error) {
            if (isAxiosError(error)) {
                console.log('this is the errors', error.response.data);
            }
        }
    }, []);

    return {
        getShop,
    };
}
