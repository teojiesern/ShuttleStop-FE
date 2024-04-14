import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CustomerStatusContext from '../../app/data/CustomerStatusContext';

export default function SellerCenterAuthenticatedRoute() {
    const { isLogin, registeredSeller } = useContext(CustomerStatusContext);
    const navigate = useNavigate();

    useEffect(() => {
        // TODO: Uncomment once login is implemented
        // if (!isLogin) {
        //     navigate('/authentication/login', { replace: true });
        //     return;
        // }
        // if (!registeredSeller) {
        //     navigate('/seller-center/registration', { replace: true });
        // }
    }, [isLogin, navigate, registeredSeller]);

    return <Outlet />;
}
