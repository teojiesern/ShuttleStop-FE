import { useEffect, useState } from 'react';

export default function useCustomerData() {
    // TODO: set initial loading to true
    const [loading, setLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [registeredSeller, setRegisteredSeller] = useState(false);

    useEffect(() => {
        // TODO: Implement cold start fetch data, and set customer data through CustomerManager
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return {
        loading,
        isLogin,
        setIsLogin,
        registeredSeller,
        setRegisteredSeller,
    };
}
