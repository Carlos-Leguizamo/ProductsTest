# 🛒 Product Management System - Sistema de Gestión de Productos

**Product Management System** es una aplicación web diseñada para gestionar productos de manera eficiente. Permite a los usuarios registrar productos con información básica como nombre, descripción, cantidad, y código, además de visualizar, ordenar, eliminar y filtrar la lista de productos. La aplicación utiliza almacenamiento local para persistir los datos, sin necesidad de un backend.

---

## ⚙️ Funcionalidades Principales

- **Gestión de productos**:
  - Registro de productos con los siguientes campos:
    - Código (número)
    - Nombre (texto)
    - Descripción (texto)
    - Cantidad (número)
    - Fecha de creación (automáticamente generada)
- **Visualización de productos**:
  - Ver lista de productos.
  - Filtrar productos por nombre.
  - Ordenar la lista de productos por:
    - Código
    - Nombre
    - Cantidad
    - Fecha de creación
- **Persistencia de datos**:
  - Los productos persisten incluso después de recargar la página utilizando `LocalStorage`.

---

## 🚀 Guía de Instalación

Este proyecto está basado en **React** con **TypeScript** para la parte frontend. Además, usa **Zustand** para el manejo de estado.

---

### 🧾 Requisitos Previos

Asegúrate de tener instalado:

- **Node.js** (v14+)
- **npm** (v6+ o superior)

---

### 📦 Clonar el repositorio

```bash
git clone https://github.com/Carlos-Leguizamo/ProductsTest.git
cd ProductsTest


## ⚛️ Frontend – React

Ubicación: `ProductsTest`

```bash
cd ProductsTest
npm install       # Instala dependencias
npm run dev         # Inicia el servidor de desarrollo
```
## 🛠️ Tecnologías Utilizadas



**Frontend:** React, ypeScrip, CSS, Material UI, Toaster de notificaciones,etc.

**Manejo de Estado:** Zustand

**Persistencia:** LocalStorage

**Herramientas:** npm, Vercel

---

## 🤝 Contribuciones

Desarrollado por **Carlos Eduardo Leguizamo Ramirez** como parte de un ejercicio técnico para Conteo.  

## 🛠️ App desplegada
Como herramienta de espliegue utilize **Vercel**, ya que es bastate intuitiva y facilita la utilizacion de ella misma.

- https://products-test-khaki.vercel.app/ 

