import Network from '../../../platform/network/Network';

export default class SCAddNewProductsRepositoryImpl {
    #BASE_URL = '/seller-service';

    #ROUTES = {
        ADD_PRODUCT: `${this.#BASE_URL}/add-product`,
        UPDATE_PRODUCT: `${this.#BASE_URL}/update-product`,
    };

    addNewProducts = async (formData) => {
        const { data } = await Network.getInstance().post(this.#ROUTES.ADD_PRODUCT, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return data;
    };

    updateProduct = async (formData) => {
        const { data } = await Network.getInstance().post(this.#ROUTES.UPDATE_PRODUCT, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return data;
    };
}
