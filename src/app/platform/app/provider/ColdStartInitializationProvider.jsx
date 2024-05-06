import { useEffect, useState } from 'react';
import useCustomer from '../../../modules/customer/view/hooks/useCustomer';
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
    const { getCustomer } = useCustomer();

    useEffect(() => {
        async function fetchData() {
            try {
                const customer = await getCustomer();
                console.log(customer);

                const newCustomerStatus = await getCustomerStatus();
                setCustomerStatus({ ...newCustomerStatus, setCustomerStatus });

                const newShopSettings = await getShopSettings();
                setShopSettings({ ...newShopSettings, setShopSettings });

                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [getCustomer, getCustomerStatus, getShopSettings]);

    if (loading) {
        return <ColdStartPendingScreen />;
    }

    return (
        <CustomerStatusContext.Provider value={customerStatus}>
            <ShopSettingsContext.Provider value={shopSettings}>{children}</ShopSettingsContext.Provider>
        </CustomerStatusContext.Provider>
    );
}
