import NetworkConstants from './NetworkConstants';
import NetworkRepositoryAxiosImpl from './NetworkRepositoryAxiosImpl';

export default class Network {
    static #instance;

    static getInstance() {
        if (!Network.#instance) {
            const networkInstance = new NetworkRepositoryAxiosImpl(NetworkConstants.BASE_URL);
            Network.#instance = networkInstance;

            // Region interceptors
        }
        return Network.#instance;
    }
}
