import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';

const inter = Inter({ subsets: ['latin'] });

// Configuración de fuentes
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '3D Print Store - Impresiones 3D Personalizadas',
  description:
    'Catálogo de productos de impresión 3D personalizados. Encuentra accesorios, decoración, figuras y más.',
  keywords:
    'impresión 3D, productos personalizados, accesorios, decoración, figuras',
  authors: [{ name: 'Niko3D' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${playfairDisplay.variable} ${montserrat.variable}`}
    >
      <body
        className={`${inter.className} bg-background text-text-primary antialiased`}
      >
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
