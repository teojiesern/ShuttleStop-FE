export default class CustomerStatusFakeRepositoryImpl {
    getCustomerStatus = async () => ({
        status: 200,
        data: {
            isLogin: false,
            registeredSeller: false,
        },
    });
}
