import './Header.css'

function Header () {
    return (
        <header className="header">

            <div className="header__logo">
                <img src="/logo.png" alt="Graltec S.R.L." />
            </div>

            <nav className="header__nav">
                <a href="#inicio" className="header__link header__link--active">
                    Inicio
                </a>

                <a href="#cortinas" className="header__link">
                    Cortinas Metálicas
                </a>

                <a href="#automatizaciones" className="header__link">
                    Automatizaciones
                </a>

                <a href="#contacto" className="header__link">
                    Contacto
                </a>

                <a href="#galeria" className="header__link">
                    Galería
                </a>
            </nav>

        </header>
    )
}

export default Header