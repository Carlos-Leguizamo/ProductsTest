import { useInitProducts } from '../hooks/useInitProducts';
import { ProductForm } from '../components/ProductForm';
import { ProductList } from '../components/ProductList';
import { Container, Typography } from '@mui/material';

const Home = () => {
  useInitProducts();

  return (
    <Container>
      <Typography variant="h4" mt={4} mb={2}>Gestor de Productos</Typography>
      <ProductForm />
      <ProductList />
    </Container>
  );
};

export default Home;
