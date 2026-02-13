import { MENU_ITEMS } from "../data/menuData";
import MenuCard from "./MenuCard";
import "../styles/MenuGrid.css";

interface Props {
    activeCategory: string;
}

export default function MenuGrid({ activeCategory }: Props) {
    const filtered = MENU_ITEMS.filter((i) => i.category === activeCategory);

    return (
        <section className="menu-grid" id="menu-grid">
            {filtered.map((item) => (
                <MenuCard key={item.id} item={item} />
            ))}
        </section>
    );
}
