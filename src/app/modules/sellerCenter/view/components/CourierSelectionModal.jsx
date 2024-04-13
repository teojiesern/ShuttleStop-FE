import { Button } from '@mui/material';
import { useCallback, useState } from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import lottieTicked from '../../../../platform/animation/lottieTicked.json';
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

const Description = styled.p`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.darkGrey};
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
`;

const CenteredDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    min-height: 50vh;
`;

export default function CourierSelectionModal({ hideModal, shipOrders }) {
    const [selectedCourier, setSelectedCourier] = useState(Courier.POSLAJU);
    const [shipped, setShipped] = useState(false);

    const onConfirm = useCallback(() => {
        shipOrders(selectedCourier);
        setShipped(true);
        setTimeout(() => {
            hideModal();
        }, 3500);
    }, [hideModal, selectedCourier, shipOrders]);

    const getContent = useCallback(() => {
        if (!shipped) {
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
                            <SCReusableStyles.Text
                                style={{ color: selectedCourier === courier ? COLORS.green : COLORS.black }}
                            >
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
                        <Button
                            style={{ ...PlatformReusableStyles.PrimaryButtonStyles }}
                            onClick={onConfirm}
                        >
                            CONFIRM
                        </Button>
                    </ButtonContainer>
                </Container>
            );
        }
        return (
            <CenteredDiv>
                <Lottie
                    options={{ animationData: lottieTicked, autoplay: true, loop: true }}
                    width={200}
                    height={200}
                />
                <Title>Your mass shipment is confirmed to be shipped</Title>
                <Description>The courier will collect your item soon</Description>
            </CenteredDiv>
        );
    }, [hideModal, onConfirm, selectedCourier, shipped]);

    return getContent();
}
