import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useModal from '../../../platform/modal/useModal';
import CompetitionLinkModal from './Modal/CompetitionLink';

const ModalOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function RegisterCompetition() {
    const { showModal, hideModal } = useModal();
    const navigate = useNavigate();

    const handleBackdropClick = () => {
        navigate('/marketing/competitions');
    };

    const handleHide = useCallback(() => {
        hideModal();
        navigate('/marketing/competitions');
    }, [hideModal, navigate]);

    useEffect(() => {
        showModal({
            modal: <CompetitionLinkModal hideModal={handleHide} />,
        });

        return () => hideModal();
    }, [showModal, handleHide, hideModal]);

    return <ModalOverlay onClick={handleBackdropClick} />;
}
