import { useContext } from 'react';
import AppColdStartContext from '../../../../platform/app/data/AppColdStartContext';

// eslint-disable-next-line no-unused-vars
export default function useSellerCenterRegistration(_registrationData) {
    const { setRegisteredSeller } = useContext(AppColdStartContext);

    const registerSeller = () => {
        // TODO: Call BE for registration
        setRegisteredSeller(true);
    };

    return {
        registerSeller,
    };
}
