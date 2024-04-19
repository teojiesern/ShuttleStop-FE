import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../platform/style/PlatformReusableStyles';
import UploadImage from '../assets/upload-image.svg';

const OuterContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    gap: 2rem;
`;

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    width: 100%;
`;

const FormLabel = styled.label`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
    color: ${COLORS.darkGrey};
    text-align: right;
    display: inline-block;
    width: 200px;
`;

const RadioLabel = styled.span`
    font-size: ${FONTSIZE.small};
    font-weight: ${FONTWEIGHT.REGULAR};
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
`;

const DisplayImageAfter = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 100%;
`;

export default function MyProfile() {
    const inputRef = useRef(null);
    const [image, setImage] = useState('');

    const handleSelectImage = () => {
        inputRef.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setImage(event.target.files[0]);
    };
    // const [gender, setGender] = useState('');

    // const handleGenderChange = (event) => {
    //     setGender(event.target.value);
    // };

    return (
        <OuterContainer>
            <InnerContainer style={{ width: '80%' }}>
                <ContentContainer>
                    <FormLabel>Username</FormLabel>
                    <TextField
                        label="Enter your username"
                        size="small"
                        style={{ minWidth: '60%' }}
                    />
                </ContentContainer>

                <ContentContainer>
                    <FormLabel>Name</FormLabel>
                    <TextField
                        label="Enter your name"
                        size="small"
                        style={{ minWidth: '60%' }}
                    />
                </ContentContainer>

                <ContentContainer>
                    <FormLabel>Email</FormLabel>
                    <TextField
                        label="Enter your email"
                        size="small"
                        style={{ minWidth: '60%' }}
                    />
                </ContentContainer>

                <ContentContainer>
                    <FormLabel>Phone number</FormLabel>
                    <TextField
                        label="Enter your phone number"
                        size="small"
                        style={{ minWidth: '60%' }}
                    />
                </ContentContainer>

                <ContentContainer>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                        // value={gender}
                        // onChange={handleGenderChange}
                        style={{ display: 'flex', flexDirection: 'row' }}
                    >
                        <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label={<RadioLabel>Male</RadioLabel>}
                        />
                        <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label={<RadioLabel>Female</RadioLabel>}
                        />
                    </RadioGroup>
                </ContentContainer>

                <ContentContainer>
                    <FormLabel>Birthday</FormLabel>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                    </LocalizationProvider>
                </ContentContainer>

                <ContentContainer>
                    <FormLabel />
                    <Button style={{ ...PlatformReusableStyles.PrimaryButtonStyles, padding: '.5rem 1rem' }}>
                        Save
                    </Button>
                </ContentContainer>
            </InnerContainer>

            <InnerContainer style={{ width: '20%' }}>
                {image ? (
                    <DisplayImageAfter
                        src={URL.createObjectURL(image)}
                        alt="uploadimage"
                    />
                ) : (
                    <DisplayImageBefore
                        src={UploadImage}
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
        </OuterContainer>
    );
}
