'use client'

import Box from "@/components/components-encabezado-pagina/Dash";
import Section1Preguntas from "@/components/components-preguntas/Section1Preguntas";
import Section3Preguntas from "@/components/components-preguntas/Section3Preguntas";
import { useStore } from "../global.store";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

export default function About() {
  const {isLogin} = useStore()
  const router = useRouter();

  useEffect(() => {
    if(!isLogin) {
      router.push('/');
    }
  }, [isLogin])
    return (
      <div>
        
        <div className="flex flex-col lg:flex-row bg-white">
          <div className="flex-1">
          <Box name="Preguntas Frecuentes" description="Aqui encontrara respuestas a tus preguntas más comunes." />
                    </div>
        </div>
    {/* Codigo */}
    <Section1Preguntas></Section1Preguntas>
    <Section3Preguntas></Section3Preguntas>
      </div>
    );
  }