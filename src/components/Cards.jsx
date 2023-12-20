'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardHeader, 
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
import CardShop from './CardShop';

const handleAddToCart = (product) => {
  CardShop.addToCart(product);
}

function Cards() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const apiUrl = `${process.env.NEXT_PUBLIC_API_ECOMMERCE}/products/show/`;
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcwMzZhNTJkMjlhMDU4MWY5NmQxZGMiLCJyb2wiOiJhZG1pbiIsImVtYWlsIjoiYWxkYWlyQGdtYWlsLmNvbSIsImlhdCI6MTcwMjc0MjUyMCwiZXhwIjoxNzAyODI4OTIwfQ.xXqtJ2d3E3ZR_9N1sxN85INhcq_4DDcMhJZZfJczxxk'; 

  const fetchData2 = async () => {
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'token': `${token}`
        }
      });
      setProducts(response.data.products);
      console.log(data.products)
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async  ()  => {

    let { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_ECOMMERCE}/home/list`);

    setProducts(data.our_products)
  }

  
  return (
    
    <div className='flex flex-wrap justify-center bg-white bg-gradient-to-r from-white via-gray-100 to-gray-300'>
    {products && products.map((product) => (
  <Card key={product._id} className="w-96 mt-16 mb-16 mr-10 ml-10" >
          <CardHeader shadow={false} floated={false} className="h-96"> 
            <img
              src={product.imagen}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>

          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                {product.title}
              </Typography>
              <Typography color="blue-gray" className="font-medium"> 
              S/ {product.price_soles}
              </Typography>
            </div>

            <Typography variant="small" color="gray" className="font-normal opacity-75">
              {product.resumen}
            </Typography>
          </CardBody>
        
          <CardFooter className="pt-0">
            <Button onClick={() => handleAddToCart(character)} ripple={false} fullWidth={true} className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100" >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Cards;