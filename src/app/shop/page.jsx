'use client'
import Cards from "@/components/Cards";
import Box from "@/components/components-encabezado-pagina/Dash";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useStore } from "../global.store";
import { useRouter } from 'next/navigation';


export default function About() {
  const [products, setProducts ] = useState([])
  const {token} = useStore() 
  const {isLogin} = useStore()
  const router = useRouter();

  useEffect(() => {
    if(!isLogin) {
      router.push('/');
    }
  }, [isLogin])


  useEffect(() => {
    async function fetchData ()  {

      let { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_ECOMMERCE}/home/list`);

      setProducts(data.our_products
)
    }
    fetchData()
  }, [token])


  return (
    <div>
      
      <div className="flex flex-col lg:flex-row bg-white">
        <div className="flex-1">
        <Box name="Tienda" description="Descubre una amplia variedad de productos de alta calidad que satisfarán tus necesidades y gustos. ¡Encuentra ese artículo especial que estás buscando!" />
                  </div>
      </div>
  {/* Codigo */}
      <Cards></Cards>
    </div>
  );
  }