import { useCallback, useContext, useMemo, useRef } from 'react';
import ShopInfoContext from '../../../../platform/app/data/ShopInfoContext';
import SellerCenterMyOrdersRepositoryImpl from '../../data/SellerCenterMyOrdersRepositoryImpl';

export default function useSCMyOrdersDelivered() {
    const repostitoryRef = useRef(new SellerCenterMyOrdersRepositoryImpl());
    const { shopId } = useContext(ShopInfoContext);

    const getDeliveredOrders = useCallback(async () => {
        const response = await repostitoryRef.current.getDeliveredOrders({ shopId });

        return response.data;
    }, [shopId]);

    return useMemo(
        () => ({
            getDeliveredOrders,
        }),
        [getDeliveredOrders],
    );
}
