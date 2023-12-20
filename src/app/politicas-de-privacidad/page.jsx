'use client'

import Box from '@/components/components-encabezado-pagina/Dash';
import PrivacidadImage from '@/components/components-politicas/PrivacidadImage';
import React from 'react';
import SectionPolity from '@/components/components-politicas/SectionPolity';
import PolitySection3 from '@/components/components-politicas/PolitySection3';
import { useStore } from "../global.store";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

export default function PoliticasPrivacidad() {
  const {isLogin} = useStore()
  const router = useRouter();

  useEffect(() => {
    if(!isLogin) {
      router.push('/');
    }
  }, [isLogin])
  
  return (
    <div>
    <div >
      <Box name="Políticas de Privacidad" description="Protegemos tu privacidad. Lee nuestras políticas para más información." />
      <div>
      <PrivacidadImage></PrivacidadImage>
    </div>
    <SectionPolity></SectionPolity>
    <PolitySection3></PolitySection3>
    </div></div>
  );
};