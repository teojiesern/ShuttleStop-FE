import { useEffect, useState } from 'react';
import CustomerStatusContext from '../data/CustomerStatusContext';
import ShopSettingsContext from '../data/ShopSettingsContext';
import useCustomerStatus from '../domain/useCase/useCustomerStatus';
import useShopSettings from '../domain/useCase/useShopSettings';
import ColdStartPendingScreen from '../screen/ColdStartPendingScreen';

export default function ColdStartInitializationProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [customerStatus, setCustomerStatus] = useState(null);
    const [shopSettings, setShopSettings] = useState(null);
    const { getCustomerStatus } = useCustomerStatus();
    const { getShopSettings } = useShopSettings();

    useEffect(() => {
        async function fakeEndpointCallDelay() {
            return new Promise((resolve) => {
                setTimeout(resolve, 3000);
            });
        }

        async function fetchData() {
            await fakeEndpointCallDelay();
            // Pass in customerId to fetch all these things
            const newCustomerStatus = await getCustomerStatus();
            setCustomerStatus({ ...newCustomerStatus, setCustomerStatus });

            const newShopSettings = await getShopSettings();
            setShopSettings({ ...newShopSettings, setShopSettings });

            setLoading(false);
        }

        fetchData();
    }, [getCustomerStatus, getShopSettings]);

    if (loading) {
        return <ColdStartPendingScreen />;
    }

    return (
        <CustomerStatusContext.Provider value={customerStatus}>
            <ShopSettingsContext.Provider value={shopSettings}>{children}</ShopSettingsContext.Provider>
        </CustomerStatusContext.Provider>
    );
}
