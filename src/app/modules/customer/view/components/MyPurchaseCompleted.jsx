import { Button, Rating } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import useModal from '../../../../platform/modal/useModal';
import PlatformReusableStyles from '../../../../platform/style/PlatformReusableStyles';
import RateProductModal from '../modal/RateProductModal';
import MyPurchaseItem from './MyPurchaseItem';

const BorderContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid ${COLORS.grey};
    padding: 1rem;
    justify-content: space-between;
`;

const All = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin: 0 15px;
`;

const StyledHr = styled.hr`
    border: none;
    border-top: 1px solid ${COLORS.grey};
    margin: 0;
`;

const AlignRight = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 98%;
    padding: 0 8px;
`;

const Rated = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
`;

const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;
`;

const TextGrey = styled.p`
    color: ${COLORS.darkGrey};
`;

export default function MyPurchaseCompleted() {
    const { showModal } = useModal();

    const [rating, setRating] = useState(5);
    const [ratingSubmitted, setRatingSubmitted] = useState(false);

    return (
        <BorderContainer>
            <All>
                <MyPurchaseItem />
                <AlignRight>
                    <PriceContainer>
                        <p>Order Total (1 item):</p>
                        <p>RM 734.90</p>
                    </PriceContainer>
                </AlignRight>
                <StyledHr />
                <AlignRight>
                    {ratingSubmitted && (
                        <Rated>
                            <TextGrey>You have rated the product</TextGrey>
                            <Rating
                                name="RatedRate"
                                value={rating}
                                readOnly
                            />
                        </Rated>
                    )}
                    {!ratingSubmitted && (
                        <Button
                            style={{ ...PlatformReusableStyles.PrimaryButtonStyles, width: '90px' }}
                            onClick={() => {
                                showModal({
                                    modal: (
                                        <RateProductModal
                                            rating={rating}
                                            setRating={setRating}
                                            setRatingSubmitted={setRatingSubmitted}
                                        />
                                    ),
                                    disableBackdropDismiss: false,
                                    cmaxWidth: 'sm',
                                });
                            }}
                        >
                            RATE
                        </Button>
                    )}
                </AlignRight>
            </All>
        </BorderContainer>
    );
}
