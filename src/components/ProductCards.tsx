import React from "react";
import Image from 'next/image'
import data from '../../data/products.json'
import Checkout from '../checkout'


type Product = {
  id: string
  title: string
  image: string
  splash: string
}

const ProductCards = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 mt-[20px] mb-[300px]">
      
      <Card {...data.products[0]} />

      <Card {...data.products[1]} />

    </div>
  )
}

const Card = (product: Product) => {
  
  const onClick = () => {
    Checkout({
      lineItems: [
          {
            price: product.id,
            quantity: 1
          }
        ]
    })
  }

  return (
    <div className="grow cursor-pointer" onClick={onClick}>
      <div className="flex flex-col justify-center content-center ">
        
        <h3 className="mb-[10px]">{product.title}</h3>

        <div className="next-img-fill-container ">
          <Image 
            className="next-img-fill rounded-md"
            src={product.splash} 
            alt='Cover Image'
            fill
            />
        </div>
      </div>
    </div>
  )
}

export default ProductCards