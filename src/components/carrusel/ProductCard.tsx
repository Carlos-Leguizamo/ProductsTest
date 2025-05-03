import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { Product } from "../../types/Product";
import { toast } from "react-toastify";
import { useCartStore } from "../../context/userCartStore";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.nombre} agregado al carrito 🛒`, {
      position: "bottom-right",
    });
  };

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography variant="h6">{product.nombre}</Typography>
        <Typography variant="body2">{product.descripcion}</Typography>
        <Typography variant="caption">Cantidad: {product.cantidad}</Typography>
        <Box mt={2}>
          <Button variant="contained" onClick={handleAddToCart} fullWidth>
            Agregar al carrito
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;