import './CarruselEmpresas.css'

function CarruselEmpresas() {
  const empresas = [
    {
      id: 1,
      nombre: 'AeropuertoArgentina2000',
      logo: 'public/LogosEmpresas/aeropuertos-argentina-2000-seeklogo.png'
    },
    {
      id: 2,
      nombre: 'GEA',
      logo: 'public/LogosEmpresas/G1A.F.png'
    },
    {
      id: 3,
      nombre: 'Tassaroli',
      logo: 'public/LogosEmpresas/tassaroli----sa132537thumbnail.png'
    },
    {
      id: 4,
      nombre: 'ConsSud',
      logo: 'public/LogosEmpresas/constructora.png'
    },
    {
      id: 5,
      nombre: 'DOT',
      logo: 'public/LogosEmpresas/DOT.jpg'
    },
    {
      id: 6,
      nombre: 'Frigorifico',
      logo: 'public/LogosEmpresas/Frigorifico.jpg'
    },
    {
      id: 7,
      nombre: 'eyelit',
      logo: 'public/LogosEmpresas/logo-color-eyelit.png'
    },
    {
      id: 8,
      nombre: 'miniso',
      logo: 'public/LogosEmpresas/miniso-seeklogo.png'
    },
    {
      id: 9,
      nombre: 'freshmarket',
      logo: 'public/LogosEmpresas/the-fresh-market-seeklogo.png'
    },
    {
      id: 10,
      nombre: 'ypf',
      logo: 'public/LogosEmpresas/YPF_logo_PNG1.png'
    }
  ]

  return (
    <section className="empresas">
      <div className="empresas__carrusel">
        <div className="empresas__track">

          {empresas.map((empresa) => (
            <div className="empresas__logo" key={empresa.id}>
              <img
                src={empresa.logo}
                alt={empresa.nombre}
              />
            </div>
          ))}

          {empresas.map((empresa) => (
            <div
              className="empresas__logo"
              key={`copia-${empresa.id}`}
            >
              <img
                src={empresa.logo}
                alt=""
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export { CarruselEmpresas }