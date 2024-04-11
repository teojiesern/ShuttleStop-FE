/**
 * @constructor should not be used, use static methods instead
 */
export default class CustomerManager {
    static #customer;

    static getCustomer = () => CustomerManager.#customer;

    static setCustomer = (customer) => {
        CustomerManager.#customer = customer;
    };
}
