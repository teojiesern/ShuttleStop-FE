import { isAxiosError } from 'axios';
import { useCallback } from 'react';

export default function useCustomer() {
    // const repostitoryRef = useRef(new CustomerRepositoryImpl());

    const getCustomer = useCallback(async () => {
        try {
            // const { data } = await repostitoryRef.current.getCustomer();

            // return data;
            return 'hello';
            // eslint-disable-next-line no-unreachable
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
