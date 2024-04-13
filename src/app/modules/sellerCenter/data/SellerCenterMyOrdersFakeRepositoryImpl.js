import RacquetImage from '../../customer/assets/racquet.png';

export default class SellerCenterMyOrdersFakeRepositoryImpl {
    getToShipOrders = async () => ({
        status: 200,
        data: {
            orders: [
                {
                    orderID: 1,
                    buyer: 'Aaron',
                    productDescription: 'Red, 4U/5G',
                    productImage: RacquetImage,
                    productName: 'YONEX ASTROX 99',
                    quantity: 1,
                    shippingOption: 'Standard Delivery',
                },
                {
                    orderID: 2,
                    buyer: 'Aaron',
                    productDescription: 'Red, 4U/5G',
                    productImage: RacquetImage,
                    productName: 'YONEX ASTROX 99',
                    quantity: 1,
                    shippingOption: 'Standard Delivery',
                },
                {
                    orderID: 3,
                    buyer: 'Aaron',
                    productDescription: 'Red, 4U/5G',
                    productImage: RacquetImage,
                    productName: 'YONEX ASTROX 99',
                    quantity: 1,
                    shippingOption: 'Standard Delivery',
                },
                {
                    orderID: 4,
                    buyer: 'Aaron',
                    productDescription: 'Red, 4U/5G',
                    productImage: RacquetImage,
                    productName: 'YONEX ASTROX 99',
                    quantity: 1,
                    shippingOption: 'Standard Delivery',
                },
                {
                    orderID: 5,
                    buyer: 'Aaron',
                    productDescription: 'Red, 4U/5G',
                    productImage: RacquetImage,
                    productName: 'YONEX ASTROX 99',
                    quantity: 1,
                    shippingOption: 'Standard Delivery',
                },
            ],
        },
    });
}
