
import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import Lightbox from '../../Components/Lightbox/Lightbox'

import {
  modelosParalelos,
  contenidoComunParalelos
} from './modelosParalelos'

import './EquiposParalelos.css'


function EquiposParalelos() {

  // MODELO SELECCIONADO SEGÚN LA URL

  const [searchParams, setSearchParams] = useSearchParams()

  const modeloSolicitado = searchParams.get('modelo')

  const modeloActivo = modelosParalelos[modeloSolicitado]
    ? modeloSolicitado
    : 'CM-600'

  const modelo = modelosParalelos[modeloActivo]


  // GALERÍA

  const [imagenActiva, setImagenActiva] = useState(0)

  const [imagenAmpliada, setImagenAmpliada] = useState(null)


  // CAMBIAR ENTRE CM-600 Y CM-800

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

  const imagenPrincipal =
    modelo.galeria[imagenActiva] || {
      src: modelo.imagenPrincipal,
      alt: modelo.titulo
    }


  return (

    <main className="equipos-paralelos">

      {/* ENCABEZADO */}

      <section className="paralelos__encabezado">

        <div className="paralelos__encabezado-contenido">

          <span className="paralelos__subtitulo">
            AUTOMATISMOS GRALTEC
          </span>

          <h1 className="paralelos__titulo">
            Equipos Paralelos
          </h1>

          <p className="paralelos__introduccion">
            Conocé nuestra línea de motores paralelos
            para automatización de cortinas metálicas.
            Explorá sus modelos, características
            técnicas y componentes.
          </p>

        </div>

      </section>


      {/* SELECTOR DE MODELOS */}

      <section className="paralelos__selector">

        <h2 className="paralelos__seccion-titulo">
          Seleccioná tu modelo
        </h2>

        <div
          className="paralelos__selector-botones"
          role="group"
          aria-label="Seleccionar modelo de motor paralelo"
        >

          {Object.keys(modelosParalelos).map((id) => (

            <button
              key={id}
              type="button"
              className={
                'paralelos__selector-boton' +
                (modeloActivo === id ? ' activo' : '')
              }
              aria-pressed={modeloActivo === id}
              onClick={() => cambiarModelo(id)}
            >
              {id}
            </button>

          ))}

        </div>

      </section>


      {/* PRODUCTO PRINCIPAL */}

      <section className="paralelos__producto">

        <div className="paralelos__producto-imagen">

          <button
            type="button"
            className="paralelos__imagen-ampliar"
            onClick={() => setImagenAmpliada(imagenActiva)}
            aria-label="Ampliar fotografía del motor"
          >

            <img
              src={imagenPrincipal.src}
              alt={imagenPrincipal.alt}
              className="paralelos__imagen-principal"
            />

            <span className="paralelos__zoom">
              Ampliar imagen +
            </span>

          </button>

        </div>


        <div className="paralelos__producto-info">

          <span className="paralelos__producto-etiqueta">
            MOTOR PARALELO GRALTEC
          </span>

          <h2 className="paralelos__producto-nombre">
            {modelo.nombre}
          </h2>

          <p className="paralelos__producto-descripcion">
            {modelo.descripcion}
          </p>


          {/* FICHA TÉCNICA */}

          <div className="paralelos__ficha">

            <h3 className="paralelos__ficha-titulo">
              Características técnicas
            </h3>

            <dl className="paralelos__especificaciones">

              {modelo.especificaciones.map((dato) => (

                <div
                  key={dato.nombre}
                  className="paralelos__especificacion"
                >

                  <dt>{dato.nombre}</dt>

                  <dd>{dato.valor}</dd>

                </div>

              ))}

            </dl>

          </div>


          <Link
            to="/Contacto#solicitar-presupuesto"
            className="paralelos__boton-consulta"
          >
            Solicitar presupuesto
            <span aria-hidden="true">→</span>
          </Link>

        </div>

      </section>


      {/* GALERÍA */}

      <section className="paralelos__galeria">

        <h2 className="paralelos__seccion-titulo">
          Galería del {modelo.nombre}
        </h2>

        <p className="paralelos__seccion-descripcion">
          Explorá las diferentes vistas y detalles
          constructivos del equipo.
        </p>

        <div className="paralelos__galeria-grilla">

          {modelo.galeria.map((imagen, index) => (

            <button
              key={`${modeloActivo}-${index}`}
              type="button"
              className={
                'paralelos__galeria-item' +
                (imagenActiva === index ? ' seleccionado' : '')
              }
              onClick={() => {
                setImagenActiva(index)
                setImagenAmpliada(index)
              }}
              aria-label={`Ampliar imagen ${index + 1} del ${modelo.nombre}`}
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


      {/* ACCESORIOS COMPARTIDOS */}

      <section className="paralelos__complementos">

        <div className="paralelos__complemento">

          <div className="paralelos__complemento-imagen">

            <img
              src={contenidoComunParalelos.accesorios.imagen}
              alt="Accesorios para equipos paralelos GRALTEC"
              loading="lazy"
            />

          </div>

          <div className="paralelos__complemento-info">

            <h2>
              {contenidoComunParalelos.accesorios.titulo}
            </h2>

            <p>
              {contenidoComunParalelos.accesorios.descripcion}
            </p>

          </div>

        </div>


        {/* CONTROL REMOTO */}

        <div className="paralelos__complemento">

          <div className="paralelos__complemento-imagen">

            <img
              src={contenidoComunParalelos.controlRemoto.imagen}
              alt="Receptor y controles remotos GRALTEC"
              loading="lazy"
            />

          </div>

          <div className="paralelos__complemento-info">

            <h2>
              {contenidoComunParalelos.controlRemoto.titulo}
            </h2>

            <p>
              {contenidoComunParalelos.controlRemoto.descripcion}
            </p>

          </div>

        </div>

      </section>


      {/* CONSULTA FINAL */}

      <section className="paralelos__cta">

        <h2>
          ¿Necesitás asesoramiento?
        </h2>

        <p>
          Contactanos para conocer más sobre
          nuestros equipos paralelos.
        </p>

        <Link
          to="/Contacto#solicitar-presupuesto"
          className="paralelos__cta-boton"
        >
          Consultar por {modelo.nombre}
          <span aria-hidden="true">→</span>
        </Link>

      </section>


      {/* LIGHTBOX */}

      {imagenAmpliada !== null && (

        <Lightbox
          key={`${modeloActivo}-${imagenAmpliada}`}
          imagenes={modelo.galeria}
          indiceInicial={imagenAmpliada}
          onClose={() => setImagenAmpliada(null)}
        />

      )}

    </main>

  )

}

export default EquiposParalelos
