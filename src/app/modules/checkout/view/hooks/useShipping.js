import { useCallback, useEffect, useState } from 'react';

export default function useShipping() {
    const [shippingOption, setShippingOption] = useState('standardDelivery');

    const updateShippingOption = useCallback((option) => {
        setShippingOption(option);
    }, []);

    useEffect(() => {
        console.log(shippingOption);
    }, [shippingOption]);

    return { shippingOption, updateShippingOption };
}
