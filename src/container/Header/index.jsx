// import React from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Box,
//   Button,
//   IconButton,
//   TextField,
// } from '@mui/material';
// import { URLS } from '../../constant/url';
// import { Link } from 'react-router-dom';
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneIcon from '@mui/icons-material/Phone';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import SearchIcon from '@mui/icons-material/Search';

// const Header = () => {
//     return (
//       <>
//         {/* Top Bar */}
//         <AppBar position="static" sx={{ backgroundColor: "#6B21A8" }}>
//           <Toolbar variant="dense" sx={{
//             maxWidth: "1177px",
//             width: "100%",
//             margin: "0 auto",
//             minHeight: "40px" // Ensures consistent height
//           }}>
//             <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
//               <Typography variant="body2" sx={{ display: "flex", alignItems: "center", mr: 2 }}>
//                 <EmailIcon sx={{ fontSize: "small", mr: 0.5 }} />
//                 mhhasanul@gmail.com
//               </Typography>
//               <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
//                 <PhoneIcon sx={{ fontSize: "small", mr: 0.5 }} />
//                 (12345)67890
//               </Typography>
//             </Box>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//               <Button color="inherit" size="small">Login</Button>
//               <Button color="inherit" size="small">Wishlist</Button>
//               <IconButton color="inherit" size="small">
//                 <ShoppingCartIcon sx={{ fontSize: "20px" }} />
//               </IconButton>
//             </Box>
//           </Toolbar>
//         </AppBar>

//         {/* Main Navigation */}
//         <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: 1 }}>
//           <Toolbar sx={{
//             maxWidth: "1177px",
//             width: "100%",
//             margin: "0 auto",
//             minHeight: "40px" // Ensures consistent height
//           }}>
//             <Typography variant="h4" sx={{ color: "black", flexGrow: 1 }}>
//               Hekto
//             </Typography>
//             <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
//               <Button sx={{ color: "black" }}>Home</Button>
//               <Button sx={{ color: "black" }}>Shop</Button>
//               <Button sx={{ color: "black" }}>Products</Button>
//               <Button sx={{ color: "black" }}>Contact</Button>
//               <Box sx={{ display: "flex", alignItems: "center" }}>
//                 <TextField
//                   size="small"
//                   placeholder="1920 x 44"
//                   sx={{
//                     width: "160px",
//                     '& .MuiOutlinedInput-root': {
//                       borderRadius: '4px 0 0 4px',
//                       height: "40px"
//                     }
//                   }}
//                 />
//                 <Button
//                   variant="contained"
//                   sx={{
//                     backgroundColor: "#FB2E86",
//                     borderRadius: '0 4px 4px 0',
//                     minWidth: '40px',
//                     height: "40px",
//                     '&:hover': {
//                       backgroundColor: "#e91e63"
//                     }
//                   }}
//                 >
//                   <SearchIcon />
//                 </Button>
//               </Box>
//             </Box>
//           </Toolbar>
//         </AppBar>
//       </>
//     );
//   };
//   export default Header;
import React from "react";
import { useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { URLS } from "../../constant/url";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { logout } from "../../redux/slices/Auth.slice";
import { selectIsAuthenticated } from "../../redux/slices/Auth.slice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const searchInputRef = useRef("");

  const handleSearch = (event) => {
    event.preventDefault();
    const searchQuery = searchInputRef.current.value.trim();
    console.log("searchQuery", searchQuery);
    
    // if (searchQuery) {
    //   navigate(`${URLS.Product}?search=${searchQuery}`);
    // } else {
    //   navigate(URLS.Product);
    // }
  };

  const handleSubmit = (e) => {
    console.log("handleSubmit");
    e.preventDefault();
    handleSearch(e);
  };
  const handleLogout = () => {
    dispatch(logout());
    navigate(URLS.Login);
  };
  return (
    <>
      {/* Top Bar */}
      <AppBar position="static" sx={{ backgroundColor: "#7E33E0" }}>
        <Toolbar
          variant="dense"
          sx={{
            maxWidth: "1177px",
            width: "100%",
            margin: "0 auto",
            minHeight: "40px",
          }}
        >
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center", mr: 2 }}
            >
              <EmailIcon sx={{ fontSize: "small", mr: 0.5 }} />
              mhhasanul@gmail.com
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <PhoneIcon sx={{ fontSize: "small", mr: 0.5 }} />
              (12345)67890
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {isAuthenticated ? (
              <Button
                color="inherit"
                size="small"
                onClick={handleLogout}
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                Logout
              </Button>
            ) : (
              <Button
                component={Link}
                to={URLS.Login}
                color="inherit"
                size="small"
              >
                Login
              </Button>
            )}
            <Button color="inherit" size="small">
              Wishlist
            </Button>
            <IconButton
              component={Link}
              to={URLS.Cart}
              color="inherit"
              size="small"
            >
              <ShoppingCartIcon sx={{ fontSize: "20px" }} />
            </IconButton>
            {/* <Button 
            component={Link} 
            to={URLS.Login} 
            color="inherit" 
            size="small"
          >
            Login
          </Button>
            
              <Button color="inherit" size="small">Wishlist</Button>
              <IconButton 
            component={Link} 
            to={URLS.Cart} 
            color="inherit" 
            size="small"
          >
            <ShoppingCartIcon sx={{ fontSize: "20px" }} />
          </IconButton> */}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Navigation */}
      <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: 1 }}>
        <Toolbar
          sx={{
            maxWidth: "1177px",
            width: "100%",
            margin: "0 auto",
            minHeight: "40px",
          }}
        >
          <Typography variant="h4" sx={{ color: "black", flexGrow: 1 }}>
            Hekto
          </Typography>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Button component={Link} to={URLS.Home} sx={{ color: "black" }}>
              Home
            </Button>
            <Button component={Link} to={URLS.Pages} sx={{ color: "black" }}>
              Pages
            </Button>
            <Button component={Link} to={URLS.Product} sx={{ color: "black" }}>
              Products
            </Button>
            <Button component={Link} to={URLS.Contact} sx={{ color: "black" }}>
              Contact
            </Button>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* <TextField 
                  size="small"
                  // placeholder="1920 x 44"
                  sx={{ 
                    width: "160px",
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '4px 0 0 4px',
                      height: "40px"
                    }
                  }}
                /> */}
                  <Box 
              component="form" 
              onSubmit={handleSubmit}
              sx={{ 
                display: "flex", 
                alignItems: "center" 
              }}
            ></Box>
              <TextField
                size="small"
              
                inputRef={searchInputRef}
                placeholder="Search products..."
                // onClick={handleSearch}
                // onKeyPress={(e) => {
                //   if (e.key === "Enter") {
                //     handleSearch(e);
                //   }
                // }}
                sx={{
                  width: "160px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "4px 0 0 4px",
                    height: "40px",
                  },
                }}
              />
              <Button
                variant="contained"
                onClick={handleSearch}
                sx={{
                  backgroundColor: "#FB2E86",
                  borderRadius: "0 4px 4px 0",
                  minWidth: "40px",
                  height: "40px",
                  "&:hover": {
                    backgroundColor: "#e91e63",
                  },
                }}
              >
                <SearchIcon />
              </Button>
              {/* <Button 
                  variant="contained" 
                  onClick={handleSearch}
           
                  sx={{ 
                    backgroundColor: "#FB2E86",
                    borderRadius: '0 4px 4px 0',
                    minWidth: '40px',
                    height: "40px",
                    '&:hover': {
                      backgroundColor: "#e91e63"
                    }
                  }}
                >
                  <SearchIcon />
                </Button> */}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
