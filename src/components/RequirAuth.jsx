import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../src/context/AuthContext';

/*======================================*/
/*======================================*/
/*======================================*/

// this in order to protect the route of [account page]
const RequirAuth = ({ children }) => {

    const { existUser } = useContext(AuthContext);

    const location = useLocation();

    // if no user or logout the user
    if (!existUser) {

        return <Navigate to="/" state={{ path: location.pathname }} />

    }

    return children;

}

export default RequirAuth;