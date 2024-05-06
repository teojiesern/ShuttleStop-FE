import { useRef } from 'react';
import CustomerRepositoryImpl from '../../../customer/data/repository/CustomerRepositoryImpl';

export default function useSignup() {
    const repostitoryRef = useRef(new CustomerRepositoryImpl());

    const signup = async (user) => {
        // eslint-disable-next-line no-useless-catch
        try {
            const { data } = await repostitoryRef.current.registerCustomer(user);

            return data;
        } catch (error) {
            throw error;
        }
    };

    return {
        signup,
    };
}
