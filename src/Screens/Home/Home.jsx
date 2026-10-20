import Divinicio from '../../Components/Div inicio/Divinicio'
import Inicio from '../../Components/Inicio/Inicio'
import Tarjetas from '../../Components/Tarjetas/Tarjetas'
import Separador from '../../Components/Separador/Separador'
import CardConsultas from '../../Components/CardConsultas/CardConsultas'
import SeparadorClientes from '../../Components/SeparadorClientes/SeparadorClientes'
import { CarruselEmpresas } from '../../Components/CarruselEmpresas/CarruselEmpresas'

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

      <Separador />

      <CardConsultas />

      <SeparadorClientes />

      <CarruselEmpresas />
    </>
  )
}

export default Home