import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../../platform/Colors';
import FONTSIZE from '../../../platform/style/FontSize';
import FONTWEIGHT from '../../../platform/style/FontWeight';
import PlatformReusableStyles from '../../../platform/style/PlatformReusableStyles';
import FormValidation from '../../ciam/view/utils/FormValidation';
import useCustomer from '../../customer/view/hooks/useCustomer';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2.5rem;
`;
const HrContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: end;
`;
const Title = styled.p`
    color: ${COLORS.black};
    font-size: ${FONTSIZE.large};
    font-weight: ${FONTWEIGHT.BOLD};
`;

export default function EditAddressModal({ hideModal, customerInfo, setCustomerInfo }) {
    const [updatedValue, setUpdatedValue] = useState({});
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const { updateCustomer } = useCustomer();
    const addressFields = ['street', 'city', 'postcode', 'country', 'state'];

    const handleInput = (e) => {
        const { name, value } = e.target;
        if (addressFields.includes(name)) {
            setUpdatedValue((prevValue) => ({
                ...prevValue,
                address: {
                    ...customerInfo.address,
                    ...(prevValue.address || {}),
                    [name]: value,
                },
            }));
        } else {
            setUpdatedValue((prevValue) => ({ ...prevValue, [name]: value }));
        }
        if (submitted) {
            const fieldErrors = FormValidation({ ...updatedValue, [name]: value });
            if (addressFields.includes(name)) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    address: { ...prevErrors.address, [name]: fieldErrors[name] },
                }));
            } else {
                setErrors((prevErrors) => ({ ...prevErrors, [name]: fieldErrors[name] }));
            }
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (Object.keys(updatedValue).length === 0) {
            hideModal();
            return;
        }
        const formErrors = FormValidation(updatedValue);
        if (Object.keys(formErrors).length === 0) {
            await updateCustomer(updatedValue);
            setCustomerInfo((prevState) => ({
                ...prevState,
                customerInfo: {
                    ...prevState.customerInfo,
                    ...updatedValue,
                },
            }));
            setUpdatedValue({});
            setErrors({});
            setSubmitted(true);
            hideModal();
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <Wrapper>
            <Title>Edit Address</Title>
            <HrContainer>
                <TextField
                    fullWidth
                    required
                    name="username"
                    label={<span>username</span>}
                    size="small"
                    onChange={handleInput}
                    defaultValue={customerInfo.username}
                    error={!!errors.username}
                    helperText={errors.username}
                />
                <TextField
                    fullWidth
                    required
                    name="phoneNo"
                    label={<span>Phone Number</span>}
                    size="small"
                    onChange={handleInput}
                    defaultValue={customerInfo.phoneNo}
                    error={!!errors.phoneNo}
                    helperText={errors.phoneNo}
                />
            </HrContainer>
            <TextField
                fullWidth
                required
                name="street"
                label={<span>Address</span>}
                size="small"
                onChange={handleInput}
                defaultValue={customerInfo.address.street}
                error={Boolean(errors.address?.street)}
                helperText={errors.address?.street}
            />
            <TextField
                fullWidth
                label={<span>Address 2</span>}
                size="small"
            />
            <HrContainer>
                <TextField
                    fullWidth
                    required
                    name="city"
                    label={<span>City</span>}
                    size="small"
                    onChange={handleInput}
                    defaultValue={customerInfo.address.city}
                    error={Boolean(errors.address?.city)}
                    helperText={errors.address?.city || ''}
                />
                <TextField
                    fullWidth
                    required
                    name="postcode"
                    label={<span>Postal Code</span>}
                    size="small"
                    type="number"
                    onChange={handleInput}
                    defaultValue={customerInfo.address.postcode}
                    error={Boolean(errors.address?.postcode)}
                    helperText={errors.address?.postcode || ''}
                />
            </HrContainer>
            <HrContainer>
                <TextField
                    fullWidth
                    required
                    name="country"
                    label={<span>Country</span>}
                    size="small"
                    onChange={handleInput}
                    defaultValue={customerInfo.address.country}
                    error={Boolean(errors.address?.country)}
                    helperText={errors.address?.country || ''}
                />
                <TextField
                    fullWidth
                    required
                    name="state"
                    label={<span>State</span>}
                    size="small"
                    onChange={handleInput}
                    defaultValue={customerInfo.address.state}
                    error={Boolean(errors.address?.state)}
                    helperText={errors.address?.state || ''}
                />
            </HrContainer>
            <ButtonContainer>
                <Button
                    style={{ ...PlatformReusableStyles.SecondaryButtonStyles }}
                    onClick={hideModal}
                >
                    <p>CANCEL</p>
                </Button>
                <Button
                    style={{ ...PlatformReusableStyles.PrimaryButtonStyles }}
                    onClick={handleSubmit}
                >
                    <p>SAVE</p>
                </Button>
            </ButtonContainer>
        </Wrapper>
    );
}
