import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { URLS } from '../constant/url';

const withAuth = (RenderComponent) => {
    const WrappedComponent = (props) => {
        const token = localStorage.getItem('token');
        const location = useLocation();
        
   
        if (token) {
            return <Navigate to={URLS.Home} replace state={{ from: location }} />;
        }
        
        // If no token, render the component (login/register pages)
        return <RenderComponent {...props} />;
    };

    // Set displayName for debugging purposes
    WrappedComponent.displayName = `withAuth(${RenderComponent.displayName || RenderComponent.name || 'Component'})`;

    return WrappedComponent;
};

export default withAuth;
