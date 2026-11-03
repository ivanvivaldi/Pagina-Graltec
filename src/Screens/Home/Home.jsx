import Divinicio from '../../Components/Div inicio/Divinicio'
import Inicio from '../../Components/Inicio/Inicio'
import Tarjetas from '../../Components/Tarjetas/Tarjetas'
import Separador from '../../Components/Separador/Separador'
import CardConsultas from '../../Components/CardConsultas/CardConsultas'
import SeparadorClientes from '../../Components/SeparadorClientes/SeparadorClientes'
import { CarruselEmpresas } from '../../Components/CarruselEmpresas/CarruselEmpresas'
import TarjetaGremio from '../../Components/TarjetaGremio/TarjetaGremio'

function Home() {
  return (
    <>
      <Inicio />

      <Divinicio />

      <div className="tarjetas-contenedor">
        <Tarjetas
          title="Cortinas Metálicas"
          description="La variedad de nuestros modelos combina seguridad, diseño y durabilidad."
          img="/imagenes/cortina metalica.png"
          destino="/Cortinas"
        />

        <Tarjetas
          title="Automatismos"
          description="Motores y sistemas de automatización para cortinas y portones."
          img="/imagenes/paralelos_recortada.png"
          destino="/Automatismos"
        />

        <Tarjetas
          title="Accesorios"
          description="Todos los accesorios y repuestos que tu instalación necesita."
          img="/imagenes/accesorios.png"
          destino="/Cortinas#Accesorios"
        />
      </div>

      <Separador />

      <TarjetaGremio />

      <CardConsultas />

      <SeparadorClientes />

      <CarruselEmpresas />
    </>
  )
}

export default Home