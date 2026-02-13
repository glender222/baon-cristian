import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { MenuItem } from "../data/menuData";

// ─── Types ──────────────────────────────────────────
export interface CartItem {
    item: MenuItem;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

type CartAction =
    | { type: "ADD_ITEM"; item: MenuItem }
    | { type: "REMOVE_ITEM"; itemId: string }
    | { type: "UPDATE_QUANTITY"; itemId: string; quantity: number }
    | { type: "CLEAR" };

interface CartContextType {
    items: CartItem[];
    totalItems: number;
    totalPrice: number;
    addItem: (item: MenuItem) => void;
    removeItem: (itemId: string) => void;
    updateQuantity: (itemId: string, quantity: number) => void;
    clearCart: () => void;
}

// ─── Reducer ────────────────────────────────────────
function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case "ADD_ITEM": {
            const existing = state.items.find((ci) => ci.item.id === action.item.id);
            if (existing) {
                return {
                    items: state.items.map((ci) =>
                        ci.item.id === action.item.id
                            ? { ...ci, quantity: ci.quantity + 1 }
                            : ci
                    ),
                };
            }
            return { items: [...state.items, { item: action.item, quantity: 1 }] };
        }
        case "REMOVE_ITEM":
            return { items: state.items.filter((ci) => ci.item.id !== action.itemId) };
        case "UPDATE_QUANTITY": {
            if (action.quantity <= 0) {
                return { items: state.items.filter((ci) => ci.item.id !== action.itemId) };
            }
            return {
                items: state.items.map((ci) =>
                    ci.item.id === action.itemId
                        ? { ...ci, quantity: action.quantity }
                        : ci
                ),
            };
        }
        case "CLEAR":
            return { items: [] };
        default:
            return state;
    }
}

// ─── Context ────────────────────────────────────────
const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });

    const totalItems = state.items.reduce((sum, ci) => sum + ci.quantity, 0);
    const totalPrice = state.items.reduce(
        (sum, ci) => sum + ci.item.price * ci.quantity,
        0
    );

    const addItem = (item: MenuItem) => dispatch({ type: "ADD_ITEM", item });
    const removeItem = (itemId: string) =>
        dispatch({ type: "REMOVE_ITEM", itemId });
    const updateQuantity = (itemId: string, quantity: number) =>
        dispatch({ type: "UPDATE_QUANTITY", itemId, quantity });
    const clearCart = () => dispatch({ type: "CLEAR" });

    return (
        <CartContext.Provider
            value={{
                items: state.items,
                totalItems,
                totalPrice,
                addItem,
                removeItem,
                updateQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used within CartProvider");
    return ctx;
}
