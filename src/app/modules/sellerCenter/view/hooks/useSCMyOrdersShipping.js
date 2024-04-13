import { useMemo, useRef } from 'react';
import SellerCenterMyOrdersFakeRepositoryImpl from '../../data/SellerCenterMyOrdersFakeRepositoryImpl';

export default function useSCMyOrdersShipping() {
    const repostitoryRef = useRef(new SellerCenterMyOrdersFakeRepositoryImpl());

    const getShippingOrders = async () => {
        const response = await repostitoryRef.current.getShippingOrders();

        return response.data;
    };

    return useMemo(
        () => ({
            getShippingOrders,
        }),
        [],
    );
}
