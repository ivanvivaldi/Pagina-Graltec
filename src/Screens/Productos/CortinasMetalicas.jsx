import React from 'react'
import TarjetasCortinas from '../../Components/TarjetasCortinas/TarjetasCortinas'
import DivCortinas from '../../Components/DivCortinas/DivCortinas'
import DivTablillas from '../../Components/DivTablillas/DivTablillas'
import TarjetasTablillas from '../../Components/TarjetasTablillas/TarjetasTablillas'
import DivAccesorios from '../../Components/DivAccesorios/DivAccesorios'
import TarjetasAccesorios from '../../Components/TarjetasAccesorios/TarjetasAccesorios'


export default function CortinasMetalicas() {
  return (

    <div>
      <div>
        <DivCortinas/>
      </div>
    <div className='tarjeta-contenedor'>
     <TarjetasCortinas 
          title="Galvanizada Reforzada"
          description="La variedad de nuestros modelos combina seguridad, diseño y durabilidad."
          img="/imagenes/cortina metalica.png"/>
     <TarjetasCortinas 
          title="Galvanizada Microperforada"
          description="La variedad de nuestros modelos combina seguridad, diseño y durabilidad."
          img="/imagenes/CORTINA_MICRO3.jpg"/>
     <TarjetasCortinas
          title="Tablilla Ancha Galvanizada"
          description="La variedad de nuestros modelos combina seguridad, diseño y durabilidad."
          img="/imagenes/cortina metalica.png"/>
     <TarjetasCortinas
          title="Tablilla Microperforada Ancha"
          description="La variedad de nuestros modelos combina seguridad, diseño y durabilidad."
          img="/imagenes/foto_Ancha_micro.png"/>
     <TarjetasCortinas
          title="Standard"
          description="La variedad de nuestros modelos combina seguridad, diseño y durabilidad."
          img="imagenes/standard-3.jpg"/>
    </div>
      <div>
        <DivTablillas/>
      </div>

      <div className='tarjeta-contenedor'>
     <TarjetasTablillas 
          title="Tablilla Galvanizada Reforzada"
          description="La variedad de nuestros modelos combina seguridad, diseño y durabilidad."
          img="/imagenes/galva_ref1.jpg"/>
     <TarjetasTablillas
          title="Tablillas Galvanizada Microperforada"
          description="La variedad de nuestros modelos combina seguridad, diseño y durabilidad."
          img="/imagenes/galva_micro.jpg"/>
     <TarjetasTablillas
          title="Tablilla Ancha Galvanizada"
          description="La variedad de nuestros modelos combina seguridad, diseño y durabilidad."
          img="/imagenes/galva_ancha1.jpg"/>
     <TarjetasTablillas
          title="Tablilla Microperforada Ancha"
          description="La variedad de nuestros modelos combina seguridad, diseño y durabilidad."
          img="/imagenes/galva_ancha_micro.jpg"/>
     <TarjetasTablillas
          title="Tablilla Standard"
          description="La variedad de nuestros modelos combina seguridad, diseño y durabilidad."
          img="/imagenes/std.jpg"/>
    </div>
          <div>
               <DivAccesorios/>
          </div>
          <div className='tarjeta-contenedor'>
                <TarjetasAccesorios 
                    title="Guias de seguridad"
                    description="Contamos con Guias de seguridad de 50 x 20; 60 x 40; 80 x 50 y 100 x 50."
                    img="/imagenes/guias.jpg"/>
               <TarjetasAccesorios 
                    title="Tubos octogonales"
                    description="Contamos con tubos octogonales desde 13mm hasta 35mm Ofrecemos tambien tubo de 4 pulgadas."
                    img="/imagenes/tubos.jpg"/>
               <TarjetasAccesorios
                    title="Engranajes de fundición"
                    description="Ofrecemos kits de engranajes para refuccion de motores semiblindados y accesorios."
                    img="/imagenes/engranajes fundicion.jpg"/>
          </div>
    </div>
  )
}
