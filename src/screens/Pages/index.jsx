// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Checkbox,
//   FormGroup,
//   FormControlLabel,
//   Slider,
//   Card,
//   CardMedia,
//   CardContent,
//   Divider,
//   Chip,
//   Rating,
//   IconButton,
//   Select,
//   MenuItem,
//   Pagination,
//   Link,
//   Button,
// } from "@mui/material";
// import { api } from "../../api/client";
// import { useNavigate } from "react-router-dom";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import ShareIcon from "@mui/icons-material/Share";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import GridViewIcon from "@mui/icons-material/GridView";
// import ViewListIcon from "@mui/icons-material/ViewList";
// import { useDispatch } from 'react-redux';
// import { cartActions } from '../../redux/slices/Cart.slice';

// const Pages = () => {
//    const navigate = useNavigate();
//      const dispatch = useDispatch();

//   const [sortBy, setSortBy] = useState("featured");
//   const [itemsPerPage, setItemsPerPage] = useState(5);
//   const [viewType, setViewType] = useState("grid");
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [filters, setFilters] = useState({
//     categories: [],
//     brands: [],
//     priceRange: [0, 1000],
//     discounts: [],
//   });
//   const categories = [
//     "tv",
//     "audio",
//     "laptop",
//     "mobile",
//     "gaming",
//     "appliances",
//   ];
//   const brands = ["sony", "samsung", "apple", "LG", "Asus"];
//   const discountRanges = [
//     { label: "20% Cashback", value: 20 },
//     { label: "5% Cashback", value: 5 },
//     { label: "25% Discount", value: 25 },
//   ];
//     const handleAddToCart = (product) => {
//         alert("Product added to cart");
//       dispatch(cartActions.addToCart({
//         id: product.id,
//         title: product.title,
//         price: product.price,
//         image: product.image,
//         color: product.color,
//       }));
//     navigate("/cart");
//     };
//   useEffect(() => {
//     fetchProducts();
//   }, [currentPage, filters]);
//   const handleCategoryChange = (category) => {
//     setFilters((prev) => ({
//       ...prev,
//       categories: prev.categories.includes(category)
//         ? prev.categories.filter((c) => c !== category)
//         : [...prev.categories, category],
//     }));
//     setCurrentPage(1);
//   };
// const handlebrandChange = (brand) => {
//     setFilters((prev) => ({
//         ...prev,
//         brands: prev.brands.includes(brand)

//             ? prev.brands.filter((b) => b !== brand)
//             : [...prev.brands, brand],
//     }));
//     setCurrentPage(1);
// };
//   const handlePriceChange = (event, newValue) => {
//     setFilters((prev) => ({
//       ...prev,
//       priceRange: newValue,
//     }));
//     setCurrentPage(1);
//   };

//   const handlePageChange = (event, value) => {
//     setCurrentPage(value);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };
//   const fetchProducts = async () => {
//     try {
//       setLoading(true);
//       const response = await api.PRODUCTS.getByPage({ page: currentPage });
//       if (response.status === "SUCCESS") {
//         let filteredProducts = response.products;

//         // Apply filters
//         if (filters.categories.length > 0) {
//           filteredProducts = filteredProducts.filter((product) =>
//             filters.categories.includes(product.category)
//           );
//         }

//         if (filters.brands.length > 0) {
//           filteredProducts = filteredProducts.filter((product) =>
//             filters.brands.includes(product.brand)
//           );
//         }

//         filteredProducts = filteredProducts.filter(
//           (product) =>
//             product.price >= filters.priceRange[0] &&
//             product.price <= filters.priceRange[1]
//         );

//         if (filters.discounts.length > 0) {
//           filteredProducts = filteredProducts.filter((product) =>
//             filters.discounts.includes(product.discount)
//           );
//         }

//         setProducts(filteredProducts);
//         setTotalPages(Math.ceil(filteredProducts.length / 5));
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <Box sx={{ py: 4, backgroundColor: "#F6F7FB" }}>
//       <Container maxWidth="xl">
//         {/* Page Header */}
//         <Box sx={{ mb: 4 }}>
//           <Typography
//             variant="h4"
//             sx={{ color: "#151875", fontWeight: 600, mb: 2 }}
//           >
//             Shop Left Sidebar
//           </Typography>
//           <Box sx={{ display: "flex", gap: 1, color: "#151875" }}>
//           <Link component="button" onClick={() => navigate('/')} sx={{ color: '#151875', textDecoration: 'none' }}>
//             Home
//           </Link>
//             <Typography>/</Typography>
//             <Typography>Pages</Typography>
//             <Typography>/</Typography>
//             <Typography color="primary">Shop Left Sidebar</Typography>
//           </Box>
//         </Box>

//         <Grid container spacing={4} sx={{ mb: 4
//          ,alignItems:'center', flexDirection:'row'
//         }} >
//           {/* Left Sidebar */}
//           <Grid item xs={12} md={3}>
//             <Card sx={{ p: 3, backgroundColor: "#fff" }}>
//               {/* Product Brand Section */}
//               <Box sx={{ mb: 4 }}>
//                 <Typography variant="h6" sx={{ mb: 2, color: "#151875" }}>
//                   Product Brand
//                 </Typography>
//                 <FormGroup>
//                   {brands.map((brand) => (
//                     <FormControlLabel
//                       key={brand}
//                       control={
//                         <Checkbox
//                           size="small"
//                           checked={filters.brands.includes(brand)}
//                           onChange={() => handlebrandChange(brand)}
//                           sx={{
//                             color: "#FB2E86",
//                             "&.Mui-checked": { color: "#FB2E86" },
//                           }}
//                         />
//                       }
//                       label={
//                         <Typography sx={{ fontSize: "14px", color: "#7E81A2" }}>
//                           {brand}
//                         </Typography>
//                       }
//                     />
//                   ))}
//                 </FormGroup>
//               </Box>

//               <Divider sx={{ my: 3 }} />

//               {/* Discount Offer Section */}

//     <Box sx={{ mb: 3 }}>
//                  <Typography variant="subtitle1" sx={{ mb: 1, color: '#151875' }}>
//                    Discount Offers
//                 </Typography>
//                  <FormGroup>
//                   {discountRanges.map((discount) => (
//                     <FormControlLabel
//                       key={discount.value}
//                       control={
//                         <Checkbox
//                           checked={filters.discounts.includes(discount.value)}
//                           onChange={() => {
//                             setFilters(prev => ({
//                               ...prev,
//                               discounts: prev.discounts.includes(discount.value)
//                                 ? prev.discounts.filter(d => d !== discount.value)
//                                 : [...prev.discounts, discount.value]
//                             }));
//                             setCurrentPage(1);
//                           }}
//                           sx={{
//                             color: '#FB2E86',
//                             '&.Mui-checked': { color: '#FB2E86' }
//                           }}
//                         />
//                       }
//                       label={discount.label}
//                     />
//                   ))}
//                 </FormGroup>
//               </Box>
//               <Divider sx={{ my: 3 }} />

//               {/* Rating Section */}
//               <Box sx={{ mb: 4 }}>
//                 <Typography variant="h6" sx={{ mb: 2, color: "#151875" }}>
//                   Rating Item
//                 </Typography>
//                 {[5, 4, 3, 2, 1].map((rating) => (
//                   <Box
//                     key={rating}
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       mb: 1,
//                       cursor: "pointer",
//                     }}
//                   >
//                     <Rating value={rating} readOnly size="small" />
//                     <Typography
//                       sx={{ ml: 1, color: "#7E81A2", fontSize: "14px" }}
//                     >
//                       ({Math.floor(Math.random() * 100)})
//                     </Typography>
//                   </Box>
//                 ))}
//               </Box>

//               <Box sx={{ mb: 3 }}>
//                 <Typography
//                   variant="subtitle1"
//                   sx={{ mb: 1, color: "#151875" }}
//                 >
//                   Price Range
//                 </Typography>
//                 <Slider
//                   value={filters.priceRange}
//                   onChange={handlePriceChange}
//                   valueLabelDisplay="auto"
//                   min={0}
//                   max={1000}
//                   sx={{
//                     color: "#FB2E86",
//                     "& .MuiSlider-thumb": {
//                       backgroundColor: "#fff",
//                       border: "2px solid #FB2E86",
//                     },
//                   }}
//                 />
//                 <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                   <Typography>${filters.priceRange[0]}</Typography>
//                   <Typography>${filters.priceRange[1]}</Typography>
//                 </Box>
//               </Box>

//               <Box sx={{ mb: 3 }}>
//                 <Typography
//                   variant="subtitle1"
//                   sx={{ mb: 1, color: "#151875" }}
//                 >
//                   Categories
//                 </Typography>
//                 <FormGroup>
//                   {categories.map((category) => (
//                     <FormControlLabel
//                       key={category}
//                       control={
//                         <Checkbox
//                           checked={filters.categories.includes(category)}
//                           onChange={() => handleCategoryChange(category)}
//                           sx={{
//                             color: "#FB2E86",
//                             "&.Mui-checked": { color: "#FB2E86" },
//                           }}
//                         />
//                       }
//                       label={
//                         category.charAt(0).toUpperCase() + category.slice(1)
//                       }
//                     />
//                   ))}
//                 </FormGroup>
//               </Box>
//               {/* ... keep other filter sections ... */}
//             </Card>
//           </Grid>

//           {/* Right Side - Products */}
//           <Grid item xs={12} md={3}>

//             {/* Controls Bar */}
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 mb: 3,
//                 p: 2,
//                 backgroundColor: "#fff",
//                 borderRadius: 1,
//               }}
//             >
//               <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
//                 <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                   <Typography sx={{ color: "#151875" }}>Per Page:</Typography>
//                   <Select
//                     value={itemsPerPage}
//                     onChange={(e) => setItemsPerPage(e.target.value)}
//                     size="small"
//                     sx={{ minWidth: 80 }}
//                   >
//                     <MenuItem value={5}>5</MenuItem>
//                     <MenuItem value={10}>10</MenuItem>
//                     <MenuItem value={15}>15</MenuItem>
//                   </Select>
//                 </Box>

//                 <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                   <Typography sx={{ color: "#151875" }}>Sort By:</Typography>
//                   <Select
//                     value={sortBy}
//                     onChange={(e) => setSortBy(e.target.value)}
//                     size="small"
//                     sx={{ minWidth: 120 }}
//                   >
//                     <MenuItem value="featured">Featured</MenuItem>
//                     <MenuItem value="newest">Newest Items</MenuItem>
//                     <MenuItem value="priceLow">Price Low to High</MenuItem>
//                     <MenuItem value="priceHigh">Price High to Low</MenuItem>
//                   </Select>
//                 </Box>
//               </Box>

//               <Box sx={{ display: "flex", gap: 1 }}>
//                 <IconButton
//                   onClick={() => setViewType("grid")}
//                   sx={{
//                     color: viewType === "grid" ? "#FB2E86" : "#151875",
//                     bgcolor:
//                       viewType === "grid"
//                         ? "rgba(251, 46, 134, 0.1)"
//                         : "transparent",
//                   }}
//                 >
//                   <GridViewIcon />
//                 </IconButton>
//                 <IconButton
//                   onClick={() => setViewType("list")}
//                   sx={{
//                     color: viewType === "list" ? "#FB2E86" : "#151875",
//                     bgcolor:
//                       viewType === "list"
//                         ? "rgba(251, 46, 134, 0.1)"
//                         : "transparent",
//                   }}
//                 >
//                   <ViewListIcon />
//                 </IconButton>
//               </Box>
//             </Box>

//             {/* Products Grid */}
//             <Grid container spacing={3}>
//             {products.map((product) => (
//     <Grid item xs={12} key={product.id}>
//       <Card
//         sx={{
//           width: '921px',
//           height: '330px',
//           display: 'flex',
//           flexDirection: 'row',
//           transition: 'all 0.3s ease',
//           position: 'relative',
//           boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
//           "&:hover": {
//             transform: 'translateY(-5px)',
//             boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
//             "& .product-actions": {
//               opacity: 1,
//             },
//           },
//         }}
//       >
//         {/* Product Image */}
//         <Box sx={{
//           width: '250px',
//           position: 'relative',
//           p: 2,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center'
//         }}>
//           <CardMedia
//             component="img"
//             image={product.image}
//             alt={product.title}
//             sx={{
//               height: '180px',
//               width: '180px',
//               objectFit: 'contain'
//             }}
//           />
//           {product.discount > 0 && (
//             <Chip
//               label={`-${product.discount}%`}
//               color="error"
//               size="small"
//               sx={{
//                 position: 'absolute',
//                 top: 10,
//                 right: 10,
//                 bgcolor: '#FB2E86'
//               }}
//             />
//           )}
//         </Box>

//         {/* Product Content */}
//         <Box sx={{
//           flexGrow: 1,
//           p: 3,
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center'
//         }}>
//           <Typography
//             variant="h6"
//             sx={{
//               color: '#151875',
//               fontWeight: 600,
//               mb: 1
//             }}
//           >
//             {product.title}
//           </Typography>

//           <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//             <Typography
//               variant="h6"
//               sx={{ color: '#FB2E86', fontWeight: 600, mr: 2 }}
//             >
//               ${product.price}
//             </Typography>
//             {product.discount > 0 && (
//               <Typography
//                 variant="body1"
//                 sx={{
//                   textDecoration: 'line-through',
//                   color: '#151875',
//                   opacity: 0.5
//                 }}
//               >
//                 ${(product.price / (1 - product.discount / 100)).toFixed(2)}
//               </Typography>
//             )}
//           </Box>

//           <Rating value={4} size="small" readOnly sx={{ mb: 2 }} />

//           <Typography
//             variant="body2"
//             sx={{
//               color: '#72718F',
//               mb: 2,
//               maxWidth: '500px'
//             }}
//           >
//             {product.title || 'Product description goes here...'}
//           </Typography>

//           {/* Action Buttons */}
//           <Box sx={{ display: 'flex', gap: 1 }}>
//             <IconButton
//               size="small"
//               onClick={() => handleAddToCart(product)}
//               sx={{
//                 bgcolor: 'white',
//                 boxShadow: 1,
//                 "&:hover": { bgcolor: "#FB2E86", color: "white" },
//               }}
//             >
//               <ShoppingCartIcon />
//             </IconButton>
//             <IconButton
//               size="small"
//               sx={{
//                 bgcolor: 'white',
//                 boxShadow: 1,
//                 "&:hover": { bgcolor: "#FB2E86", color: "white" },
//               }}
//             >
//               <FavoriteBorderIcon />
//             </IconButton>
//             <IconButton
//               size="small"
//               sx={{
//                 bgcolor: 'white',
//                 boxShadow: 1,
//                 "&:hover": { bgcolor: "#FB2E86", color: "white" },
//               }}
//             >
//               <ShareIcon />
//             </IconButton>
//           </Box>
//         </Box>
//       </Card>
//     </Grid>
//   ))}
//             </Grid>
//             <Pagination
//               count={totalPages}
//               page={currentPage}
//               onChange={handlePageChange}
//               color="primary"
//               sx={{
//                 "& .MuiPaginationItem-root": {
//                   color: "#151875",
//                 },
//                 "& .Mui-selected": {
//                   bgcolor: "#FB2E86 !important",
//                   color: "white",
//                 },
//               }}
//             />

//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Pages;

import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Slider,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Chip,
  Rating,
  IconButton,
  Select,
  MenuItem,
  Pagination,
  Link,
  Button,
 
} from "@mui/material";
import { Menu,  ListItemText } from "@mui/material";
import { api } from "../../api/client";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/Cart.slice";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
const Pages = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortBy, setSortBy] = useState("featured");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [viewType, setViewType] = useState("grid");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    priceRange: [0, 1000],
    discounts: [],
  });
  const categories = [
    "tv",
    "audio",
    "laptop",
    "mobile",
    "gaming",
    "appliances",
  ];
  const brands = ["sony", "samsung", "apple", "LG", "Asus"];
  const discountRanges = [
    { label: "20% Cashback", value: 20 },
    { label: "5% Cashback", value: 5 },
    { label: "25% Discount", value: 25 },
  ];
  const handleAddToCart = (product) => {
    alert("Product added to cart");
    dispatch(
      cartActions.addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        color: product.color,
      })
    );
    navigate("/cart");
  };
  const handleShareClick = (event, product) => {
    setAnchorEl(event.currentTarget);
    setSelectedProduct(product);
  };
  useEffect(() => {
    fetchProducts();
  }, [currentPage, filters]);
  const handleCategoryChange = (category) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
    setCurrentPage(1);
  };
  const handlebrandChange = (brand) => {
    setFilters((prev) => ({
      ...prev,
      brands: prev.brands.includes(brand)
        ? prev.brands.filter((b) => b !== brand)
        : [...prev.brands, brand],
    }));
    setCurrentPage(1);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSelectedProduct(null);
  };
  const handlePriceChange = (event, newValue) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: newValue,
    }));
    setCurrentPage(1);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await api.PRODUCTS.getByPage({ page: currentPage });
      if (response.status === "SUCCESS") {
        let filteredProducts = response.products;

        // Apply filters
        if (filters.categories.length > 0) {
          filteredProducts = filteredProducts.filter((product) =>
            filters.categories.includes(product.category)
          );
        }

        if (filters.brands.length > 0) {
          filteredProducts = filteredProducts.filter((product) =>
            filters.brands.includes(product.brand)
          );
        }

        filteredProducts = filteredProducts.filter(
          (product) =>
            product.price >= filters.priceRange[0] &&
            product.price <= filters.priceRange[1]
        );

        if (filters.discounts.length > 0) {
          filteredProducts = filteredProducts.filter((product) =>
            filters.discounts.includes(product.discount)
          );
        }

        setProducts(filteredProducts);
        setTotalPages(Math.ceil(filteredProducts.length / 5));
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box sx={{ py: 4, backgroundColor: "#F6F7FB" }}>
      <Container maxWidth="xl">
        {/* Page Header */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            sx={{ color: "#151875", fontWeight: 600, mb: 2 }}
          >
            Shop Left Sidebar
          </Typography>
          <Box sx={{ display: "flex", gap: 1, color: "#151875" }}>
            <Link
              component="button"
              onClick={() => navigate("/")}
              sx={{ color: "#151875", textDecoration: "none" }}
            >
              Home
            </Link>
            <Typography>/</Typography>
            <Typography>Pages</Typography>
            <Typography>/</Typography>
            <Typography color="primary">Shop Left Sidebar</Typography>
          </Box>
        </Box>

        <Grid container spacing={4} sx={{ flexDirection: "row" }}>
          {/* Left Sidebar */}

          <Card sx={{ p: 3 }}>
            {/* Product Brand Section */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 2, color: "#151875" }}>
                Product Brand
              </Typography>
              <FormGroup>
                {brands.map((brand) => (
                  <FormControlLabel
                    key={brand}
                    control={
                      <Checkbox
                        size="small"
                        checked={filters.brands.includes(brand)}
                        onChange={() => handlebrandChange(brand)}
                        sx={{
                          color: "#FB2E86",
                          "&.Mui-checked": { color: "#FB2E86" },
                        }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "14px", color: "#7E81A2" }}>
                        {brand}
                      </Typography>
                    }
                  />
                ))}
              </FormGroup>
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* Discount Offer Section */}

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" sx={{ mb: 1, color: "#151875" }}>
                Discount Offers
              </Typography>
              <FormGroup>
                {discountRanges.map((discount) => (
                  <FormControlLabel
                    key={discount.value}
                    control={
                      <Checkbox
                        checked={filters.discounts.includes(discount.value)}
                        onChange={() => {
                          setFilters((prev) => ({
                            ...prev,
                            discounts: prev.discounts.includes(discount.value)
                              ? prev.discounts.filter(
                                  (d) => d !== discount.value
                                )
                              : [...prev.discounts, discount.value],
                          }));
                          setCurrentPage(1);
                        }}
                        sx={{
                          color: "#FB2E86",
                          "&.Mui-checked": { color: "#FB2E86" },
                        }}
                      />
                    }
                    label={discount.label}
                  />
                ))}
              </FormGroup>
            </Box>
            <Divider sx={{ my: 3 }} />

            {/* Rating Section */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 2, color: "#151875" }}>
                Rating Item
              </Typography>
              {[5, 4, 3, 2, 1].map((rating) => (
                <Box
                  key={rating}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 1,
                    cursor: "pointer",
                  }}
                >
                  <Rating value={rating} readOnly size="small" />
                  <Typography
                    sx={{ ml: 1, color: "#7E81A2", fontSize: "14px" }}
                  >
                    ({Math.floor(Math.random() * 100)})
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" sx={{ mb: 1, color: "#151875" }}>
                Price Range
              </Typography>
              <Slider
                value={filters.priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={0}
                max={1000}
                sx={{
                  color: "#FB2E86",
                  "& .MuiSlider-thumb": {
                    backgroundColor: "#fff",
                    border: "2px solid #FB2E86",
                  },
                }}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>${filters.priceRange[0]}</Typography>
                <Typography>${filters.priceRange[1]}</Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" sx={{ mb: 1, color: "#151875" }}>
                Categories
              </Typography>
              <FormGroup>
                {categories.map((category) => (
                  <FormControlLabel
                    key={category}
                    control={
                      <Checkbox
                        checked={filters.categories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        sx={{
                          color: "#FB2E86",
                          "&.Mui-checked": { color: "#FB2E86" },
                        }}
                      />
                    }
                    label={category.charAt(0).toUpperCase() + category.slice(1)}
                  />
                ))}
              </FormGroup>
            </Box>

            {/* ... keep other filter sections ... */}
          </Card>
          <Grid item xs={12} md={3}>
            {/* Controls Bar */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
                p: 2,
                backgroundColor: "#fff",
                borderRadius: 1,
              }}
            >
              <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography sx={{ color: "#151875" }}>Per Page:</Typography>
                  <Select
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(e.target.value)}
                    size="small"
                    sx={{ minWidth: 80 }}
                  >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                  </Select>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography sx={{ color: "#151875" }}>Sort By:</Typography>
                  <Select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    size="small"
                    sx={{ minWidth: 120 }}
                  >
                    <MenuItem value="featured">Featured</MenuItem>
                    <MenuItem value="newest">Newest Items</MenuItem>
                    <MenuItem value="priceLow">Price Low to High</MenuItem>
                    <MenuItem value="priceHigh">Price High to Low</MenuItem>
                  </Select>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton
                  onClick={() => setViewType("grid")}
                  sx={{
                    color: viewType === "grid" ? "#FB2E86" : "#151875",
                    bgcolor:
                      viewType === "grid"
                        ? "rgba(251, 46, 134, 0.1)"
                        : "transparent",
                  }}
                >
                  <GridViewIcon />
                </IconButton>
                <IconButton
                  onClick={() => setViewType("list")}
                  sx={{
                    color: viewType === "list" ? "#FB2E86" : "#151875",
                    bgcolor:
                      viewType === "list"
                        ? "rgba(251, 46, 134, 0.1)"
                        : "transparent",
                  }}
                >
                  <ViewListIcon />
                </IconButton>
              </Box>
            </Box>

            {/* Products Grid */}

            {products.map((product) => (
              <Grid item xs={12} key={product.id} sx={{ gap: 10 }}>
                <Card
                  sx={{
                    width: "921px",
                    height: "330px",
                    display: "flex",
                    flexDirection: "row",
                    transition: "all 0.3s ease",
                    position: "relative",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                      "& .product-actions": {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  {/* Product Image */}
                  <Box
                    sx={{
                      width: "250px",
                      position: "relative",
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={product.image}
                      alt={product.title}
                      sx={{
                        height: "180px",
                        width: "180px",
                        objectFit: "contain",
                      }}
                    />
                    {product.discount > 0 && (
                      <Chip
                        label={`-${product.discount}%`}
                        color="error"
                        size="small"
                        sx={{
                          position: "absolute",
                          top: 10,
                          right: 10,
                          bgcolor: "#FB2E86",
                        }}
                      />
                    )}
                  </Box>

                  {/* Product Content */}
                  <Box
                    sx={{
                      flexGrow: 1,
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#151875",
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {product.title}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{ color: "#FB2E86", fontWeight: 600, mr: 2 }}
                      >
                        ${product.price}
                      </Typography>
                      {product.discount > 0 && (
                        <Typography
                          variant="body1"
                          sx={{
                            textDecoration: "line-through",
                            color: "#151875",
                            opacity: 0.5,
                          }}
                        >
                          $
                          {(
                            product.price /
                            (1 - product.discount / 100)
                          ).toFixed(2)}
                        </Typography>
                      )}
                    </Box>

                    <Rating value={4} size="small" readOnly sx={{ mb: 2 }} />

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#72718F",
                        mb: 2,
                        maxWidth: "500px",
                      }}
                    >
                      {product.title || "Product title goes here..."}
                    </Typography>

                    {/* Action Buttons */}
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <IconButton
                        size="small"
                        onClick={() => handleAddToCart(product)}
                        sx={{
                          bgcolor: "white",
                          boxShadow: 1,
                          "&:hover": { bgcolor: "#FB2E86", color: "white" },
                        }}
                      >
                        <ShoppingCartIcon />
                      </IconButton>
                   
                      <IconButton
                        size="small"
                        onClick={(event) => handleShareClick(event, product)}
                        sx={{
                          bgcolor: "white",
                          boxShadow: 1,
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
                  </Box>
                </Card>
              </Grid>
            ))}

            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "#151875",
                },
                "& .Mui-selected": {
                  bgcolor: "#FB2E86 !important",
                  color: "white",
                },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Pages;
