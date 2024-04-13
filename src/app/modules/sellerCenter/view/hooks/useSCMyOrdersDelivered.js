import { useMemo, useRef } from 'react';
import SellerCenterMyOrdersFakeRepositoryImpl from '../../data/SellerCenterMyOrdersFakeRepositoryImpl';

export default function useSCMyOrdersDelivered() {
    const repostitoryRef = useRef(new SellerCenterMyOrdersFakeRepositoryImpl());

    const getDeliveredOrders = async () => {
        const response = await repostitoryRef.current.getDeliveredOrders();

        return response.data;
    };

    return useMemo(
        () => ({
            getDeliveredOrders,
        }),
        [],
    );
}
