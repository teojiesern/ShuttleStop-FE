import { useCallback, useContext, useMemo } from 'react';
import ShopSettingsContext from '../../../../platform/app/data/ShopSettingsContext';

export default function useSCShippingSettings({ courierOptions, paymentOptions, shippingOptions }) {
    const { setShopSettings } = useContext(ShopSettingsContext);

    const updateShippingSettings = useCallback(() => {
        // TODO: Call BE for registration
        setShopSettings((prev) => ({
            ...prev,
            activeCourierOptions: courierOptions,
            activeShippingOptions: shippingOptions,
            activePaymentOptions: paymentOptions,
        }));
    }, [courierOptions, paymentOptions, setShopSettings, shippingOptions]);

    return useMemo(
        () => ({
            updateShippingSettings,
        }),
        [updateShippingSettings],
    );
}
