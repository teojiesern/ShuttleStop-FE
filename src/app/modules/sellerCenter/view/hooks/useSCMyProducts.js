import { useMemo, useRef } from 'react';
import SCProductsRepositoryImpl from '../../data/SCProductsRepositoryImpl';

export default function useSCMyProducts() {
    const repostitoryRef = useRef(new SCProductsRepositoryImpl());

    // This should not include things like ratings, reviews, etc.
    const getMyProductsEditableInformation = async (productIds) => {
        const { products } = await repostitoryRef.current.getShopInformation(productIds);

        return products;
    };

    return useMemo(
        () => ({
            getMyProducts: getMyProductsEditableInformation,
        }),
        [],
    );
}
