'use client'

import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import Product from '../../../types/Product'

const Product = ({ product }: { product: Product }) => {
  return (
    <Card className="py-4 w-[220px] flex max-md:mx-auto">
      <CardBody className="py-2 justify-center items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl mx-auto"
          src="/products/burguer.png"
          width={100}
          height={100}
        />
      </CardBody>
      <CardFooter>
        <div className="flex flex-col mx-auto">
          <h4 className="text-center font-bold text-lg mb-2">
            {product.product_name} <br />
          </h4>
          {/* <p className="text-center text-sm">{product.weight}g</p> */}
          <p className="font-bold text-center text-lg text-primary">
            ${product.product_price}
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}

export default Product
