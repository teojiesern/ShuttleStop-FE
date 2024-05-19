import LoadingModal from './LoadingModal';
import useModal from './useModal';

const useLoadingModal = () => {
    const { showModal, hideModal } = useModal();
    const showLoadingModal = () => {
        showModal({
            modal: <LoadingModal />,
            disableBackdropDismiss: true,
            cmaxWidth: 'xs',
        });
    };

    return { showLoadingModal, hideLoadingModal: hideModal };
};

export default useLoadingModal;
