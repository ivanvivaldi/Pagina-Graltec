import React from 'react'
import Header from './Components/Header/Header'
import Divinicio from './Components/Div inicio/Divinicio'
import Inicio from './Components/Inicio/Inicio'
import Tarjetas from './Components/Tarjetas/Tarjetas'
import Separador from './Components/Separador/Separador'
import CardConsultas from './Components/CardConsultas/CardConsultas'
import SeparadorClientes from './Components/SeparadorClientes/SeparadorClientes'
import { CarruselEmpresas } from './Components/CarruselEmpresas/CarruselEmpresas'
import Footer from './Components/Footer/Footer'

function App () {
  return (
    <div>

      <div>
        <Header />
      </div>

      <br />

      <div>
        <Inicio />
      </div>

      <div>
        <Divinicio />
      </div>

      <div className="tarjetas-contenedor">

        <Tarjetas
          title="Cortinas Metálicas"
          description="La variedad de nuestros modelos combina seguridad, diseño y durabilidad."
          img="/imagenes/cortina metalica.png"
        />

        <Tarjetas
          title="Automatizaciones"
          description="Motores y sistemas de automatización para cortinas y portones."
          img="/imagenes/paralelos_recortada.png"
        />

        <Tarjetas
          title="Accesorios"
          description="Todos los accesorios y repuestos que tu instalación necesita."
          img="/imagenes/accesorios.png"
        />

      </div>
      <div>
        <Separador />
      </div>
       <div>
        <CardConsultas />
      </div> 
      <div>
        <SeparadorClientes/>
      </div>
      <div>
        <CarruselEmpresas/>
      </div>
      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default App
