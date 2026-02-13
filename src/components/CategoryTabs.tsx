import { CATEGORIES, type Category } from "../data/menuData";
import "../styles/CategoryTabs.css";

interface Props {
    active: string;
    onSelect: (id: string) => void;
}

export default function CategoryTabs({ active, onSelect }: Props) {
    return (
        <nav className="category-tabs" id="category-tabs">
            <div className="category-tabs__track">
                {CATEGORIES.map((cat: Category) => (
                    <button
                        key={cat.id}
                        className={`category-tabs__btn ${active === cat.id ? "category-tabs__btn--active" : ""
                            }`}
                        onClick={() => onSelect(cat.id)}
                    >
                        <span className="category-tabs__icon">{cat.icon}</span>
                        <span className="category-tabs__label">{cat.name}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
}
