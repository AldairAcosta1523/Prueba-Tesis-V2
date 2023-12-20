'use client'

import Section3 from '@/components/components-contacto/Section3';
import ContactContent from '@/components/components-contacto/ContactoContent';
import { useStore } from "../global.store";
import { useRouter } from 'next/navigation';
import Box from '@/components/components-encabezado-pagina/Dash';
import React from 'react';
import { useEffect } from "react";



export default function Contactanos() {
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
    <Box name="Contacto" description="¡Contáctanos! Estamos aquí para ayudarte. Encuentra información de contacto y comunícate con nosotros para resolver tus consultas y brindarte asistencia personalizada."></Box>    </div>
    <div>
    </div>
    <Section3 name=" “Hola, somos Tecshop, por este medio podras contactarte con nosotros. Estoy aquí para ayudarte con cualquier duda o sugerencia que tengas sobre nuestro ecommerce. Puedes contactarme por el correo electrónico tecshop@gmail.com, por el teléfono 934821679 o por el chat que encontrarás en nuestra página web. Estaremos
            encantados de atenderte y de ofrecerte la mejor solución para tus necesidades tecnológicas.”" image="/contacto.png"
            encargado="Julio Smith" cargo="Equipo de Tecshop"
            >
    </Section3>
    <ContactContent></ContactContent>   
    </div>
  );
};