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
    <div className="flex flex-row gap-3">
      
      <Card {...data.products[0]} />

      <Card {...data.products[1]} />

    </div>
  )
}

const Card = (product: Product) => {
  
  function onClick() {
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
    <div className="grow">
      <div className="flex flex-col justify-center content-center">
        <h2 className="text-[38px]">{product.title}</h2>

        <Image src={product.splash} width={400} height={400} alt='Cover Image'/>

        <p className='text-red-400 hover:text-blue-600'>Find in-depth information about Product 1</p>
        
        <button onClick={onClick}>Buy Now</button>
      </div>
    </div>
  )
}

export default ProductCards