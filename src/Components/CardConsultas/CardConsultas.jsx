import './CardConsultas.css'

function CardConsultas() {

    return(
       <div className='contenedor-cards'>
        <div>
            <form className="consulta-card">

                <div className="consulta-card__encabezado">
                    <div className="consulta-card__icono">💬</div>

                    <div>
                        <h3>Consultanos</h3>
                        <p>Escribinos tu consulta y te responderemos
                        a la brevedad.</p>
                    </div>
                </div>  

                <div className="consulta-card__campos">

                    <input
                    type="text"
                    placeholder="Nombre completo"
                    className="consulta-card__input"
                    />

                    <input
                    type="email"
                    placeholder="Email"
                    className="consulta-card__input"
                    />

                    <input
                    type="tel"
                    placeholder="Teléfono"
                    className="consulta-card__input"
                    />

                    <textarea
                    placeholder="Mensaje"
                    className="consulta-card__textarea"
                    ></textarea>

                </div>

                    <button
                    type="submit"
                    className="consulta-card__boton"
                    >
                    Enviar consulta
                    <span>➢</span>
                    </button>

            </form>

        </div>

        <div>
            <form className="presupuesto-card">

                <div className="presupuesto-card__encabezado">
                    <div className="presupuesto-card__icono">📄</div>

                    <div>
                        <h3>Solicitá tu presupuesto</h3>
                        <p>Contanos tu proyecto y recibí tu presupuesto sin compromiso.</p>
                    </div>
                </div>  

                <div className="presupuesto-card__campos">

                    <input
                    type="text"
                    placeholder="Nombre completo"
                    className="presupuesto-card__input"
                    />

                    <input
                    type="email"
                    placeholder="Email"
                    className="presupuesto-card__input"
                    />

                    <input
                    type="tel"
                    placeholder="Teléfono"
                    className="presupuesto-card__input"
                    />

                    <input
                    type="text"
                    placeholder="¿Qué producto necesitas?"
                    className="presupuesto-card__input"
                    />

                    <textarea
                    placeholder="Contanos más sobre tu proyecto"
                    className="presupuesto-card__textarea"
                    ></textarea>

                </div>

                    <button
                    type="submit"
                    className="presupuesto-card__boton"
                    >
                    Solicitar presupuesto 
                    <span>📄</span>
                    </button>

            </form>
        </div>
     </div> 
    )
}

export default CardConsultas