'use client'
import React from 'react'
import Box from '@/components/components-encabezado-pagina/Dash'
import Section1Pago from '@/components/components-pagos/Section1Pago'
import Section2Pago from '@/components/components-pagos/Section2Pago'
import Section3Pago from '@/components/components-pagos/Section3Pago'
import Section4Pago from '@/components/components-pagos/Section4Pago'
import Section5Pago from '@/components/components-pagos/Section5Pago'

import { useStore } from "../global.store";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

function Pagos (){
  const {isLogin} = useStore()
  const router = useRouter();

  useEffect(() => {
    if(!isLogin) {
      router.push('/');
    }
  }, [isLogin])
  
  return (
    <div>
    <div>
    <Box name="Informacion Sobre Pagos" description="¡Descubre todo sobre los pagos en nuestro eCommerce! " />
    </div>
    <Section1Pago></Section1Pago>
    <Section2Pago></Section2Pago>
    <Section3Pago></Section3Pago>
    <Section4Pago></Section4Pago>
    <Section5Pago></Section5Pago>
    </div>
  )
}

export default Pagos
