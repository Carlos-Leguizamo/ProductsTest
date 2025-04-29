import React, { useState } from 'react';
import { Box, Typography, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'; 
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useProductStore } from '../context/productStore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProductList = () => {
  const { products, deleteProduct } = useProductStore();
  const [sortKey, setSortKey] = useState<'codigo' | 'nombre' | 'cantidad' | 'creacion'>('creacion');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  const sortedProducts = products
    .sort((a, b) => {
      let comparison = 0;
      if (sortKey === 'nombre') {
        comparison = a.nombre.localeCompare(b.nombre);
      } else if (sortKey === 'creacion') {
        comparison = new Date(a.creacion).getTime() - new Date(b.creacion).getTime();
      } else {
        comparison = (a[sortKey] as number) - (b[sortKey] as number);
      }
      return order === 'asc' ? comparison : -comparison;
    });

  const handleDelete = (codigo: number) => {
    deleteProduct(codigo);
    toast.success('Producto eliminado correctamente');
  };

  const handleSortRequest = (key: 'codigo' | 'nombre' | 'cantidad' | 'creacion') => {
    const isSameColumn = sortKey === key; 
    setSortKey(key); 
    setOrder(isSameColumn && order === 'asc' ? 'desc' : 'asc'); 
  };

  return (
    <Box p={3} sx={{ backgroundColor: '#f4f6f8', borderRadius: 2, marginTop: 5, marginBottom: 5 }}>
      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="product table">
          <TableHead>
            <TableRow>
              <TableCell
                onClick={() => handleSortRequest('nombre')}
                sx={{
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  backgroundColor: '#6200ea',
                  color: 'white',
                  padding: '10px',
                  borderRadius: '10px 10px 0 0',
                  '&:hover': { backgroundColor: '#3700b3' },
                }}
              >
                Nombre
                {sortKey === 'nombre' && (
                  <IconButton size="small" sx={{ ml: 1 }}>
                    {order === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                  </IconButton>
                )}
              </TableCell>
              <TableCell
                onClick={() => handleSortRequest('codigo')}
                sx={{
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  backgroundColor: '#6200ea',
                  color: 'white',
                  padding: '10px',
                  borderRadius: '10px 10px 0 0',
                  '&:hover': { backgroundColor: '#3700b3' },
                }}
              >
                Código
                {sortKey === 'codigo' && (
                  <IconButton size="small" sx={{ ml: 1 }}>
                    {order === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                  </IconButton>
                )}
              </TableCell>
              <TableCell
                onClick={() => handleSortRequest('cantidad')}
                sx={{
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  backgroundColor: '#6200ea',
                  color: 'white',
                  padding: '10px',
                  borderRadius: '10px 10px 0 0',
                  '&:hover': { backgroundColor: '#3700b3' },
                }}
              >
                Cantidad
                {sortKey === 'cantidad' && (
                  <IconButton size="small" sx={{ ml: 1 }}>
                    {order === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                  </IconButton>
                )}
              </TableCell>
              <TableCell
                onClick={() => handleSortRequest('creacion')}
                sx={{
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  backgroundColor: '#6200ea',
                  color: 'white',
                  padding: '10px',
                  borderRadius: '10px 10px 0 0',
                  '&:hover': { backgroundColor: '#3700b3' },
                }}
              >
                Creación
                {sortKey === 'creacion' && (
                  <IconButton size="small" sx={{ ml: 1 }}>
                    {order === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                  </IconButton>
                )}
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: '#6200ea',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '10px',
                  borderRadius: '10px 10px 0 0',
                }}
              >
                Acciones
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedProducts.map((p) => (
              <TableRow key={p.codigo} sx={{ '&:hover': { backgroundColor: '#f0f0f0' } }}>
                <TableCell sx={{ padding: '16px', fontWeight: '500' }}>{p.nombre}</TableCell>
                <TableCell sx={{ padding: '16px', fontWeight: '500' }}>{p.codigo}</TableCell>
                <TableCell sx={{ padding: '16px', fontWeight: '500' }}>{p.cantidad}</TableCell>
                <TableCell sx={{ padding: '16px', fontWeight: '500' }}>
                  {new Date(p.creacion).toLocaleString()}
                </TableCell>
                <TableCell sx={{ padding: '16px' }}>
                  <IconButton
                    edge="end"
                    onClick={() => handleDelete(p.codigo)}
                    sx={{
                      color: '#d32f2f',
                      '&:hover': {
                        backgroundColor: '#ffebee',
                        color: '#c62828',
                      },
                    }}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {sortedProducts.length === 0 && <Typography sx={{ textAlign: 'center', marginTop: '20px' }}>No hay productos.</Typography>}
      <ToastContainer />
    </Box>
  );
};
