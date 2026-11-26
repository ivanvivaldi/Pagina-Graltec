
import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import Lightbox from '../../Components/Lightbox/Lightbox'

import {
  modelosSemiblindados,
  contenidoComunSemiblindados
} from './modelosSemiblindados'

import './EquiposSemiblindados.css'


function EquiposSemiblindados() {

  // MODELO SELECCIONADO SEGÚN LA URL

  const [searchParams, setSearchParams] = useSearchParams()

  const ids = Object.keys(modelosSemiblindados)

  const modeloSolicitado = searchParams.get('modelo')

  const modeloActivo = modelosSemiblindados[modeloSolicitado]
    ? modeloSolicitado
    : ids[0]

  const modelo = modelosSemiblindados[modeloActivo]


  // GALERÍA

  const [imagenActiva, setImagenActiva] = useState(0)

  const [imagenAmpliada, setImagenAmpliada] = useState(null)


  // CAMBIAR ENTRE LOS OCHO MODELOS

  const cambiarModelo = (nuevoModelo) => {

    if (nuevoModelo === modeloActivo) return

    const nuevosParametros = new URLSearchParams(searchParams)

    nuevosParametros.set('modelo', nuevoModelo)

    setSearchParams(nuevosParametros)

  }


  // REINICIAR GALERÍA CUANDO CAMBIA EL MODELO

  useEffect(() => {

    setImagenActiva(0)
    setImagenAmpliada(null)

  }, [modeloActivo])


  // FOTOGRAFÍA SELECCIONADA

  const galeria = modelo.galeria || []

  const imagenPrincipal = galeria[imagenActiva] || (
    modelo.imagenPrincipal
      ? {
          src: modelo.imagenPrincipal,
          alt: modelo.titulo
        }
      : null
  )


  return (

    <main className="equipos-semiblindados">

      {/* ENCABEZADO */}

      <section className="semiblindados__encabezado">

        <div className="semiblindados__encabezado-contenido">

          <span className="semiblindados__subtitulo">
            AUTOMATISMOS GRALTEC
          </span>

          <h1 className="semiblindados__titulo">
            Equipos Semiblindados
          </h1>

          <p className="semiblindados__introduccion">
          Diseñados para la automatización de cortinas metálicas, con distintas capacidades de elevación para adaptarse a los requerimientos de cada instalación.
          Explorá los modelos disponibles, compará sus características técnicas y encontrá el equipo adecuado para tu proyecto.
          </p>

        </div>

      </section>


      {/* SELECTOR DE MODELOS */}

      <section
        className="semiblindados__selector"
        aria-label="Modelos semiblindados"
      >

        <h2 className="semiblindados__seccion-titulo">
          Seleccioná tu modelo
        </h2>

        <div
          className="semiblindados__selector-botones"
          role="group"
          aria-label="Seleccionar modelo de motor semiblindado"
        >

          {ids.map((id) => (

            <button
              key={id}
              type="button"
              className={
                'semiblindados__selector-boton' +
                (modeloActivo === id ? ' activo' : '')
              }
              aria-pressed={modeloActivo === id}
              onClick={() => cambiarModelo(id)}
            >
              {modelosSemiblindados[id].nombre}
            </button>

          ))}

        </div>

      </section>


      {/* PRODUCTO PRINCIPAL */}

      <section className="semiblindados__producto">

        <div className="semiblindados__producto-imagen">

          {imagenPrincipal ? (

            <button
              type="button"
              className="semiblindados__imagen-ampliar"
              onClick={() =>
                galeria.length > 0 &&
                setImagenAmpliada(imagenActiva)
              }
              aria-label={`Ampliar fotografía del ${modelo.nombre}`}
              disabled={galeria.length === 0}
            >

              <img
                src={imagenPrincipal.src}
                alt={imagenPrincipal.alt}
                className="semiblindados__imagen-principal"
                style={{
                  transform: `scale(${imagenPrincipal.escala || 1})`
                }}
              />

              {galeria.length > 0 && (
                <span className="semiblindados__zoom">
                  Ampliar imagen +
                </span>
              )}

            </button>

          ) : (

            <div
              className="semiblindados__imagen-pendiente"
              role="status"
            >
              Fotografía del modelo pendiente
            </div>

          )}

        </div>


        {/* INFORMACIÓN DEL MOTOR */}

        <div className="semiblindados__producto-info">

          <span className="semiblindados__producto-etiqueta">
            MOTOR SEMIBLINDADO GRALTEC
          </span>

          <h2 className="semiblindados__producto-nombre">
            {modelo.nombre}
          </h2>


          {/* FICHA TÉCNICA */}

          <div className="semiblindados__ficha">

            <h3 className="semiblindados__ficha-titulo">
              Características técnicas
            </h3>

            <dl className="semiblindados__especificaciones">

              {modelo.especificaciones.map((dato) => (

                <div
                  key={dato.nombre}
                  className="semiblindados__especificacion"
                >

                  <dt>{dato.nombre}</dt>

                  <dd>{dato.valor}</dd>

                </div>

              ))}

            </dl>

          </div>


          {/*
            ETAPA 2:
            Incorporar aquí el formulario para solicitar
            correo electrónico y descargar el manual PDF.
          */}


          {/* BOTÓN DE CONSULTA */}

          <Link
            to="/Contacto#solicitar-presupuesto"
            className="semiblindados__boton-consulta"
          >
            Solicitar presupuesto
            <span aria-hidden="true">→</span>
          </Link>

        </div>

      </section>


      {/* GALERÍA */}

      {galeria.length > 0 && (

        <section className="semiblindados__galeria">

          <h2 className="semiblindados__seccion-titulo">
            Galería del {modelo.nombre}
          </h2>

          <p className="semiblindados__seccion-descripcion">
            Explorá las vistas y detalles constructivos
            del equipo.
          </p>

          <div className="semiblindados__galeria-grilla">

            {galeria.map((imagen, index) => (

              <button
                key={`${modeloActivo}-${index}`}
                type="button"
                className={
                  'semiblindados__galeria-item' +
                  (imagenActiva === index ? ' seleccionado' : '')
                }
                onClick={() => setImagenActiva(index)}
                aria-label={`Mostrar imagen ${index + 1} del ${modelo.nombre}`}
              >

                <img
                  src={imagen.src}
                  alt={imagen.alt}
                  loading="lazy"
                />

              </button>

            ))}

          </div>

        </section>

      )}


      {/* CARACTERÍSTICAS COMUNES DE LA FAMILIA */}

      <section className="semiblindados__caracteristicas">

        <h2 className="semiblindados__seccion-titulo">
          Características de la línea
        </h2>

        <div className="semiblindados__avisos">

          <div className="semiblindados__aviso">
            <h3>{contenidoComunSemiblindados.versiones.titulo}</h3>
            <p>{contenidoComunSemiblindados.versiones.descripcion}</p>
          </div>

          <div className="semiblindados__aviso">
            <h3>{contenidoComunSemiblindados.mandoDistancia.titulo}</h3>
            <p>{contenidoComunSemiblindados.mandoDistancia.descripcion}</p>
          </div>

        </div>

      </section>


      {/* CONSULTA FINAL */}

      <section className="semiblindados__cta">

        <h2>
          ¿Necesitás asesoramiento?
        </h2>

        <p>
          Contactanos para conocer más sobre
          nuestros equipos semiblindados.
        </p>

        <Link
          to="/Contacto#solicitar-presupuesto"
          className="semiblindados__cta-boton"
        >
          Consultar por {modelo.nombre}
          <span aria-hidden="true">→</span>
        </Link>

      </section>


      {/* LIGHTBOX */}

      {imagenAmpliada !== null && galeria.length > 0 && (

        <Lightbox
          key={`${modeloActivo}-${imagenAmpliada}`}
          imagenes={galeria}
          indiceInicial={imagenAmpliada}
          onClose={() => setImagenAmpliada(null)}
        />

      )}

    </main>

  )

}

export default EquiposSemiblindados
