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
            errors.emailTel = 'Email address / Mobile Number is required';
        } else if (!emailTelPattern.test(values.emailTel)) {
            errors.emailTel = 'Please enter a valid email address or mobile number.';
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

    return errors;
}
