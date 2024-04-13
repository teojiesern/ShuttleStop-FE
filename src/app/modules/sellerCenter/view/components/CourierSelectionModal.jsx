import { Button } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../../platform/style/PlatformReusableStyles';
import { Courier } from '../../constants/SellerCenterConstants';
import SCReusableStyles from '../styles/SCReusableStyles';

const Container = styled.div`
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Title = styled.h1`
    font-size: ${FONTSIZE.medium};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    color: ${COLORS.black};
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
`;

export default function CourierSelectionModal({ hideModal }) {
    const [selectedCourier, setSelectedCourier] = useState(Courier.POSLAJU);
    return (
        <Container>
            <Title>Courier Selection</Title>
            {Object.values(Courier).map((courier) => (
                <SCReusableStyles.BorderContainer
                    key={courier}
                    style={{
                        borderColor: selectedCourier === courier ? COLORS.green : COLORS.grey,
                        cursor: 'pointer',
                        padding: '1.5rem 1rem',
                    }}
                    onClick={() => setSelectedCourier(courier)}
                >
                    <SCReusableStyles.Text style={{ color: selectedCourier === courier ? COLORS.green : COLORS.black }}>
                        {courier}
                    </SCReusableStyles.Text>
                </SCReusableStyles.BorderContainer>
            ))}
            <ButtonContainer>
                <Button
                    style={{ ...PlatformReusableStyles.SecondaryButtonStyles }}
                    onClick={hideModal}
                >
                    CANCEL
                </Button>
                <Button style={{ ...PlatformReusableStyles.PrimaryButtonStyles }}>CONFIRM</Button>
            </ButtonContainer>
        </Container>
    );
}
