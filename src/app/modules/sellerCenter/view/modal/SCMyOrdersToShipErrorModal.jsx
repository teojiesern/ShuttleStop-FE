import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { IconButton } from '@mui/material';
import CrossedModal from '../../../../platform/modal/CrossedModal';

export default function SCMyOrdersToShipErrorModal({ hideModal }) {
    return (
        <>
            <IconButton
                onClick={hideModal}
                style={{ position: 'absolute', top: '2rem', right: '2rem' }}
            >
                <CloseOutlinedIcon />
            </IconButton>
            <CrossedModal title="Please select at least one order to be shipped" />
        </>
    );
}
