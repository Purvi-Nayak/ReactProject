import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { IMAGES } from "../../assets/index";

const HeroSection = () => {
  return (
    <Box
      sx={{
       
        minHeight: "80vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" backgroundColor="white">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
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
    </Box>
  );
};

export default HeroSection;
