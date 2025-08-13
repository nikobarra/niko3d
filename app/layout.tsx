import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '3D Print Store - Impresiones 3D Personalizadas',
  description:
    'Catálogo online de productos de impresión 3D. Encuentra accesorios, decoración, figuras y más. Envíanos tu pedido por WhatsApp.',
  keywords:
    'impresión 3D, productos 3D, accesorios, decoración, figuras, Argentina',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} bg-background text-foreground min-h-screen flex flex-col`}
      >
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
