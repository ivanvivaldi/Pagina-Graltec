
/* ==========================================
   GRALTEC - MODELOS SEMIBLINDADOS
   ========================================== */

// CATEGORÍAS TÉCNICAS

export const categoriasTecnicasSemiblindados = [
  'Capacidad de elevación',
  'Potencia del motor',
  'Diámetro (sugerido) del tubo enrollador',
  'RPM del piñón de salida (Z14)',
  'RPM del motor eléctrico',
  'Velocidad de cortina',
  'Freno electromagnético',
  'Engranaje de contramarcha'
]


// MODELOS DISPONIBLES

const listaModelos = [
  { id: 'SB-150', nombre: 'SB 150' },
  { id: 'SB-200', nombre: 'SB 200' },
  { id: 'SB-250', nombre: 'SB 250' },
  { id: 'SB-260', nombre: 'SB 260 (4 Cables)' },
  { id: 'SB-310', nombre: 'SB 310 (4 Cables)' },
  { id: 'SB-370', nombre: 'SB 370 (4 Cables)' },
  { id: 'SB-420', nombre: 'SB 420 (4 Cables)' },
  { id: 'SB-500', nombre: 'SB 500 (4 Cables)' }
]


/* ==========================================
   FICHAS TÉCNICAS - MOTORES SEMIBLINDADOS
   ========================================== */

const fichasTecnicasSemiblindados = {

  "SB-150": {
    capacidad: "70 Kg",
    potencia: "0.15 HP",
    diametroTubo: "130 mm",
    rpmPinon: "35",
    rpmEje: "1400",
    velocidad: "1.2m/min",
    freno: "-",
    contramarcha: "Z 36 Mod. 4"
  },

  "SB-200": {
    capacidad: "100 Kg",
    potencia: "0.2 HP",
    diametroTubo: "130 mm",
    rpmPinon: "35",
    rpmEje: "1400",
    velocidad: "1.2m/min",
    freno: "-",
    contramarcha: "Z 36 Mod. 4"
  },

  "SB-250": {
    capacidad: "150 Kg",
    potencia: "0.33 HP",
    diametroTubo: "130 mm",
    rpmPinon: "35",
    rpmEje: "1400",
    velocidad: "1.2m/min",
    freno: "-",
    contramarcha: "Z 36 Mod. 4"
  },

  "SB-260": {
    capacidad: "200 Kg",
    potencia: "0.5 HP",
    diametroTubo: "150 mm",
    rpmPinon: "35",
    rpmEje: "1400",
    velocidad: "1.2m/min",
    freno: "Opcional",
    contramarcha: "Z 36 Mod. 4"
  },

  "SB-310": {
    capacidad: "250 Kg",
    potencia: "0.66 HP",
    diametroTubo: "150 mm",
    rpmPinon: "35",
    rpmEje: "1400",
    velocidad: "1.2m/min",
    freno: "Opcional",
    contramarcha: "Z 36 Mod. 4"
  },

  "SB-370": {
    capacidad: "300 Kg",
    potencia: "0.75 HP",
    diametroTubo: "180 mm",
    rpmPinon: "35",
    rpmEje: "1400",
    velocidad: "1.2m/min",
    freno: "Opcional",
    contramarcha: "Z 36 Mod. 4"
  },

  "SB-420": {
    capacidad: "400 Kg",
    potencia: "1 HP",
    diametroTubo: "180 mm",
    rpmPinon: "35",
    rpmEje: "1400",
    velocidad: "1.2m/min",
    freno: "Si",
    contramarcha: "Z 36/48 Mod. 4 (Acero)"
  },

  "SB-500": {
    capacidad: "500 Kg",
    potencia: "1.25 HP",
    diametroTubo: "200 mm - 250 mm ",
    rpmPinon: "35",
    rpmEje: "1400",
    velocidad: "1.2m/min",
    freno: "Si",
    contramarcha: "Z 36/48 Mod. 4 (Acero)"
  }

}


const galeriasSemiblindados = {

  "SB-150": [
    {
      src: "/imagenes/Motores/GRALTEC_150_130M_etiqueta_graltec.jpg",
      alt: "Motor semiblindado GRALTEC SB 150 - vista principal"
    },
    {
      src: "/imagenes/Motores/GRALTEC_mecanismo_industrial_azul_en_detalle.jpg",
      alt: "Motor semiblindado GRALTEC SB 150 - vista lateral",
      escala: 1.5
    },
    {
      src: "/imagenes/Motores/GRALTEC_motor_tirantes_tuercas_al_ras.jpg",
      alt: "Motor semiblindado GRALTEC SB 150 - detalle",
      escala: 1.5
    },
    {
      src: "/imagenes/Motores/Accesirios llave 15.jpg",
      alt: "Accesorios",
      escala: 1.5
    }
    
  ],

  "SB-200": [
    {
      src: "/imagenes/Motores/GRALTEC_200_130M_centrado.jpg",
      alt: "Motor semiblindado GRALTEC SB 200 - vista principal"
    },
    {
      src: "/imagenes/Motores/GRALTEC_mecanismo_industrial_azul_en_detalle.jpg",
      alt: "Motor semiblindado GRALTEC SB 200 - vista lateral",
      escala: 1.5
    },
    {
      src: "/imagenes/Motores/GRALTEC_motor_tornillos_grandes_plateados_final (1).jpg",
      alt: "Motor semiblindado GRALTEC SB 200 - detalle"
    },
    {
      src: "/imagenes/Motores/Accesirios llave 15.jpg",
      alt: "Accesorios",
      escala: 1.5
    }
  ],

  "SB-250": [
    {
      src: "/imagenes/Motores/GRALTEC_250_130M_centrado.jpg",
      alt: "Motor semiblindado GRALTEC SB 250 - vista principal"
    },
    {
      src: "/imagenes/Motores/GRALTEC_mecanismo_industrial_azul_en_detalle.jpg",
      alt: "Motor semiblindado GRALTEC SB 250 - vista lateral",
      escala: 1.5
    },
    {
      src: "/imagenes/Motores/GRALTEC_motor_tirantes_tuercas_al_ras.jpg",
      alt: "Motor semiblindado GRALTEC SB 250 - detalle",
      escala: 1.5
    },
    {
      src: "/imagenes/Motores/Accesirios llave 15.jpg",
      alt: "Accesorios",
      escala: 1.5
    }
  ],

  "SB-260": [
    {
      src: "/imagenes/Motores/motor_graltec_azul_260_160_n (1).jpg",
      alt: "Motor semiblindado GRALTEC SB 260 - vista principal",
      escala: 1.5
    },
    {
      src: "/imagenes/Motores/Motor industrial azul sin etiqueta.png",
      alt: "Motor semiblindado GRALTEC SB 260 - vista lateral"
    },
    {
      src: "/imagenes/Motores/Motorreductor Industrial Azul en Fondo Blanco.png",
      alt: "Motor semiblindado GRALTEC SB 260 - detalle",
      escala: 1.5
    },
    {
      src: "/imagenes/Motores/Accesorios llave 16.jpg",
      alt: "Accesorios",
      escala: 1.2
    }
    
  ],

  "SB-310": [
    {
      src: "/imagenes/Motores/Motorreductor Industrial Azul GRALTEC.png",
      alt: "Motor semiblindado GRALTEC SB 310 - vista principal",
      escala: 1.5
    },
    {
      src: "/imagenes/Motores/Motor industrial azul sin etiqueta.png",
      alt: "Motor semiblindado GRALTEC SB 310 - vista lateral"
    },
    {
      src: "/imagenes/Motores/Motorreductor Industrial Azul en Fondo Blanco.png",
      alt: "Motor semiblindado GRALTEC SB 310 - detalle",
      escala: 1.5
    },
    {
      src: "/imagenes/Motores/Accesorios llave 16.jpg",
      alt: "Accesorios",
      escala: 1.2
    }
  ],

  "SB-370": [
    {
      src: "/imagenes/Motores/motor_graltec_370_160_N.jpg",
      alt: "Motor semiblindado GRALTEC SB 370 - vista principal",
      escala: 1.5
    },
    {
      src: "/imagenes/Motores/Motor industrial azul sin etiqueta.png",
      alt: "Motor semiblindado GRALTEC SB 370 - vista lateral"
    },
    {
      src: "/imagenes/Motores/Motorreductor Industrial Azul en Fondo Blanco.png",
      alt: "Motor semiblindado GRALTEC SB 370 - detalle",
      escala: 1.5
    },
    {
      src: "/imagenes/Motores/Accesorios llave 16.jpg",
      alt: "Accesorios",
      escala: 1.2
    }
  ],

  "SB-420": [
    {
      src: "/imagenes/Motores/420m.jpg",
      alt: "Motor semiblindado GRALTEC SB 420 - vista principal"
    },
    {
      src: "/imagenes/Motores/Ensamble de engranaje industrial azul.png",
      alt: "Motor semiblindado GRALTEC SB 420 - vista lateral",
      escala: 1.5
    },
    {
      src: "/imagenes/Motores/Motorreductor industrial azul sobre fondo blanco.png",
      alt: "Motor semiblindado GRALTEC SB 420 - detalle"
    },
    {
      src: "/imagenes/Motores/Accesorios llave 16.jpg",
      alt: "Accesorios",
      escala: 1.2
    }
  ],

  "SB-500": [
    {
      src: "/imagenes/Motores/Motorreductor Industrial Azul Graltec (1).png",
      alt: "Motor semiblindado GRALTEC SB 500 - vista principal",
      escala: 1.5
    },
    {
      src: "/imagenes/Motores/Ensamble de engranaje industrial azul.png",
      alt: "Motor semiblindado GRALTEC SB 500 - vista lateral",
      escala: 1.5
    },
    {
      src: "/imagenes/Motores/Motorreductor industrial azul sobre fondo blanco.png",
      alt: "Motor semiblindado GRALTEC SB 500 - detalle"
    },
    {
      src: "/imagenes/Motores/Accesorios llave 16.jpg",
      alt: "Accesorios",
      escala: 1.2
    }
  ]

}

// GENERADOR DE MODELOS
// Los valores técnicos se completarán posteriormente.

const crearModelo = ({ id, nombre }) => ({

  id,
  nombre,

  titulo: `Motor Semiblindado ${nombre}`,

  especificaciones: [
  {
    nombre: categoriasTecnicasSemiblindados[0],
    valor: fichasTecnicasSemiblindados[id]?.capacidad || 'A confirmar'
  },
  {
    nombre: categoriasTecnicasSemiblindados[1],
    valor: fichasTecnicasSemiblindados[id]?.potencia || 'A confirmar'
  },
  {
    nombre: categoriasTecnicasSemiblindados[2],
    valor: fichasTecnicasSemiblindados[id]?.diametroTubo || 'A confirmar'
  },
  {
    nombre: categoriasTecnicasSemiblindados[3],
    valor: fichasTecnicasSemiblindados[id]?.rpmPinon || 'A confirmar'
  },
  {
    nombre: categoriasTecnicasSemiblindados[4],
    valor: fichasTecnicasSemiblindados[id]?.rpmEje || 'A confirmar'
  },
  {
    nombre: categoriasTecnicasSemiblindados[5],
    valor: fichasTecnicasSemiblindados[id]?.velocidad || 'A confirmar'
  },
  {
    nombre: categoriasTecnicasSemiblindados[6],
    valor: fichasTecnicasSemiblindados[id]?.freno || 'A confirmar'
  },
  {
    nombre: categoriasTecnicasSemiblindados[7],
    valor: fichasTecnicasSemiblindados[id]?.contramarcha || 'A confirmar'
  }
],

 galeria: (galeriasSemiblindados[id] || [])
  .filter((imagen) => imagen.src.trim() !== '')

})


// OBJETO DE MODELOS

export const modelosSemiblindados = Object.fromEntries(
  listaModelos.map((modelo) => [
    modelo.id,
    crearModelo(modelo)
  ])
)


// INFORMACIÓN COMÚN DE LA FAMILIA

export const contenidoComunSemiblindados = {

  versiones: {
    titulo: 'Disponibles en versiones monofásica y trifásica',

    descripcion:
      'Nuestra línea de motores semiblindados cuenta con ambas alternativas de alimentación eléctrica. Consultanos por la versión adecuada para tu instalación.'
  },

  mandoDistancia: {
    titulo: 'Preparados para mando a distancia',

    descripcion:
      'Todos nuestros equipos semiblindados permiten incorporar un sistema de accionamiento mediante control remoto. Consultá por los accesorios necesarios.'
  },

  accesorios: null,

  controlRemoto: null

}
