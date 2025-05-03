import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import { useProductStore } from "../../context/productStore";
import { Product } from "../../types/Product";
import { toast } from "react-toastify";
import { PhotoCamera, Cancel } from "@mui/icons-material";

export const ProductForm = () => {
  const addProduct = useProductStore((s) => s.addProduct);
  const [form, setForm] = useState<Omit<Product, "creacion">>({
    codigo: 0,
    nombre: "",
    descripcion: "",
    cantidad: 0,
  });
  const [image, setImage] = useState<string | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (image) {
      toast.error("Ya has cargado una imagen. Solo se permite una.");
      return;
    }

    if (file) {
      const fileType = file.type.split("/")[1];
      if (fileType === "jpeg" || fileType === "png") {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result as string);
        };
        reader.readAsDataURL(file);
        toast.success("Imagen cargada correctamente");
      } else {
        toast.error("Solo se permiten imágenes JPG o PNG");
      }
    }
  };

  const handleCancelImage = () => {
    setImage(undefined);
    toast.info("Imagen cancelada");
  };

  const handleSubmit = () => {
    const product: Product = {
      ...form,
      codigo: Number(form.codigo),
      cantidad: Number(form.cantidad),
      creacion: new Date().toISOString(),
      imagen: image,
    };
    addProduct(product);
    setForm({ codigo: 0, nombre: "", descripcion: "", cantidad: 0 });
    setImage(undefined);
    toast.success("Producto creado correctamente");
  };

  const isFormValid =
    form.codigo &&
    form.nombre &&
    form.descripcion &&
    form.cantidad &&
    image !== undefined;

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
        boxShadow: 6,
        borderRadius: 2,
        backgroundColor: "#ffffff",
        marginTop: 5,
        marginBottom: 5,
      }}
    >
      <Typography
        variant="h5"
        sx={{ mb: 3, fontWeight: "bold", color: "#333" }}
      >
        Crear Nuevo Producto
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        gap={3}
        sx={{
          width: "100%",
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
        />
        <TextField
          name="nombre"
          label="Nombre"
          value={form.nombre}
          onChange={handleChange}
          fullWidth
          variant="outlined"
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
        />
        <TextField
          name="cantidad"
          label="Cantidad"
          type="number"
          value={form.cantidad}
          onChange={handleChange}
          fullWidth
          variant="outlined"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "2px dashed #1976d2",
            padding: 2,
            borderRadius: 2,
            backgroundColor: "#f1f1f1",
            cursor: "pointer",
            textAlign: "center",
            "&:hover": {
              backgroundColor: "#e3f2fd",
            },
          }}
        >
          <input
            accept="image/jpeg, image/png"
            type="file"
            style={{ display: "none" }}
            id="image-upload"
            onChange={handleImageChange}
          />
          <label htmlFor="image-upload">
            <IconButton
              component="span"
              sx={{ fontSize: 40, color: "#1976d2" }}
            >
              <PhotoCamera />
            </IconButton>
            <Typography sx={{ mt: 1, color: "#1976d2", fontWeight: "bold" }}>
              Subir Imagen
            </Typography>
          </label>
          {image && (
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src={image}
                alt="Imagen cargada"
                sx={{
                  mt: 2,
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  boxShadow: 3,
                }}
              />
              <IconButton
                onClick={handleCancelImage}
                sx={{
                  position: "absolute",
                  top: -10,
                  right: -10,
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  boxShadow: 2,
                  "&:hover": {
                    backgroundColor: "#f44336",
                  },
                }}
              >
                <Cancel sx={{ color: "#f44336" }} />
              </IconButton>
            </Box>
          )}
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={!isFormValid}
          sx={{
            marginTop: 2,
            padding: "12px 0",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: 4,
            "&:hover": {
              backgroundColor: "#1976d2",
            },
          }}
        >
          Crear Producto
        </Button>
      </Box>
    </Container>
  );
};
