import { Button, TextField } from '@mui/material';
import { useCallback } from 'react';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../platform/style/PlatformReusableStyles';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2.5rem;
`;
const HrContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: end;
`;
const Title = styled.p`
    color: ${COLORS.black};
    font-size: ${FONTSIZE.large};
    font-weight: ${FONTWEIGHT.BOLD};
`;

export default function EditAddressModal({ hideModal }) {
    const handleBuyNowClick = useCallback(() => {
        // store address info
        hideModal();
    }, [hideModal]);

    return (
        <Wrapper>
            <Title>Edit Address</Title>
            <HrContainer>
                <TextField
                    fullWidth
                    required
                    label={<span>Full Name</span>}
                    size="small"
                />
                <TextField
                    fullWidth
                    required
                    label={<span>Phone Number</span>}
                    size="small"
                />
            </HrContainer>
            <TextField
                fullWidth
                required
                label={<span>Address 1</span>}
                size="small"
            />
            <TextField
                fullWidth
                label={<span>Address 2</span>}
                size="small"
            />
            <HrContainer>
                <TextField
                    fullWidth
                    required
                    label={<span>City</span>}
                    size="small"
                />
                <TextField
                    fullWidth
                    required
                    label={<span>Postal Code</span>}
                    size="small"
                    type="number"
                />
            </HrContainer>
            <HrContainer>
                <TextField
                    fullWidth
                    required
                    label={<span>Country</span>}
                    size="small"
                />
                <TextField
                    fullWidth
                    required
                    label={<span>State</span>}
                    size="small"
                />
            </HrContainer>
            <ButtonContainer>
                <Button
                    style={{ ...PlatformReusableStyles.SecondaryButtonStyles }}
                    onClick={hideModal}
                >
                    <p>CANCEL</p>
                </Button>
                <Button
                    style={{ ...PlatformReusableStyles.PrimaryButtonStyles }}
                    onClick={handleBuyNowClick}
                >
                    <p>SAVE</p>
                </Button>
            </ButtonContainer>
        </Wrapper>
    );
}
