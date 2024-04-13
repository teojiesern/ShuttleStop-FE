import { useCallback, useContext, useMemo } from 'react';
import ShopSettingsContext from '../../../../platform/app/data/ShopSettingsContext';

// eslint-disable-next-line no-unused-vars
export default function useSCShippingSettings({ courierOptions, paymentOptions, shippingOptions }) {
    const { setShippingSettings } = useContext(ShopSettingsContext);

    const updateShippingSettings = useCallback(() => {
        // TODO: Call BE for registration
        setShippingSettings({
            activeCourierOptions: courierOptions,
            activeShippingOptions: shippingOptions,
            activePaymentOptions: paymentOptions,
        });
    }, [courierOptions, paymentOptions, setShippingSettings, shippingOptions]);

    return useMemo(
        () => ({
            updateShippingSettings,
        }),
        [updateShippingSettings],
    );
}
