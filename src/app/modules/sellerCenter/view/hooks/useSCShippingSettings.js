import { useCallback, useContext, useMemo } from 'react';
import ShopInfoContext from '../../../../platform/app/data/ShopInfoContext';

export default function useSCShippingSettings({ courierOptions, paymentOptions, shippingOptions }) {
    const { setShopInfo } = useContext(ShopInfoContext);

    const updateShippingSettings = useCallback(() => {
        // TODO: Call BE for registration
        setShopInfo((prev) => ({
            ...prev,
            shopSupportedCourierOption: courierOptions,
            shopSupportedShippingOption: shippingOptions,
            shopSupportedPaymentOption: paymentOptions,
        }));
    }, [courierOptions, paymentOptions, setShopInfo, shippingOptions]);

    return useMemo(
        () => ({
            updateShippingSettings,
        }),
        [updateShippingSettings],
    );
}
