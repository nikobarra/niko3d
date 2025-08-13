import {
  Package,
  Flower,
  Gamepad2,
  Wrench,
  Lightbulb,
  Smartphone,
  Image as ImageIcon,
  Home,
  Palette,
  Zap,
  Settings,
} from 'lucide-react';

// Mapeo de categorías a iconos específicos
export const categoryIcons: Record<string, React.ComponentType<any>> = {
  'Accesorios de Escritorio': Package,
  'Hogar y Decoración': Flower,
  'Figuras de Acción': Gamepad2,
  Herramientas: Wrench,
  Iluminación: Lightbulb,
  Tecnología: Smartphone,
  'Arte y Diseño': Palette,
  Electrónica: Zap,
  Jardín: Home,
  Otros: Settings,
};

// Función para obtener el icono apropiado para una categoría
export function getCategoryIcon(category: string): React.ComponentType<any> {
  return categoryIcons[category] || ImageIcon;
}

// Configuración de colores para iconos de fallback
export const fallbackIconColors = {
  primary: 'text-accent-500',
  secondary: 'text-text-muted',
  background: 'bg-surface-accent',
  hover: 'hover:text-accent-400',
};

// Configuración de tamaños de iconos
export const iconSizes = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-16 h-16',
  xl: 'w-20 h-20',
};
