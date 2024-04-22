import { Button, TextField } from '@mui/material';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../platform/Colors';
import TickedModal from '../../../../platform/modal/TickedModal';
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
    // function generateUniqueId() {
    //     return `_${Math.random().toString(36).substr(2, 9)}`; // Generates a random string
    // }

    const [formData, setFormData] = useState({
        compID: '',
        compName: '',
        date: '',
        state: '',
        fee: '',
        deadline: '',
        prize: '',
        url: '',
    });
    const [link, setLink] = useState(false);
    // const uniqueID = generateUniqueId();

    const handleChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
            // Pass formData to CompetitionLayout
            // CompetitionLayout({ formData: { ...formData, [name]: value } });
        },
        [formData],
    );

    // const handleFileUpload = useCallback((e) => {
    //     const file = e.target.files[0];
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         eventBanner: file,
    //     }));
    // }, []);

    const handleCancel = useCallback(() => {
        hideModal();
    }, [hideModal]);

    const onConfirm = useCallback(() => {
        console.log('New data', formData);

        setLink(true);

        const timeoutId = setTimeout(() => {
            hideModal();
        }, 3500);

        return () => clearTimeout(timeoutId);
    }, [formData, hideModal, setLink]);

    const getContent = useCallback(() => {
        if (!link) {
            return (
                <CenteredDiv>
                    <Container>
                        <Title>Promote Competition</Title>
                        <TextField
                            name="competitionName"
                            label="Competition Name"
                            value={formData.compName}
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
                            value={formData.deadline}
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
                            value={formData.url}
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
                                onClick={handleCancel}
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
            <TickedModal
                title="Your competition information have been saved"
                description="You can now review your competition details in the website"
            />
        );
    }, [formData, handleChange, handleCancel, onConfirm, link]);

    return getContent();
}
