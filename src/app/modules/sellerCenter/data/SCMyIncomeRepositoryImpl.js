import { ImageURL } from '../../../platform/constants/PlatformConstants';
import Network from '../../../platform/network/Network';
import BankLists from './BankLists';

export default class SCMyIncomeRepositoryImpl {
    #BASE_URL = '/seller-service';

    #ROUTES = {
        ORDERS: (shopId) => `${this.#BASE_URL}/order/${shopId}`,
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

    getPreviousOrders = async (payload) => {
        const { status, data } = await Network.getInstance().get(this.#ROUTES.ORDERS(payload.shopId));

        const mappedData = data.map((d) => ({
            ...d,
            productImage: `${ImageURL}${d.productImage}`,
        }));

        return { status, data: mappedData };
    };

    getTotalAmount = async () => ({
        status: 200,
        data: {
            totalAmount: 2500.0,
        },
    });
}
