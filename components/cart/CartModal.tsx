'use client';

import React from 'react';
import { X, Plus, Minus, Trash2, Package, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { CartItemImage } from '@/components/ui/CartItemImage';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { state, removeFromCart, updateQuantity, clearCart } = useCart();

  if (!isOpen) return null;

  // Función para formatear precios en pesos argentinos
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
    }).format(price);
  };

  // Función para confirmar el pedido por WhatsApp
  const handleConfirmOrder = (): void => {
    // Validación: si el carrito está vacío, no hacer nada
    if (state.items.length === 0) {
      return;
    }

    // Construcción del mensaje
    const messageParts: string[] = [];

    // Saludo inicial
    messageParts.push('¡Hola! Quisiera encargar los siguientes productos:\n\n');

    // Iterar sobre cada item del carrito
    state.items.forEach((item) => {
      // Calcular subtotal del item
      const subtotal = item.product.price * item.quantity;

      // Formatear la línea del producto
      const line = `- ${item.quantity}x ${item.product.name} (${formatPrice(
        subtotal
      )})`;
      messageParts.push(line);
    });

    // Calcular el total del pedido
    const total = state.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    // Agregar la línea del total
    messageParts.push(`\n*Total del pedido: ${formatPrice(total)}*`);

    // Unir todas las partes en un solo mensaje
    const finalMessage = messageParts.join('\n');

    // Generación de la URL de WhatsApp
    const encodedMessage = encodeURIComponent(finalMessage);
    const phoneNumber = '542266440616';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');
  };

  // Función para manejar cambios de cantidad
  const handleQuantityChange = (
    productId: string,
    newQuantity: number
  ): void => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-surface-card rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden border border-surface-accent/20">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-surface-accent/20">
            <h2 className="text-xl font-semibold text-text-primary flex items-center gap-2">
              <Package className="w-5 h-5 text-accent-500" />
              Carrito de Compras
            </h2>
            <button
              onClick={onClose}
              className="text-text-muted hover:text-text-primary transition-colors duration-200"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            {state.items.length === 0 ? (
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-text-muted mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Tu carrito está vacío
                </h3>
                <p className="text-text-secondary">
                  Agrega algunos productos para comenzar tu pedido.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center gap-4 p-4 bg-surface-primary rounded-lg border border-surface-accent/20"
                  >
                    <div className="w-16 h-16 overflow-hidden">
                      <CartItemImage
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        category={item.product.category}
                        width={64}
                        height={64}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-text-primary font-medium truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-text-secondary text-sm">
                        Pack x{item.product.pack_quantity}
                      </p>
                      <p className="text-accent-500 font-semibold">
                        {formatPrice(item.product.price)}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            item.product.id,
                            item.quantity - 1
                          )
                        }
                        className="w-8 h-8 bg-surface-accent hover:bg-accent-500 hover:text-background text-text-primary rounded-full flex items-center justify-center transition-colors duration-200"
                        aria-label="Reducir cantidad"
                      >
                        <Minus className="w-4 h-4" />
                      </button>

                      <span className="w-8 text-center text-text-primary font-medium">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          handleQuantityChange(
                            item.product.id,
                            item.quantity + 1
                          )
                        }
                        className="w-8 h-8 bg-surface-accent hover:bg-accent-500 hover:text-background text-text-primary rounded-full flex items-center justify-center transition-colors duration-200"
                        aria-label="Aumentar cantidad"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-text-primary font-semibold">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-red-400 hover:text-red-300 transition-colors duration-200"
                        aria-label="Eliminar producto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="p-6 border-t border-surface-accent/20 bg-surface-primary">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-text-primary">
                  Total del Pedido:
                </span>
                <span className="text-2xl font-bold text-accent-500">
                  {formatPrice(state.total)}
                </span>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={clearCart}
                  variant="outline"
                  className="flex-1"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Vaciar Carrito
                </Button>

                <Button
                  onClick={handleConfirmOrder}
                  variant="neon"
                  className="flex-1"
                  disabled={state.items.length === 0}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Confirmar Pedido por WhatsApp
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
