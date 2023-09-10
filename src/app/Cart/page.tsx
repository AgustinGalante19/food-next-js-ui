'use client'

import { Button } from '@nextui-org/react'
import ProductCard from './components/ProductCard'
import useCart from './hooks/useCart'
import { DollarOutlined } from '@ant-design/icons'
import Link from 'next/link'

const Cart = () => {
  const {
    cartState,
    handleChangeQuantity,
    handlePay,
    handleRemoveItem,
    items,
  } = useCart()

  return (
    <div className="flex flex-col container mx-auto px-5 py-8 justify-center gap-2">
      {items.map((product) => {
        return (
          <ProductCard
            product={product}
            key={product.product_id}
            cartState={cartState}
            handleChangeQuantity={handleChangeQuantity}
            handleRemoveItem={handleRemoveItem}
          />
        )
      })}
      <div className="flex justify-center">
        {items.length > 0 ? (
          <Button
            onClick={handlePay}
            color="primary"
            className="justify-self-center text-secondary"
          >
            <DollarOutlined />
            Pay
          </Button>
        ) : (
          <p className="text-gray-400 text-center">
            The cart is empty :/
            <br />
            <span>
              <Link
                href="/Menu"
                className="text-primary font-semibold underline ml-1"
              >
                Buy something
              </Link>
            </span>
          </p>
        )}
      </div>
    </div>
  )
}

export default Cart
