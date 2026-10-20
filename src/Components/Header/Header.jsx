import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">

      <div className="header__logo">
        <img src="/Logo-04.png" alt="Graltec S.R.L." />
      </div>

      <nav className="header__nav">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'header__link header__link--active'
              : 'header__link'
          }
        >
          Inicio
        </NavLink>

        <NavLink
          to="/Cortinas"
          className={({ isActive }) =>
            isActive
              ? 'header__link header__link--active'
              : 'header__link'
          }
        >
          Cortinas
        </NavLink>

        <NavLink
          to="/Automatismos"
          className={({ isActive }) =>
            isActive
              ? 'header__link header__link--active'
              : 'header__link'
          }
        >
          Automatismos
        </NavLink>

        <NavLink
          to="/Contacto"
          className={({ isActive }) =>
            isActive
              ? 'header__link header__link--active'
              : 'header__link'
          }
        >
          Contacto
        </NavLink>

        <NavLink
          to="/Galeria"
          className={({ isActive }) =>
            isActive
              ? 'header__link header__link--active'
              : 'header__link'
          }
        >
          Galería
        </NavLink>

      </nav>

    </header>
  )
}

export default Header