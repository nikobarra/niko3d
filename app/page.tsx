import { ProductGrid } from '@/components/product/ProductGrid';
import products from '@/data/products.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-text-primary leading-tight tracking-wide">
              Impresiones 3D que dan vida a tus ideas
            </h1>
            <p className="text-lg sm:text-xl font-body text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Descubre nuestra colección de productos únicos y personalizados, 
              creados con la más alta calidad y tecnología de impresión 3D
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full">
                <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-body text-text-accent font-medium">
                  Envío directo por WhatsApp
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ProductGrid products={products} />
        </div>
      </section>
    </div>
  );
}
