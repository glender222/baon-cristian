import { useState } from "react";
import type { MenuItem as MenuItemType } from "../data/menuData";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";
import "../styles/MenuCard.css";

interface Props {
    item: MenuItemType;
}

export default function MenuCard({ item }: Props) {
    const { items, addItem, updateQuantity } = useCart();
    const [imgError, setImgError] = useState(false);
    const cartItem = items.find((ci) => ci.item.id === item.id);
    const qty = cartItem?.quantity ?? 0;

    return (
        <article className="menu-card" id={`menu-item-${item.id}`}>
            <div className="menu-card__img-wrap">
                {!imgError ? (
                    <img
                        src={item.image}
                        alt={item.name}
                        className="menu-card__img"
                        loading="lazy"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="menu-card__img-placeholder">
                        <span className="menu-card__img-placeholder-icon">🍽️</span>
                    </div>
                )}
                {qty > 0 && <span className="menu-card__badge">{qty}</span>}
            </div>

            <div className="menu-card__body">
                <h3 className="menu-card__name">{item.name}</h3>
                <p className="menu-card__desc">{item.description}</p>
                <div className="menu-card__footer">
                    <span className="menu-card__price">{formatPrice(item.price)}</span>
                    {qty === 0 ? (
                        <button
                            className="menu-card__add-btn"
                            onClick={() => addItem(item)}
                            aria-label={`Agregar ${item.name}`}
                        >
                            <span>+</span> Agregar
                        </button>
                    ) : (
                        <div className="menu-card__qty-controls">
                            <button
                                className="menu-card__qty-btn"
                                onClick={() => updateQuantity(item.id, qty - 1)}
                                aria-label="Menos"
                            >
                                −
                            </button>
                            <span className="menu-card__qty-value">{qty}</span>
                            <button
                                className="menu-card__qty-btn"
                                onClick={() => updateQuantity(item.id, qty + 1)}
                                aria-label="Más"
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}
