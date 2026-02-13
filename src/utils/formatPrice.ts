import { CURRENCY } from "../data/menuData";

export function formatPrice(price: number): string {
    return new Intl.NumberFormat(CURRENCY.locale, {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: CURRENCY.noDecimals ? 0 : 2,
        maximumFractionDigits: CURRENCY.noDecimals ? 0 : 2,
    }).format(price);
}
