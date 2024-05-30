import { useCallback, useContext, useMemo, useRef } from 'react';
import ShopInfoContext from '../../../../platform/app/data/ShopInfoContext';
import SellerCenterMyOrdersRepositoryImpl from '../../data/SellerCenterMyOrdersRepositoryImpl';

export default function useSCMyOrdersToShip() {
    const repostitoryRef = useRef(new SellerCenterMyOrdersRepositoryImpl());
    const { shopId } = useContext(ShopInfoContext);

    const getToShipOrders = useCallback(async () => {
        const response = await repostitoryRef.current.getToShipOrders({ shopId });

        return response.data;
    }, [shopId]);

    const shipOrders = useCallback(async (trackingNumbers) => {
        await repostitoryRef.current.shipOrders(trackingNumbers);
    }, []);

    return useMemo(
        () => ({
            getToShipOrders,
            shipOrders,
        }),
        [getToShipOrders, shipOrders],
    );
}
