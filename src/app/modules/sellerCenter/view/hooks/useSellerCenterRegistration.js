import { useContext } from 'react';
import CustomerStatusContext from '../../../../platform/app/data/CustomerStatusContext';

// eslint-disable-next-line no-unused-vars
export default function useSellerCenterRegistration(_registrationData) {
    const { setCustomerStatus } = useContext(CustomerStatusContext);

    const registerSeller = () => {
        // TODO: Call BE for registration
        setCustomerStatus((prev) => ({
            ...prev,
            registeredSeller: true,
        }));
    };

    return {
        registerSeller,
    };
}
