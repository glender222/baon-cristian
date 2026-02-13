import "../styles/Header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="header__bg" />
            <div className="header__content">
                <div className="header__logo-ring">
                    {/* 🖼️ LOGO: Reemplaza /img/logo.svg con tu logo real (.webp o .png, 200×200px) */}
                    <img
                        src="/img/logo.svg"
                        alt="El Bajón Nortino"
                        className="header__logo"
                    />
                </div>
                <h1 className="header__title">
                    El Bajón <span className="header__title--accent">Nortino</span>
                </h1>
                <p className="header__subtitle">Menú Digital</p>
                <p className="header__tagline">
                    Arma tu pedido y envíalo directo a nuestro WhatsApp 🔥
                </p>
            </div>
        </header>
    );
}
