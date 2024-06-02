import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import CustomerInfoContext from '../../../platform/app/data/CustomerInfoContext';
import TickedModal from '../../../platform/modal/TickedModal';
import useModal from '../../../platform/modal/useModal';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../platform/style/PlatformReusableStyles';
import FormValidation from '../../ciam/view/utils/FormValidation';
import UploadImage from './assets/upload-image.svg';
import useCustomer from './hooks/useCustomer';

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
    const { customerInfo, setCustomerInfo } = useContext(CustomerInfoContext);
    const [gender, setGender] = useState('');
    const { getCustomer, updateCustomer } = useCustomer();

    useEffect(() => {
        if (customerInfo && customerInfo.gender) {
            setGender(customerInfo.gender);
        }
    }, [customerInfo, setGender]);

    const inputRef = useRef(null);

    const [image, setImage] = useState(null);
    const [files, setFiles] = useState([{ name: '', preview: customerInfo.profileImgPath }]);
    const [updatedValue, setUpdatedValue] = useState({});
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const { showModal } = useModal();
    const handleSelectImage = () => {
        inputRef.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
            setFiles([{ name: file.name, preview: URL.createObjectURL(file) }]);
        }
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
        const { name, value } = e.target;
        setUpdatedValue({ ...updatedValue, [name]: value });
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUpdatedValue({ ...updatedValue, [name]: value });
        if (submitted) {
            const fieldErrors = FormValidation(updatedValue);
            setErrors((prevErrors) => ({ ...prevErrors, [name]: fieldErrors[name] }));
        }
    };

    const handleDateChange = (date) => {
        const formattedDate = new Date(date).toISOString();
        const updatedObj = { ...updatedValue, birthday: formattedDate };
        setUpdatedValue(updatedObj);
    };

    async function fetchData() {
        try {
            const customer = await getCustomer();
            setCustomerInfo({
                customerInfo: {
                    customerID: customer.customerId,
                    username: customer.username,
                    email: customer.email,
                    phoneNo: customer.phoneNo,
                    gender: customer.gender,
                    birthday: customer.birthday,
                    address: customer.address,
                    profileImgPath: customer.profileImgPath,
                },
                setCustomerInfo,
            });
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (Object.keys(updatedValue).length === 0 && !image) {
            return;
        }
        const formErrors = FormValidation(updatedValue);
        if (Object.keys(formErrors).length === 0) {
            await updateCustomer(updatedValue, image);
            setTimeout(fetchData, 1000);
            setUpdatedValue({});
            showModal({
                modal: <TickedModal title="Profile Saved" />,
                cmaxWidth: 'sm',
            });
            setErrors({});
            setSubmitted(true);
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <OuterContainer>
            <InnerContainer style={{ width: '80%' }}>
                <ContentContainer>
                    <FormLabel>Username</FormLabel>
                    <TextField
                        name="username"
                        label="Enter your username"
                        size="small"
                        style={{ minWidth: '60%' }}
                        onChange={handleInput}
                        defaultValue={customerInfo.username}
                        error={!!errors.username}
                        helperText={errors.username}
                    />
                </ContentContainer>

                <ContentContainer>
                    <FormLabel>Email</FormLabel>
                    <TextField
                        name="email"
                        label="Enter your email"
                        size="small"
                        style={{ minWidth: '60%' }}
                        onChange={handleInput}
                        defaultValue={customerInfo.email}
                        disabled
                    />
                </ContentContainer>

                <ContentContainer>
                    <FormLabel>Phone number</FormLabel>
                    <TextField
                        name="phoneNo"
                        label="Enter your phone number"
                        size="small"
                        style={{ minWidth: '60%' }}
                        onChange={handleInput}
                        defaultValue={customerInfo.phoneNo}
                        error={!!errors.phoneNo}
                        helperText={errors.phoneNo}
                    />
                </ContentContainer>

                <ContentContainer>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                        value={gender}
                        name="gender"
                        style={{ display: 'flex', flexDirection: 'row' }}
                        onChange={handleGenderChange}
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
                        <DatePicker
                            name="birthday"
                            onChange={handleDateChange}
                            defaultValue={customerInfo.birthday ? dayjs(customerInfo.birthday) : null}
                        />
                    </LocalizationProvider>
                </ContentContainer>

                <ContentContainer>
                    <FormLabel />
                    <Button
                        style={{ ...PlatformReusableStyles.PrimaryButtonStyles, padding: '.5rem 1rem' }}
                        onClick={handleSubmit}
                    >
                        Save
                    </Button>
                </ContentContainer>
            </InnerContainer>

            <InnerContainer style={{ width: '20%' }}>
                {files[0].preview.length > 'http://localhost:3000/'.length ? (
                    <DisplayImageAfter
                        src={files[0].preview}
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
