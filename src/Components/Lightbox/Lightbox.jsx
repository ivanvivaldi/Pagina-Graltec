
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import './Lightbox.css'

function Lightbox({ imagenes = [], indiceInicial = 0, onClose }) {

  const [indiceActivo, setIndiceActivo] = useState(indiceInicial)

  const botonCerrarRef = useRef(null)

  const totalImagenes = imagenes.length

  const cambiarImagen = (direccion) => {
    setIndiceActivo((indiceActual) =>
      (indiceActual + direccion + totalImagenes) % totalImagenes
    )
  }

  // Actualizar el índice cuando se abre otra fotografía
  useEffect(() => {
    setIndiceActivo(indiceInicial)
  }, [indiceInicial])

  // Bloquear el scroll y manejar el teclado
  useEffect(() => {

    const scrollOriginal = document.body.style.overflow
    const elementoAnterior = document.activeElement

    document.body.style.overflow = 'hidden'

    botonCerrarRef.current?.focus()

    const manejarTeclado = (evento) => {

      if (evento.key === 'Escape') {
        onClose()
      }

      if (totalImagenes > 1) {
        if (evento.key === 'ArrowRight') {
          setIndiceActivo((actual) =>
            (actual + 1) % totalImagenes
          )
        }

        if (evento.key === 'ArrowLeft') {
          setIndiceActivo((actual) =>
            (actual - 1 + totalImagenes) % totalImagenes
          )
        }
      }

    }

    document.addEventListener('keydown', manejarTeclado)

    return () => {
      document.body.style.overflow = scrollOriginal

      document.removeEventListener('keydown', manejarTeclado)

      elementoAnterior?.focus?.()
    }

  }, [onClose, totalImagenes])

  if (totalImagenes === 0) return null

  const imagenActual = imagenes[indiceActivo]

  return createPortal(

    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Visor de fotografías"
      onMouseDown={(evento) => {
        if (evento.target === evento.currentTarget) {
          onClose()
        }
      }}
    >

      {/* BOTÓN CERRAR */}
      <button
        ref={botonCerrarRef}
        type="button"
        className="lightbox__cerrar"
        onClick={onClose}
        aria-label="Cerrar fotografía"
      >
        ×
      </button>

      {/* FLECHA ANTERIOR */}
      {totalImagenes > 1 && (
        <button
          type="button"
          className="lightbox__flecha lightbox__flecha--anterior"
          onClick={() => cambiarImagen(-1)}
          aria-label="Fotografía anterior"
        >
          ‹
        </button>
      )}

      {/* IMAGEN AMPLIADA */}
      <div className="lightbox__contenido">

        <img
          className="lightbox__imagen"
          src={imagenActual.src}
          alt={imagenActual.alt || 'Fotografía del equipo GRALTEC'}
        />

        {totalImagenes > 1 && (
          <span className="lightbox__contador">
            {indiceActivo + 1} / {totalImagenes}
          </span>
        )}

      </div>

      {/* FLECHA SIGUIENTE */}
      {totalImagenes > 1 && (
        <button
          type="button"
          className="lightbox__flecha lightbox__flecha--siguiente"
          onClick={() => cambiarImagen(1)}
          aria-label="Fotografía siguiente"
        >
          ›
        </button>
      )}

    </div>,

    document.body
  )
}

export default Lightbox
