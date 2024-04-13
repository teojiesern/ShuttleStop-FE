import { useMemo, useRef } from 'react';
import SellerCenterMyOrdersFakeRepositoryImpl from '../../data/SellerCenterMyOrdersFakeRepositoryImpl';

export default function useSCMyOrdersToShip() {
    const repostitoryRef = useRef(new SellerCenterMyOrdersFakeRepositoryImpl());

    const getToShipOrders = async () => {
        const a = await repostitoryRef.current.getToShipOrders();
        return a.data;
    };

    const shipOrders = () => {};

    return useMemo(
        () => ({
            getToShipOrders,
            shipOrders,
        }),
        [],
    );
}
