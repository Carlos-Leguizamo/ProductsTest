import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Product } from "../../types/Product";
import { toast } from "react-toastify";
import { useCartStore } from "../../context/userCartStore";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(
      <Box display="flex" alignItems="center" gap={1}>
        <ShoppingCartIcon fontSize="small" />
        {product.nombre} agregado al carrito
      </Box>,
      { position: "bottom-right" }
    );
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        boxShadow: 3,
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={product.imagen || ""}
        alt={product.nombre}
        sx={{
          width: "100%",
          height: 140,
          objectFit: "cover",
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {product.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={1}>
          {product.descripcion}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Cantidad disponible: {product.cantidad}
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddToCart}
          fullWidth
          startIcon={<ShoppingCartIcon />}
        >
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
