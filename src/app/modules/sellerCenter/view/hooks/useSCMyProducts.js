import { useMemo, useRef } from 'react';
import SellerCenterMyProductsFakeRepositoryImpl from '../../data/SellerCenterMyProductsFakeRepositoryImpl';

export default function useSCMyProducts() {
    const repostitoryRef = useRef(new SellerCenterMyProductsFakeRepositoryImpl());

    // This should not include things like ratings, reviews, etc.
    const getMyProductsEditableInformation = async () => {
        const response = await repostitoryRef.current.getMyProductsEditableInformation();

        return response.data;
    };

    return useMemo(
        () => ({
            getMyProducts: getMyProductsEditableInformation,
        }),
        [],
    );
}
