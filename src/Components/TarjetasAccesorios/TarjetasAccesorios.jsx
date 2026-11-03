
import { useState } from 'react'
import './TarjetasAccesorios.css'

function TarjetasAccesorios(props) {

    // Fotografía seleccionada
    const [imagenActiva, setImagenActiva] = useState(0)

    // Acepta varias imágenes o una sola imagen
    const imagenes = props.imagenes?.length
        ? props.imagenes
        : props.img
            ? [props.img]
            : []

    const cantidadImagenes = imagenes.length

    const imagenActual = imagenes[imagenActiva] || imagenes[0]

    // Avanzar a la siguiente fotografía
    const siguienteImagen = () => {
        if (cantidadImagenes <= 1) return

        setImagenActiva(actual =>
            (actual + 1) % cantidadImagenes
        )
    }

    // Retroceder a la fotografía anterior
    const anteriorImagen = () => {
        if (cantidadImagenes <= 1) return

        setImagenActiva(actual =>
            (actual - 1 + cantidadImagenes) % cantidadImagenes
        )
    }

    return (
        <div className="tarjeta">

            <div className="tarjeta__imagen-contenedor">

                 <img
                    className="tarjeta__imagen"
                    src={imagenActual}
                    alt={`${props.title} - Imagen ${imagenActiva + 1}`}
                />

                {/* FLECHAS DEL CARRUSEL */}

                {cantidadImagenes > 1 && (
                    <>
                        <button
                            type="button"
                            className="tarjeta__flecha_accesorios tarjeta__flecha_accesorios--izquierda"
                            onClick={anteriorImagen}
                            aria-label="Fotografía anterior"
                        >
                            ‹
                        </button>

                        <button
                            type="button"
                            className="tarjeta__flecha_accesorios tarjeta__flecha_accesorios--derecha"
                            onClick={siguienteImagen}
                            aria-label="Fotografía siguiente"
                        >
                            ›
                        </button>

                        <div className="tarjeta__indicadores_accesorios">
                            {imagenes.map((imagen, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={`tarjeta__indicador_accesorios ${
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

            <div className="tarjeta__contenido">

                <h2 className="tarjeta__titulo">
                    {props.title}
                </h2>

                <p className="tarjeta__descripcion">
                    {props.description}
                </p>

               {/*  <button
                    type="button"
                    className="tarjeta__boton"
                >
                    Ver más
                    <span>→</span>
                </button> */}

            </div>

        </div>
    )
}

export default TarjetasAccesorios
