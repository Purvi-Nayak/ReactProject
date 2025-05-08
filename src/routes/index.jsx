// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { URLS } from "../constant/url";

// // Layouts
// import AuthLayout from "../layout/auth-layout";
// import PrivateLayout from "../layout/private-layout";
// import PublicLayout from "../layout/public-layout";

// // Pages
// import Login from "../container/auth/login";
// import Home from "../screens/Home/index.jsx";
// import HeroSection from "../container/heroSection";
// import Cart from "../screens/Cart/index.jsx";
// import Contact from "../screens/contact/index.jsx";

// const AppRoutes = () => {
//   return (
//     <Routes>
  
//       <Route element={<PublicLayout />}>
//         <Route path={URLS.Home} element={<Home/>} />
      
//       </Route>

//       {/* Auth Routes */}
//       <Route element={<AuthLayout />}>
//         <Route path={URLS.Login} element={<Login />} />
//       </Route>

//       {/* Private Routes */}
//       <Route element={<PrivateLayout />}>
//         <Route path={URLS.Cart} element={<Cart/>} />
//         <Route path={URLS.Contact} element={<Contact/>} />
//       </Route>

//       {/* 404 Route */}
//       <Route path="*" element={
//         <div style={{ 
//           height: '100vh', 
//           display: 'flex', 
//           alignItems: 'center', 
//           justifyContent: 'center' 
//         }}>
//           <h1>404 | Page Not Found</h1>
//         </div>
//       } />
//     </Routes>
//   );
// };

// export default AppRoutes;
import React from "react";
import { Routes, Route } from "react-router-dom";
import { URLS } from "../constant/url";

// Layouts
import BaseLayout from "../layout/baseLayout";
import AuthLayout from "../layout/auth-layout";
import PrivateLayout from "../layout/private-layout";
import PublicLayout from "../layout/public-layout";

// Pages
import Login from "../container/auth/login";
import Home from "../screens/Home";
import Product from "../screens/Product";
import Cart from "../screens/Cart";
import Contact from "../screens/contact";
// import Shop from "../screens/Shop";
import Pages from "../screens/Pages";
import ProductDetail from "../screens/ProductDetail";
import OrderComplete from "../screens/CheckOut";
import Error from "../screens/Error";
const AppRoutes = () => {
  return (
    <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path={URLS.Home} element={<Home/>} />
    
        {/* Private Routes */}
        <Route element={<PrivateLayout />}>
          <Route path={URLS.Cart} element={<Cart />} />
          <Route path={URLS.Contact} element={<Contact />} />
          <Route path={URLS.Product} element={<Product/>} />
          <Route path="/products/:id" element={<ProductDetail />} />
          {/* <Route path={`${URLS.Products}/:id`} element={<ProductDetail />} /> */}
          <Route path={URLS.Pages} element={<Pages/>} />
          <Route path={URLS.OrderComplete} element={<OrderComplete/>} />
        </Route>
      </Route>

      {/* Auth Routes (without Header/Footer) */}
      <Route element={<AuthLayout />}>
        <Route path={URLS.Login} element={<Login />} />
      </Route>

      {/* 404 Route */}
      <Route path="*" element={
        <div style={{ 
          height: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
     <Error/>
        </div>
      } />
    </Routes>
  );
};

export default AppRoutes;