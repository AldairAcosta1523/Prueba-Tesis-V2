import React from 'react'
import Box from '@/components/components-encabezado-pagina/Dash'
import Section1Pago from '@/components/components-pagos/Section1Pago'


const page = () => {
  return (
    <div>
    <div>
    <Box name="Informacion Sobre Pagos" description="¡Descubre todo sobre los pagos en nuestro eCommerce! " />
    </div>
    <Section1Pago></Section1Pago>
    </div>
  )
}

export default page
