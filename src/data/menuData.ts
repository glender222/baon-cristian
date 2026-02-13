// ============================================================
// 📋 CONFIGURACIÓN DEL MENÚ — EDITA ESTE ARCHIVO PARA CAMBIAR
//    PRECIOS, FOTOS, PRODUCTOS Y NÚMERO DE WHATSAPP
// ============================================================

// 📱 NÚMERO DE WHATSAPP (con código de país, sin + ni espacios)
// Ejemplo Chile: "56912345678"
export const WHATSAPP_NUMBER = "56912345678";

// 💬 Mensaje de saludo (se antepone al pedido)
export const WHATSAPP_GREETING = "Hola El Bajón Nortino! Quiero hacer el siguiente pedido:";

// 💵 Configuración de moneda
export const CURRENCY = {
    symbol: "$",
    locale: "es-CL",
    // Poner true si los precios NO usan decimales (ej: pesos chilenos)
    noDecimals: true,
};

// ==========================
//  CATEGORÍAS
// ==========================
export interface Category {
    id: string;
    name: string;
    icon: string; // emoji
}

export const CATEGORIES: Category[] = [
    { id: "burgers", name: "Burger Menu", icon: "🍔" },
    { id: "completos", name: "Completos", icon: "🌭" },
    { id: "platos", name: "Platos", icon: "🍗" },
    { id: "compartir", name: "Para Compartir", icon: "🥘" },
];

// ==========================
//  ITEMS DEL MENÚ
// ==========================
export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string; // debe coincidir con category.id
    // 🖼️ IMÁGENES: Puedes usar URLs externas o rutas locales
    // Para fotos locales: colócalas en /public/img/ (400×300px recomendado)
    //   y usa la ruta "/img/mi-foto.webp"
    // Para fotos externas: usa la URL completa "https://..."
    image: string;
}

export const MENU_ITEMS: MenuItem[] = [
    // ─── 🍔 BURGER MENU ─────────────────────────────────
    {
        id: "burger-italiano",
        name: "Italiano",
        description: "Bistec de vacuno, más queso fundido y salsas a elección",
        price: 7000,
        category: "burgers",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&q=80",
    },
    {
        id: "burger-luco",
        name: "Luco",
        description: "Bistec de vacuno, tomate, palta y salsas a elección",
        price: 7000,
        category: "burgers",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop&q=80",
    },
    {
        id: "burger-chacarero",
        name: "Chacarero",
        description: "Bistec de vacuno, poroto verde, ají verde, tomate y salsas a elección",
        price: 8000,
        category: "burgers",
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop&q=80",
    },
    {
        id: "burger-lomito",
        name: "Lomito",
        description: "Bistec de vacuno, queso, jamón, huevo frito, lechuga, tomate",
        price: 7000,
        category: "burgers",
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop&q=80",
    },
    {
        id: "burger-alopobre",
        name: "A Lo Pobre",
        description: "Bistec de vacuno, cebolla acaramelada, huevo, queso, papas gris y salsas a elección",
        price: 8000,
        category: "burgers",
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop&q=80",
    },

    // ─── 🌭 COMPLETOS ───────────────────────────────────
    {
        id: "completo-italiano",
        name: "Italiano",
        description: "Vienesa, tomate, palta y salsas a elección",
        price: 2000,
        category: "completos",
        image: "https://images.unsplash.com/photo-1612392062126-2f3db31d0d46?w=400&h=300&fit=crop&q=80",
    },
    {
        id: "completo-dinamico",
        name: "Dinámico",
        description: "Vienesa, tomate, chucrut, palta y salsas a elección",
        price: 2500,
        category: "completos",
        image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=400&h=300&fit=crop&q=80",
    },
    {
        id: "completo-luco",
        name: "Luco",
        description: "Vienesa y queso fundido",
        price: 2500,
        category: "completos",
        image: "https://images.unsplash.com/photo-1613483187636-85547c9da7c1?w=400&h=300&fit=crop&q=80",
    },
    {
        id: "completo-as-italiano",
        name: "As Italiano",
        description: "Carne de vacuno, palta, tomate y salsa a elección",
        price: 3500,
        category: "completos",
        image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400&h=300&fit=crop&q=80",
    },

    // ─── 🍗 PLATOS ──────────────────────────────────────
    {
        id: "plato-pollo-asado",
        name: "Pollo Asado",
        description: "Pollo asado al horno con acompañamiento",
        price: 8000,
        category: "platos",
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop&q=80",
    },
    {
        id: "plato-mostrito",
        name: "Mostrito",
        description: "Plato especial de la casa",
        price: 10990,
        category: "platos",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&q=80",
    },
    {
        id: "plato-milanesa",
        name: "Milanesa",
        description: "Milanesa de carne con acompañamiento",
        price: 9500,
        category: "platos",
        image: "https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=400&h=300&fit=crop&q=80",
    },
    {
        id: "plato-lomo-saltado",
        name: "Lomo Saltado",
        description: "Lomo saltado con verduras y papas fritas",
        price: 9990,
        category: "platos",
        image: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=400&h=300&fit=crop&q=80",
    },
    {
        id: "plato-tallarin-saltado",
        name: "Tallarín Saltado",
        description: "Tallarín saltado con verduras y carne",
        price: 9490,
        category: "platos",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop&q=80",
    },
    {
        id: "plato-pollo-salteado",
        name: "Pollo Salteado",
        description: "Pollo salteado con verduras",
        price: 7000,
        category: "platos",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop&q=80",
    },
    {
        id: "plato-bisteck-alopobre",
        name: "Bisteck a lo Pobre",
        description: "Bisteck con huevo frito, cebolla, papas fritas",
        price: 10490,
        category: "platos",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop&q=80",
    },

    // ─── 🥘 PARA COMPARTIR ──────────────────────────────
    {
        id: "compartir-pichanga",
        name: "Pichanga Mixta",
        description: "Pichanga mixta para compartir",
        price: 10990,
        category: "compartir",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&q=80",
    },
    {
        id: "compartir-chorrillana",
        name: "Chorrillana Mixta",
        description: "Chorrillana mixta con carne, cebolla y huevo",
        price: 13000,
        category: "compartir",
        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop&q=80",
    },
    {
        id: "compartir-churrascos",
        name: "Churrascos",
        description: "Churrascos a la parrilla",
        price: 8000,
        category: "compartir",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop&q=80",
    },
    {
        id: "compartir-papas-fritas",
        name: "Papas Fritas",
        description: "Porción de papas fritas",
        price: 9500,
        category: "compartir",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop&q=80",
    },
    {
        id: "compartir-salchipapas",
        name: "Salchipapas",
        description: "Papas fritas con salchicha y salsas",
        price: 17000,
        category: "compartir",
        image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=300&fit=crop&q=80",
    },
    {
        id: "compartir-cuarto-pollo",
        name: "¼ de Pollo + Agregado",
        description: "Cuarto de pollo con agregado a elección",
        price: 9990,
        category: "compartir",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop&q=80",
    },
];
