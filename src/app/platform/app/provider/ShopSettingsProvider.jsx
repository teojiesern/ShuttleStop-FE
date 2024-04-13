import { useEffect, useMemo, useState } from 'react';
import ShopSettingsContext from '../data/ShopSettingsContext';
import useShopSettings from '../domain/useCase/useShopSettings';

function ShopSettingsProvider({ children }) {
    // TODO: Change default loading to true
    // const [loading, setIsLoading] = useState(false);
    const [shippingSettings, setShippingSettings] = useState({
        activeCourierOptions: [],
        activeShippingOptions: [],
        activePaymentOptions: [],
    });

    const [shopProfile, setShopProfile] = useState({
        shopName: '',
        shopDescription: '',
        shopLogo: '',
    });
    const { getShopSettings } = useShopSettings();

    useEffect(() => {
        getShopSettings().then(
            ({
                activeCourierOptions,
                activePaymentOptions,
                activeShippingOptions,
                shopName,
                shopDescription,
                shopLogo,
            }) => {
                setShippingSettings({
                    activeCourierOptions,
                    activePaymentOptions,
                    activeShippingOptions,
                });
                setShopProfile({
                    shopName,
                    shopDescription,
                    shopLogo,
                });
                // setIsLoading(false);
            },
        );
    }, [getShopSettings]);

    const value = useMemo(
        () => ({
            shippingSettings,
            shopProfile,
            setShippingSettings,
            setShopProfile,
        }),
        [shippingSettings, shopProfile],
    );

    return <ShopSettingsContext.Provider value={value}>{children}</ShopSettingsContext.Provider>;
}

export default ShopSettingsProvider;
