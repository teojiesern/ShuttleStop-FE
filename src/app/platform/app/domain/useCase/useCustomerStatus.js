import { useMemo, useRef } from 'react';
import CustomerStatusFakeRepositoryImpl from '../../data/CustomerStatusFakeRepositoryImpl';

export default function useCustomerStatus() {
    const repostitoryRef = useRef(new CustomerStatusFakeRepositoryImpl());

    // eslint-disable-next-line no-unused-vars
    const getCustomerStatus = async (_customerId) => {
        const response = await repostitoryRef.current.getCustomerStatus();

        return response.data;
    };

    return useMemo(
        () => ({
            getCustomerStatus,
        }),
        [],
    );
}
