import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import CategoryTabs from "./components/CategoryTabs";
import MenuGrid from "./components/MenuGrid";
import Cart from "./components/Cart";
import { CATEGORIES } from "./data/menuData";
import "./App.css";

function App() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);

  return (
    <CartProvider>
      <div className="app">
        <Header />
        <CategoryTabs active={activeCategory} onSelect={setActiveCategory} />
        <main>
          <MenuGrid activeCategory={activeCategory} />
        </main>
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
