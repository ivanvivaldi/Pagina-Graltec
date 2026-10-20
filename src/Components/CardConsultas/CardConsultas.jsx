
import { Link } from 'react-router-dom'
import './CardConsultas.css'

function CardConsultas() {
    return (
        <section className="contenedor-cards">

            <div className="consulta-card">

                <div className="consulta-card__contenido">

                    <h3>CONTACTANOS</h3>

                    <h1>¿Tenés un proyecto en mente?</h1>

                    <h2>
                        Contanos qué necesitás. Nuestro equipo
                        puede asesorarte para encontrar la
                        solución adecuada.
                    </h2>

                    <Link
                        to="/Contacto#solicitar-presupuesto"
                        className="consulta-card__boton"
                    >
                        Solicitar presupuesto
                        <span>➜</span>
                    </Link>

                </div>

                <div className="imagen-contactanos-contenedor">
                    <img
                        src="/imagenes/FRESH MARKET Libertad.png"
                        className="imagen-contactanos"
                        alt="Cortinas metálicas GRALTEC"
                    />
                </div>

            </div>

        </section>
    )
}

export default CardConsultas
