// import React from 'react'
// import { Navigate } from 'react-router-dom';
// import { URLS } from '../constant/urls';
// import { Outlet } from 'react-router-dom'

// const withAuth = (RenderComponent) => {
//     const WrappedComponent = (props) => {
//         const token = localStorage.getItem('token');
//         console.log('token :>> ', token);
//         if (token) {
//             return <Navigate to={URLS.USERS} replace />;
//         }
        
//         return <RenderComponent {...props} />;
//     };

   
//     WrappedComponent.displayName = `withAuth(${RenderComponent.displayName || RenderComponent.name || 'Component'})`;

//     return WrappedComponent;
// };

// export default withAuth;

// import React from 'react'
// import withAuth from '../hoc/with-auth'
// import { Outlet } from 'react-router-dom'

// // Simply apply the HOC to Outlet component
// const AuthLayout = withAuth(Outlet)

// export default AuthLayout
