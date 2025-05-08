// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Container,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Tabs,
//   Tab,
// } from "@mui/material";
// import { api } from '../../api/client';

// // ...existing hero section code...

// const ProductSection = () => {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await api.PRODUCTS.getCategories({});
//         setCategories(response.data.categories);
//         if (response.data.categories.length > 0) {
//           setSelectedCategory(response.data.categories[0]);
//         }
//       } catch (error) {
//         console.log("Error fetching categories:", error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // Fetch products by category
//   useEffect(() => {
//     const fetchProducts = async () => {
//       if (!selectedCategory) return;
//       setLoading(true);
//       try {
//         const response = await api.PRODUCTS.getByCategory({ type: selectedCategory });
//         setProducts(response.data.products || []);
//       } catch (error) {
//         console.log("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, [selectedCategory]);
//   console.log('Categories:', categories);
//   console.log('Selected Category:', selectedCategory);
//   console.log('Products:', products);
//   // Fetch categories
// //   useEffect(() => {
// //     const fetchCategories = async () => {
// //       try {
// //         const response = await fetch("https://fakestoreapi.in/api/products/category");
// //         const data = await response.json();
// //         setCategories(data.categories);
// //         if (data.categories.length > 0) {
// //           setSelectedCategory(data.categories[0]);
// //         }
// //       } catch (error) {
// //         console.error("Error fetching categories:", error);
// //       }
// //     };
// //     fetchCategories();
// //   }, []);

// //   // Fetch products by category
// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       if (!selectedCategory) return;
// //       setLoading(true);
// //       try {
// //         const response = await fetch(`https://fakestoreapi.in/api/products/category?type=${selectedCategory}`);
// //         const data = await response.json();
// //         setProducts(data.products || []);
// //       } catch (error) {
// //         console.error("Error fetching products:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchProducts();
// //   }, [selectedCategory]);

//   return (
//     <Box sx={{ py: 8 }}>
//       <Container maxWidth="lg">
//         <Typography variant="h4" align="center" sx={{ mb: 4 }}>
//           Featured Products
//         </Typography>

//         {/* Category Tabs */}
//         <Tabs
//           value={selectedCategory}
//           onChange={(_, newValue) => setSelectedCategory(newValue)}
//           variant="scrollable"
//           scrollButtons="auto"
//           sx={{ mb: 4 }}
//         >
//           {categories.map((category) => (
//             <Tab
//               key={category}
//               label={category.charAt(0).toUpperCase() + category.slice(1)}
//               value={category}
//               sx={{
//                 textTransform: 'capitalize',
//                 '&.Mui-selected': { color: '#FB2E86' }
//               }}
//             />
//           ))}
//         </Tabs>

//         {/* Product Grid */}
//         <Grid container spacing={3}>
//           {products.map((product) => (
//             <Grid item xs={12} sm={6} md={3} key={product.id}>
//               <Card
//                 sx={{
//                   height: '100%',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   transition: 'transform 0.2s',
//                   '&:hover': {
//                     transform: 'translateY(-5px)',
//                     boxShadow: 3
//                   }
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image={product.image}
//                   alt={product.name}
//                   sx={{ objectFit: 'contain', p: 2 }}
//                 />
//                 <CardContent sx={{ flexGrow: 1 }}>
//                   <Typography variant="h6" component="h3" noWrap>
//                     {product.name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
//                     {product.category}
//                   </Typography>
//                   <Typography variant="h6" color="primary" sx={{ color: '#FB2E86' }}>
//                     ${product.price}
//                   </Typography>
//                 </CardContent>
//                 <CardActions sx={{ p: 2 }}>
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     sx={{
//                       bgcolor: '#FB2E86',
//                       '&:hover': { bgcolor: '#e91e63' },
//                       textTransform: 'none'
//                     }}
//                   >
//                     Add to Cart
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         {loading && (
//           <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
//             <Typography>Loading products...</Typography>
//           </Box>
//         )}
//       </Container>
//     </Box>
//   );
// };
// export default ProductSection;
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Tabs,
  Tab,
  CircularProgress,
  Chip
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/client";

const ProductSection = () => {
    const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };
  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.PRODUCTS.getCategories({});
        // Direct access since interceptor returns response.data
        console.log('Categories Response:', response);
        setCategories(response.categories || []);
        if (response.categories?.length > 0) {
          setSelectedCategory(response.categories[0]);
        }
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch products by category
  useEffect(() => {
    const fetchProducts = async () => {
      if (!selectedCategory) return;
      setLoading(true);
      try {
        const response = await api.PRODUCTS.getByCategory({ type: selectedCategory });
        // Direct access since interceptor returns response.data
        console.log('Products Response:', response);
        setProducts(response.products || []);
      } catch (error) {
        console.log("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  return (
    // <Box sx={{ py: 8 }}>
    //   <Container maxWidth="lg">
    //     <Typography variant="h4" align="center" sx={{ mb: 4 }}>
    //       Featured Products
    //     </Typography>

    //     {/* Category Tabs */}
    //     {categories.length > 0 ? (
    //       <Tabs
    //         value={selectedCategory}
    //         onChange={(_, newValue) => setSelectedCategory(newValue)}
    //         variant="scrollable"
    //         scrollButtons="auto"
    //         sx={{ mb: 4 }}
    //       >
    //         {categories.map((category) => (
    //           <Tab
    //             key={category}
    //             label={category.charAt(0).toUpperCase() + category.slice(1)}
    //             value={category}
    //             sx={{
    //               textTransform: 'capitalize',
    //               '&.Mui-selected': { color: '#FB2E86' }
    //             }}
    //           />
    //         ))}
    //       </Tabs>
    //     ) : (
    //       <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
    //         <CircularProgress sx={{ color: '#FB2E86' }} />
    //       </Box>
    //     )}

    //     {/* Product Grid */}
    //     <Grid container spacing={3}>
    //       {products.map((product) => (
    //         <Grid item xs={12} sm={6} md={3} key={product.id}>
    //           <Card
    //             sx={{
    //               height: '100%',
    //               display: 'flex',
    //               flexDirection: 'column',
    //               transition: 'transform 0.2s',
    //               '&:hover': {
    //                 transform: 'translateY(-5px)',
    //                 boxShadow: 3
    //               }
    //             }}
    //           >
    //             <CardMedia
    //               component="img"
    //               height="200"
    //               image={product.image}
    //               alt={product.title} // Changed from name to title
    //               sx={{ objectFit: 'contain', p: 2 }}
    //             />
    //             <CardContent sx={{ flexGrow: 1 }}>
    //               <Typography variant="h6" component="h3" noWrap>
    //                 {product.title} 
    //               </Typography>
    //               <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
    //                 {product.category}
    //               </Typography>
    //               <Typography variant="h6" color="primary" sx={{ color: '#FB2E86' }}>
    //                 ${product.price}
    //               </Typography>
    //               <Typography variant="h6" color="primary" sx={{ color: '#FB2E86' }}>
    //                 {product.brand}
    //               </Typography>
    //               <Typography variant="h6" color="primary" sx={{ color: '#FB2E86' }}>
    //                 {product.modal}
    //               </Typography>
    //               <Typography variant="h6" color="primary" sx={{ color: '#FB2E86' }}>
    //                 {product.color}
    //               </Typography>
    //               <Typography variant="h6" color="primary" sx={{ color: '#FB2E86' }}>
    //                 ${product.discount}
    //               </Typography>
    //             </CardContent>
    //             <CardActions sx={{ p: 2 }}>
    //               <Button
    //                 fullWidth
    //                 variant="contained"
    //                 sx={{
    //                   bgcolor: '#FB2E86',
    //                   '&:hover': { bgcolor: '#e91e63' },
    //                   textTransform: 'none'
    //                 }}
    //               >
    //                 Add to Cart
    //               </Button>
    //             </CardActions>
    //           </Card>
    //         </Grid>
    //       ))}
    //     </Grid>

    //     {loading && (
    //       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
    //         <CircularProgress sx={{ color: '#FB2E86' }} />
    //       </Box>
    //     )}
    //   </Container>
    // </Box>
    <Box sx={{ py: 8, backgroundColor: '#F6F7FB' }}>
    <Container maxWidth="xl">
      <Typography 
        variant="h4" 
        align="center" 
        sx={{ 
          mb: 4,
          fontWeight: 600,
          color: '#151875'
        }}
      >
        Featured Products
      </Typography>

      {/* Category Tabs */}
      {categories.length > 0 ? (
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
          <Tabs
            value={selectedCategory}
            onChange={(_, newValue) => setSelectedCategory(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: '#FB2E86',
                height: '3px',
              },
              '& .MuiTab-root': {
                fontSize: '16px',
                minWidth: 'auto',
                padding: '12px 24px',
                color: '#151875',
                opacity: 0.7,
                transition: 'all 0.3s ease',
              },
              '& .Mui-selected': {
                fontSize: '18px',
                fontWeight: 700,
                color: '#000000 !important',
                opacity: 1,
              },
            }}
          >
            {categories.map((category) => (
              <Tab
                key={category}
                label={category.charAt(0).toUpperCase() + category.slice(1)}
                value={category}
                sx={{
                  textTransform: 'capitalize',
                  '&.Mui-selected': { color: '#FB2E86' },
                  fontWeight: 500,
           
                }}
              />
            ))}
          </Tabs>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress sx={{ color: '#FB2E86' }} />
        </Box>
      )}

      {/* Product Grid */}
      {/* <Grid container spacing={3} sx={{ mx: 'auto' }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={2.4} key={product.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                backgroundColor: '#fff',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  '& .product-image': {
                    transform: 'scale(1.05)',
                  },
                },
              }}
            >
              <Box sx={{ 
                position: 'relative', 
                pt: '100%',
                overflow: 'hidden'
              }}>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    height: '50%',
                    width: '50%',
                    objectFit: 'contain',
             
                  }}
                  className="product-image"
                />
                {product.discount > 0 && (
                  <Chip
                    label={`-${product.discount}%`}
                    color="error"
                    sx={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      backgroundColor: '#FB2E86',
                    }}
                  />
                )}
              </Box>
              <CardContent sx={{ flexGrow: 1, p: 2 }}>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    fontWeight: 1000,
                    mb: 1,
                    color: '#151875',
                    fontSize: '16px',
                    height: '48px',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {product.title}
                </Typography>

                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    fontWeight: 1000,
                    mb: 1,
                    color: '#151875',
                    fontSize: '16px',
                    height: '48px',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {product.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 1, flexWrap: 'wrap' }}>
                  <Chip 
                    label={product.brand} 
                    size="small"
                    sx={{ backgroundColor: '#F6F7FB' }}
                  />
                  <Chip 
                    label={product.color} 
                    size="small"
                    sx={{ backgroundColor: '#F6F7FB' }}
                  />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#FB2E86',
                      fontWeight: 600 
                    }}
                  >
                    ${product.price}
                  </Typography>
                  {product.discount > 0 && (
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        textDecoration: 'line-through',
                        color: '#151875',
                        opacity: 0.5
                      }}
                    >
                      ${(product.price / (1 - product.discount/100)).toFixed(2)}
                    </Typography>
                  )}
                </Box>
              </CardContent>
           
            </Card>
          </Grid>
        ))}
      </Grid> */}
<Grid container spacing={3} sx={{ mx: 'auto' }}>
  {products.map((product) => (
    <Grid item xs={12} sm={6} md={2.4} key={product.id}>
      <Card
        sx={{
          width: 870,
          height: 563,
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.3s ease',
          backgroundColor: '#fff',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            '& .product-image': {
              transform: 'scale(1.05)',
            },
          },
        }}
      >
        <Box sx={{ 
          position: 'relative',
          height: '250px', 
          overflow: 'hidden'
        }}>
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
            onClick={() => handleProductClick(product.id)}
            sx={{
              height: '100%',
              width: '100%',
              objectFit: 'contain',
              p: 2,
              transition: 'transform 0.3s ease',
            }}
            className="product-image"
          />
             {product.discount > 0 && (
                  <Chip
                    label={`-${product.discount}%`}
                    color="error"
                    sx={{
                  
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      backgroundColor: '#FB2E86',
                    }}
                  />
                )}
      
        </Box>
        <CardContent sx={{ 
          flexGrow: 1, 
          p: 2,
          height: '213px', 
          overflow: 'hidden'
        }}>
           <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 1000,
                    mb: 1,
                    color: '#02020a',
                    fontSize: '16px',
                    height: '48px',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {product.title}
                </Typography>

                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontWeight: 1000,
                    mb: 1,
                    color: '#151875',
                    fontSize: '20px',
                    height: '107px',
                    overflow: 'scroll',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {product.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 1, flexWrap: 'wrap' }}>
                <Chip 
    label={product.brand} 
    size="medium"
    variant="outlined"
    sx={{ 
      backgroundColor: '#fff',
      borderColor: '#FB2E86',
      color: '#151875',
      fontSize: '14px',
      fontWeight: 500,
      '& .MuiChip-label': {
        padding: '8px 12px',
      }
    }}
  />
                  <Chip 
    label={product.color} 
    size="medium"
    sx={{ 
      backgroundColor: '#fff',
      border: '1px solid #E0E0E0',
      color: '#151875',
      fontSize: '14px',
      fontWeight: 500,
      '& .MuiChip-label': {
        padding: '8px 12px',
      }
    }}
  />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      color: '#FB2E86',
                      fontWeight: 600 
                    }}
                  >
                    ${product.price}
                  </Typography>
                  {product.discount > 0 && (
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        textDecoration: 'line-through',
                        color: '#151875',
                        opacity: 0.5
                      }}
                    >
                      ${(product.price / (1 - product.discount/100)).toFixed(2)}
                    </Typography>
                  )}
                </Box>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress sx={{ color: '#FB2E86' }} />
        </Box>
      )}
    </Container>
  </Box>
  );
};

export default ProductSection;