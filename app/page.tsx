import { ProductGrid } from '@/components/product/ProductGrid';
import productsData from '@/data/products.json';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-surface-accent to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
            Impresiones 3D que dan vida a tus ideas
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra colección de productos únicos y personalizados
            creados con tecnología de impresión 3D de alta calidad. Desde
            accesorios de escritorio hasta decoración para tu hogar.
          </p>
        </div>
      </section>

      {/* Productos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Nuestros Productos
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Explora nuestro catálogo y encuentra el producto perfecto para ti.
              Todos nuestros productos son fabricados a pedido con materiales de
              la más alta calidad.
            </p>
          </div>

          <ProductGrid products={productsData} />
        </div>
      </section>

      {/* Sección de información adicional */}
      <section className="bg-surface-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto shadow-neon">
                <svg
                  className="w-8 h-8 text-text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary">
                Calidad Garantizada
              </h3>
              <p className="text-text-secondary">
                Todos nuestros productos pasan por rigurosos controles de
                calidad para asegurar la mejor experiencia.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto shadow-neon">
                <svg
                  className="w-8 h-8 text-background"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary">
                Entrega Rápida
              </h3>
              <p className="text-text-secondary">
                Fabricamos tu pedido en 24-48 horas y lo enviamos a cualquier
                parte del país.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto shadow-neon">
                <svg
                  className="w-8 h-8 text-text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary">
                Personalización
              </h3>
              <p className="text-text-secondary">
                Ofrecemos opciones de personalización para que cada producto sea
                único y especial.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
