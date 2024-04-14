import { useEffect, useMemo, useRef, useState } from 'react';
import SCMyIncomeFakeRepositoryImpl from '../../data/SCMyIncomeFakeRepositoryImpl';

export default function useSCMyIncome() {
    const [bankInformation, setBankInformation] = useState(null);
    const repostitoryRef = useRef(new SCMyIncomeFakeRepositoryImpl());

    useEffect(() => {
        repostitoryRef.current.getBankInformation().then(({ data }) => {
            setBankInformation(data);
        });
    }, []);

    const getPreviousOrders = async () => {
        const response = await repostitoryRef.current.getPreviousOrders();

        return response.data;
    };

    return useMemo(
        () => ({
            bankInformation,
            getPreviousOrders,
        }),
        [bankInformation],
    );
}
