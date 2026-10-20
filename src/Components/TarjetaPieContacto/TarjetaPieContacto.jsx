import './TarjetaPieContacto.css';

function TarjetaPieContacto() {
    return (
        <section className="contacto-hero-pie">

            {/* IMAGEN DE FONDO */}
            <img
                className="inicio__imagen-pie"
                src="imagenes/cortina negra.jpg"
                alt="Cortinas metálicas GRALTEC"
            />

            {/* OVERLAY */}
            <div className="inicio__overlay_contacto-pie"></div>

            {/* CONTENIDO */}
            <div className="inicio__contenido-pie">

                <div className="inicio__textos-pie">
                    <p className='parrafo_contacto-pie'>ASESORAMIENTO PERSONALIZADO</p>
                    <h1 className="inicio__titulo_contacto-pie">
                        ¿Tenés un <span>proyecto?</span>
                        
                    </h1>

                    <p className="inicio__descripcion-pie">
                        Nuestro equipo tecnico puede asesorarte en la elección
                        <br />
                        del producto ideal para tu necesidad.
                    </p>
                </div>
                <div>
                 <button
                    type="submit"
                    className="consulta-card__boton-pie"
                    >
                    Solicitar presupuesto
                    <span>➢</span>
                    </button>
                </div>
            </div>
               

        </section>
    );
}

export default TarjetaPieContacto;