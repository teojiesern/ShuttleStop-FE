import { Button } from '@mui/material';
import { useCallback, useState } from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import lottieTicked from '../../../../platform/animation/lottieTicked.json';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../../platform/style/PlatformReusableStyles';
import RatingBar from '../component/RatingBar';
import UseCoachRating from '../hooks/useCoachRating';

const Container = styled.div`
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Title = styled.h1`
    font-size: ${FONTSIZE.medium};
    text-align: center;
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    color: ${COLORS.black};
    margin-bottom: 1rem;
`;

const Description = styled.p`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    text-align: center;
    color: ${COLORS.darkGrey};
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 15rem;
`;

const CenteredDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    min-height: 50vh;
`;

const BarContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 15rem;
`;

export default function CompetitionLinkModal({ hideModal, coach, onClose }) {
    const [formData, setFormData] = useState({ rating: 0 });
    const [link, setLink] = useState(false);
    const { coachRating } = new UseCoachRating();

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }, []);

    const onConfirm = useCallback(async () => {
        try {
            const response = await coachRating(coach.coachId, formData);

            if (response.coachRating.currentStatus !== 200) {
                throw new Error('Failed to save coach registration');
            }

            setFormData((prevData) => ({
                ...prevData,
                rating: response.coachRating.rating,
            }));

            setLink(true);
            const timeoutId = setTimeout(() => {
                hideModal();
                onClose(response.coachRating.rating);
            }, 3500);

            return () => clearTimeout(timeoutId);
        } catch (error) {
            console.error('Error saving rating:', error.message);
        }
    }, [formData, hideModal, coach.coachId]);

    const getContent = useCallback(() => {
        if (!link) {
            return (
                <CenteredDiv>
                    <Container>
                        <Title>{coach.coachName}</Title>

                        <img
                            src={coach.file}
                            alt="coach"
                            width="200px"
                            height="200px"
                        />

                        <Description>Posting publicly</Description>
                        <BarContainer>
                            <RatingBar
                                value={formData.rating}
                                onChange={handleChange}
                            />
                        </BarContainer>

                        <ButtonContainer>
                            <Button
                                style={{ ...PlatformReusableStyles.PrimaryButtonStyles }}
                                onClick={onConfirm}
                            >
                                POST
                            </Button>
                        </ButtonContainer>
                    </Container>
                </CenteredDiv>
            );
        }
        return (
            <CenteredDiv>
                <Lottie
                    options={{ animationData: lottieTicked, autoplay: true, loop: true }}
                    width={200}
                    height={200}
                    isClickToPauseDisabled
                />

                <Title>Thank you for rating!</Title>
            </CenteredDiv>
        );
    }, [formData, handleChange, hideModal, onConfirm, link]);

    return getContent();
}
