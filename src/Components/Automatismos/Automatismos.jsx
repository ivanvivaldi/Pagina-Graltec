
import { Link } from 'react-router-dom'
import CarruselAutomatismos from "../CarruselAutomatismos/CarruselAutomatismos"
import "./Automatismos.css"

const motores = [
  {
    id: "paralelos",
    titulo: "Equipos Paralelos",
    descripcion: "Potencia y resistencia para cortinas metálicas.",
    imagen: "/imagenes/paralelo3.png",
    ruta: "/Automatismos/Paralelos"
  },
  {
    id: "semiblindados",
    titulo: "Motores Semiblindados",
    descripcion: "Rendimiento y confiabilidad para uso intensivo.",
    imagen: "/imagenes/Motores/Motor industrial azul con placa AMP 4.png",
    ruta: "/Automatismos/Semiblindados"
  },
  {
    id: "blindados",
    titulo: "Motores Blindados",
    descripcion: "Soluciones de transmisión para aplicaciones industriales.",
    imagen: "/imagenes/Motores/IMG-20211222-WA0089.jpg",
    ruta: null
  },
  {
    id: "corredizos",
    titulo: "Equipo Corredizo",
    descripcion: "Automatización para portones corredizos.",
    imagen: "/imagenes/Motores/equipo corredizo.png",
    ruta: null
  },
  {
    id: "levadizos",
    titulo: "Equipo Levadizo",
    descripcion: "Sistemas de accionamiento para portones levadizos.",
    imagen: "/imagenes/Motores/levadizo.png",
    ruta: null
  }
]

function Automatismos() {
  return (
    <main className="automatismos">

      <CarruselAutomatismos />

      <div className="automatismos__grilla">
        {motores.map((motor, index) => (

          <article
            key={motor.id}
            className={
              "automatismos__tarjeta" +
              (index === 4
                ? " automatismos__tarjeta--destacada"
                : "")
            }
          >

            <div className="automatismos__imagen-contenedor">
              <img
                src={motor.imagen}
                alt={motor.titulo}
                className="automatismos__imagen"
              />
            </div>

            <div className="automatismos__informacion">

              <h2 className="automatismos__nombre">
                {motor.titulo}
              </h2>

              <p className="automatismos__descripcion">
                {motor.descripcion}
              </p>

              {motor.ruta ? (
                <Link
                  to={motor.ruta}
                  className="automatismos__enlace"
                >
                  Ver modelos
                  <span aria-hidden="true">→</span>
                </Link>
              ) : (
                <span className="automatismos__proximamente">
                  Próximamente
                </span>
              )}

            </div>

          </article>

        ))}
      </div>

    </main>
  )
}

export default Automatismos
