import Network from '../../../../platform/network/Network';

export default class CustomerRepositoryImpl {
    #BASE_URL = '/customer-service';

    #ROUTES = {
        CUSTOMER: `${this.#BASE_URL}`,
        REGISTER: `${this.#BASE_URL}/signup`,
        PROFILE: `${this.#BASE_URL}/my-profile`,
        ALLPRODUCTS: `${this.#BASE_URL}/products`,
        PRODUCT: `${this.#BASE_URL}/product`,
        SHOP: `${this.#BASE_URL}/shop-by-product`,
        TOSHIP_PURCHASE: `${this.#BASE_URL}/my-purchase-toship`,
        SHIPPING_PURCHASE: `${this.#BASE_URL}/my-purchase-shipping`,
        COMPLETED_PURCHASE: `${this.#BASE_URL}/my-purchase-completed`,
        UPDATE_STATUS: `${this.#BASE_URL}/update-order-status`,
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
        const { status, data } = await Network.getInstance().patch(this.#ROUTES.PROFILE, user);

        return { status, data };
    };

    getAllProducts = async () => {
        const { status, data } = await Network.getInstance().get(this.#ROUTES.ALLPRODUCTS);
        const mappedData = data.map((product) => {
            const prices = product.variants.map((variant) => variant.price);
            const minPrice = Math.min(...prices);

            return {
                productId: product.productId,
                name: product.name,
                category: product.category,
                brand: product.brand,
                thumbnailImage: `http://localhost:3000/${product.thumbnailImage}`,
                rate: data.rate,
                minPrice,
            };
        });
        return { status, data: mappedData };
    };

    getProductById = async (productId) => {
        const { status, data } = await Network.getInstance().get(`${this.#ROUTES.PRODUCT}/${productId}`);

        const prices = data.variants.map((variant) => variant.price);
        const minPrice = Math.min(...prices);
        const mappedData = {
            productId: data.productId,
            name: data.name,
            category: data.category,
            brand: data.brand,
            thumbnailImage: `http://localhost:3000/${data.thumbnailImage}`,
            productImages: data.productImages.map((img) => `http://localhost:3000/${img}`),
            productDescription: data.productDescription,
            variants: data.variants,
            rate: data.rate,
            numReview: data.numReview,
            minPrice,
        };
        return { status, data: mappedData };
    };

    getShop = async (productId) => {
        const { status, data } = await Network.getInstance().get(`${this.#ROUTES.SHOP}/${productId}`);
        const mappedData = {
            name: data.name,
            pickupAddress: data.pickupAddress,
            email: data.email,
            phoneNumber: data.phoneNumber,
            logoPath: `http://localhost:3000/${data.logoPath}`,
            description: data.description,
            shopId: data.shopId,
            shopSupportedCourierOption: data.shopSupportedCourierOption,
            shopSupportedPaymentOption: data.shopSupportedPaymentOption,
            shopSupportedShippingOption: data.shopSupportedShippingOption,
            products: data.products,
            owner: data.owner,
        };
        return { status, data: mappedData };
    };

    getToShipPurchases = async () => {
        const { status, data } = await Network.getInstance().get(this.#ROUTES.TOSHIP_PURCHASE);

        return { status, data };
    };

    getShippingPurchases = async () => {
        const { status, data } = await Network.getInstance().get(this.#ROUTES.SHIPPING_PURCHASE);

        return { status, data };
    };

    getCompletedPurchases = async () => {
        const { status, data } = await Network.getInstance().get(this.#ROUTES.COMPLETED_PURCHASE);

        return { status, data };
    };

    updateOrderStatus = async (trackingNumbers, newStatus) => {
        const { status, data } = await Network.getInstance().patch(this.#ROUTES.UPDATE_STATUS, {
            trackingNumbers,
            newStatus,
        });

        return { status, data };
    };
}
