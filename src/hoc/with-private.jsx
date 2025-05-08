import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../redux/slices/Auth.slice';
import { URLS } from '../constant/url';

const withPrivate = (WrappedComponent) => {
  const WithPrivateComponent = (props) => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const location = useLocation();

    if (!isAuthenticated) {
      return <Navigate to={URLS.Login} replace state={{ from: location }} />;
    }

    return <WrappedComponent {...props} />;
  };

  WithPrivateComponent.displayName = `withPrivate(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithPrivateComponent;
};

export default withPrivate;