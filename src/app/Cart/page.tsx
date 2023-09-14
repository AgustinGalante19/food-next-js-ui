'use client'

import { Button } from '@nextui-org/react'
import ProductCard from './components/ProductCard'
import useCart from './hooks/useCart'
import Link from 'next/link'
import { ToastContainer } from 'react-toastify'

const Cart = () => {
  const {
    cartState,
    handleChangeQuantity,
    handlePay,
    handleRemoveItem,
    items,
  } = useCart()

  const totalValue = items.reduce((acc, item) => {
    return acc + item?.product_price * cartState[item.product_name]?.quantity
  }, 0)

  return (
    <div className="flex flex-col container mx-auto px-5 py-8 justify-center gap-2">
      <ToastContainer />
      {items.map((product) => (
        <ProductCard
          product={product}
          key={product.product_id}
          cartState={cartState}
          handleChangeQuantity={handleChangeQuantity}
          handleRemoveItem={handleRemoveItem}
        />
      ))}
      <div className="my-4 mx-auto w-[700px]">
        {items.length > 0 && (
          <p className="font-semibold text-2xl">
            Total: <span className="text-primary font-bold">${totalValue}</span>
          </p>
        )}
      </div>
      <div className="flex justify-center">
        {items.length > 0 ? (
          <Button
            onClick={handlePay}
            color="primary"
            className="justify-self-center text-secondary"
          >
            Confirm Order
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
