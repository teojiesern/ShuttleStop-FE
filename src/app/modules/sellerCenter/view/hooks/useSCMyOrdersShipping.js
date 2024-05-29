import { useCallback, useContext, useMemo, useRef } from 'react';
import ShopInfoContext from '../../../../platform/app/data/ShopInfoContext';
import SellerCenterMyOrdersRepositoryImpl from '../../data/SellerCenterMyOrdersRepositoryImpl';

export default function useSCMyOrdersShipping() {
    const repostitoryRef = useRef(new SellerCenterMyOrdersRepositoryImpl());
    const { shopId } = useContext(ShopInfoContext);

    const getShippingOrders = useCallback(async () => {
        const response = await repostitoryRef.current.getShippingOrders({ shopId });

        return response.data;
    }, [shopId]);

    return useMemo(
        () => ({
            getShippingOrders,
        }),
        [getShippingOrders],
    );
}
