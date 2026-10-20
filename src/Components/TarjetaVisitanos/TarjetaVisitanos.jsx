
import './TarjetaVisitanos.css';

function TarjetaVisitanos() {
    return (
        <div className="visitanos-contenedor">

            {/* COLUMNA IZQUIERDA */}

            <div className="visitanos-contacto">

                <div className="visitanos-seccion">

                    <span className="visitanos-titulo">
                        NUESTRA UBICACIÓN
                    </span>

                    <div className="visitanos-contactos-logos">

                        {/* TÍTULO PRINCIPAL */}

                        <div className="visitanos-contacto-item">
                            <h2>
                                Visitá nuestro 
                                establecimiento
                            </h2>
                        </div>

                        {/* DESCRIPCIÓN */}

                        <div className="visitanos-contacto-item">
                            <p className="visitanos-descripcion">
                                Te esperamos en nuestra planta y showroom.
                                Podés acercarte para conocer nuestros productos
                                y recibir asesoramiento personalizado.
                            </p>
                        </div>

                        {/* DIRECCIÓN */}

                        <div className="visitanos-item-texto">

                            <div className="visitanos-contacto-item">
                                <img
                                    src="/icons/location.png"
                                    alt="Ubicación"
                                />
                            </div>

                            <div className="visitanos-contacto-item-texto">
                                <span>Graltec S.R.L.</span>

                                <p>
                                    Benito Pérez Galdós 9461
                                    <br />
                                    Pablo Podestá, Buenos Aires, Argentina
                                </p>
                            </div>

                        </div>

                        {/* BOTÓN CÓMO LLEGAR */}

                        <a
                            className="visitanos-boton"
                            href="https://www.google.com/maps/search/?api=1&query=Graltec%20S.R.L.%20Benito%20Perez%20Galdos%209461%20Pablo%20Podesta"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Cómo llegar
                            <span>→</span>
                        </a>

                    </div>
                </div>
            </div>

            {/* COLUMNA DERECHA - MAPA */}

            <div className="visitanos-ubicacion">

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.180418268258!2d-58.61864442339328!3d-34.57430115594674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb9b419b189d1%3A0x9ad95ab7fe3e67c4!2sGraltec%20S.r.l.!5e0!3m2!1ses-419!2sar!4v1787267927680!5m2!1ses-419!2sar"
                    className="visitanos-ubicacion-mapa"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Ubicación de Graltec"
                />

            </div>

        </div>
    );
}

export default TarjetaVisitanos;
