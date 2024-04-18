import { Button, TextField } from '@mui/material';
import { useCallback, useState } from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import lottieTicked from '../../../../platform/animation/lottieTicked.json';
import FONTSIZE from '../../../../platform/style/FontSize';
import FONTWEIGHT from '../../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../../platform/style/PlatformReusableStyles';

const Container = styled.div`
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Title = styled.h1`
    font-size: ${FONTSIZE.medium};
    text-align: left;
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    color: ${COLORS.black};
    margin-bottom: 1rem;
`;

const Description = styled.p`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.darkGrey};
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
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

export default function CompetitionLinkModal({ hideModal }) {
    // const [setSelectedDate] = useState(null);

    // Inside handleChange function
    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };

    const [formData, setFormData] = useState({
        competitionName: '',
        date: '',
        state: '',
        fee: '',
        deadline: '',
        prize: '',
        registrationLink: '',
        eventBanner: null,
    });
    const [link, setLink] = useState(false);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }, []);

    // const handleFileUpload = useCallback((e) => {
    //     const file = e.target.files[0];
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         eventBanner: file,
    //     }));
    // }, []);

    const onConfirm = useCallback(() => {
        // Implement your logic to save the form data
        console.log(formData);
        setLink(true);
        setTimeout(() => {
            hideModal();
        }, 3500);
    }, [formData, hideModal]);

    const getContent = useCallback(() => {
        if (!link) {
            return (
                <CenteredDiv>
                    <Container>
                        <Title>Promote Competition</Title>
                        <TextField
                            name="competitionName"
                            label="Competition Name"
                            value={formData.competitionName}
                            onChange={handleChange}
                        />
                        <TextField
                            name="date"
                            label="Date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                        <TextField
                            name="state"
                            label="State"
                            value={formData.state}
                            onChange={handleChange}
                        />
                        <TextField
                            name="fee"
                            label="Fee"
                            value={formData.fee}
                            onChange={handleChange}
                        />
                        <TextField
                            name="deadline"
                            label="Deadline"
                            value={formData.dateline}
                            onChange={handleChange}
                        />
                        <TextField
                            name="prize"
                            label="Prize"
                            value={formData.prize}
                            onChange={handleChange}
                        />
                        <TextField
                            name="registerationLink"
                            label="Registeration Link"
                            value={formData.registrationLink}
                            onChange={handleChange}
                        />
                        <TextField
                            name="eventBanner"
                            label="Event Banner"
                            value={formData.eventBanner}
                            onChange={handleChange}
                        />

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
                                SAVE
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
                <Title>Your competition information have been saved</Title>
                <Description>You can now review your competition details in the webside</Description>
            </CenteredDiv>
        );
    }, [formData, handleChange, hideModal, onConfirm, link]);

    return getContent();
}
