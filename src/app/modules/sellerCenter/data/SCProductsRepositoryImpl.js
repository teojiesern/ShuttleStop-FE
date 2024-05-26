import { ImageURL } from '../../../platform/constants/PlatformConstants';
import Network from '../../../platform/network/Network';

export default class SCProductsRepositoryImpl {
    #BASE_URL = '/seller-service';

    #ROUTES = {
        PRODUCTS: `${this.#BASE_URL}/products`,
    };

    getShopInformation = async (productIds) => {
        const { data } = await Network.getInstance().post(this.#ROUTES.PRODUCTS, { productIds });

        const products = data.map((product) => ({
            productID: product.productId,
            productName: product.name,
            category: product.category,
            brand: product.brand,
            thumbnailFile: `${ImageURL}${product.thumbnailImage}`,
            productImage1:
                product.productImages && product.productImages[0]
                    ? `${ImageURL}${product.productImages[0]}`
                    : undefined,
            productImage2:
                product.productImages && product.productImages[1]
                    ? `${ImageURL}${product.productImages[1]}`
                    : undefined,
            productImage3:
                product.productImages && product.productImages[2]
                    ? `${ImageURL}${product.productImages[2]}`
                    : undefined,
            productImage4:
                product.productImages && product.productImages[3]
                    ? `${ImageURL}${product.productImages[3]}`
                    : undefined,
            description: product.productDescription,
            variants: product.variants.map((variant) => ({
                color: variant.color,
                totalStock: variant.totalStock,
                totalSales: variant.totalSales,
                price: variant.price,
            })),
        }));

        return { products };
    };
}
