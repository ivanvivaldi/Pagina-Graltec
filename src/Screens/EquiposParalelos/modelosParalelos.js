export const modelosParalelos = {
  "CM-600": {
    id: "CM-600",
    nombre: "CM 600",
    titulo: "Motor Paralelo CM 600",

    descripcion:
      "Equipo paralelo para automatización de cortinas metálicas. Diseñado para proporcionar un accionamiento continuo y confiable, en cortinas metálicas de hasta 350 kg",

    especificaciones: [
      { nombre: "Capacidad Máxima", valor: "350 kg" },
      { nombre: "Potencia", valor: "370 W" },
      { nombre: "Torque", valor: "412 Nm" },
      { nombre: "Alimentación", valor: "220 V / 50 Hz" },
      { nombre: "Velocidad", valor: "4,8 rpm" },
      {nombre: "Diámetro de eje sugerido", valor: "5´ / 130 mm (hexagonal)"}
    ],

    imagenPrincipal: "/imagenes/Automatismos/600_principal.png",

    galeria: [
      {
        src: "/imagenes/Automatismos/600_imagen1.png",
        alt: "Motor paralelo GRALTEC CM 600 completo"
      },
      {
        src: "/imagenes/Automatismos/600_imagen3.png",
        alt: "Vista lateral del motor paralelo CM 600"
      },
      {
        src: "/imagenes/Automatismos/600_imagen2.png",
        alt: "Detalle mecánico del motor paralelo CM 600"
      }
    ]
  },

  "CM-800": {
    id: "CM-800",
    nombre: "CM 800",
    titulo: "Motor Paralelo CM 800",

    descripcion:
      "Equipo paralelo de mayor capacidad, cuenta con un diseño robusto y sistema de transmisión mecánica para cortinas metálicas de gran porte, hasta 445 kg.",

    especificaciones: [
      { nombre: "Capacidad Máxima", valor: "445 kg" },
      { nombre: "Potencia", valor: "400 W" },
      { nombre: "Torque", valor: "647 Nm" },
      { nombre: "Alimentación", valor: "220 V / 50 Hz" },
      { nombre: "Velocidad", valor: "4 rpm" },
      {nombre: "Diámetro de eje sugerido", valor: "6´ / 150 mm (hexagonal)"}
    ],

    imagenPrincipal: "/imagenes/Automatismos/800_principal.png",

    galeria: [
      {
        src: "/imagenes/Automatismos/800_imagen1.png",
        alt: "Motor paralelo GRALTEC CM 800 completo"
      },
      {
        src: "/imagenes/Automatismos/800_imagen3.png",
        alt: "Vista lateral del motor paralelo CM 800"
      },
      {
        src: "/imagenes/Automatismos/800_imagen2.png",
        alt: "Detalle de la caja reductora del CM 800"
      }
    ]
  }
}

export const contenidoComunParalelos = {
  accesorios: {
    titulo: "Accesorios y montaje",
    descripcion:
      "Conocé los accesorios y componentes disponibles para los equipos paralelos.",
    imagen: "/imagenes/Automatismos/kit-accesorios-motorparalelo.png"
  },

  controlRemoto: {
    titulo: "Sistema de control remoto",
    descripcion:
      "Consultá por las opciones de accionamiento mediante receptor y controles remotos.",
    imagen: "/imagenes/Automatismos/tablero-paralelo.png"
  }
}
