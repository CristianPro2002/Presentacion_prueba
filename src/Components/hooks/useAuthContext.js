import {useContext} from 'react';
import {AuthContext} from '../../stateManagement/authContexts';

export default function useAuthContext(){
    const isAuthenticated = useContext(AuthContext);
    return isAuthenticated;
}