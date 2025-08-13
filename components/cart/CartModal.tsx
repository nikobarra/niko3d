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

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleConfirmOrder = (): void => {
    if (state.items.length === 0) return;
    
    const messageParts: string[] = [
      '¡Hola! Quisiera encargar los siguientes productos:\n\n'
    ];
    
    state.items.forEach((item) => {
      const subtotal = item.product.price * item.quantity;
      const line = `- ${item.quantity}x ${item.product.name} (${formatPrice(subtotal)})`;
      messageParts.push(line);
    });
    
    const total = state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    messageParts.push(`\n*Total del pedido: ${formatPrice(total)}*`);
    
    const finalMessage = messageParts.join('\n');
    const encodedMessage = encodeURIComponent(finalMessage);
    const phoneNumber = '542266440616';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-surface-card rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden border border-surface-accent/20">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-surface-accent/20 bg-surface-primary">
            <div>
              <h2 className="text-xl font-display font-bold text-text-primary">
                Carrito de Compras
              </h2>
              <p className="text-sm font-body text-text-muted">
                {state.items.length} producto{state.items.length !== 1 ? 's' : ''} en tu carrito
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-text-muted hover:text-text-primary transition-colors rounded-lg hover:bg-surface-accent/20"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Contenido */}
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            {state.items.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-surface-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-text-muted" />
                </div>
                <h3 className="text-lg font-display font-semibold text-text-primary mb-2">
                  Tu carrito está vacío
                </h3>
                <p className="text-text-muted font-body">
                  Agrega algunos productos para comenzar tu pedido
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-4 p-4 bg-surface-primary rounded-lg border border-surface-accent/20">
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
                      <h4 className="font-display font-semibold text-text-primary truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-sm font-body text-text-muted">
                        {formatPrice(item.product.price)} c/u
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-surface-accent/30 rounded-lg">
                        <button
                          onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 text-text-muted hover:text-text-primary transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-1 text-sm font-body font-medium text-text-primary min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 text-text-muted hover:text-text-primary transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-2 text-text-muted hover:text-red-400 transition-colors rounded-lg hover:bg-red-500/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-display font-bold text-text-accent">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
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
                <span className="text-lg font-body font-medium text-text-primary">
                  Total del pedido:
                </span>
                <span className="text-2xl font-display font-bold text-text-accent">
                  {formatPrice(state.total)}
                </span>
              </div>
              
              <div className="flex gap-3">
                <Button
                  onClick={clearCart}
                  variant="outline"
                  className="flex-1 font-body font-semibold"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Vaciar Carrito
                </Button>
                <Button
                  onClick={handleConfirmOrder}
                  variant="neon"
                  className="flex-1 font-body font-bold"
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
