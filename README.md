# 🖨️ 3D Print Store - Catálogo Online

Un catálogo online moderno y responsive para productos de impresión 3D, construido con Next.js 14, TypeScript y Tailwind CSS.

## ✨ Características

- **Catálogo de Productos**: Navegación por categorías con filtros dinámicos
- **Carrito de Compras**: Gestión completa del carrito con React Context
- **Integración WhatsApp**: Envío directo de pedidos al número configurado
- **Diseño Responsive**: Mobile-first design que se adapta a todos los dispositivos
- **Tema Oscuro**: Interfaz moderna con paleta de colores oscura
- **Animaciones**: Transiciones suaves y efectos hover para mejor UX

## 🚀 Tecnologías Utilizadas

- **Framework**: Next.js 14+ (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **Estado**: React Context + useReducer
- **Formato de Precios**: Intl.NumberFormat para pesos argentinos

## 📁 Estructura del Proyecto

```
/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal con CartProvider
│   ├── page.tsx           # Página de inicio
│   └── globals.css        # Estilos globales
├── components/            # Componentes React
│   ├── ui/               # Componentes UI reutilizables
│   ├── product/          # Componentes de productos
│   ├── cart/             # Componentes del carrito
│   └── shared/           # Componentes compartidos
├── context/              # Contexto del carrito
├── data/                 # Datos de productos
├── types/                # Tipos de TypeScript
└── public/               # Archivos estáticos
    └── images/           # Imágenes de productos
```

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**

   ```bash
   git clone <url-del-repositorio>
   cd ecommerce-3d-printing
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**

   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📱 Funcionalidades Principales

### 🛍️ Catálogo de Productos

- Visualización de productos en grid responsive
- Filtrado por categorías
- Información detallada de cada producto
- Precios en pesos argentinos

### 🛒 Carrito de Compras

- Agregar productos con cantidad personalizable
- Modificar cantidades
- Eliminar productos
- Cálculo automático del total

### 📱 Integración WhatsApp

- Formateo automático del mensaje de pedido
- Envío directo al número configurado
- Inclusión de detalles del pedido y total

## 🎨 Personalización

### Colores

El proyecto utiliza una paleta de colores personalizada definida en `tailwind.config.js`:

- **Fondo**: `#111827` (gray-900)
- **Texto**: `#F9FAFB` (gray-50)
- **Primario**: Cian (`#06b6d4`)
- **Acento**: Magenta (`#d946ef`)

### Componentes

Todos los componentes están construidos con Tailwind CSS y son fácilmente personalizables modificando las clases CSS.

## 📊 Datos de Productos

Los productos se gestionan desde `data/products.json` con la siguiente estructura:

```json
{
  "id": "prod_001",
  "name": "Nombre del Producto",
  "category": "Categoría",
  "price": 2500,
  "description": "Descripción del producto",
  "size": "Dimensiones",
  "pack_quantity": 1,
  "imageUrl": "/images/imagen.jpg"
}
```

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conectar el repositorio a Vercel
2. Configurar variables de entorno si es necesario
3. Desplegar automáticamente

### Otros Proveedores

El proyecto es compatible con cualquier proveedor que soporte Next.js:

- Netlify
- Railway
- Heroku
- AWS Amplify

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construcción para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Verificación de código

## 📱 Responsive Design

El proyecto está diseñado con un enfoque mobile-first:

- **Móvil**: 1 columna de productos
- **Tablet**: 2 columnas de productos
- **Desktop**: 3-4 columnas de productos
- **Header sticky** con backdrop blur
- **Modal responsive** para el carrito

## 🎯 Próximas Mejoras

- [ ] Sistema de búsqueda de productos
- [ ] Filtros por precio y tamaño
- [ ] Galería de imágenes por producto
- [ ] Sistema de reviews y calificaciones
- [ ] Integración con más plataformas de mensajería
- [ ] PWA (Progressive Web App)

## 🤝 Contribución

1. Fork del proyecto
2. Crear rama para nueva funcionalidad
3. Commit de cambios
4. Push a la rama
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o consultas:

- **WhatsApp**: +54 226 644-0616
- **Email**: calaverasydiablitos1979@gmail.com

---

**Desarrollado con ❤️ usando Next.js, TypeScript y Tailwind CSS**
