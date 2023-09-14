import { useCartStore } from '@/hooks/zustand/useCartStore'
import { Product } from '@/types/Category'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function useCart() {
  const [cartState, setCartState] = useState<any>({})

  const { items, removeItem, clearCart } = useCartStore()

  const handleChangeQuantity = (
    event: ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const { value } = event.target

    setCartState((prevState: any) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        quantity: value,
      },
    }))
  }

  const getItems = useCallback(() => {
    items.forEach((item) => {
      setCartState((prevState: any) => ({
        ...prevState,
        [item.product_name]: {
          quantity: 1,
          ...item,
        },
      }))
    })
  }, [items])

  useEffect(() => getItems(), [getItems])

  const handleRemoveItem = (item: Product) => {
    removeItem(item)
    const newItems = items.filter((i) => i.product_id !== item.product_id)
    localStorage.setItem('items', JSON.stringify(newItems))
    delete cartState[item.product_name]
  }

  const handlePay = () => {
    clearCart()
    localStorage.removeItem('items')
    toast.success('Order placed successfully!', {
      position: 'top-center',
    })
  }

  return { handleChangeQuantity, handleRemoveItem, handlePay, cartState, items }
}

export default useCart
