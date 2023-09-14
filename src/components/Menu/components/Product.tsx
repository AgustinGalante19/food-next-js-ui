'use client'

import { useEffect, useMemo, useState } from 'react'
import { Card, CardBody, CardFooter, Image, user } from '@nextui-org/react'
import ProductT from '../../../types/Product'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { useCartStore } from '@/hooks/zustand/useCartStore'
import { useAuthStore } from '@/hooks/zustand/useAuthStore'
import { useRouter } from 'next/navigation'

interface Props {
  product: ProductT
}

const Product = ({ product }: Props) => {
  const [isOnCart, setIsOnCart] = useState(false)

  const buttonStyle = useMemo(
    () =>
      'bg-primary text-white p-2 flex rounded gap-2 items-center border-solid border-white border-white border-1',
    []
  )

  const { items, addItem, removeItem } = useCartStore()
  const { isAuth } = useAuthStore()

  const { push } = useRouter()

  const producIsOnCart = () => {
    const item = items.find((item) => item.product_id === product.product_id)
    if (item) {
      setIsOnCart(true)
    } else {
      setIsOnCart(false)
    }
  }

  useEffect(() => {
    producIsOnCart()
  })

  const handleAddProduct = () => {
    if (isAuth) {
      addItem(product)
    } else {
      push('/SignIn')
    }
  }

  return (
    <Card className="py-4 w-[220px] flex max-md:mx-auto hover:bg-primary hover:text-white">
      <CardBody className="py-2 justify-center items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl mx-auto"
          src={product.product_image}
          width={100}
          height={100}
        />
      </CardBody>
      <CardFooter>
        <div className="flex flex-col mx-auto">
          <h4 className="text-center font-bold text-lg">
            {product.product_name} <br />
          </h4>
          <p className="text-sm text-center">140 g</p>
          <p className="font-bold text-center text-lg">
            ${product.product_price}
          </p>
          <div className="flex justify-center p-1 gap-4 items-center">
            {!isOnCart ? (
              <button className={buttonStyle} onClick={handleAddProduct}>
                <PlusOutlined />
              </button>
            ) : (
              <button
                className={buttonStyle}
                onClick={() => removeItem(product)}
              >
                <MinusOutlined />
              </button>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default Product
