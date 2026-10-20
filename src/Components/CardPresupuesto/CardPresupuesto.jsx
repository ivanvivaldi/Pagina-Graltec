
import './CardPresupuesto.css';

function CardPresupuesto() {
    return (
        <div className="contenedor-cards_presupuesto">

            {/* TARJETA DE INFORMACIÓN DE CONTACTO */}

            <section className="consulta-card_presupuesto">

                <div className="consulta-card__encabezado_presupuesto">
                    <div>
                        <h2>Información de contacto</h2>
                        <p>
                            Elegí la forma más cómoda para comunicarte con nosotros.
                        </p>
                    </div>
                </div>

                <div className="consulta-card__campos_presupuesto">

                    {/* TELÉFONO */}
                    <a
                        className="tarjetitas-contacto"
                        href="tel:1165325648"
                    >
                        <div className="div-logos-contacto">
                            <img
                                src="/icons/telefono.png"
                                alt=""
                                className="logos-card-info-contacto"
                            />
                        </div>

                        <div className="titulos-contacto">
                            <h2>Teléfono</h2>
                            <h3>11 6532 5648</h3>
                        </div>
                    </a>

                    {/* WHATSAPP */}
                    <a
                        className="tarjetitas-contacto"
                        href="https://wa.me/541165325648"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="div-logos-contacto div-logos-contacto--whatsapp">
                            <img
                                src="/icons/whatsapp.png"
                                alt=""
                                className="logos-card-info-contacto"
                            />
                        </div>

                        <div className="titulos-contacto">
                            <h2>WhatsApp</h2>
                            <h3>Consultas rápidas</h3>
                        </div>
                    </a>

                    {/* CORREO ELECTRÓNICO */}
                    <a
                        className="tarjetitas-contacto"
                        href="mailto:info@graltec.com.ar"
                    >
                        <div className="div-logos-contacto">
                            <img
                                src="/icons/correo-electronico.png"
                                alt=""
                                className="logos-card-info-contacto"
                            />
                        </div>

                        <div className="titulos-contacto">
                            <h2>Correo electrónico</h2>
                            <h3>info@graltec.com.ar</h3>
                        </div>
                    </a>

                    {/* HORARIOS */}
                    <div className="tarjetitas-contacto">
                        <div className="div-logos-contacto">
                            <img
                                src="/icons/horario.png"
                                alt=""
                                className="logos-card-info-contacto"
                            />
                        </div>

                        <div className="titulos-contacto">
                            <h2>Horarios de atención</h2>
                            <h3>Lunes a viernes</h3>
                            <h3>8:00 a 17:30 hs</h3>
                        </div>
                    </div>

                </div>
            </section>


            {/* TARJETA DE SOLICITUD DE PRESUPUESTO */}

            <div>
                <form className="presupuesto-card_presupuesto">

                    <div className="presupuesto-card__encabezado_presupuesto">
                        

                        <div>
                            <h3>Envianos tu consulta</h3>
                            <p>
                                Completá el formulario y te responderemos a la brevedad.
                            </p>
                        </div>
                    </div>

                    <div className="presupuesto-card__campos_presupuesto">

                        <input
                            type="text"
                            placeholder="Nombre completo"
                            className="presupuesto-card__input_presupuesto"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="presupuesto-card__input_presupuesto"
                        />

                        <input
                            type="tel"
                            placeholder="Teléfono"
                            className="presupuesto-card__input_presupuesto"
                        />

                        <input
                            type="text"
                            placeholder="¿Qué producto necesitas?"
                            className="presupuesto-card__input_presupuesto"
                        />

                        <textarea
                            placeholder="Contanos más sobre tu proyecto"
                            className="presupuesto-card__textarea_presupuesto"
                        ></textarea>

                    </div>

                    <button
                        type="submit"
                        className="presupuesto-card__boton_presupuesto"
                    >
                        Solicitar presupuesto
                        <span>📄</span>
                    </button>

                </form>
            </div>

        </div>
    );
}

export default CardPresupuesto;
