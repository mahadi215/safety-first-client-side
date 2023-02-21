import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const location = useLocation();
    const token = localStorage.getItem('safe-token');

    // if (!token) {
    //     return <progress className="progress w-56 my-20"></progress>;
    // }

    if (token) {
        return children;
    }

    return <Navigate to="/admin@saefty/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;