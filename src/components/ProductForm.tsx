import { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import { useProductStore } from '../context/productStore';
import { Product } from '../types/Product';

export const ProductForm = () => {
  const addProduct = useProductStore((s) => s.addProduct);
  const [form, setForm] = useState<Omit<Product, 'creacion'>>({
    codigo: 0,
    nombre: '',
    descripcion: '',
    cantidad: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const product: Product = {
      ...form,
      codigo: Number(form.codigo),
      cantidad: Number(form.cantidad),
      creacion: new Date().toISOString(),
    };
    addProduct(product);
    setForm({ codigo: 0, nombre: '', descripcion: '', cantidad: 0 });
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        boxShadow: 6,
        borderRadius: 2,
        backgroundColor: '#ffffff',
        marginTop: 5,
        marginBottom: 5,
      }}
    >
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: '#333' }}>
        Crear Nuevo Producto
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        gap={3}
        sx={{
          width: '100%',
          maxWidth: 500,
        }}
      >
        <TextField
          name="codigo"
          label="Código"
          type="number"
          value={form.codigo}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 4,
              backgroundColor: '#f9f9f9',
            },
            '& .MuiInputLabel-root': {
              fontSize: '14px',
              color: '#555',
            },
            '& .MuiOutlinedInput-root.Mui-focused': {
              backgroundColor: '#fff',
              borderColor: '#1976d2',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ddd',
            },
          }}
        />
        <TextField
          name="nombre"
          label="Nombre"
          value={form.nombre}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 4,
              backgroundColor: '#f9f9f9',
            },
            '& .MuiInputLabel-root': {
              fontSize: '14px',
              color: '#555',
            },
            '& .MuiOutlinedInput-root.Mui-focused': {
              backgroundColor: '#fff',
              borderColor: '#1976d2',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ddd',
            },
          }}
        />
        <TextField
          name="descripcion"
          label="Descripción"
          value={form.descripcion}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          multiline
          rows={4}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 4,
              backgroundColor: '#f9f9f9',
            },
            '& .MuiInputLabel-root': {
              fontSize: '14px',
              color: '#555',
            },
            '& .MuiOutlinedInput-root.Mui-focused': {
              backgroundColor: '#fff',
              borderColor: '#1976d2',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ddd',
            },
          }}
        />
        <TextField
          name="cantidad"
          label="Cantidad"
          type="number"
          value={form.cantidad}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 4,
              backgroundColor: '#f9f9f9',
            },
            '& .MuiInputLabel-root': {
              fontSize: '14px',
              color: '#555',
            },
            '& .MuiOutlinedInput-root.Mui-focused': {
              backgroundColor: '#fff',
              borderColor: '#1976d2',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ddd',
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{
            marginTop: 2,
            padding: '12px 0',
            fontSize: '16px',
            fontWeight: 'bold',
            borderRadius: 4,
            '&:hover': {
              backgroundColor: '#1976d2',
            },
          }}
        >
          Crear Producto
        </Button>
      </Box>
    </Container>
  );
};
