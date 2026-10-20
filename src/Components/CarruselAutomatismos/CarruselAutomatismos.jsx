
import { useEffect, useState } from "react";
import "./CarruselAutomatismos.css";

const slides = [
  {
    titulo: "Motores Paralelos",
    descripcion: "Potencia , robustez y tecnología para la automatización de cortinas metálicas.",
    imagen: "/imagenes/Automatismos/paralelo-carrusel3.jpg",
  },
  {
    titulo: "Motores Blindados",
    descripcion: "Confiabilidad y rendimiento para aplicaciones industriales.",
    imagen: "/imagenes/Automatismos/Motorreductor Industrial Azul GRALTEC (2).jpg",
  },
  {
    titulo: "Semiblindados",
    descripcion: "Soluciones de accionamiento para cortinas metálicas.",
    imagen: "/imagenes/Automatismos/semi4.jpg",
  },
  {
    titulo: "Equipos Corredizos",
    descripcion: "Tecnología para la automatización de portones corredizos.",
    imagen: "/imagenes/Automatismos/equipo corredizo.png",
  },
  {
    titulo: "Equipos Levadizos",
    descripcion: "Sistemas de automatización para portones levadizos.",
    imagen: "/imagenes/Automatismos/Actuador industrial con advertencia roja.png",
  },
];

function CarruselAutomatismos() {
  const [activo, setActivo] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setActivo((anterior) => (anterior + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  const siguiente = () => {
    setActivo((anterior) => (anterior + 1) % slides.length);
  };

  const anterior = () => {
    setActivo((anterior) =>
      (anterior - 1 + slides.length) % slides.length
    );
  };

  return (
    <section
      className="inicio-CarruselAutomatismos"
      aria-label="Automatismos GRALTEC"
    >
      {/* IMÁGENES DEL CARRUSEL */}
      <div className="inicio__imagenes-CarruselAutomatismos">
        {slides.map((slide, index) => (
          <img
            key={slide.imagen}
            src={slide.imagen}
            alt=""
            className={`inicio__imagen-CarruselAutomatismos ${
              index === activo ? "activo" : ""
            }`}
          />
        ))}
      </div>

      {/* OVERLAY */}
      <div className="inicio__overlay-CarruselAutomatismos" />

      {/* CONTENIDO */}
      <div className="inicio__contenido-CarruselAutomatismos">
        <div className="inicio__textos-CarruselAutomatismos">
          <span className="inicio__etiqueta-CarruselAutomatismos">
            TECNOLOGÍA GRALTEC
          </span>

          <h2
            className="inicio__titulo-CarruselAutomatismos"
            key={activo}
          >
            {slides[activo].titulo}
          </h2>

          <p className="inicio__descripcion-CarruselAutomatismos">
            {slides[activo].descripcion}
          </p>
        </div>
      </div>

      {/* CONTROLES */}
      <div className="inicio__controles-CarruselAutomatismos">
        <button
          type="button"
          className="inicio__flecha-CarruselAutomatismos"
          onClick={anterior}
          aria-label="Imagen anterior"
        >
          &#10094;
        </button>

        <div className="inicio__indicadores-CarruselAutomatismos">
          {slides.map((slide, index) => (
            <button
              key={slide.imagen}
              type="button"
              onClick={() => setActivo(index)}
              className={`inicio__indicador-CarruselAutomatismos ${
                index === activo ? "activo" : ""
              }`}
              aria-label={`Mostrar ${slide.titulo}`}
              aria-current={index === activo ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          className="inicio__flecha-CarruselAutomatismos"
          onClick={siguiente}
          aria-label="Imagen siguiente"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default CarruselAutomatismos;
