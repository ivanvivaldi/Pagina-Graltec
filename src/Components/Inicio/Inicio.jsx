import './Inicio.css'

function Inicio (){
    return (
    <section className="inicio">

        {/* VIDEO DE FONDO */}
        <video
            className="inicio__video"
            autoPlay
            muted
            loop
            playsInline
        >
            <source src="/videos/inicio.mp4" type="video/mp4" />
        </video>

        {/* CAPA OSCURA SOBRE EL VIDEO */}
        <div className="inicio__overlay"></div>

        {/* CONTENIDO */}
        <div className="inicio__contenido">

            <div className="inicio__textos">
                <h1 className="inicio__titulo">
                    Soluciones <span>confiables,</span>
                    <br />
                    trabajos que <span>perduran.</span>
                </h1>

                <p className="inicio__descripcion">
                    Más de 40 años brindando calidad y seguridad
                    <br />
                    en cortinas metálicas y automatizaciones.
                </p>
            </div>

            <div className="inicio__estadisticas">

                <div className="inicio__estadistica">
                    <img
                        src="/icons/cortina.png"
                        alt=""
                        className="inicio__icono"
                    />

                    <strong className="inicio__numero">
                        +20.000
                    </strong>

                    <span className="inicio__label">
                        CORTINAS COLOCADAS
                    </span>
                </div>

                <div className="inicio__separador"></div>

                <div className="inicio__estadistica">
                    <img
                        src="/icons/experiencia.png"
                        alt=""
                        className="inicio__icono"
                    />

                    <strong className="inicio__numero">
                        +40
                    </strong>

                    <span className="inicio__label">
                        AÑOS DE EXPERIENCIA
                    </span>
                </div>

            </div>

        </div>

        {/* FLECHA INFERIOR */}
        <a href="#siguiente" className="inicio__flecha">
            <span></span>
        </a>

    </section>
)
}

export default Inicio