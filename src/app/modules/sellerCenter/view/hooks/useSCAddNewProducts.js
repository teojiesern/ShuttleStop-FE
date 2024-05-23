import { useCallback, useContext, useRef } from 'react';
import SellerInfoContext from '../../../../platform/app/data/SellerInfoContext';
import { SubFolder } from '../../../../platform/constants/PlatformConstants';
import SCAddNewProductsRepositoryImpl from '../../data/SCAddNewProductsRepositoryImpl';

export default function useSCAddNewProducts() {
    const repositoryRef = useRef(new SCAddNewProductsRepositoryImpl());
    const { sellerId } = useContext(SellerInfoContext);

    const addNewProducts = useCallback(
        async ({
            productName,
            productCategory,
            productBrand,
            thumbnailFile,
            productImage1,
            productImage2,
            productImage3,
            productImage4,
            productDescription,
            variants,
        }) => {
            // eslint-disable-next-line no-useless-catch
            try {
                const formData = new FormData();

                formData.append('subfolder', SubFolder.PRODUCT);
                formData.append('sellerId', sellerId);
                formData.append('name', productName);
                formData.append('category', productCategory);
                formData.append('brands', productBrand);
                formData.append('thumbnailImage', thumbnailFile[0]);
                formData.append('productImage1', productImage1[0]);
                formData.append('productImage2', productImage2[0]);
                formData.append('productImage3', productImage3[0]);
                formData.append('productImage4', productImage4[0]);
                formData.append('productDescription', productDescription);
                formData.append('variants', JSON.stringify(variants));

                const { data } = await repositoryRef.current.addNewProducts(formData);
                return data;
            } catch (error) {
                throw error;
            }
        },
        [sellerId],
    );

    return {
        addNewProducts,
    };
}
