import { useEffect, useState } from 'react';
import useCustomer from '../../../modules/customer/view/hooks/useCustomer';
import CustomerStatusContext from '../data/CustomerStatusContext';
import ShopSettingsContext from '../data/ShopSettingsContext';
import useShopSettings from '../domain/useCase/useShopSettings';
import ColdStartPendingScreen from '../screen/ColdStartPendingScreen';

export default function ColdStartInitializationProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [customerStatus, setCustomerStatus] = useState(null);
    const [shopSettings, setShopSettings] = useState(null);
    const { getShopSettings } = useShopSettings();
    const { getCustomer } = useCustomer();

    useEffect(() => {
        async function fetchData() {
            try {
                const customer = await getCustomer();

                setCustomerStatus({ isLogin: true, registeredSeller: customer.seller, setCustomerStatus });

                const newShopSettings = await getShopSettings();
                setShopSettings({ ...newShopSettings, setShopSettings });

                setLoading(false);
            } catch (error) {
                setCustomerStatus({ isLogin: false, registeredSeller: false, setCustomerStatus });

                // TODO: remove all this when the real API is ready
                const newShopSettings = await getShopSettings();
                setShopSettings({ ...newShopSettings, setShopSettings });

                setLoading(false);
            }
        }

        fetchData();
    }, [getCustomer, getShopSettings]);

    if (loading) {
        return <ColdStartPendingScreen />;
    }

    return (
        <CustomerStatusContext.Provider value={customerStatus}>
            <ShopSettingsContext.Provider value={shopSettings}>{children}</ShopSettingsContext.Provider>
        </CustomerStatusContext.Provider>
    );
}
