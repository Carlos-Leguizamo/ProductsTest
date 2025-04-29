import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
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
    <Box display="flex" flexDirection="column" gap={2} p={2}>
      <TextField name="codigo" label="Código" type="number" value={form.codigo} onChange={handleChange} />
      <TextField name="nombre" label="Nombre" value={form.nombre} onChange={handleChange} />
      <TextField name="descripcion" label="Descripción" value={form.descripcion} onChange={handleChange} />
      <TextField name="cantidad" label="Cantidad" type="number" value={form.cantidad} onChange={handleChange} />
      <Button variant="contained" onClick={handleSubmit}>Crear Producto</Button>
    </Box>
  );
};
