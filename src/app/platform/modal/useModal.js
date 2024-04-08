import { useCallback } from 'react';
import ModalManager from './internal/ModalManager';

const useModal = () => {
    const showModal = useCallback(({ modal, disableBackdropDismiss }) => {
        ModalManager.showModal({ modal, disableBackdropDismiss });
    }, []);

    const hideModal = useCallback(() => ModalManager.hideModal(), []);

    return {
        showModal,
        hideModal,
    };
};

export default useModal;
