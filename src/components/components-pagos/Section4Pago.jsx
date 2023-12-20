'use client'
import React from 'react'
import Image from 'next/image'

const Section4Pago = () => {
return (
<div className="hero min-h-screen bg-white text-black ">
  <div className="hero-content mt-10 flex flex-col sm:flex-row px-4 lg:px-0">
  <Image
          src="/pagosec.jpg"
          className="h-26 w-26 animate-fade-down animate-once animate-duration-1000 animate-ease-linear sm:max-w-sm rounded-lg shadow-2xl sm:w-1/2 sm:ml-8"
          alt="Imagen de una persona pagando con una tarjeta de crédito"
          width={500}
          height={500}
        />    
        <div className="mt-8 sm:mt-0 sm:w-1/2 sm:ml-10" style={{maxWidth:"37rem"}}>
      <h1 className="text-xl sm:text-2xl lg:text-5xl md:text-5xl font-bold text-center mb-5">Seguridad de los pagos</h1>
      <p className="py-6 text-sm sm:text-lg">En nuestro ecommerce, nos tomamos muy en serio la seguridad de los pagos para garantizar la protección de la información personal y financiera de nuestros clientes. Implementamos diversas medidas de seguridad, como el cifrado de datos, el cumplimiento de normas y estándares de seguridad reconocidos, y el uso de certificados SSL.

Utilizamos el cifrado de datos de última generación para garantizar que la información confidencial, como los datos de tarjetas de crédito, se transmita de forma segura y se mantenga protegida. Además, cumplimos con las normas y regulaciones de seguridad establecidas para la industria del comercio electrónico.</p>
    </div>
  </div>
</div>
)
}

export default Section4Pago
