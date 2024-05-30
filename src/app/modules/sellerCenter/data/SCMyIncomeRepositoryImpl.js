import { ImageURL } from '../../../platform/constants/PlatformConstants';
import Network from '../../../platform/network/Network';
import BankLists from './BankLists';

export default class SCMyIncomeRepositoryImpl {
    #BASE_URL = '/seller-service';

    #ROUTES = {
        ORDERS: (shopId) => `${this.#BASE_URL}/order/${shopId}`,
        SELLER_BANK: `${this.#BASE_URL}/seller-bank`,
        WITHDRAW: `${this.#BASE_URL}/withdraw`,
    };

    getPreviousOrders = async (payload) => {
        const { status, data } = await Network.getInstance().get(this.#ROUTES.ORDERS(payload.shopId));

        const mappedData = data.map((d) => ({
            ...d,
            productImage: `${ImageURL}${d.productImage}`,
        }));

        return { status, data: mappedData };
    };

    updateSellerBankInformation = async (payload) => {
        const { status, data } = await Network.getInstance().patch(this.#ROUTES.SELLER_BANK, payload);

        const mappedData = {
            bankName: data.bankAccount,
            bankIcon: BankLists.find((bank) => bank.name === data.bankAccount)?.icon,
            accountNumber: data.accountNumber,
            accountHolderName: data.nameInBankAccount,
        };

        return { status, data: mappedData };
    };

    withdrawIncome = async (payload) => {
        const { status, data } = await Network.getInstance().patch(this.#ROUTES.WITHDRAW, payload);

        return { status, data };
    };
}
