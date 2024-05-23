import { Button, InputAdornment, TextField } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import { SubFolder } from '../../../platform/constants/PlatformConstants';
import TickedModal from '../../../platform/modal/TickedModal';
import useModal from '../../../platform/modal/useModal';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../platform/style/PlatformReusableStyles';
import UseCoachEdit from './hooks/useCoachEdit';

import CompReusableStyles from './style/reusableStyle';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin: 1rem 0;
`;

const ContentHeader = styled.h1`
    font-size: ${FONTSIZE['x-large']};
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    color: ${COLORS.black};
`;

const HorizontalContainer = styled.div`
    display: flex;
    padding: 1rem 3rem;
    align-items: start;
    gap: 3rem;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex: 7;
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    gap: 2rem;
    flex: 3;
`;

const StyledButton = styled.button`
    background-color: ${COLORS.white};
    border: none;
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    font-family: montserrat;
`;

const DisplayImageBefore = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    object-fit: cover; /* Ensures the image fits within the round shape */
`;

const DisplayImageAfter = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    object-fit: cover; /* Ensures the image fits within the round shape */
`;

const FormContainer = styled.div`
    display: flex;
    gap: 2rem;
`;

const FormLabel = styled.label`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.darkGrey};
    text-align: left;
    display: inline-block;
    width: 200px;
`;

export default function MarketingCoachEditScreen() {
    const [image, setImage] = useState('');
    const [username, setUsername] = useState('');
    const [state, setState] = useState('');
    const [area, setArea] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [targetLevel, setTargetLevel] = useState('');
    const [targetAge, setTargetAge] = useState('');
    const [qualification, setQualification] = useState('');
    const [experience, setExperience] = useState('');
    const [achievement, setAchievement] = useState('');
    const [timeslot, setTimeslot] = useState('');
    const [location, setLocation] = useState('');
    const [feePerSession, setFeePerSession] = useState('');
    const locations = useLocation();
    const coach = locations.state?.coach;
    const navigate = useNavigate();

    const inputRef = useRef(null);
    const { showModal, hideModal } = useModal();

    const handleSelectImage = () => {
        inputRef.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };
    const { editCoach } = new UseCoachEdit();

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('coachName', username);
        formData.append('level', targetLevel);
        formData.append('targetAge', targetAge);
        formData.append('qualification', qualification);
        formData.append('experience', experience);
        formData.append('archivement', achievement);
        formData.append('timeslot', timeslot);
        formData.append('location', location);
        formData.append('state', state);
        formData.append('area', area);
        formData.append('feePerSession', feePerSession);
        formData.append('contact', mobileNo);
        formData.append('subfolder', SubFolder.CUSTOMER);
        formData.append('file', image);

        const entries = Array.from(formData.entries());

        entries.forEach((pair) => {
            console.log(`${pair[0]}, ${pair[1]}`);
        });
        try {
            const response = await editCoach(formData, coach.coachId);
            console.log('response', response);

            if (response.status !== 200) {
                throw new Error('Failed to edit coach registration');
            }

            const entrie = Array.from(response);

            entrie.forEach((pair) => {
                console.log(`${pair[0]}, ${pair[1]}`);
            });

            navigate(`/marketing/coach-profile/${coach.coachId}`);
            showModal({ modal: <TickedModal title="Your coach information has been edited" /> });
            setTimeout(() => {
                hideModal();
            }, 3500);
        } catch (error) {
            console.error(error);
            alert('There was an error submitting the form. Please try again.');
        }
    };
    useEffect(() => {
        if (coach) {
            setUsername(coach.coachName || '');
            setState(coach.state || '');
            setArea(coach.area || '');
            setAchievement(coach.archivement || '');
            setExperience(coach.experience || '');
            setFeePerSession(coach.feePerSession);
            setQualification(coach.qualification || '');
            setImage(coach.image || '');
            setMobileNo(coach.contact || '');
            setTargetAge(coach.targetAge || '');
            setTargetLevel(coach.level || '');
            setTimeslot(coach.timeslot || '');
            setLocation(coach.location || '');
            setImage(coach.file || '');
        }
    }, [coach]);

    return (
        <Container>
            <ContentHeader>My Profile</ContentHeader>
            <CompReusableStyles.BorderContainer>
                <HorizontalContainer>
                    <ContentContainer>
                        <FormContainer style={{ alignItems: 'center' }}>
                            <FormLabel>UserName</FormLabel>
                            <TextField
                                label="Enter your username"
                                size="small"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                style={{ minWidth: '50%' }}
                            />
                        </FormContainer>
                        <FormContainer style={{ alignItems: 'center' }}>
                            <FormLabel>State</FormLabel>
                            <TextField
                                label="Enter your state"
                                size="small"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                style={{ minWidth: '50%' }}
                            />
                        </FormContainer>
                        <FormContainer style={{ alignItems: 'center' }}>
                            <FormLabel>Area</FormLabel>
                            <TextField
                                label="Enter your area"
                                size="small"
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                                style={{ minWidth: '50%' }}
                            />
                        </FormContainer>
                        <FormContainer style={{ alignItems: 'center' }}>
                            <FormLabel>Mobile No</FormLabel>
                            <TextField
                                label="Enter your mobile number"
                                size="small"
                                value={mobileNo}
                                onChange={(e) => setMobileNo(e.target.value)}
                                style={{ minWidth: '50%' }}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">+(6)</InputAdornment>,
                                }}
                            />
                        </FormContainer>
                        <FormContainer style={{ alignItems: 'center' }}>
                            <FormLabel>Target Level</FormLabel>
                            <TextField
                                label="Enter your target level"
                                size="small"
                                value={targetLevel}
                                onChange={(e) => setTargetLevel(e.target.value)}
                                style={{ minWidth: '50%' }}
                            />
                        </FormContainer>
                        <FormContainer style={{ alignItems: 'center' }}>
                            <FormLabel>Target Age</FormLabel>
                            <TextField
                                label="Enter your target age"
                                size="small"
                                value={targetAge}
                                onChange={(e) => setTargetAge(e.target.value)}
                                style={{ minWidth: '50%' }}
                            />
                        </FormContainer>
                        <FormContainer style={{ alignItems: 'center' }}>
                            <FormLabel>Qualification</FormLabel>
                            <TextField
                                label="Enter your qualification"
                                size="small"
                                multiline
                                rows={6}
                                value={qualification}
                                onChange={(e) => setQualification(e.target.value)}
                                style={{ minWidth: '50%' }}
                            />
                        </FormContainer>
                        <FormContainer style={{ alignItems: 'center' }}>
                            <FormLabel>Experience</FormLabel>
                            <TextField
                                label="Enter your experience"
                                size="small"
                                multiline
                                rows={6}
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                                style={{ minWidth: '50%' }}
                            />
                        </FormContainer>
                        <FormContainer style={{ alignItems: 'center' }}>
                            <FormLabel>Achievement</FormLabel>
                            <TextField
                                label="Enter your achievement"
                                size="small"
                                multiline
                                rows={6}
                                value={achievement}
                                onChange={(e) => setAchievement(e.target.value)}
                                style={{ minWidth: '50%' }}
                            />
                        </FormContainer>
                        <FormContainer style={{ alignItems: 'center' }}>
                            <FormLabel>Time Slot</FormLabel>
                            <TextField
                                label="Enter your time slot"
                                size="small"
                                multiline
                                rows={6}
                                value={timeslot}
                                onChange={(e) => setTimeslot(e.target.value)}
                                style={{ minWidth: '50%' }}
                            />
                        </FormContainer>
                        <FormContainer style={{ alignItems: 'center' }}>
                            <FormLabel>Location</FormLabel>
                            <TextField
                                label="Enter your location"
                                size="small"
                                multiline
                                rows={6}
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                style={{ minWidth: '50%' }}
                            />
                        </FormContainer>
                        <FormContainer style={{ alignItems: 'center' }}>
                            <FormLabel>Fee Per Session</FormLabel>
                            <TextField
                                label="Enter your fee per session"
                                size="small"
                                value={feePerSession}
                                onChange={(e) => setFeePerSession(e.target.value)}
                                style={{ minWidth: '50%' }}
                            />
                        </FormContainer>
                    </ContentContainer>
                    <InnerContainer>
                        {image ? (
                            <DisplayImageAfter
                                src={image}
                                alt="uploadimage"
                            />
                        ) : (
                            <DisplayImageBefore
                                src={coach.file}
                                alt="uploadimage"
                            />
                        )}
                        <input
                            type="file"
                            ref={inputRef}
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                            accept="image/*"
                        />
                        <StyledButton
                            onClick={handleSelectImage}
                            style={{ color: COLORS['semantic-blue'], cursor: 'pointer' }}
                        >
                            Select Image
                        </StyledButton>
                    </InnerContainer>
                </HorizontalContainer>
                <div style={{ alignSelf: 'flex-end' }}>
                    <Button
                        style={PlatformReusableStyles.PrimaryButtonStyles}
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </div>
            </CompReusableStyles.BorderContainer>
        </Container>
    );
}
