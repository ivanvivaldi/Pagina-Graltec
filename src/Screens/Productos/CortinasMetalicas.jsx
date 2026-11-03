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
          <div className="tarjeta-contenedor">

    <TarjetasCortinas
        title="Galvanizada Reforzada"
        variantes={[
            {
                nombre: "Ciega",
                img: "/imagenes/cortina metalica.png",
                description: "La variedad de nuestros modelos combina seguridad, diseño y durabilidad. Disponible en espesor 0,7 mm y 0,9 mm."
            },
            {
                nombre: "Microperforada",
                img:"/imagenes/CORTINA_MICRO2.jpg",
                description: "Variante microperforada de nuestra cortina galvanizada reforzada, permite visibilidad y ventilación. Ideal para comercios y locales."
            }
        ]}
    />

    <TarjetasCortinas
        title="Tablilla Ancha Galvanizada"
        variantes={[
            {
                nombre: "Ciega",
                img: "/imagenes/FRESH MARKET Libertad con persianas limpias.png",
                description: "Uno de nuestros modelos que combina seguridad, diseño y robustez, ideal para galpones y tinglados. Disponible en espesor 0,7 mm y 0,9 mm."
            },
            {
                nombre: "Microperforada",
                img: "/imagenes/foto_Ancha_micro.png",
                description: "Variante microperforada de nuestra cortina de tablilla ancha, pensada para aquellos proyectos que requieran visivilidad, luz natural y vision al exterior."
            }
        ]}
    />

    <TarjetasCortinas
        title="Standard"
        variantes={[
            {
                nombre: "Ciega",
                img: "/imagenes/standard-3.jpg",
                description: "La variedad de nuestros modelos combina seguridad, diseño y durabilidad. Disponible en espesor 0,5 mm y 0,7 mm"
            },
            {
                nombre: "Microperforada",
                img: "/imagenes/standard-3.jpg",
                description: "Variante microperforada de nuestra cortina standard."
            }
        ]}
    />

</div>
      <div>
        <DivTablillas/>
      </div>

      
<div className="tarjeta-contenedor_tablillas">

    

     <TarjetasTablillas
     title="Tablilla Galvanizada Reforzada"
     variantes={[
          {
               nombre: "Ciega",

               imagenes: [
                    "/imagenes/galva_ref1.jpg",
                    "/imagenes/Lamas metálicas galvanizadas entrelazadas.png",
                    "/imagenes/plano-galv-ref.png"
               ],

               planos: [
                    "/imagenes/plano-galv-ref.png"
               ],

               description: "La variedad de nuestros modelos combina seguridad, diseño y durabilidad."
          },
          {
               nombre: "Microperforada",

               imagenes: [
                    "/imagenes/galva_micro.jpg",
                    "/imagenes/Dos lamas metálicas perforadas en perspectiva.png",
                    "/imagenes/plano-galv-ref.png"
               ],

                planos: [
                    "/imagenes/plano-galv-ref.png"
               ],

               description: "Variante microperforada de nuestra tablilla galvanizada reforzada."
          }
     ]}
     />



    <TarjetasTablillas
        title="Tablilla Ancha Galvanizada"
        variantes={[
            {
                nombre: "Ciega",
                imagenes: [
                    "/imagenes/galva_ancha1.jpg",
                    "/imagenes/Paneles de acero galvanizado texturizado.png",
                    "/imagenes/plano-ancha.png"
                ],

                  planos: [
                    "/imagenes/plano-ancha.png"
               ],

                description: "La variedad de nuestros modelos combina seguridad, diseño y durabilidad."
            },
            {
                nombre: "Microperforada",
                imagenes: [
                    "/imagenes/galva_ancha_micro.jpg",
                    "/imagenes/Panel metálico perforado galvanizado.png",
                    "/imagenes/plano-ancha.png"
                ],

                 planos: [
                    "/imagenes/plano-ancha.png"
               ],

                description: "Variante microperforada de nuestra tablilla ancha galvanizada."
            }
        ]}
    />

    <TarjetasTablillas
        title="Tablilla Standard"
        variantes={[
            {
                nombre: "Ciega",
                imagenes: [
                    "/imagenes/std.jpg",
                    "/imagenes/Perfil de acero galvanizado en primer plano.png",
                    "/imagenes/file_000000009cb4820ea88bcd2bd09d7adb.png"
                ],
                   planos: [
                    "/imagenes/file_000000009cb4820ea88bcd2bd09d7adb.png"
               ],
                description: "La variedad de nuestros modelos combina seguridad, diseño y durabilidad."
            },
            {
                nombre: "Microperforada",
                imagenes: [
                    "/imagenes/standard-2.jpg",
                    "/imagenes/Lámina metálica corrugada perforada.png",
                    "/imagenes/file_000000009cb4820ea88bcd2bd09d7adb.png"
               ],

               planos: [
                    "/imagenes/file_000000009cb4820ea88bcd2bd09d7adb.png"
               ],
               
                description: "Variante microperforada de nuestra tablilla Standard."
            }
        ]}
    />

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
