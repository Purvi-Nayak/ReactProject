import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../redux/slices/Auth.slice';
import { URLS } from '../constant/url';

const withPublic = (WrappedComponent) => {
    const WithPublicComponent = (props) => {
        const location = useLocation();
        const isAuthenticated = useSelector(selectIsAuthenticated);
        
        
        const isRestrictedAction = location.state?.requiresAuth;
        
        if (isRestrictedAction && !isAuthenticated) {
    
            return <Navigate 
                to={URLS.Login} 
                replace 
                state={{ from: location }} 
            />;
        }
        
        // Allow access to public components
        return <WrappedComponent {...props} />;
    };

    WithPublicComponent.displayName = `withPublic(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return WithPublicComponent;
};

export default withPublic;