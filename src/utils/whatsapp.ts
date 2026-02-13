import { WHATSAPP_NUMBER, WHATSAPP_GREETING } from "../data/menuData";
import { formatPrice } from "./formatPrice";
import type { CartItem } from "../context/CartContext";

export function buildWhatsAppUrl(items: CartItem[], total: number): string {
    const lines = items.map(
        (ci) => `• ${ci.quantity}x ${ci.item.name} — ${formatPrice(ci.item.price * ci.quantity)}`
    );

    const message = [
        WHATSAPP_GREETING,
        "",
        ...lines,
        "",
        `*Total: ${formatPrice(total)}*`,
    ].join("\n");

    const encoded = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
