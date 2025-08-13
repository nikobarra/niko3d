# 📁 Carpeta de Imágenes

Esta carpeta contiene las imágenes de los productos del catálogo y el logo de la empresa.

## 🖼️ Imágenes Requeridas

### ✅ Imágenes Disponibles:
- `capibara.png` - Capibara Flex resorte (Accesorios de Escritorio)
- `panda.png` - Figura de Panda (si está disponible)
- `logo_niko3d.jpeg` - Logo de la empresa (usado como fallback)

### ❌ Imágenes Faltantes (se mostrará el logo Niko3D):
- `macetas-geometricas.jpg` - Macetas de Diseño Geométrico (Hogar y Decoración)
- `figura-accion.jpg` - Figura de Acción Personalizable (Figuras de Acción)
- `organizador-herramientas.jpg` - Organizador de Herramientas Modular (Herramientas)
- `lamparas-mesa.jpg` - Lámpara de Mesa LED (Hogar y Decoración)
- `soporte-smartphone.jpg` - Soporte para Smartphone Multifunción (Accesorios de Escritorio)

## 🎯 Sistema de Fallback Inteligente

### 🔧 Cómo Funciona:
1. **Intento de Carga**: El sistema intenta cargar la imagen del producto desde la URL especificada
2. **Primer Fallback**: Si la imagen del producto falla, muestra automáticamente el logo `logo_niko3d.jpeg`
3. **Segundo Fallback**: Si también falla el logo, muestra un icono específico para la categoría
4. **Iconos por Categoría** (solo como último recurso):
   - 📦 **Accesorios de Escritorio**: Icono de Package
   - 🌸 **Hogar y Decoración**: Icono de Flower
   - 🎮 **Figuras de Acción**: Icono de Gamepad2
   - 🔧 **Herramientas**: Icono de Wrench
   - 💡 **Iluminación**: Icono de Lightbulb
   - 📱 **Tecnología**: Icono de Smartphone

### 📐 Especificaciones Técnicas:
- **Formato Recomendado**: JPG, PNG, WebP
- **Tamaño Recomendado**: 400x400px mínimo
- **Peso Máximo**: 500KB por imagen
- **Resolución**: 72-150 DPI para web

### 🚀 Agregar Nuevas Imágenes:
1. Coloca la imagen en esta carpeta (`public/images/`)
2. Actualiza el `imageUrl` en `data/products.json`
3. El sistema automáticamente detectará y mostrará la nueva imagen
4. Si hay algún error, mostrará el logo Niko3D como fallback

### 💡 Ventajas del Sistema:
- **Branding Consistente**: El logo Niko3D se muestra cuando faltan imágenes de productos
- **Experiencia de Usuario Profesional**: Nunca se muestran imágenes rotas
- **Fallback Robusto**: Sistema de respaldo en múltiples niveles
- **Carga Optimizada**: Manejo eficiente de errores de imagen
- **Mantenimiento Fácil**: Configuración centralizada

## 🎨 Logo Niko3D

### 📋 Especificaciones del Logo:
- **Archivo**: `logo_niko3d.jpeg`
- **Tamaño**: 53KB
- **Uso**: Fallback principal para imágenes de productos faltantes
- **Estilo**: Se muestra con `object-contain` para mantener proporciones
- **Fondo**: Gradiente que combina con el tema de la aplicación

### 🔄 Comportamiento del Logo:
- **Productos**: Se muestra centrado con padding y fondo degradado
- **Carrito**: Se muestra en tamaño reducido con bordes redondeados
- **Responsive**: Se adapta automáticamente al tamaño del contenedor
- **Optimizado**: Usa lazy loading para mejor rendimiento

## 🔄 Actualización de Iconos

Los iconos se pueden personalizar editando `lib/imageConfig.ts`:
- Agregar nuevas categorías
- Cambiar iconos existentes
- Modificar colores y tamaños
- Agregar nuevas funcionalidades

## 📝 Notas Importantes

- El logo Niko3D es el fallback principal y se muestra antes que los iconos de categoría
- Solo si fallan tanto la imagen del producto como el logo, se muestran los iconos
- El sistema es completamente automático y no requiere intervención manual
- Todas las imágenes se optimizan automáticamente con Next.js Image
