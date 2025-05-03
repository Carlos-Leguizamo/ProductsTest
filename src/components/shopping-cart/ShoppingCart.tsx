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
import { useCartStore } from "../../context/userCartStore";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ShoppingCart: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  const { cart, removeFromCart, clearCart } = useCartStore();

  const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 350, p: 2 }}>
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          color: "#000",
        }}
      >
        <CloseIcon />
      </IconButton>
       <Typography variant="h6" sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
        <ShoppingCartIcon sx={{ fontSize: 24 }} /> 
         Carrito de Compras
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
                  sx={{
                    color: "#d32f2f",
                    "&:hover": {
                      backgroundColor: "#ffebee",
                      color: "#c62828",
                    },
                    transition: "all 0.3s ease",
                    borderRadius: "8px",
                  }}
                >
                  <DeleteOutlineIcon />
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