import './TarjetaAzulContacto.css';

function TarjetaAzulContacto() {
    return (
        <section className="contacto-hero">

            {/* IMAGEN DE FONDO */}
            <img
                className="inicio__imagen"
                src="imagenes/CORTINA_MICRO2.jpg"
                alt="Cortinas metálicas GRALTEC"
            />

            {/* OVERLAY */}
            <div className="inicio__overlay_contacto"></div>

            {/* CONTENIDO */}
            <div className="inicio__contenido">

                <div className="inicio__textos">
                    <p className='parrafo_contacto'>CONTACTO</p>
                    <h1 className="inicio__titulo_contacto">
                        Estamos para
                        <br /> 
                        <span>ayudarte</span>
                        
                    </h1>

                    <p className="inicio__descripcion">
                        Consultanos por nuestros productos, automatizaciones
                        <br />
                        o solicita tu presupuesto. Te asesoramos sin compromiso
                    </p>
                </div>

                

            </div>

            {/* FLECHA INFERIOR */}
            <a href="#siguiente" className="inicio__flecha">
                <span></span>
            </a>

        </section>
    );
}

export default TarjetaAzulContacto;