import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AppColdStartContext from '../../app/data/AppColdStartContext';

export default function SellerCenterAuthenticatedRoute() {
    const { isLogin, registeredSeller } = useContext(AppColdStartContext);
    const navigate = useNavigate();

    useEffect(() => {
        // TODO: Uncomment once login is implemented
        // if (!isLogin) {
        //     navigate('/authentication/login', { replace: true });
        //     return;
        // }

        if (!registeredSeller) {
            navigate('/seller-center/registration', { replace: true });
        }
    }, [isLogin, navigate, registeredSeller]);

    return <Outlet />;
}
