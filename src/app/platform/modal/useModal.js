import { useCallback } from 'react';
import ModalManager from './internal/ModalManager';

const useModal = () => {
    const showModal = useCallback(({ modal, disableBackdropDismiss, cmaxWidth }) => {
        ModalManager.showModal({ modal, disableBackdropDismiss, cmaxWidth });
    }, []);

    const hideModal = useCallback(() => ModalManager.hideModal(), []);

    return {
        showModal,
        hideModal,
    };
};

export default useModal;
