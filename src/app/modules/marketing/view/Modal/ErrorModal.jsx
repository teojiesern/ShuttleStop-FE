import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { IconButton } from '@mui/material';
import CrossedModal from '../../../../platform/modal/CrossedModal';

export default function ErrorModal({ hideModal, title }) {
    return (
        <>
            <IconButton
                onClick={hideModal}
                style={{ position: 'absolute', top: '2rem', right: '2rem' }}
            >
                <CloseOutlinedIcon />
            </IconButton>
            <CrossedModal title={title} />
        </>
    );
}
