import { useRef } from 'react';
import CheckoutRepositoryImpl from '../../data/repository/CheckoutRepositoryImpl';

export default function useOrder() {
    const repositoryRef = useRef(new CheckoutRepositoryImpl());

    const createOrder = async (payload) => {
        // eslint-disable-next-line no-useless-catch
        try {
            const { data } = await repositoryRef.current.createOrder(payload);

            return data;
        } catch (error) {
            throw error;
        }
    };

    return {
        createOrder,
    };
}
