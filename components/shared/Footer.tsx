import React from 'react';
import { Package, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface-primary border-t border-surface-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de la empresa */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-primary-500 rounded-lg flex items-center justify-center shadow-neon">
                <Package className="w-6 h-6 text-background" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-primary">
                  3D Print Store
                </h3>
                <p className="text-sm text-text-secondary">
                  Impresiones 3D Personalizadas
                </p>
              </div>
            </div>
            <p className="text-text-secondary text-sm">
              Creamos productos únicos y personalizados con tecnología de
              impresión 3D de alta calidad.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h4 className="text-text-primary font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-accent-500 transition-colors duration-200 text-sm"
                >
                  Catálogo de Productos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-accent-500 transition-colors duration-200 text-sm"
                >
                  Categorías
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-accent-500 transition-colors duration-200 text-sm"
                >
                  Información de Envío
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-accent-500 transition-colors duration-200 text-sm"
                >
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div className="space-y-4">
            <h4 className="text-text-primary font-semibold">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent-500" />
                <span className="text-text-secondary text-sm">
                  +54 226 644-0616
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent-500" />
                <span className="text-text-secondary text-sm">
                  info@3dprintstore.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent-500" />
                <span className="text-text-secondary text-sm">
                  Mar del Plata, Argentina
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-surface-accent/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-muted text-sm">
              © 2024 3D Print Store. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-text-muted hover:text-accent-500 transition-colors duration-200 text-sm"
              >
                Términos y Condiciones
              </a>
              <a
                href="#"
                className="text-text-muted hover:text-accent-500 transition-colors duration-200 text-sm"
              >
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
