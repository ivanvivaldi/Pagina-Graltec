import './Footer.css'

function Footer() {
    return (
        <footer className="footer-contenedor">

            <div className="ubicacion">
                <span className="footer-titulo">📍 DONDE ESTAMOS</span>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.180418268258!2d-58.61864442339328!3d-34.57430115594674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb9b419b189d1%3A0x9ad95ab7fe3e67c4!2sGraltec%20S.r.l.!5e0!3m2!1ses-419!2sar!4v1787267927680!5m2!1ses-419!2sar"
                    className="ubicacion-mapa"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Ubicación de Graltec"
                />
            </div>

            <div className="contacto">

                <div className="footer-seccion">
                    <span className="footer-titulo">CONTACTO</span>

                    <div className="contactos-logos">

                        <div className="contacto-item">
                            <img src="public/icons/whatsapp.png" alt="WhatsApp" />
                            <span>1165325648</span>
                        </div>

                        <div className="contacto-item">
                            <img src="public/icons/telefono.png" alt="Teléfono" />
                            <span>1165325648</span>
                        </div>

                        <div className="contacto-item">
                            <img src="/icons/correo-electronico.png" alt="Correo electrónico" />
                            <span>info@graltec.com.ar</span>
                        </div>

                        <div className="contacto-item">
                            <img src="/icons/horario.png" alt="Horario de atención" />
                            <span>Lunes a Viernes 8:00 a 17:30 hs</span>
                        </div>

                    </div>
                </div>

                <div className="footer-seccion">
                    <span className="footer-titulo">BUSCANOS EN</span>

                    <div className="link-redes">
                        <button className="red-social">
                            <img src="/icons/insta-logo.png" alt="Instagram" />
                        </button>

                        <button className="red-social">
                            <img
                                src="/icons/mercado-libre-logo-png_seeklogo-653365.png"
                                alt="Mercado Libre"
                            />
                        </button>
                    </div>
                </div>

                <div className="footer-seccion">
                    <span className="footer-titulo">LINKS ÚTILES</span>

                    <div className="links-utiles">
                        <button>Inicio</button>
                        <button>Cortinas Metálicas</button>
                        <button>Automatizaciones</button>
                        <button>Contacto</button>
                        <button>Galería</button>
                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer