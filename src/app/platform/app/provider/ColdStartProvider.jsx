import { useMemo } from 'react';
import AppColdStartContext from '../data/AppColdStartContext';
import useCustomerData from '../domain/useCase/useCustomerData';
import ColdStartPendingScreen from './ColdStartPendingScreen';

function ColdStartProvider({ children }) {
    const { loading, isLogin, registeredSeller } = useCustomerData();

    const value = useMemo(
        () => ({
            isLogin,
            registeredSeller,
        }),
        [isLogin, registeredSeller],
    );

    if (loading) {
        return <ColdStartPendingScreen />;
    }

    return <AppColdStartContext.Provider value={value}>{children}</AppColdStartContext.Provider>;
}

export default ColdStartProvider;
