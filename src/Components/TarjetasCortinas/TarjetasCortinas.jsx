
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './TarjetasCortinas.css'

function TarjetasCortinas({
    title,
    variantes,
    img,
    description
}) {
    const navigate = useNavigate()
    const [varianteActiva, setVarianteActiva] = useState(0)

    const tieneVariantes = Array.isArray(variantes) && variantes.length > 0

    const variante = tieneVariantes
        ? variantes[varianteActiva]
        : { img, description }

    return (
        <article className="tarjeta">

            <div className="tarjeta__imagen-contenedor">
                <img
                    className="tarjeta__imagen"
                    src={variante.img}
                    alt={`${title}${tieneVariantes ? ` - ${variante.nombre}` : ''}`}
                />
            </div>

            <div className="tarjeta__contenido">

                <h2 className="tarjeta__titulo">
                    {title}
                </h2>

                {tieneVariantes && variantes.length > 1 && (
                    <div className="tarjeta__variantes">
                        <span className="tarjeta__variantes-label">
                            Variante:
                        </span>

                        <div className="tarjeta__variantes-opciones">
                            {variantes.map((opcion, index) => (
                                <button
                                    key={opcion.nombre}
                                    type="button"
                                    className={`tarjeta__variante-boton ${
                                        varianteActiva === index ? 'activa' : ''
                                    }`}
                                    aria-pressed={varianteActiva === index}
                                    onClick={() => setVarianteActiva(index)}
                                >
                                    {opcion.nombre}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <p className="tarjeta__descripcion">
                    {variante.description}
                </p>

                <button
                    type="button"
                    className="tarjeta__boton"
                    onClick={() => navigate('/Contacto#solicitar-presupuesto')}
                >
                    Consultar este modelo
                    <span aria-hidden="true">→</span>
                </button>

            </div>
        </article>
    )
}

export default TarjetasCortinas
