import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useProductStore } from "../context/productStore";
import { ToastContainer, toast } from "react-toastify";
import { ConfirmDialog } from "./confirmDeleteProduct";

export const ProductList = () => {
  const { products, deleteProduct } = useProductStore();
  const [sortKey, setSortKey] = useState<
    "codigo" | "nombre" | "cantidad" | "creacion"
  >("creacion");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [filter, setFilter] = useState<string>("");
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const handleOpenDialog = (codigo: number) => {
    setSelectedProduct(codigo);
    setOpenDialog(true);
  };

  const filteredProducts = products.filter((product) =>
    product.nombre.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    let comparison = 0;
    if (sortKey === "nombre") {
      comparison = a.nombre.localeCompare(b.nombre);
    } else if (sortKey === "creacion") {
      comparison =
        new Date(a.creacion).getTime() - new Date(b.creacion).getTime();
    } else {
      comparison = (a[sortKey] as number) - (b[sortKey] as number);
    }
    return order === "asc" ? comparison : -comparison;
  });

  const handleDelete = (codigo: number) => {
    if (selectedProduct !== null) {
      deleteProduct(codigo);
      toast.success("Producto eliminado correctamente");
      setOpenDialog(false);
    }
  };

  const handleCancelDelete = () => {
    toast.info("Eliminación cancelada");
    setOpenDialog(false);
  };
  

  const handleSortRequest = (
    key: "codigo" | "nombre" | "cantidad" | "creacion"
  ) => {
    const isSameColumn = sortKey === key;
    setSortKey(key);
    setOrder(isSameColumn && order === "asc" ? "desc" : "asc");
  };

  return (
    <Box
      p={3}
      sx={{
        backgroundColor: "#f4f6f8",
        borderRadius: 2,
        marginTop: 5,
        marginBottom: 5,
      }}
    >
      <Box
        mb={2}
        sx={{ display: "flex", justifyContent: "flex-end", maxWidth: "400px" }}
      >
        <TextField
          fullWidth
          variant="outlined"
          label="Buscar por Nombre"
          value={filter}
          onChange={handleFilterChange}
          sx={{
            backgroundColor: "#f9f9f9",
            borderRadius: "30px",
            "& .MuiOutlinedInput-root": {
              padding: "8px 16px",
              backgroundColor: "#ffffff",
              borderRadius: "30px",
            },
            "& .MuiInputLabel-root": {
              color: "#7d7d7d",
              fontSize: "14px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#e0e0e0",
            },
            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#6200ea",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#6200ea",
              },
            "& .MuiInputBase-root": {
              fontSize: "14px",
            },
            "& .MuiInputBase-input": {
              padding: "12px",
            },
            width: "100%",
          }}
        />
      </Box>

      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="product table">
          <TableHead>
            <TableRow>
              <TableCell
                onClick={() => handleSortRequest("nombre")}
                sx={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  backgroundColor: "#6200ea",
                  color: "white",
                  padding: "10px",
                  borderRadius: "10px 10px 0 0",
                  "&:hover": { backgroundColor: "#3700b3" },
                }}
              >
                Nombre
                {sortKey === "nombre" && (
                  <IconButton size="small" sx={{ ml: 1 }}>
                    {order === "asc" ? (
                      <ArrowUpwardIcon />
                    ) : (
                      <ArrowDownwardIcon />
                    )}
                  </IconButton>
                )}
              </TableCell>
              <TableCell
                onClick={() => handleSortRequest("codigo")}
                sx={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  backgroundColor: "#6200ea",
                  color: "white",
                  padding: "10px",
                  borderRadius: "10px 10px 0 0",
                  "&:hover": { backgroundColor: "#3700b3" },
                }}
              >
                Código
                {sortKey === "codigo" && (
                  <IconButton size="small" sx={{ ml: 1 }}>
                    {order === "asc" ? (
                      <ArrowUpwardIcon />
                    ) : (
                      <ArrowDownwardIcon />
                    )}
                  </IconButton>
                )}
              </TableCell>
              <TableCell
                onClick={() => handleSortRequest("cantidad")}
                sx={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  backgroundColor: "#6200ea",
                  color: "white",
                  padding: "10px",
                  borderRadius: "10px 10px 0 0",
                  "&:hover": { backgroundColor: "#3700b3" },
                }}
              >
                Cantidad
                {sortKey === "cantidad" && (
                  <IconButton size="small" sx={{ ml: 1 }}>
                    {order === "asc" ? (
                      <ArrowUpwardIcon />
                    ) : (
                      <ArrowDownwardIcon />
                    )}
                  </IconButton>
                )}
              </TableCell>
              <TableCell
                onClick={() => handleSortRequest("creacion")}
                sx={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  backgroundColor: "#6200ea",
                  color: "white",
                  padding: "10px",
                  borderRadius: "10px 10px 0 0",
                  "&:hover": { backgroundColor: "#3700b3" },
                }}
              >
                Creación
                {sortKey === "creacion" && (
                  <IconButton size="small" sx={{ ml: 1 }}>
                    {order === "asc" ? (
                      <ArrowUpwardIcon />
                    ) : (
                      <ArrowDownwardIcon />
                    )}
                  </IconButton>
                )}
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#6200ea",
                  color: "white",
                  fontWeight: "bold",
                  padding: "10px",
                  borderRadius: "10px 10px 0 0",
                }}
              >
                Acciones
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedProducts.map((p) => (
              <TableRow
                key={p.codigo}
                sx={{ "&:hover": { backgroundColor: "#f0f0f0" } }}
              >
                <TableCell sx={{ padding: "16px", fontWeight: "500" }}>
                  {p.nombre}
                </TableCell>
                <TableCell sx={{ padding: "16px", fontWeight: "500" }}>
                  {p.codigo}
                </TableCell>
                <TableCell sx={{ padding: "16px", fontWeight: "500" }}>
                  {p.cantidad}
                </TableCell>
                <TableCell sx={{ padding: "16px", fontWeight: "500" }}>
                  {new Date(p.creacion).toLocaleString()}
                </TableCell>
                <TableCell sx={{ padding: "16px" }}>
                  <IconButton
                    edge="end"
                    onClick={() => handleOpenDialog(p.codigo)}
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {sortedProducts.length === 0 && (
        <Typography sx={{ textAlign: "center", marginTop: "20px" }}>
          No hay productos.
        </Typography>
      )}
      <ToastContainer />
      <ConfirmDialog
        open={openDialog}
        onClose={handleCancelDelete}
        onConfirm={() => selectedProduct && handleDelete(selectedProduct)}
      />
    </Box>
  );
};
