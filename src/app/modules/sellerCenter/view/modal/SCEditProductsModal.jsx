import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { IconButton } from '@mui/material';
import styled from 'styled-components';
import SCAddNewProductsScreen from '../screens/SCAddNewProductsScreen';

const CenteredDiv = styled.div`
    padding: 4rem;
    width: 90%;
`;

export default function SCEditProductsModal({ hideModal, ...props }) {
    return (
        <CenteredDiv>
            <IconButton
                onClick={hideModal}
                style={{ position: 'absolute', top: '2rem', right: '2rem' }}
            >
                <CloseOutlinedIcon />
            </IconButton>
            <SCAddNewProductsScreen
                {...props}
                hideModal={hideModal}
            />
        </CenteredDiv>
    );
}
