import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
  Button,
  TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { cartActions } from '../../redux/slices/Cart.slice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const handleCheckout = () => {
    navigate('/order-complete');
  };
  const handleRemoveFromCart = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  const handleAddToCart = (item) => {
    dispatch(cartActions.addToCart(item));
  };

  const handleClearCart = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, color: '#151875' }}>
        Shopping Cart
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: 80, height: 80, objectFit: 'contain' }}
                    />
                    <Box>
                      <Typography variant="subtitle1">{item.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Color: {item.color}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Size: {item.size}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right">${item.price.toFixed(2)}</TableCell>
                <TableCell align="center">
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                    <IconButton size="small" onClick={() => handleRemoveFromCart(item.id)}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography>{item.quantity}</Typography>
                    <IconButton size="small" onClick={() => handleAddToCart(item)}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  ${(item.price * item.quantity).toFixed(2)}
                </TableCell>
                <TableCell align="center">
                  <IconButton color="error" onClick={() => handleRemoveFromCart(item.id)}>
                    <DeleteOutlineIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="h1"
         
          color="success"
          size="small"
          sx={{
            bgcolor: '#FB2E86',
            '&:hover': { bgcolor: '#e91e63' },
            textTransform: 'none',
            borderRadius: 0,
            width: 150,

            height: 40,
            fontSize: 14,
            fontWeight: 600,

            color: '#fff',
            '&:disabled': {
              bgcolor: '#ccc',
              color: '#fff',
            },
          }}
          onClick={handleClearCart}
          disabled={cartItems.length === 0}
      
        >
          Clear Cart
        </Button>
        
        <Box sx={{ width: 300, p: 3, bgcolor: '#f6f7fb' }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Cart Totals</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography>Subtotal:</Typography>
            <Typography>${totalAmount.toFixed(2)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <Typography>Total:</Typography>
            <Typography color="primary" fontWeight="bold">
              ${totalAmount.toFixed(2)}
            </Typography>
          </Box>
          <Button
            variant="contained"
            fullWidth
            onClick={handleCheckout}
            sx={{
              bgcolor: '#FB2E86',
              '&:hover': { bgcolor: '#e91e63' },
              textTransform: 'none'
            }}
          >
            Proceed to Checkout
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Cart;
