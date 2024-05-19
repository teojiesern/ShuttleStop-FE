import { createContext, useMemo, useState } from 'react';

export const CustomerInfoContext = createContext();

export function CustomerInfoProvider({ children }) {
    const [customerInfo, setCustomerInfo] = useState();

    const value = useMemo(() => ({ customerInfo, setCustomerInfo }), [customerInfo, setCustomerInfo]);

    return <CustomerInfoContext.Provider value={value}>{children}</CustomerInfoContext.Provider>;
}
