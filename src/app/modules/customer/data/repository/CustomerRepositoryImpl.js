import Network from '../../../../platform/network/Network';

export default class CustomerRepositoryImpl {
    #BASE_URL = '/customer-service';

    #ROUTES = {
        CUSTOMER: `${this.#BASE_URL}`,
        REGISTER: `${this.#BASE_URL}/signup`,
        UPDATE: `${this.#BASE_URL}/my-profile`,
        SHOP: `${this.#BASE_URL}/shop-by-product`,
    };

    getCustomer = async () => {
        const { status, data } = await Network.getInstance().get(this.#ROUTES.CUSTOMER);

        const mappedData = {
            customerID: data.customerId,
            username: data.username,
            email: data.email,
            phoneNo: data.phoneNo,
            gender: data.gender,
            birthday: data.birthday,
            profileImgPath: `http://localhost:3000/${data.profileImgPath}`,
            seller: data.seller,
            address: {
                street: data.address.street,
                city: data.address.city,
                postcode: data.address.postcode,
                country: data.address.country,
                state: data.address.state,
            },
        };
        return { status, data: mappedData };
    };

    registerCustomer = async (user) => {
        const { status, data } = await Network.getInstance().post(this.#ROUTES.REGISTER, user);

        return { status, data };
    };

    updateCustomer = async (user) => {
        const { status, data } = await Network.getInstance().patch(this.#ROUTES.UPDATE, user);

        return { status, data };
    };

    getShop = async (productId) => {
        const { status, data } = await Network.getInstance().get(`${this.#ROUTES.SHOP}/${productId}`);

        return { status, data };
    };
}
