import { Button, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
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

export default function CompetitionLinkModal({ hideModal, onSave }) {
    // const [setSelectedDate] = useState(null);

    // Inside handleChange function
    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };
    // function generateUniqueId() {
    //     return `_${Math.random().toString(36).substr(2, 9)}`; // Generates a random string
    // }

    const [formData, setFormData] = useState({
        name: '',
        date: null,
        state: '',
        fee: '',
        deadline: null,
        prize: '',
        url: '',
    });
    const [link, setLink] = useState(false);
    // const uniqueID = generateUniqueId();

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // Pass formData to CompetitionLayout
        // CompetitionLayout({ formData: { ...formData, [name]: value } });
    }, []);

    // const handleFileUpload = useCallback((e) => {
    //     const file = e.target.files[0];
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         eventBanner: file,
    //     }));
    // }, []);

    const handleDateChange = useCallback((name, date) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: date,
        }));
    }, []);

    const handleCancel = useCallback(() => {
        hideModal();
    }, [hideModal]);

    // const onConfirm = useCallback(() => {
    //     console.log('New data', formData);

    //     setLink(true);

    //     const timeoutId = setTimeout(() => {
    //         hideModal();
    //     }, 3500);

    //     return () => clearTimeout(timeoutId);
    // }, [formData, hideModal, setLink]);

    const saveCompetition = useCallback(async () => {
        try {
            // const formatDate = (date) => {
            //     if (!date) return null;
            //     const day = date.getDate().toString().padStart(2, '0');
            //     const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
            //     const year = date.getFullYear();
            //     return `${day}-${month}-${year}`;
            // };

            // const formattedData = {
            //     ...formData,
            //     date: formData.date ? formatDate(new Date(formData.date)) : null,
            //     deadline: formData.deadline ? formatDate(new Date(formData.deadline)) : null,
            // };

            const response = await fetch('http://localhost:3000/marketing-service/competitions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to save competition');
            }
            const savedCompetition = await response.json();
            onSave(savedCompetition);

            setLink(true);

            const timeoutId = setTimeout(() => {
                hideModal();
            }, 3500);

            return () => clearTimeout(timeoutId);
        } catch (error) {
            console.error('Error saving competition:', error.message);
        }
    }, [formData, hideModal, onSave]);

    const getContent = useCallback(() => {
        if (!link) {
            return (
                <CenteredDiv>
                    <Container>
                        <Title>Promote Competition</Title>
                        <TextField
                            name="name"
                            label="Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Date"
                                value={formData.date}
                                onChange={(date) => handleDateChange('date', date)}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>

                        <TextField
                            name="state"
                            label="State"
                            value={formData.state}
                            onChange={handleChange}
                        />
                        <TextField
                            name="fee"
                            label="Fee"
                            type="Number"
                            value={formData.fee}
                            onChange={handleChange}
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Deadline"
                                value={formData.deadline}
                                onChange={(date) => handleDateChange('deadline', date)}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        <TextField
                            name="prize"
                            label="Prize"
                            type="Number"
                            value={formData.prize}
                            onChange={handleChange}
                        />
                        <TextField
                            name="url"
                            label="Registration Link"
                            value={formData.url}
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
                                onClick={saveCompetition}
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
    }, [formData, handleChange, handleCancel, saveCompetition, link]);

    return getContent();
}
