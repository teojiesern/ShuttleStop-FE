import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import ShopInfoContext from '../../../../platform/app/data/ShopInfoContext';
import SCMyIncomeRepositoryImpl from '../../data/SCMyIncomeRepositoryImpl';

export default function useSCMyIncome() {
    const [bankInformation, setBankInformation] = useState(null);
    const [totalAmount, setTotalAmount] = useState(null);
    const repostitoryRef = useRef(new SCMyIncomeRepositoryImpl());
    const { shopId } = useContext(ShopInfoContext);

    useEffect(() => {
        repostitoryRef.current.getBankInformation().then(({ data }) => {
            setBankInformation(data);
        });

        repostitoryRef.current.getTotalAmount().then(({ data }) => {
            setTotalAmount(data.totalAmount.toFixed(2));
        });
    }, []);

    const getPreviousOrders = useCallback(async () => {
        const response = await repostitoryRef.current.getPreviousOrders({ shopId });

        return response.data;
    }, [shopId]);

    const updateBankInformation = async (newBankInformation) => {
        // const response = await repostitoryRef.current.updateBankInformation(newBankInformation);

        setBankInformation(newBankInformation);
    };

    const withdrawMoney = async (withdrawalAmount) => {
        // const response = await repostitoryRef.current.withdrawMoney(withdrawalAmount);

        setTotalAmount((prev) => (prev - withdrawalAmount).toFixed(2));
    };

    return useMemo(
        () => ({
            bankInformation,
            totalAmount,
            getPreviousOrders,
            updateBankInformation,
            withdrawMoney,
        }),
        [bankInformation, getPreviousOrders, totalAmount],
    );
}
