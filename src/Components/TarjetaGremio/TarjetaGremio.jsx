import './TarjetaGremio.css';
import { useNavigate } from 'react-router-dom'

function TarjetaGremio() {
    const navigate = useNavigate()
    return (
        <section className="contacto-hero-gremio">

            {/* IMAGEN DE FONDO */}
            <img
                className="inicio__imagen-gremio"
                src="/imagenes/Instalación de persiana metálica comercial.png"
                alt="Cortinas metálicas GRALTEC"
            />

            {/* OVERLAY */}
            <div className="inicio__overlay_gremio"></div>

            {/* CONTENIDO */}
            <div className="inicio__contenido-gremio">

                <div className="inicio__textos-gremio">
                    <p className='parrafo_gremio'>BENEFICIOS PARA PROFESIONALES</p>
                    <h1 className="inicio__titulo_gremio">
                        Precios especiales para el gremio
                       
                    </h1>

                    <p className="inicio__descripcion-gremio">
                        Si sos instalador, herrero o trabajás en el rubro, 
                        <br />
                        consultanos por nuestras condiciones comerciales especiales.
                       
                    </p>
                </div>

                 <div>
                    <button
                        type="submit"
                        className="gremio-card__boton-pie"
                         onClick={() => navigate('/Contacto#solicitar-presupuesto')} 
                        >    
                        Solicitar condiciones
                        <span>➢</span>
                        </button> 
                        
                    </div>


                </div>
             
        </section>
    );
}

export default TarjetaGremio;