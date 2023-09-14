import { ChangeEvent } from 'react'
import { Product } from '@/types/Category'
import { Button, Image, Input } from '@nextui-org/react'
import { DeleteOutlined } from '@ant-design/icons'

interface Props {
  product: Product
  cartState: any
  handleChangeQuantity: (e: ChangeEvent<HTMLInputElement>, key: string) => void
  handleRemoveItem: (item: Product) => void
}

const ProductCard = ({
  product,
  cartState,
  handleChangeQuantity,
  handleRemoveItem,
}: Props) => {
  return (
    <div
      key={product.product_id}
      className="flex p-4 bg-secondary min-w-[700px] items-center gap-2 mx-auto max-md:min-w-[300px]"
    >
      <div className="px-1 flex items-center gap-4 w-[320px]">
        <Image
          alt={`${product.product_name} picture`}
          src={product.product_image}
          width="70px"
          height="auto"
        />
        <p className="font-bold text-lg ">{product.product_name}</p>
      </div>
      <p className="text-primary font-bold text-lg">${product.product_price}</p>
      <div className="flex ml-auto items-center gap-3">
        <Input
          label="Quantity"
          type="number"
          className="max-w-[100px]"
          value={cartState[product.product_name]?.quantity}
          onChange={(e) => handleChangeQuantity(e, product.product_name)}
        />
        <Button
          isIconOnly
          className="bg-primary"
          onClick={() => handleRemoveItem(product)}
        >
          <DeleteOutlined />
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
