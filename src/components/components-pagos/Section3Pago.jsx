'use client'
import { Button, Typography } from "@material-tailwind/react"

const handleShopClick = () => {
    window.location.href = `/contactanos`;
};


function Section3Pago (){

    return(
        <div className="hero min-h-screen relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-white">
    <div className="max-w-md">
    <h1 className="mb-5 text-5xl font-bold">Información de pagos</h1>
                    <Typography className="mb-5" variant="lead">Descubre cómo pagar de forma segura y rápida en nuestra plataforma. Aceptamos las principales tarjetas de crédito y débito, así como otros métodos de pago alternativos.Si tienes alguna duda con tus pagos o alguna consulta no dudes en comunicarte.</Typography>
                    <Button variant="gradient" color="blue" onClick={handleShopClick}>
            <span>Contactanos</span>
          </Button>
    </div>

  </div>
</div>
    )
}

export default Section3Pago