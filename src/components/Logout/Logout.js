import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useEffect } from 'react';

const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuthContext();
    
    useEffect(() => {
        try{
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                navigate('/');
            })
        }catch(ex){
            console.log("cant log out");
        }
    }, [])

    return null;
};

export default Logout;