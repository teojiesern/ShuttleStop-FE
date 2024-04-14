/* eslint-disable no-new-wrappers */
import { useEffect, useMemo, useRef, useState } from 'react';
import SCMyIncomeFakeRepositoryImpl from '../../data/SCMyIncomeFakeRepositoryImpl';

export default function useSCMyIncome() {
    const [bankInformation, setBankInformation] = useState(null);
    const [totalAmount, setTotalAmount] = useState(null);
    const repostitoryRef = useRef(new SCMyIncomeFakeRepositoryImpl());

    useEffect(() => {
        repostitoryRef.current.getBankInformation().then(({ data }) => {
            setBankInformation(data);
        });

        repostitoryRef.current.getTotalAmount().then(({ data }) => {
            setTotalAmount(data.totalAmount.toFixed(2));
        });
    }, []);

    const getPreviousOrders = async () => {
        const response = await repostitoryRef.current.getPreviousOrders();

        return response.data;
    };

    const updateBankInformation = async (newBankInformation) => {
        // const response = await repostitoryRef.current.updateBankInformation(newBankInformation);

        setBankInformation(newBankInformation);
    };

    return useMemo(
        () => ({
            bankInformation,
            totalAmount,
            getPreviousOrders,
            updateBankInformation,
        }),
        [bankInformation, totalAmount],
    );
}
