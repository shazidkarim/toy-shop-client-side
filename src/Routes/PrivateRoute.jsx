/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {

    const { user, loding } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if (loding) {
        return <progress className="progress w-56"></progress>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;