import { useState } from "react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import "../styles/Cart.css";

export default function Cart() {
    const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart } = useCart();
    const [expanded, setExpanded] = useState(false);

    if (totalItems === 0) return null;

    const handleSend = () => {
        const url = buildWhatsAppUrl(items, totalPrice);
        window.open(url, "_blank");
    };

    return (
        <div className={`cart ${expanded ? "cart--expanded" : ""}`}>
            {/* Toggle bar */}
            <button
                className="cart__toggle"
                onClick={() => setExpanded(!expanded)}
                aria-label="Expandir carrito"
            >
                <div className="cart__toggle-left">
                    <span className="cart__badge">{totalItems}</span>
                    <span className="cart__toggle-label">
                        {totalItems === 1 ? "1 item" : `${totalItems} items`}
                    </span>
                </div>
                <span className="cart__toggle-total">{formatPrice(totalPrice)}</span>
                <span className={`cart__chevron ${expanded ? "cart__chevron--up" : ""}`}>
                    ▲
                </span>
            </button>

            {/* Expanded details */}
            {expanded && (
                <div className="cart__details">
                    <ul className="cart__list">
                        {items.map((ci) => (
                            <li key={ci.item.id} className="cart__item">
                                <span className="cart__item-name">{ci.item.name}</span>
                                <div className="cart__item-controls">
                                    <button
                                        className="cart__item-qty-btn"
                                        onClick={() => updateQuantity(ci.item.id, ci.quantity - 1)}
                                    >
                                        −
                                    </button>
                                    <span className="cart__item-qty">{ci.quantity}</span>
                                    <button
                                        className="cart__item-qty-btn"
                                        onClick={() => updateQuantity(ci.item.id, ci.quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <span className="cart__item-price">
                                    {formatPrice(ci.item.price * ci.quantity)}
                                </span>
                                <button
                                    className="cart__item-remove"
                                    onClick={() => removeItem(ci.item.id)}
                                    aria-label={`Eliminar ${ci.item.name}`}
                                >
                                    ✕
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="cart__summary">
                        <span className="cart__total-label">Total</span>
                        <span className="cart__total-value">{formatPrice(totalPrice)}</span>
                    </div>

                    <div className="cart__actions">
                        <button className="cart__clear-btn" onClick={clearCart}>
                            Vaciar carrito
                        </button>
                        <button className="cart__send-btn" onClick={handleSend} id="send-order-btn">
                            <svg viewBox="0 0 24 24" className="cart__wa-icon" fill="currentColor" width="22" height="22">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Enviar Pedido
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
