import { createRef } from 'react';

export default class ModalManager {
    static ref = createRef();

    static showModal = (consumerModal) => {
        ModalManager.ref.current?.showModal(consumerModal);
    };

    static hideModal = () => ModalManager.ref.current?.hideModal();
}
