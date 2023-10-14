import { pool } from '@/services/database'
import { AxiosError } from 'axios'
import { NextResponse } from 'next/server'

interface Product {
  product_id: number
  product_name: string
  product_price: number
  product_image: string
}

interface CategoryT {
  cat_id: number
  cat_name: string
  cat_icon: string
  products: Product[]
}

interface Result {
  cat_name: string
  cat_id: number
  product_id: number
  product_name: string
  product_cat_id: number
  product_image: string
  cat_icon: string
  product_price: number
}

export async function GET() {
  try {
    const categoriesAndProducts = await pool.query<Result>(
      `select * from products_and_categories`
    )
    const transformedData: CategoryT[] = []

    categoriesAndProducts.rows.forEach((item) => {
      const existingCategory = transformedData.find(
        (cat) => cat.cat_id === item.product_cat_id
      )

      const product: Product = {
        product_id: item.product_id,
        product_name: item.product_name,
        product_price: item.product_price,
        product_image: item.product_image,
      }

      if (existingCategory) {
        existingCategory.products.push(product)
      } else {
        transformedData.push({
          cat_id: item.cat_id,
          cat_name: item.cat_name,
          cat_icon: item.cat_icon,
          products: [product],
        })
      }
    })

    return NextResponse.json({
      data: transformedData,
      errors: [],
      result: 'ok',
    })
  } catch (err) {
    const error = err as AxiosError
    return NextResponse.json({
      message: 'error',
      data: [],
      errors: [error.message],
    })
  }
}
