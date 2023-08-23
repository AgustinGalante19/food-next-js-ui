interface Product {
  product_id: number
  product_name: string
  product_price: number
}

export default interface CategoryType {
  cat_id: number
  cat_name: string
  products: Product[]
}
