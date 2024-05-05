import RacquetImage from '../../customer/view/assets/racquet.png';
import { ShippingStatus } from '../constants/SellerCenterConstants';

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

    getShippingOrders = async () => ({
        status: 200,
        data: {
            orders: [
                {
                    orderID: 1,
                    buyer: 'Aaron',
                    courier: 'J&T Express',
                    productDescription: 'Red, 4U/5G',
                    productImage: RacquetImage,
                    productName: 'YONEX ASTROX 99',
                    quantity: 1,
                    shippingOption: 'Standard Delivery',
                    shippingStatus: ShippingStatus.WAITING_FOR_COURIER_COLLECTION,
                    trackingNumber: '1234567890',
                },
                {
                    orderID: 2,
                    buyer: 'Aaron',
                    courier: 'J&T Express',
                    productDescription: 'Red, 4U/5G',
                    productImage: RacquetImage,
                    productName: 'YONEX ASTROX 99',
                    quantity: 1,
                    shippingOption: 'Standard Delivery',
                    shippingStatus: ShippingStatus.WAITING_FOR_COURIER_COLLECTION,
                    trackingNumber: '1234567890',
                },
                {
                    orderID: 3,
                    buyer: 'Aaron',
                    courier: 'J&T Express',
                    productDescription: 'Red, 4U/5G',
                    productImage: RacquetImage,
                    productName: 'YONEX ASTROX 99',
                    quantity: 1,
                    shippingOption: 'Standard Delivery',
                    shippingStatus: ShippingStatus.ON_THE_WAY,
                    trackingNumber: '1234567890',
                },
                {
                    orderID: 4,
                    buyer: 'Aaron',
                    courier: 'J&T Express',
                    productDescription: 'Red, 4U/5G',
                    productImage: RacquetImage,
                    productName: 'YONEX ASTROX 99',
                    quantity: 1,
                    shippingOption: 'Standard Delivery',
                    shippingStatus: ShippingStatus.WAITING_FOR_COURIER_COLLECTION,
                    trackingNumber: '1234567890',
                },
                {
                    orderID: 5,
                    buyer: 'Aaron',
                    courier: 'J&T Express',
                    productDescription: 'Red, 4U/5G',
                    productImage: RacquetImage,
                    productName: 'YONEX ASTROX 99',
                    quantity: 1,
                    shippingOption: 'Standard Delivery',
                    shippingStatus: ShippingStatus.ON_THE_WAY,
                    trackingNumber: '1234567890',
                },
            ],
        },
    });

    getDeliveredOrders = async () => ({
        status: 200,
        data: {
            orders: [
                {
                    orderID: 1,
                    buyer: 'Aaron',
                    courier: 'J&T Express',
                    productDescription: 'Red, 4U/5G',
                    productImage: RacquetImage,
                    productName: 'YONEX ASTROX 99',
                    quantity: 1,
                    shippingOption: 'Standard Delivery',
                    shippingStatus: ShippingStatus.DELIVERED,
                    trackingNumber: '1234567890',
                },
                {
                    orderID: 2,
                    buyer: 'Aaron',
                    courier: 'J&T Express',
                    productDescription: 'Red, 4U/5G',
                    productImage: RacquetImage,
                    productName: 'YONEX ASTROX 99',
                    quantity: 1,
                    shippingOption: 'Standard Delivery',
                    shippingStatus: ShippingStatus.DELIVERED,
                    trackingNumber: '1234567890',
                },
                {
                    orderID: 3,
                    buyer: 'Aaron',
                    courier: 'J&T Express',
                    productDescription: 'Red, 4U/5G',
                    productImage: RacquetImage,
                    productName: 'YONEX ASTROX 99',
                    quantity: 1,
                    shippingOption: 'Standard Delivery',
                    shippingStatus: ShippingStatus.DELIVERED,
                    trackingNumber: '1234567890',
                },
                {
                    orderID: 4,
                    buyer: 'Aaron',
                    courier: 'J&T Express',
                    productDescription: 'Red, 4U/5G',
                    productImage: RacquetImage,
                    productName: 'YONEX ASTROX 99',
                    quantity: 1,
                    shippingOption: 'Standard Delivery',
                    shippingStatus: ShippingStatus.DELIVERED,
                    trackingNumber: '1234567890',
                },
                {
                    orderID: 5,
                    buyer: 'Aaron',
                    courier: 'J&T Express',
                    productDescription: 'Red, 4U/5G',
                    productImage: RacquetImage,
                    productName: 'YONEX ASTROX 99',
                    quantity: 1,
                    shippingOption: 'Standard Delivery',
                    shippingStatus: ShippingStatus.DELIVERED,
                    trackingNumber: '1234567890',
                },
            ],
        },
    });
}
