import React from "react";
import { Box, Typography, Button, Container, TextField,CircularProgress } from "@mui/material";
import { IMAGES } from "../../assets/index";
import ProductSection from "../Product/index";
import ProductGrid from "../../container/ProductGrid";
import { useEffect, useState } from "react";
import { api } from "../../api/client";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/Cart.slice";
import SearchIcon from "@mui/icons-material/Search";
import { useRef } from "react";
import Header from "../../container/Header";
import { useNavigate } from "react-router-dom";
import { URLS } from "../../constant/url";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const searchInputRef = useRef("");
  const navigate = useNavigate();
  const handleSearch = (event) => {
    event.preventDefault();
    const searchQuery = searchInputRef.current.value.trim().toLowerCase();

    if (searchQuery) {
      const filtered = products.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery) ||
          (product.description &&
            product.description.toLowerCase().includes(searchQuery)) ||
          (product.category &&
            product.category.toLowerCase().includes(searchQuery))
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };
  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.PRODUCTS.getAll({});
        console.log("response", response);
        if (response.products) {
          setProducts(response.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      {/* <Header 
        products={products} 
        setFilteredProducts={setFilteredProducts} 
      /> */}
      <Box
        sx={{
          background: "linear-gradient(to right, #F2F0FF 65%, #F6F7FB 35%)",
          minHeight: "80vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pt: 8,
              pb: 8,
              gap: 4,
            }}
          >
            {/* Left Content */}
            <Box sx={{ maxWidth: "450px", zIndex: 1 }}>
              <Typography
                variant="subtitle1"
                sx={{ color: "#FB2E86", mb: 1, fontWeight: 500 }}
              >
                Best Furniture For Your Castle....
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  lineHeight: 1.2,
                }}
              >
                New Furniture Collection Trends in 2020
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#8A8FB9", mb: 3, lineHeight: 1.6 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#FB2E86",
                  "&:hover": { bgcolor: "#e91e63" },
                  borderRadius: "2px",
                  px: 4,
                  py: 1.5,
                  textTransform: "none",
                }}
              >
                Shop Now
              </Button>
            </Box>

            {/* Right Content */}
            <Box
              sx={{
                position: "relative",
                flex: 1,
                display: { xs: "none", md: "block" },
              }}
            >
              <Box
                sx={{
                  width: "500px",
                  height: "500px",
                  borderRadius: "50%",
                  background: "#F2F0FF",
                  position: "absolute",
                  right: "-100px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 0,
                }}
              />
              <Box
                component="img"
                src={IMAGES.chair}
                alt="Pink Chair"
                sx={{
                  maxWidth: "100%",
                  height: "auto",
                  position: "relative",
                  zIndex: 1,
                }}
              />
              <Box
                component="img"
                src={IMAGES.offer}
                alt="50% Off"
                sx={{
                  position: "absolute",
                  top: "50px",
                  right: "50px",
                  width: "139px",
                  height: "140px",
                  zIndex: 2,
                }}
              />
            </Box>
          </Box>

          {/* Navigation Dots */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              justifyContent: "center",
              mt: 2,
            }}
          >
            {[0, 1, 2].map((dot) => (
              <Box
                key={dot}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: dot === 0 ? "#FB2E86" : "#FB2E8650",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                  "&:hover": {
                    bgcolor: "#FB2E86",
                  },
                }}
              />
            ))}
          </Box>
        </Container>
        <Box
          component="form"
          onSubmit={handleSearch}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
          }}
        >
          <TextField
            size="small"
            inputRef={searchInputRef}
            placeholder="Search products..."
            sx={{
              width: "300px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "4px 0 0 4px",
                height: "40px",
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
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
        </Box>
      </Box>
      {!loading && (
        <ProductGrid
          products={filteredProducts.length ? filteredProducts : products}
          onProductClick={handleProductClick}
        />
      )}
 {loading ? (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "50vh",
      gap: 2
    }}
  >
    <CircularProgress 
      size={40}
      sx={{ 
        color: "#FB2E86"
      }} 
    />
    <Typography 
      variant="body1" 
      sx={{ 
        color: "#151875",
        fontWeight: 500 
      }}
    >
      Loading products...
    </Typography>
  </Box>
) : (
  <ProductGrid
    products={filteredProducts.length ? filteredProducts : products}
    onProductClick={handleProductClick}
  />
)}
    
    </>
  );
};

export default Home;
