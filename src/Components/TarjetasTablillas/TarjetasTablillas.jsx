
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './TarjetasTablillas.css'

function TarjetasTablillas({
    title,
    variantes,
    img,
    description
}) {
    const navigate = useNavigate()

    // Variante seleccionada: Ciega o Microperforada
    const [varianteActiva, setVarianteActiva] = useState(0)

    // Fotografía seleccionada dentro de la variante
    const [imagenActiva, setImagenActiva] = useState(0)

    const tieneVariantes =
        Array.isArray(variantes) && variantes.length > 0

    const variante = tieneVariantes
        ? variantes[varianteActiva]
        : { img, description }

    // Permite usar una imagen o varias
    const imagenes = variante.imagenes?.length
        ? variante.imagenes
        : variante.img
            ? [variante.img]
            : []

    const cantidadImagenes = imagenes.length

    const imagenActual = imagenes[imagenActiva] || imagenes[0]

    // Avanzar a la siguiente fotografía
    const siguienteImagen = () => {
        setImagenActiva(actual =>
            (actual + 1) % cantidadImagenes
        )
    }

    // Retroceder a la fotografía anterior
    const anteriorImagen = () => {
        setImagenActiva(actual =>
            (actual - 1 + cantidadImagenes) % cantidadImagenes
        )
    }

    // Cambiar entre Ciega y Microperforada
    const cambiarVariante = (index) => {
        setVarianteActiva(index)
        setImagenActiva(0)
    }

    return (
        <article className="tarjeta_tablillas">

            <div className="tarjeta__imagen-contenedor_tablillas">  
                <img
                    className={`tarjeta__imagen_tablillas ${
                        variante.planos?.includes(imagenActual)
                            ? 'plano-tecnico'
                            : ''
                    }`}
                    src={imagenActual}
                    alt={`${title}${tieneVariantes
                        ? ` - ${variante.nombre}`
                        : ''} - Imagen ${imagenActiva + 1}`}
                />
                
                {/* FLECHAS DEL CARRUSEL */}
                {cantidadImagenes > 1 && (
                    <>
                        <button
                            type="button"
                            className="tarjeta__flecha_tablillas tarjeta__flecha_tablillas--izquierda"
                            onClick={anteriorImagen}
                            aria-label="Fotografía anterior"
                        >
                            ‹
                        </button>

                        <button
                            type="button"
                            className="tarjeta__flecha_tablillas tarjeta__flecha_tablillas--derecha"
                            onClick={siguienteImagen}
                            aria-label="Fotografía siguiente"
                        >
                            ›
                        </button>

                        <div className="tarjeta__indicadores_tablillas">
                            {imagenes.map((imagen, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={`tarjeta__indicador_tablillas ${
                                        imagenActiva === index ? 'activo' : ''
                                    }`}
                                    aria-label={`Ver fotografía ${index + 1}`}
                                    aria-current={imagenActiva === index ? 'true' : undefined}
                                    onClick={() => setImagenActiva(index)}
                                />
                            ))}
                        </div>
                    </>
                )}

            </div>

            <div className="tarjeta__contenido_tablillas">

                <h2 className="tarjeta__titulo_tablillas">
                    {title}
                </h2>

                {/* SELECTOR DE VARIANTES */}
                {tieneVariantes && variantes.length > 1 && (
                    <div className="tarjeta__variantes_tablillas">

                        <span className="tarjeta__variantes-label_tablillas">
                            Variante:
                        </span>

                        <div className="tarjeta__variantes-opciones_tablillas">

                            {variantes.map((opcion, index) => (
                                <button
                                    key={opcion.nombre}
                                    type="button"
                                    className={`tarjeta__variante-boton_tablillas ${
                                        varianteActiva === index ? 'activa' : ''
                                    }`}
                                    aria-pressed={varianteActiva === index}
                                    onClick={() => cambiarVariante(index)}
                                >
                                    {opcion.nombre}
                                </button>
                            ))}

                        </div>
                    </div>
                )}

                <p className="tarjeta__descripcion_tablillas">
                    {variante.description}
                </p>

                <button
                    type="button"
                    className="tarjeta__boton_tablillas"
                    onClick={() =>
                        navigate('/Contacto#solicitar-presupuesto')
                    }
                >
                    Consultar esta tablilla
                    <span aria-hidden="true">→</span>
                </button>

            </div>

        </article>
    )
}

export default TarjetasTablillas
