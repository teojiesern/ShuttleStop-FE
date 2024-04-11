import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppColdStartContext from '../../app/data/AppColdStartContext';

export default function SellerCenterAuthenticatedRoute({ children }) {
    const { isLogin, registeredSeller } = useContext(AppColdStartContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogin) {
            navigate('/authentication/login', { replace: true });
            return;
        }

        if (!registeredSeller) {
            navigate('/seller-center/registration', { replace: true });
        }
    }, [isLogin, navigate, registeredSeller]);

    return children;
}
