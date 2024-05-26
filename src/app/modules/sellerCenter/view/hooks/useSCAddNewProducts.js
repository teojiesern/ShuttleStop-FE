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
                formData.append('brand', productBrand);
                formData.append('thumbnailImage', thumbnailFile[0]);
                formData.append('productImage1', productImage1[0]);
                formData.append('productImage2', productImage2[0]);
                formData.append('productImage3', productImage3[0]);
                formData.append('productImage4', productImage4[0]);
                formData.append('productDescription', productDescription);
                formData.append('variants', JSON.stringify(variants));

                const { productId } = await repositoryRef.current.addNewProducts(formData);
                return productId;
            } catch (error) {
                throw error;
            }
        },
        [sellerId],
    );

    const updateProduct = useCallback(
        async ({
            productId,
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
            newProductImages,
        }) => {
            // eslint-disable-next-line no-useless-catch
            try {
                const formData = new FormData();

                formData.append('productId', productId);
                formData.append('subfolder', SubFolder.PRODUCT);
                formData.append('name', productName);
                formData.append('category', productCategory);
                formData.append('brand', productBrand);
                if (thumbnailFile[0] && thumbnailFile[0].path) {
                    formData.append('thumbnailImage', thumbnailFile[0]);
                }
                if (productImage1[0] && productImage1[0].path) {
                    formData.append('productImage1', productImage1[0]);
                }
                if (productImage2[0] && productImage2[0].path) {
                    formData.append('productImage2', productImage2[0]);
                }
                if (productImage3[0] && productImage3[0].path) {
                    formData.append('productImage3', productImage3[0]);
                }
                if (productImage4[0] && productImage4[0].path) {
                    formData.append('productImage4', productImage4[0]);
                }
                formData.append('productDescription', productDescription);
                formData.append('variants', JSON.stringify(variants));
                formData.append('productImages', JSON.stringify(newProductImages));

                const { updatedProduct } = await repositoryRef.current.updateProduct(formData);
                return updatedProduct;
            } catch (error) {
                throw error;
            }
        },
        [],
    );

    return {
        addNewProducts,
        updateProduct,
    };
}
