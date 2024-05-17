import { useRef } from 'react';
import SellerRepositoryImpl from '../../data/SellerRepositoryImpl';

export default function useSeller() {
    const repositoryRef = useRef(new SellerRepositoryImpl());

    const getSellerInformation = async () => {
        // eslint-disable-next-line no-useless-catch
        try {
            const { data } = await repositoryRef.current.getSellerInformation();

            return data;
        } catch (error) {
            throw error;
        }
    };

    return {
        getSellerInformation,
    };
}
