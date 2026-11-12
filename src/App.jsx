import { Routes, Route } from 'react-router-dom'
import LayoutPrincipal from './Layout/LayoutPrincipal'
import Home from './Screens/Home/Home'
import CortinasMetalicas from './Screens/Productos/CortinasMetalicas'
import Automatizaciones from './Screens/Automatizaciones/Automatizaciones'
import Contacto from './Screens/Contacto/Contacto'
import Galeria from './Screens/Galeria/Galeria'
import EquiposParalelos from './Screens/EquiposParalelos/EquiposParalelos'

function App() {
  return (
    <Routes>
      <Route element={<LayoutPrincipal />}>
        <Route path="/Automatismos/Paralelos" element={<EquiposParalelos />}/>
        <Route path="/" element={<Home />} />
        <Route path="/Cortinas" element={<CortinasMetalicas />} />
        <Route path="/Automatismos" element={<Automatizaciones />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Galeria" element={<Galeria />} />
      </Route>
    </Routes>
  )
}

export default App