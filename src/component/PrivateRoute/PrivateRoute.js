import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	
	
      
};

export default PrivateRoute;