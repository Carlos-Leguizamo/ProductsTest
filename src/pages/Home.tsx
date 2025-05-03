import { useState } from "react";
import { useInitProducts } from "../hooks/useInitProducts";
import { useProductStore } from "../context/productStore";
import { ProductForm } from "../components/form/ProductForm";
import { ProductList } from "../components/product-list/ProductList";
import ProductCarousel from "../components/carrusel/ProductCarrusel";
import ShoppingCart from "../components/shopping-cart/ShoppingCart";

import {
  Container,
  Typography,
  Box,
  Link,
  Divider,
  Button,
  Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Home = () => {
  useInitProducts();
  const { products } = useProductStore();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" mt={4} mb={2} sx={{ textAlign: "center", fontWeight: "bold" }}>
        Gestor de Productos
      </Typography>

      <ProductForm />
      <ProductList />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: 4, mb: 2 }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Productos destacados
        </Typography>

        <Button
          variant="outlined"
          startIcon={<ShoppingCartIcon />}
          onClick={() => setCartOpen(true)}
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            borderRadius: 2,
            px: 2,
          }}
        >
          Ver Carrito
        </Button>
      </Stack>

      <ProductCarousel
        products={products}
        visibleCount={3}
        autoPlay
        autoPlayInterval={5000}
      />

      <Divider sx={{ my: 4 }} />

      <Box sx={{ position: "relative", mt: 6, mb: 15 }}>
        <Typography
          variant="body2"
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            opacity: 0.8,
            fontSize: "0.85rem",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          Creado por{" "}
          <Link
            href="https://github.com/Carlos-Leguizamo"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#1976d2",
              textDecoration: "none",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <GitHubIcon fontSize="small" />
            Carlos Leguizamo
          </Link>
        </Typography>
      </Box>

      <ShoppingCart open={cartOpen} onClose={() => setCartOpen(false)} />
    </Container>
  );
};

export default Home;
