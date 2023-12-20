'use client'

import Terminos from '@/components/components-tyc/ContentTyC';
import Box from '@/components/components-encabezado-pagina/Dash';
import React from 'react';
import { useStore } from "../global.store";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

export default function TerminosYCondicionesPage() {
  const {isLogin} = useStore()
  const router = useRouter();

  useEffect(() => {
    if(!isLogin) {
      router.push('/');
    }
  }, [isLogin])
  return (
    
    <div>
      <Box
        name="Terminos y Condiciones"
        description="Esta página contiene los términos y condiciones que rigen el uso de nuestro servicio. Por favor, léelos detenidamente antes de utilizar nuestro sitio web."
      />
      <div className="flex flex-col lg:flex-row bg-white">
        <div className="flex-1">
          <Terminos />
        </div>
      </div>
    </div>
  );
}