import axios from 'axios';
import NetworkConstants from './NetworkConstants';

export default class NetworkRepositoryAxiosImpl {
    #baseURL;

    #instance;

    constructor(baseURL) {
        this.#baseURL = baseURL;
        this.#instance = axios.create({
            baseURL,
            timeout: NetworkConstants.TIMEOUT,
        });
    }

    get = (url, config) => this.#instance.get(url, config);

    post = (url, data, config) => this.#instance.post(url, data, config);

    put = (url, data, config) => this.#instance.put(url, data, config);

    patch = (url, data, config) => this.#instance.patch(url, data, config);

    delete = (url, config) => this.#instance.delete(url, config);

    addRequestInterceptor = (onFulfilled, onRejected, options) => {
        const id = this.#instance.interceptors.request.use(onFulfilled, onRejected, options);
        return () => this.#instance.interceptors.request.eject(id);
    };

    addResponseInterceptor = (onFulfilled, onRejected, options) => {
        const id = this.#instance.interceptors.response.use(onFulfilled, onRejected, options);
        return () => this.#instance.interceptors.response.eject(id);
    };

    getBaseURL() {
        return this.#baseURL;
    }
}
