import RacquetImage from '../../customer/assets/racquet.png';
import { PaymentOptions } from '../constants/SellerCenterConstants';
import BankLists from './BankLists';

export default class SCMyIncomeFakeRepositoryImpl {
    #BASE_URL = '/seller-center-service';

    #ROUTES = {
        // TODO: Update with actual route when BE is ready
        GET_TO_SHIP_ORDERS: `${this.#BASE_URL}/...`,
    };

    getBankInformation = async () => ({
        status: 200,
        data: {
            bankName: 'Maybank2u',
            bankIcon: BankLists[0].icon,
            accountNumber: '1234567890',
            accountHolderName: 'Aaron',
        },
    });

    getPreviousOrders = async () => ({
        status: 200,
        data: {
            orders: [
                {
                    orderID: 1,
                    productDescription: 'Red, 4U/5G',
                    productImage: RacquetImage,
                    productName: 'YONEX ASTROX 99',
                    quantity: 1,
                    date: '2021-09-01',
                    paymentMethod: PaymentOptions.ONLINE_BANKING,
                    amount: 500.0,
                },
                {
                    orderID: 2,
                    productDescription: 'Red, 4U/5G',
                    productImage: RacquetImage,
                    productName: 'YONEX ASTROX 99',
                    quantity: 1,
                    date: '2021-09-01',
                    paymentMethod: PaymentOptions.ONLINE_BANKING,
                    amount: 500.0,
                },
                {
                    orderID: 3,
                    productDescription: 'Red, 4U/5G',
                    productImage: RacquetImage,
                    productName: 'YONEX ASTROX 99',
                    quantity: 1,
                    date: '2021-09-01',
                    paymentMethod: PaymentOptions.ONLINE_BANKING,
                    amount: 500.0,
                },
                {
                    orderID: 4,
                    productDescription: 'Red, 4U/5G',
                    productImage: RacquetImage,
                    productName: 'YONEX ASTROX 99',
                    quantity: 1,
                    date: '2021-09-01',
                    paymentMethod: PaymentOptions.ONLINE_BANKING,
                    amount: 500.0,
                },
                {
                    orderID: 5,
                    productDescription: 'Red, 4U/5G',
                    productImage: RacquetImage,
                    productName: 'YONEX ASTROX 99',
                    quantity: 1,
                    date: '2021-09-01',
                    paymentMethod: PaymentOptions.ONLINE_BANKING,
                    amount: 500.0,
                },
            ],
        },
    });
}
