import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Link,
  Chip,
  CircularProgress
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { api } from '../../api/client';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/Cart.slice';


const ProductDetail = () => {
     const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


    //  const handleAddToCart = (product) => {
    //       alert("Product added to cart");
      
    //       // Check if the product is already in the cart
         
    //     dispatch(cartActions.addToCart({
    //       id: product.id,
    //       title: product.title,
    //       price: product.price,
    //       image: product.image,
    //       color: product.color,
    //     }));
    //     navigate('/cart');
    //   };
  
    useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await api.PRODUCTS.getById({ id });
        console.log('Product response:', response);
        
        // Check if response has the correct structure
        if (response.status === 'SUCCESS' && response.product) {
          setProduct(response.product);
        } else {
          setError('Product data not found');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        setError(error.message || 'Failed to load product');
      } finally {
        setLoading(false);
      }
    };
    
    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '60vh' 
      }}>
        <CircularProgress sx={{ color: '#FB2E86' }} />
      </Box>
    );
  }

  if (error || !product) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '60vh',
        flexDirection: 'column',
        gap: 2
      }}>
        <Typography color="error">
          {error || 'Product not found'}
        </Typography>
        <Button 
          onClick={() => navigate(-1)}
          startIcon={<ArrowBackIcon />}
        >
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 4, backgroundColor: '#F6F7FB' }}>
    <Container maxWidth="xl">
      {/* Breadcrumb and Back Button */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <IconButton onClick={() => navigate(-1)} sx={{ mr: 2, color: '#151875' }}>
          <ArrowBackIcon />
        </IconButton>
        <Breadcrumbs aria-label="breadcrumb">
          <Link component="button" onClick={() => navigate('/')} sx={{ color: '#151875', textDecoration: 'none' }}>
            Home
          </Link>
          <Link component="button" onClick={() => navigate('/products')} sx={{ color: '#151875', textDecoration: 'none' }}>
            Products
          </Link>
          <Typography color="text.primary">{product.title}</Typography>
        </Breadcrumbs>
      </Box>

      {/* Product Details */}
      <Box sx={{ display: 'flex', gap: 4, backgroundColor: '#fdf6f6', borderRadius: 2, p: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
        {/* Left Side - Image */}
        <Box sx={{ flex: 1, position: 'relative' }}>
          <Box
            component="img"
            src={product.image}
            alt={product.title}
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: '500px',
              objectFit: 'contain',
            }}
          />
          {product.discount > 0 && (
            <Chip
              label={`-${product.discount}%`}
              color="error"
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                backgroundColor: '#FB2E86',
              }}
            />
          )}
        </Box>

        {/* Right Side - Details */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ color: '#151875', fontWeight: 600, mb: 2 }}>
            {product.title}
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <Chip label={product.brand} variant="outlined" sx={{ borderColor: '#FB2E86', color: '#151875' }} />
            <Chip label={product.color} sx={{ backgroundColor: '#F6F7FB', color: '#151875' }} />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Typography variant="h4" sx={{ color: '#FB2E86', fontWeight: 600 }}>
              ${product.price}
            </Typography>
            {product.discount > 0 && (
              <Typography variant="h6" sx={{ textDecoration: 'line-through', color: '#151875', opacity: 0.5 }}>
                ${(product.price / (1 - product.discount / 100)).toFixed(2)}
              </Typography>
            )}
          </Box>

          <Typography variant="body1" sx={{ color: '#151875', mb: 4, lineHeight: 1.8 }}>
            {product.description}
          </Typography>

          <Button
            variant="contained"
            onClick={() => handleAddToCart(product)}
            startIcon={<ShoppingCartIcon />}
            sx={{
              backgroundColor: '#FB2E86',
              '&:hover': {
                backgroundColor: '#e91e63',
              },
              px: 4,
              py: 1.5,
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Container>
  </Box>
    // <Box sx={{ py: 4, backgroundColor: '#F6F7FB' }}>
    //   <Container maxWidth="xl">
    //     {/* Breadcrumb and Back Button */}
    //     <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
    //       <IconButton 
    //         onClick={() => navigate(-1)}
    //         sx={{ mr: 2, color: '#151875' }}
    //       >
    //         <ArrowBackIcon />
    //       </IconButton>
    //       <Breadcrumbs aria-label="breadcrumb">
    //         <Link 
    //           underline="hover" 
    //           color="inherit" 
    //           href="/"
    //           sx={{ color: '#151875' }}
    //         >
    //           Home
    //         </Link>
    //         <Link
    //           underline="hover"
    //           color="inherit"
    //           href="/products"
    //           sx={{ color: '#151875' }}
    //         >
    //           Products
    //         </Link>
    //         <Typography color="text.primary">{product.title}</Typography>
    //       </Breadcrumbs>
    //     </Box>

    //     {/* Product Details */}
    //     <Box sx={{ 
    //       display: 'flex', 
    //       gap: 4,
    //       backgroundColor: '#fff',
    //       borderRadius: 2,
    //       p: 4,
    //       boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    //     }}>
    //       {/* Left Side - Image */}
    //       <Box sx={{ flex: 1, position: 'relative' }}>
    //         <Box 
    //           component="img"
    //           src={product.image}
    //           alt={product.title}
    //           sx={{
    //             width: '100%',
    //             height: 'auto',
    //             maxHeight: '500px',
    //             objectFit: 'contain',
    //           }}
    //         />
    //         {product.discount > 0 && (
    //           <Chip
    //             label={`-${product.discount}%`}
    //             color="error"
    //             sx={{
    //               position: 'absolute',
    //               top: 16,
    //               right: 16,
    //               backgroundColor: '#FB2E86',
    //             }}
    //           />
    //         )}
    //       </Box>

    //       {/* Right Side - Details */}
    //       <Box sx={{ flex: 1 }}>
    //         <Typography 
    //           variant="h4" 
    //           sx={{ 
    //             color: '#151875',
    //             fontWeight: 600,
    //             mb: 2 
    //           }}
    //         >
    //           {product.title}
    //         </Typography>

    //         <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
    //           <Chip 
    //             label={product.brand} 
    //             variant="outlined"
    //             sx={{ 
    //               borderColor: '#FB2E86',
    //               color: '#151875'
    //             }}
    //           />
    //           <Chip 
    //             label={product.color}
    //             sx={{ 
    //               backgroundColor: '#F6F7FB',
    //               color: '#151875'
    //             }}
    //           />
    //         </Box>

    //         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
    //           <Typography 
    //             variant="h4" 
    //             sx={{ 
    //               color: '#FB2E86',
    //               fontWeight: 600 
    //             }}
    //           >
    //             ${product.price}
    //           </Typography>
    //           {product.discount > 0 && (
    //             <Typography 
    //               variant="h6" 
    //               sx={{ 
    //                 textDecoration: 'line-through',
    //                 color: '#151875',
    //                 opacity: 0.5
    //               }}
    //             >
    //               ${(product.price / (1 - product.discount/100)).toFixed(2)}
    //             </Typography>
    //           )}
    //         </Box>

    //         <Typography 
    //           variant="body1" 
    //           sx={{ 
    //             color: '#151875',
    //             mb: 4,
    //             lineHeight: 1.8 
    //           }}
    //         >
    //           {product.description}
    //         </Typography>

    //         <Button
    //           variant="contained"
    //           startIcon={<ShoppingCartIcon />}
    //           sx={{
    //             backgroundColor: '#FB2E86',
    //             '&:hover': {
    //               backgroundColor: '#e91e63',
    //             },
    //             px: 4,
    //             py: 1.5,
    //           }}
    //         >
    //           Add to Cart
    //         </Button>
    //       </Box>
    //     </Box>
    //   </Container>
    // </Box>
  );
};


export default ProductDetail;