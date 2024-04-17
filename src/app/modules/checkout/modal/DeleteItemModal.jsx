import Button from '@mui/material/Button';
import styled from 'styled-components';
import PlatformReusableStyles from '../../../platform/style/PlatformReusableStyles';
import COReusableStyles from '../view/styles/COReusableStyles';

const Container = styled.span`
    padding: 1rem;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: end;
    flex-direction: row;
    gap: 1rem;
    box-sizing: border-box;
`;

function handleConfirmDelete() {}

export default function OrderPlacedModal({ hideModal }) {
    return (
        <COReusableStyles.BorderConatiner>
            <Container>Do you want to remove this product?</Container>
            <COReusableStyles.Divider />
            <ButtonContainer>
                <Button
                    style={{ ...PlatformReusableStyles.SecondaryButtonStyles }}
                    onClick={hideModal}
                >
                    <p>NO</p>
                </Button>
                <Button
                    style={{ ...PlatformReusableStyles.PrimaryButtonStyles }}
                    onClick={handleConfirmDelete}
                >
                    <p>YES</p>
                </Button>
            </ButtonContainer>
        </COReusableStyles.BorderConatiner>
    );
}
