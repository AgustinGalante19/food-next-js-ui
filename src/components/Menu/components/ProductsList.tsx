'use client'

import { useEffect } from 'react'
import { useCartStore } from '@/hooks/zustand/useCartStore'
import { Product as ProductT } from '@/types/Category'
import Product from './Product'

const ProductsList = ({ products }: { products: ProductT[] }) => {
  const { items } = useCartStore()

  useEffect(() => {
    window.localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  return (
    <div className="p-8 flex-col">
      <div className="flex justify-center gap-4 max-md:flex-col max-md:justify-center py-3">
        {products.map((product) => (
          <Product product={product} key={product.product_id} />
        ))}
      </div>
    </div>
  )
}

export default ProductsList
