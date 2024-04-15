import { ProductCategories } from '../../../platform/constants/PlatformConstants';
import FootwearApacs1 from '../../customer/assets/footwearApacs1.webp';
import RacquetImage from '../../customer/assets/racquet.png';

export default class SellerCenterMyProductsFakeRepositoryImpl {
    getMyProductsEditableInformation = async () => ({
        status: 200,
        data: {
            products: [
                {
                    productID: 1,
                    productName: 'YONEX ASTROX 99',
                    stock: 200,
                    sales: 100,
                    price: 729,
                    category: ProductCategories.RACQUETS,
                    thumbnailImage: RacquetImage,
                    productImages: [RacquetImage, RacquetImage, RacquetImage],
                    description: 'This is a description for the YONEX ASTROX 99 racquet.',
                    color: 'Red',
                },
                {
                    productID: 2,
                    productName: 'YONEX ASTROX 88S',
                    stock: 100,
                    sales: 50,
                    price: 729,
                    category: ProductCategories.RACQUETS,
                    thumbnailImage: RacquetImage,
                    productImages: [RacquetImage, RacquetImage, RacquetImage],
                    description: 'This is a description for the YONEX ASTROX 88S racquet.',
                    color: 'Blue',
                },
                {
                    productID: 3,
                    productName: 'Apachs Footwear 1',
                    stock: 100,
                    sales: 50,
                    price: 729,
                    category: ProductCategories.FOOTWEARS,
                    thumbnailImage: FootwearApacs1,
                    productImages: [FootwearApacs1, FootwearApacs1, FootwearApacs1],
                    description: 'This is a description for Apachs footwear.',
                    color: 'Blue',
                },
                {
                    productID: 4,
                    productName: 'YONEX ASTROX 88S',
                    stock: 100,
                    sales: 50,
                    price: 729,
                    category: ProductCategories.RACQUETS,
                    thumbnailImage: RacquetImage,
                    productImages: [RacquetImage, RacquetImage, RacquetImage],
                    description: 'This is a description for the YONEX ASTROX 88S racquet.',
                    color: 'Blue',
                },
                {
                    productID: 5,
                    productName: 'Apachs Footwear 2',
                    stock: 100,
                    sales: 50,
                    price: 729,
                    category: ProductCategories.FOOTWEARS,
                    thumbnailImage: FootwearApacs1,
                    productImages: [FootwearApacs1, FootwearApacs1, FootwearApacs1],
                    description: 'This is a description for Apachs footwear 2.',
                    color: 'Green',
                },
            ],
        },
    });
}
