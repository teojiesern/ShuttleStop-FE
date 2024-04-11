import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppColdStartContext from '../../app/data/AppColdStartContext';

export default function AuthenticatedRoute({ children }) {
    const { isLogin } = useContext(AppColdStartContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogin) {
            navigate('/authentication/login', { replace: true });
        }
    }, [isLogin, navigate]);

    return children;
}
