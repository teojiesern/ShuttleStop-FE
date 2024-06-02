export default function Validation(values) {
    const errors = {};

    // username
    if ('username' in values) {
        if (values.username === '') {
            errors.username = 'Username is required';
        } else if (!/^[a-zA-Z0-9_]+$/.test(values.username)) {
            errors.username = 'Username should contain only alphanumeric characters and underscores.';
        } else if (values.username.length < 3 || values.username.length > 16) {
            errors.username = 'Username should be between 3 and 16 characters in length.';
        }
    }

    // email tel
    if ('emailTel' in values) {
        const emailTelPattern =
            /^(?:[\p{L}\p{M}\p{N}\p{P}\p{S}@._%+-]{1,256}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}|(?:\+?\d{1,3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})$/u;

        if (values.emailTel === '') {
            errors.emailTel = 'Email address is required';
        } else if (!emailTelPattern.test(values.emailTel)) {
            errors.emailTel = 'Please enter a valid email address.';
        }
    }

    // password
    if ('password' in values) {
        if (values.password === '') {
            errors.password = 'Password is required.';
        } else if (values.password.length < 8) {
            errors.password = 'Password should be at least eight characters long. ';
        } else if (!/[A-Z]/.test(values.password)) {
            errors.password = 'Password should contain at least one uppercase letter.';
        } else if (!/[a-z]/.test(values.password)) {
            errors.password = 'Password should contain at least one lowercase letter.';
        } else if (!/\d/.test(values.password)) {
            errors.password = 'Password should contain at least one digit.';
        } else if (!/[@$!%*?&]/.test(values.password)) {
            errors.password = 'Password should contain at least one special character: @$!%*?&';
        } else if (values.password.length > 64) {
            errors.password = 'Password cannot exceed 64 characters.';
        }
    }

    // phoneNo
    if ('phoneNo' in values) {
        const phoneNoPattern = /^01[0-9]{8,9}$/;
        if (values.phoneNo === '') {
            errors.phoneNo = 'Phone number is required';
        } else if (!phoneNoPattern.test(values.phoneNo)) {
            errors.phoneNo = 'Phone number must be in the format 01XXXXXXXXX';
        }
    }

    // address
    if ('address' in values) {
        if (!values.address.street || values.address.street === '') {
            errors.address = { ...errors.address, street: 'Street is required' };
        }
        if (!values.address.city || values.address.city === '') {
            errors.address = { ...errors.address, city: 'City is required' };
        }
        if (!values.address.country || values.address.country === '') {
            errors.address = { ...errors.address, country: 'Country is required' };
        }
        if (!values.address.state || values.address.state === '') {
            errors.address = { ...errors.address, state: 'State is required' };
        }
        if (!values.address.postcode || values.address.postcode.length === 0) {
            errors.address = { ...errors.address, postcode: 'Postcode is required' };
        } else if (values.address.postcode.length !== 5) {
            errors.address = { ...errors.address, postcode: 'Postcode must be exactly 5 digits' };
        }
    }

    return errors;
}
