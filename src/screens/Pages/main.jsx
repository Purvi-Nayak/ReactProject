// Update the Grid container for products
<Grid container spacing={3}>
  {products.map((product) => (
    <Grid item xs={12} key={product.id}>
      <Card
        sx={{
          width: '921px',
          height: '230px',
          display: 'flex',
          flexDirection: 'row', 
          transition: 'all 0.3s ease',
          position: 'relative',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          "&:hover": {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
            "& .product-actions": {
              opacity: 1,
            },
          },
        }}
      >
        {/* Product Image */}
        <Box sx={{ 
          width: '250px',
          position: 'relative',
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
            sx={{
              height: '180px',
              width: '180px',
              objectFit: 'contain'
            }}
          />
          {product.discount > 0 && (
            <Chip 
              label={`-${product.discount}%`}
              color="error"
              size="small"
              sx={{
                position: 'absolute',
                top: 10,
                right: 10,
                bgcolor: '#FB2E86'
              }}
            />
          )}
        </Box>

        {/* Product Content */}
        <Box sx={{ 
          flexGrow: 1,
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <Typography
            variant="h6"
            sx={{
              color: '#151875',
              fontWeight: 600,
              mb: 1
            }}
          >
            {product.title}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography
              variant="h6"
              sx={{ color: '#FB2E86', fontWeight: 600, mr: 2 }}
            >
              ${product.price}
            </Typography>
            {product.discount > 0 && (
              <Typography
                variant="body1"
                sx={{
                  textDecoration: 'line-through',
                  color: '#151875',
                  opacity: 0.5
                }}
              >
                ${(product.price / (1 - product.discount / 100)).toFixed(2)}
              </Typography>
            )}
          </Box>

          <Rating value={4} size="small" readOnly sx={{ mb: 2 }} />

          <Typography
            variant="body2"
            sx={{
              color: '#72718F',
              mb: 2,
              maxWidth: '500px'
            }}
          >
            {product.description || 'Product description goes here...'}
          </Typography>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              size="small"
              onClick={() => handleAddToCart(product)}
              sx={{
                bgcolor: 'white',
                boxShadow: 1,
                "&:hover": { bgcolor: "#FB2E86", color: "white" },
              }}
            >
              <ShoppingCartIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                bgcolor: 'white',
                boxShadow: 1,
                "&:hover": { bgcolor: "#FB2E86", color: "white" },
              }}
            >
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                bgcolor: 'white',
                boxShadow: 1,
                "&:hover": { bgcolor: "#FB2E86", color: "white" },
              }}
            >
              <ShareIcon />
            </IconButton>
          </Box>
        </Box>
      </Card>
    </Grid>
  ))}
</Grid>