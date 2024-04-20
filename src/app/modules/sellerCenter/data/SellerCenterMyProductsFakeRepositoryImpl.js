import { ProductBrands, ProductCategories } from '../../../platform/constants/PlatformConstants';
import FootwearApacs1 from '../../customer/assets/footwearApacs1.webp';
import RacquetImage from '../../customer/assets/racquet.png';

const RacquetImageObject = {
    path: 'RacquetYonex.png',
    preview: RacquetImage,
    lastModified: 1709650939314,
    lastModifiedDate: new Date(1709650939314),
    name: 'RacquetYonex.png',
    size: 2339497,
    type: 'image/png',
    webkitRelativePath: '',
};

const FootwearImageObject = {
    path: 'FootwearApacs.png',
    preview: FootwearApacs1,
    lastModified: 1709650939314,
    lastModifiedDate: new Date(1709650939314),
    name: 'FootwearApacs.png',
    size: 2339497,
    type: 'image/png',
    webkitRelativePath: '',
};
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
                    thumbnailFile: [RacquetImageObject],
                    productImage1: [RacquetImageObject],
                    productImage2: [RacquetImageObject],
                    productImage3: [RacquetImageObject],
                    productImage4: [RacquetImageObject],
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
                    thumbnailFile: [RacquetImageObject],
                    productImage1: [RacquetImageObject],
                    productImage2: [RacquetImageObject],
                    productImage3: [RacquetImageObject],
                    productImage4: [RacquetImageObject],
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
                    thumbnailFile: [FootwearImageObject],
                    productImage1: [FootwearImageObject],
                    productImage2: [FootwearImageObject],
                    productImage3: [FootwearImageObject],
                    productImage4: [FootwearImageObject],
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
                    thumbnailFile: [RacquetImageObject],
                    productImage1: [RacquetImageObject],
                    productImage2: [RacquetImageObject],
                    productImage3: [RacquetImageObject],
                    productImage4: [RacquetImageObject],
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
                    thumbnailFile: [FootwearImageObject],
                    productImage1: [FootwearImageObject],
                    productImage2: [FootwearImageObject],
                    productImage3: [FootwearImageObject],
                    productImage4: [FootwearImageObject],
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
