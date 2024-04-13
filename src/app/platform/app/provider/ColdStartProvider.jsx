import { useMemo } from 'react';
import AppColdStartContext from '../data/AppColdStartContext';
import useCustomerData from '../domain/useCase/useCustomerData';
import ColdStartPendingScreen from '../screen/ColdStartPendingScreen';

function ColdStartProvider({ children }) {
    const { loading, isLogin, registeredSeller, setIsLogin, setRegisteredSeller } = useCustomerData();

    const value = useMemo(
        () => ({
            isLogin,
            registeredSeller,
            setIsLogin,
            setRegisteredSeller,
        }),
        [isLogin, registeredSeller, setIsLogin, setRegisteredSeller],
    );

    if (loading) {
        return <ColdStartPendingScreen />;
    }

    return <AppColdStartContext.Provider value={value}>{children}</AppColdStartContext.Provider>;
}

export default ColdStartProvider;
