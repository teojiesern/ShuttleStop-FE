import { useCallback } from 'react';

export default function useSCFormValidation() {
    const validateSellerInfo = useCallback((sellerName, sellerIC) => {
        const errors = {};

        if (!sellerName) {
            errors.sellerName = 'Seller name is required';
        }

        if (!sellerIC) {
            errors.sellerIC = 'Seller IC/Passport number is required';
        } else if (sellerIC.length < 12) {
            errors.sellerIC = 'Seller IC/Passport number is invalid';
        }

        return errors;
    }, []);

    const validateShopInfo = useCallback((shopName, pickupAddress, email, phoneNumber, files) => {
        const errors = {};

        if (!shopName) {
            errors.shopName = 'Shop name is required';
        }

        if (!pickupAddress) {
            errors.pickupAddress = 'Pickup address is required';
        }

        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email address is invalid';
        }

        if (!phoneNumber) {
            errors.phoneNumber = 'Phone number is required';
        } else if (phoneNumber.length < 10) {
            errors.phoneNumber = 'Phone number is invalid';
        }

        if (files.length === 0 || !files[0]) {
            errors.files = 'Please upload at least one file';
        }

        return errors;
    }, []);

    return { validateSellerInfo, validateShopInfo };
}
