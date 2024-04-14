import { Route } from 'react-router-dom';
import ForgotPassword from '../view/Screen/ForgotPassword';
import Login from '../view/Screen/Login';
import ResetPassword from '../view/Screen/ResetPassword';
import Signup from '../view/Screen/Signup';
import Verification from '../view/Screen/Verification';

const CIAMScreens = (
    <>
        <Route
            path="/authentication/login"
            element={<Login />}
        />
        <Route
            path="/authentication/signup"
            element={<Signup />}
        />
        <Route
            path="login/forgot-password"
            element={<ForgotPassword />}
        />

        <Route
            path="login/forgot-password/verification"
            element={<Verification />}
        />

        <Route
            path="login/forgot-password/verification/reset-password"
            element={<ResetPassword />}
        />
    </>
);

export default CIAMScreens;
