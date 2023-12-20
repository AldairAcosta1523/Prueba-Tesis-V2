'use client'
import React from 'react';
import Image from 'next/image';

const Section5Pago = () => {
  return (
    <div className="hero min-h-screen bg-white text-black">
      <div className="hero-content flex flex-col sm:flex-row-reverse px-4 lg:px-0">
        <Image
          src="/proceso.jpg"
          className="h-26 w-26 sm:max-w-sm rounded-lg shadow-2xl animate-fade-down animate-once animate-duration-1300 animate-ease-linear sm:w-1/2 sm:ml-8"
          alt="Imagen de una persona pagando con una tarjeta de crédito"
          width={500}
          height={500}
        />
        <div className="mt-8 sm:mt-0 sm:w-1/2 sm:mr-8" style={{maxWidth:"37rem"}}>
          <h1 className="text-xl sm:text-2xl lg:text-5xl md:text-5xl font-bold text-center mb-5">Proceso de Pago</h1>
          <ul className="py-6 text-sm sm:text-lg">
            <li className="mb-4">
              <span className="font-bold">Paso 1:</span> Agrega productos al carrito: Navega por nuestra tienda en línea y selecciona los productos que deseas comprar. Haz clic en el botón "Agregar al carrito" para añadirlos a tu carrito de compras.
            </li>
            <li className="mb-4">
              <span className="font-bold">Paso 2:</span> Revisa tu carrito: Accede a tu carrito de compras para revisar los productos seleccionados. Aquí puedes verificar la cantidad, el precio y realizar cualquier modificación si es necesario.
            </li>
            <li className="mb-4">
              <span className="font-bold">Paso 3:</span> Selecciona el método de pago: En la pantalla de pago, elige el método de pago que prefieras, como tarjeta de crédito, débito o PayPal.
            </li>
            <li className="mb-4">
              <span className="font-bold">Paso 4:</span> Revisa y confirma tu pedido: Antes de finalizar la transacción, revisa detenidamente todos los detalles de tu pedido, incluidos los productos, las cantidades y el total a pagar. Si todo es correcto, confirma tu pedido.
            </li>
            <li className="mb-8">
              <span className="font-bold">Paso 5:</span> Procesamiento del pago: Una vez que se confirma tu pedido, nuestro sistema procesará el pago de forma segura utilizando la información proporcionada. Recibirás una confirmación de pago exitoso y un recibo por correo electrónico.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section5Pago;
