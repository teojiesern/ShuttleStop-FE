import { isAxiosError } from 'axios';
import { useCallback, useRef } from 'react';
import { SubFolder } from '../../../../platform/constants/PlatformConstants';
import CustomerRepositoryImpl from '../../data/repository/CustomerRepositoryImpl';

export default function useCustomer() {
    const repositoryRef = useRef(new CustomerRepositoryImpl());

    const getCustomer = useCallback(async () => {
        try {
            const { data } = await repositoryRef.current.getCustomer();

            return data;
        } catch (error) {
            if (isAxiosError(error)) {
                console.log('this is the errors', error.response.data);
            }
        }
    }, []);

    const updateCustomer = useCallback(
        async (updatedInfo, profileImgPath) => {
            try {
                const currentCustomer = await getCustomer();
                if (!currentCustomer) {
                    throw new Error('No customer is currently logged in');
                }

                const formData = new FormData();
                formData.append('subfolder', SubFolder.CUSTOMER);

                Object.keys(updatedInfo).forEach((key) => {
                    if (typeof updatedInfo[key] === 'object' && updatedInfo[key] !== null) {
                        formData.append(key, JSON.stringify(updatedInfo[key]));
                    } else {
                        formData.append(key, updatedInfo[key]);
                    }
                });

                if (profileImgPath) {
                    formData.append('file', profileImgPath);
                }

                const { status, data } = await repositoryRef.current.updateCustomer(formData);
                return { status, data };
            } catch (error) {
                if (isAxiosError(error)) {
                    console.log('this is the errors', error.response.data);
                }
            }
        },
        [getCustomer],
    );

    const getAllProducts = useCallback(async () => {
        try {
            const { data } = await repositoryRef.current.getAllProducts();
            return data;
        } catch (error) {
            if (isAxiosError(error)) {
                console.log('this is the errors', error.response.data);
            }
        }
    }, []);

    const getProductById = useCallback(async (productId) => {
        try {
            const { data } = await repositoryRef.current.getProductById(productId);

            return data;
        } catch (error) {
            if (isAxiosError(error)) {
                console.log('this is the errors', error.response.data);
            }
        }
    }, []);

    const getToShipPurchases = useCallback(async () => {
        try {
            const { data } = await repositoryRef.current.getToShipPurchases();
            return data;
        } catch (error) {
            if (isAxiosError(error)) {
                console.log('this is the errors', error.response.data);
            }
        }
    }, []);

    const getShippingPurchases = useCallback(async () => {
        try {
            const { data } = await repositoryRef.current.getShippingPurchases();
            return data;
        } catch (error) {
            if (isAxiosError(error)) {
                console.log('this is the errors', error.response.data);
            }
        }
    }, []);

    const getCompletedPurchases = useCallback(async () => {
        try {
            const { data } = await repositoryRef.current.getCompletedPurchases();
            return data;
        } catch (error) {
            if (isAxiosError(error)) {
                console.log('this is the errors', error.response.data);
            }
        }
    }, []);

    const updateOrderStatus = useCallback(async (trackingNumbers, newStatus) => {
        try {
            const { data } = await repositoryRef.current.updateOrderStatus(trackingNumbers, newStatus);
            return data;
        } catch (error) {
            if (isAxiosError(error)) {
                console.log('this is the errors', error.response.data);
            }
        }
    }, []);

    const updateProductRating = useCallback(async (orderId, productIds, ratings) => {
        try {
            const { data } = await repositoryRef.current.updateProductRating(orderId, productIds, ratings);
            return data;
        } catch (error) {
            if (isAxiosError(error)) {
                console.log('this is the errors', error.response.data);
            }
        }
    }, []);

    return {
        getCustomer,
        updateCustomer,
        getAllProducts,
        getProductById,
        getToShipPurchases,
        getShippingPurchases,
        getCompletedPurchases,
        updateOrderStatus,
        updateProductRating,
    };
}
