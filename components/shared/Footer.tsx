import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  // Obtener el año actual de forma dinámica
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-primary border-t border-surface-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Logo size="md" showText={true} />
            </div>
            <p className="text-text-secondary font-body leading-relaxed max-w-md">
              Especialistas en impresión 3D personalizada. Creamos productos
              únicos y de alta calidad para satisfacer todas tus necesidades.
              Desde accesorios hasta decoración, cada pieza es fabricada con
              precisión y dedicación.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-display font-semibold text-text-primary mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2 font-body">
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-text-accent transition-colors"
                >
                  Catálogo de Productos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-text-accent transition-colors"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-text-accent transition-colors"
                >
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-text-accent transition-colors"
                >
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h4 className="text-lg font-display font-semibold text-text-primary mb-4">
              Contacto
            </h4>
            <div className="space-y-3 font-body">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-text-accent" />
                <span className="text-text-secondary">+54 226 644-0616</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-text-accent" />
                <span className="text-text-secondary">info@niko3d.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-text-accent" />
                <span className="text-text-secondary">
                  Mar del Plata, Argentina
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-surface-accent/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-body text-text-muted">
              © {currentYear} Niko3D. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm font-body text-text-muted">
                Hecho con ❤️ en Argentina
              </span>
              <span className="text-text-muted">•</span>
              <a
                href="https://nicolasbarra.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-body text-text-secondary hover:text-text-accent transition-colors flex items-center gap-1"
              >
                Desarrollado por Nicolás Barra
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
