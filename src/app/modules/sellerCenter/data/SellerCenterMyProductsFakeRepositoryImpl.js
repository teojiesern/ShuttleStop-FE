import { ProductBrands, ProductCategories } from '../../../platform/constants/PlatformConstants';
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
                    category: ProductCategories.RACQUETS,
                    brand: ProductBrands.YONEX,
                    thumbnailImage: RacquetImage,
                    productImages: [RacquetImage, RacquetImage, RacquetImage],
                    description: 'This is a description for the YONEX ASTROX 99 racquet.',
                    variants: [
                        {
                            color: 'Red',
                            totalStock: 200,
                            totalSales: 100,
                            price: 729,
                        },
                        {
                            color: 'Blue',
                            totalStock: 150,
                            totalSales: 80,
                            price: 349,
                        },
                    ],
                },
                {
                    productID: 2,
                    productName: 'YONEX ASTROX 88S',
                    category: ProductCategories.RACQUETS,
                    brand: ProductBrands.YONEX,
                    thumbnailImage: RacquetImage,
                    productImages: [RacquetImage, RacquetImage, RacquetImage],
                    description: 'This is a description for the YONEX ASTROX 88S racquet.',
                    variants: [
                        {
                            color: 'Red',
                            totalStock: 200,
                            totalSales: 100,
                            price: 729,
                        },
                        {
                            color: 'Blue',
                            totalStock: 150,
                            totalSales: 80,
                            price: 349,
                        },
                    ],
                },
                {
                    productID: 3,
                    productName: 'Apachs Footwear 1',
                    category: ProductCategories.FOOTWEARS,
                    brand: ProductBrands.APACS,
                    thumbnailImage: FootwearApacs1,
                    productImages: [FootwearApacs1, FootwearApacs1, FootwearApacs1],
                    description: 'This is a description for Apachs footwear.',
                    variants: [
                        {
                            color: 'Red',
                            totalStock: 200,
                            totalSales: 100,
                            price: 729,
                        },
                        {
                            color: 'Blue',
                            totalStock: 150,
                            totalSales: 80,
                            price: 349,
                        },
                    ],
                },
                {
                    productID: 4,
                    productName: 'YONEX ASTROX 88S',
                    category: ProductCategories.RACQUETS,
                    brand: ProductBrands.YONEX,
                    thumbnailImage: RacquetImage,
                    productImages: [RacquetImage, RacquetImage, RacquetImage],
                    description: 'This is a description for the YONEX ASTROX 88S racquet.',
                    variants: [
                        {
                            color: 'Red',
                            totalStock: 200,
                            totalSales: 100,
                            price: 729,
                        },
                        {
                            color: 'Blue',
                            totalStock: 150,
                            totalSales: 80,
                            price: 349,
                        },
                    ],
                },
                {
                    productID: 5,
                    productName: 'Apachs Footwear 2',
                    category: ProductCategories.FOOTWEARS,
                    brand: ProductBrands.APACS,
                    thumbnailImage: FootwearApacs1,
                    productImages: [FootwearApacs1, FootwearApacs1, FootwearApacs1],
                    description: 'This is a description for Apachs footwear 2.',
                    variants: [
                        {
                            color: 'Red',
                            totalStock: 200,
                            totalSales: 100,
                            price: 729,
                        },
                        {
                            color: 'Blue',
                            totalStock: 150,
                            totalSales: 80,
                            price: 349,
                        },
                    ],
                },
            ],
        },
    });
}
