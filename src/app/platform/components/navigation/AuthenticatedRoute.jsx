import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CustomerStatusContext from '../../app/data/CustomerStatusContext';

export default function AuthenticatedRoute() {
    const { isLogin } = useContext(CustomerStatusContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogin) {
            navigate('/authentication/login', { replace: true });
        }
    }, [isLogin, navigate]);

    return <Outlet />;
}
