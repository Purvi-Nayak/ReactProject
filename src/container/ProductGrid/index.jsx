
import React from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Container,
  Rating,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShareIcon from "@mui/icons-material/Share";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch,useSelector } from "react-redux";
import { cartActions } from "../../redux/slices/Cart.slice";
import { useLocation } from 'react-router-dom';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { Menu, MenuItem, ListItemText } from "@mui/material";
import { useState ,useEffect} from "react";
import { Snackbar, Alert } from '@mui/material';


const ProductGrid = ({ products }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search');
    
    if (search) {
      console.log('search', search);
      setSearchQuery(search);
      const filtered = products.filter(product => 
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description?.toLowerCase().includes(search.toLowerCase()) ||
        product.category?.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [products, location.search]);
  const handleShareClick = (event, product) => {
    setAnchorEl(event.currentTarget);
    setSelectedProduct(product);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSelectedProduct(null);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (product) => {
    if (isAuthenticated) {
     
      dispatch(cartActions.addToCart(product));
      setSnackbarMessage('visit Items for Shopping');
      setAlertSeverity('success');
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate('/pages');
      }, 1500);
    } else {
      setSnackbarMessage('Please login to add items to the cart');
      setAlertSeverity('warning');
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    }
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ py: 6, bgcolor: "#F6F7FB" }}>

  <Snackbar
    open={openSnackbar}
    autoHideDuration={1500}
    onClose={handleCloseSnackbar}
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
  >
    <Alert
      onClose={handleCloseSnackbar}
      severity={alertSeverity}
      sx={{
        width: '100%',
        '& .MuiAlert-message': {
          fontSize: '1rem',
        },
        backgroundColor: alertSeverity === 'success' ? '#4CAF50' : '#FF9800',
        color: 'white',
        '& .MuiAlert-icon': {
          color: 'white'
        }
      }}
    >
      {snackbarMessage}
    </Alert>
  </Snackbar>

      <Container maxWidth="xl">
        {/* <Typography
          variant="h4"
          sx={{ color: "#151875", mb: 4, textAlign: "center" }}
        >
          Featured Products
        </Typography> */}
       <Typography
          variant="h4"
          sx={{ color: "#151875", mb: 4, textAlign: "center" }}
        >
          {filteredProducts.length === products.length 
            ? "Featured Products" 
            : `Search Results (${filteredProducts.length} items)`}
        </Typography>
        {filteredProducts.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h6" color="textSecondary">
              No products found matching your search.
            </Typography>
          </Box>
        ) : (
        <Grid container spacing={4}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} md={6} key={product.id}>
              <Card
                sx={{
                  width: "100%",
                  height: 487,
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  transition: "all 0.3s ease",
                  boxShadow: "0px 8px 40px rgba(49, 32, 138, 0.05)",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 8px 40px rgba(49, 32, 138, 0.15)",
                    "& .product-actions": {
                      opacity: 1,
                    },
                  },
                }}
              >
                <Box sx={{ position: "relative", height: 487 }}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.title}
                    sx={{
                      height: "50%",
                      objectFit: "contain",
                      p: 3,
                    }}
                  />
                  <Box
                    className="product-actions"
                    sx={{
                      position: "absolute",
                      right: 16,
                      top: "40%",
                      transform: "translateY(-50%)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <IconButton
                      size="medium"
                      onClick={handleClick}
                      sx={{
                        bgcolor: "white",
                        boxShadow: 2,
                        "&:hover": { bgcolor: "#FB2E86", color: "white" },
                      }}
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                    
                      {/* <FavoriteBorderIcon /> */}
                   
                    <IconButton
                      onClick={(event) => handleShareClick(event, product)}
                      size="medium"
                      sx={{
                        bgcolor: "white",
                        boxShadow: 2,
                        "&:hover": { bgcolor: "#FB2E86", color: "white" },
                      }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "center",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "center",
                        horizontal: "left",
                      }}
                    >
                      <MenuItem>
                        <FacebookShareButton
                          url={`${window.location.origin}/product/${selectedProduct?.id}`}
                          quote={selectedProduct?.title}
                          hashtag="#ecommerce"
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <FacebookIcon size={32} round />
                            <ListItemText>Share on Facebook</ListItemText>
                          </Box>
                        </FacebookShareButton>
                      </MenuItem>

                      <MenuItem>
                        <TwitterShareButton
                          url={`${window.location.origin}/product/${selectedProduct?.id}`}
                          title={selectedProduct?.title}
                          hashtags={["ecommerce", "shopping"]}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <TwitterIcon size={32} round />
                            <ListItemText>Share on Twitter</ListItemText>
                          </Box>
                        </TwitterShareButton>
                      </MenuItem>
                      <MenuItem>
                        <WhatsappShareButton
                          url={`${window.location.origin}/product/${selectedProduct?.id}`}
                          title={selectedProduct?.title}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <WhatsappIcon size={32} round />
                            <ListItemText>Share on WhatsApp</ListItemText>
                          </Box>
                        </WhatsappShareButton>
                      </MenuItem>
                    </Menu>
                  </Box>

                  <CardContent
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      width: "100%",
                      bgcolor: "white",
                      p: 3,
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#151875",
                        fontWeight: 600,
                        mb: 1,
                        overflow: "scroll",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {product.title}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                        mb: 1,
                      }}
                    >
                      <Typography sx={{ color: "#FB2E86", fontWeight: 600 }}>
                        ${product.price}
                      </Typography>
                      {product.oldPrice && (
                        <Typography
                          sx={{
                            textDecoration: "line-through",
                            color: "#151875",
                            opacity: 0.5,
                          }}
                        >
                          ${product.oldPrice}
                        </Typography>
                      )}
                    </Box>
                    <Rating value={4} size="small" readOnly />
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
        )}
      </Container>
    </Box>
  );
};

export default ProductGrid;
