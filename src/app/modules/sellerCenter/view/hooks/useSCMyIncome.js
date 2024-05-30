import { useCallback, useContext, useMemo, useRef } from 'react';
import ShopInfoContext from '../../../../platform/app/data/ShopInfoContext';
import SCMyIncomeRepositoryImpl from '../../data/SCMyIncomeRepositoryImpl';

export default function useSCMyIncome() {
    const repostitoryRef = useRef(new SCMyIncomeRepositoryImpl());
    const { shopId } = useContext(ShopInfoContext);

    const getPreviousOrders = useCallback(async () => {
        const response = await repostitoryRef.current.getPreviousOrders({ shopId });

        return response.data;
    }, [shopId]);

    const updateSellerBankInformation = useCallback(async (payload) => {
        const response = await repostitoryRef.current.updateSellerBankInformation(payload);

        return response.data;
    }, []);

    return useMemo(
        () => ({
            getPreviousOrders,
            updateSellerBankInformation,
        }),
        [getPreviousOrders, updateSellerBankInformation],
    );
}
