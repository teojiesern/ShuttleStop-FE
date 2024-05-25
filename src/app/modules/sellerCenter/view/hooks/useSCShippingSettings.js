import { useCallback, useContext, useMemo, useRef } from 'react';
import SellerInfoContext from '../../../../platform/app/data/SellerInfoContext';
import ShopInfoContext from '../../../../platform/app/data/ShopInfoContext';
import SellerRepositoryImpl from '../../data/SellerRepositoryImpl';

export default function useSCShippingSettings() {
    const { sellerId } = useContext(SellerInfoContext);
    const { setShopInfo } = useContext(ShopInfoContext);
    const repositoryRef = useRef(new SellerRepositoryImpl());

    const updateShippingSettings = useCallback(
        async ({ courierOptions, paymentOptions, shippingOptions }) => {
            const { data } = await repositoryRef.current.updateShopInformation({
                sellerId,
                shopSupportedCourierOption: courierOptions,
                shopSupportedShippingOption: shippingOptions,
                shopSupportedPaymentOption: paymentOptions,
            });

            setShopInfo((prev) => ({
                ...prev,
                shopSupportedCourierOption: data.shopSupportedCourierOption,
                shopSupportedShippingOption: data.shopSupportedShippingOption,
                shopSupportedPaymentOption: data.shopSupportedPaymentOption,
            }));
        },
        [sellerId, setShopInfo],
    );

    return useMemo(
        () => ({
            updateShippingSettings,
        }),
        [updateShippingSettings],
    );
}
