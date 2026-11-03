
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {

    const [menuAbierto, setMenuAbierto] = useState(false)

    const cerrarMenu = () => {
        setMenuAbierto(false)
    }

    const claseLink = ({ isActive }) =>
        isActive
            ? 'header__link header__link--active'
            : 'header__link'

    return (
        <header className="header">

            <div className="header__logo">
                <img
                    src="/Logo-04.png"
                    alt="Graltec S.R.L."
                />
            </div>

            <nav className="header__nav" aria-label="Navegación principal">

                <NavLink
                    to="/"
                    className={claseLink}
                    onClick={cerrarMenu}
                >
                    Inicio
                </NavLink>

                {/* PRODUCTOS CON DESPLEGABLE */}

                <div className={`header__dropdown ${
                    menuAbierto ? 'header__dropdown--open' : ''
                }`}>

                    <NavLink
                        to="/Cortinas"
                        className={claseLink}
                        onClick={cerrarMenu}
                    >
                        Productos
                    </NavLink>

                    <button
                        type="button"
                        className="header__dropdown-toggle"
                        aria-label="Desplegar categorías de productos"
                        aria-expanded={menuAbierto}
                        aria-controls="header-productos-menu"
                        onClick={() => setMenuAbierto(!menuAbierto)}
                    >
                         <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
</svg></span> 
                    </button>

                    <div
                        id="header-productos-menu"
                        className="header__submenu"
                    >

                        <NavLink
                            to="/Cortinas#cortinas-metalicas"
                            onClick={cerrarMenu}
                        >
                            Cortinas Metálicas
                        </NavLink>

                        <NavLink
                            to="/Cortinas#tablillas"
                            onClick={cerrarMenu}
                        >
                            Tablillas
                        </NavLink>

                        <NavLink
                            to="/Cortinas#Accesorios"
                            onClick={cerrarMenu}
                        >
                            Accesorios
                        </NavLink>

                    </div>

                </div>

                <NavLink
                    to="/Automatismos"
                    className={claseLink}
                    onClick={cerrarMenu}
                >
                    Automatismos
                </NavLink>

                <NavLink
                    to="/Contacto"
                    className={claseLink}
                    onClick={cerrarMenu}
                >
                    Contacto
                </NavLink>

                <NavLink
                    to="/Galeria"
                    className={claseLink}
                    onClick={cerrarMenu}
                >
                    Galería
                </NavLink>

            </nav>

        </header>
    )
}

export default Header
