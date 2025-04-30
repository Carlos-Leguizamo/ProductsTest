import { useInitProducts } from '../hooks/useInitProducts';
import { ProductForm } from '../components/ProductForm';
import { ProductList } from '../components/ProductList';
import { Container, Typography, Box, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub"; 

const Home = () => {
  useInitProducts();

  return (
    <Container>
      <Typography variant="h4" mt={4} mb={2} sx={{ textAlign: "center" }}>
        Gestor de Productos
      </Typography>
      <ProductForm />
      <ProductList />
      <Box sx={{ position: "relative", mt: 4 }}>
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
            }}
          >
            <GitHubIcon fontSize="small" />
            Carlos Leguizamo
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
