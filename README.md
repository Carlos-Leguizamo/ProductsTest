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

- **Carrusel de productos**:
  - Componente reutilizable y responsive para mostrar productos.
  - Muestra entre 1 y 4 productos visibles según el tamaño de pantalla.
  - Navegación con botones, scroll táctil y mouse drag.
  - Soporte opcional para auto-scroll con temporizador configurable.
  - Cada tarjeta incluye botón “Agregar al carrito” con respuesta visual.
  - Props configurables: lista de productos, cantidad visible, auto-play y velocidad.

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



- **Frontend:** React, TypeScript, CSS, Material UI, Toaster de notificaciones, etc.
- **Manejo de Estado:** Zustand
- **Persistencia:** LocalStorage
- **Herramientas:** npm, Vercel
- **Estilos y Diseño:** Material UI, diseño responsive con Flexbox y Grid

## 🛠️ Justificación Tecnológica


Para este proyecto, elegí utilizar **React** junto con **TypeScript** debido a la eficiencia y robustez que proporcionan al desarrollar aplicaciones web modernas. **React** me permite crear componentes reutilizables y mantener un flujo de trabajo declarativo, mientras que **TypeScript** agrega un nivel adicional de seguridad y control en el desarrollo, ayudando a prevenir errores a través de la tipificación estática.

El uso de **Material UI** me permitió implementar un diseño moderno, accesible y consistente de manera rápida, optimizando el tiempo de desarrollo sin sacrificar la calidad visual. A través de sus componentes personalizables y su integración sencilla con **React, Material UI** facilita la creación de una interfaz de usuario atractiva y funcional.

Para la gestión del estado, elegí **Zustand** debido a su simplicidad y eficiencia. Esta librería permite un manejo de estado sin la complejidad que a veces presentan otras soluciones más pesadas, como **Redux, Context Api, etc;** lo que hace que el código sea más limpio y fácil de mantener.

La persistencia de datos se maneja a través de **LocalStorage**, una solución ligera y rápida para guardar los productos, permitiendo que la información persista incluso después de recargar la página, sin necesidad de configurar un backend.

Finalmente, **Flexbox y Grid** fueron utilizados para asegurar que la aplicación sea completamente responsive, brindando una experiencia de usuario óptima en dispositivos de diferentes tamaños sin la necesidad de implementar librerías adicionales.

---

## 🤝 Contribuciones

Desarrollado por **Carlos Eduardo Leguizamo Ramirez** como parte de un ejercicio técnico para Conteo.  

## 🛠️ App desplegada
Como herramienta de espliegue utilize **Vercel**, ya que es bastate intuitiva y facilita la utilizacion de ella misma.

- https://products-test-khaki.vercel.app/ 

