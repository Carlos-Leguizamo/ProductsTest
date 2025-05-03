import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Box,
  Divider,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCartStore } from "../../context/userCartStore";

const ShoppingCart: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  const { cart, removeFromCart, clearCart } = useCartStore();

  const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 350, p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          🛒 Carrito de Compras
        </Typography>
        <Divider />
        <List>
          {cart.map((product) => (
            <ListItem key={product.codigo} sx={{ py: 1 }}>
              <ListItemText
                primary={product.nombre}
                secondary={`Cantidad: ${product.cantidad}`}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  onClick={() => removeFromCart(product.codigo)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        {cart.length === 0 && (
          <Typography sx={{ textAlign: "center", mt: 2 }}>
            El carrito está vacío.
          </Typography>
        )}
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1" sx={{ mb: 2 }}>
          Total de productos: {totalItems}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={clearCart}
          disabled={cart.length === 0}
        >
          Vaciar Carrito
        </Button>
      </Box>
    </Drawer>
  );
};

export default ShoppingCart;