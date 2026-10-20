import React from 'react'
import TarjetaAzulContacto from '../../Components/TarjetaAzulContacto/TarjetaAzulContacto'
import CardPresupuesto from '../../Components/CardPresupuesto/CardPresupuesto'
import TarjetaVisitanos from '../../Components/TarjetaVisitanos/TarjetaVisitanos'
import TarjetaPieContacto from '../../Components/TarjetaPieContacto/TarjetaPieContacto'

export default function Contacto() {
  return (
    <div>
      <TarjetaAzulContacto/>
      <CardPresupuesto/>
      <TarjetaVisitanos/>
      <TarjetaPieContacto/>
    </div>
  )
}
