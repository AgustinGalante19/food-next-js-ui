import { useCartStore } from '@/hooks/zustand/useCartStore'
import Product from './Product'
import { Product as ProductT } from '@/types/Category'

const ProductsList = ({ products }: { products: ProductT[] }) => {
  const { addItem, removeItem } = useCartStore()

  return (
    <div className="p-8 flex-col">
      <div className="flex justify-center gap-4 max-md:flex-col max-md:justify-center py-3">
        {products.map((product) => (
          <Product
            product={product}
            key={product.product_id}
            handlers={{ addItem, removeItem }}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductsList
