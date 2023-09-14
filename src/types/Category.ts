export interface Product {
  product_id: number
  product_name: string
  product_price: number
  product_image: string
}

export default interface CategoryType {
  cat_id: number
  cat_name: string
  cat_icon: string
  products: Product[]
}
