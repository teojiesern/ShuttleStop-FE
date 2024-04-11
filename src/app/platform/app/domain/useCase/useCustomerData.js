import { useEffect, useRef, useState } from 'react';

export default function useCustomerData() {
    // TODO: set initial to true
    const [loading, setLoading] = useState(false);
    const isLogin = useRef(false);
    const registeredSeller = useRef(false);

    useEffect(() => {
        // TODO: Implement cold start fetch data, and set customer data through CustomerManager
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return {
        loading,
        isLogin: isLogin.current,
        registeredSeller: registeredSeller.current,
    };
}
