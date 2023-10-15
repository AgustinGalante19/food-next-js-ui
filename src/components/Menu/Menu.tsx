import React from 'react'
import Link from 'next/link'
import CategoryList from './CategoryList'
import api from '@/api/serviceFactory'
import { ApiResponse } from '@/types/ApiErrorResponse'
import CategoryType from '@/types/Category'

async function getCategories() {
  const response = await api.get<ApiResponse<CategoryType>>('/category')
  return response.data.data
}

async function Menu() {
  const categories = await getCategories()

  return (
    <section className="container mx-auto px-5 py-12">
      <div className="flex flex-col">
        <div className="flex">
          <h6 className="text-primary text-sm text-center mx-auto">Our Menu</h6>
        </div>
        <div className="flex mt-6">
          <h2 className="text-black text-3xl font-bold max-w-sm text-center mx-auto leading-snug">
            Menu That Always Make You Fall In Love
          </h2>
        </div>
        <CategoryList categories={categories} />
        <div className="mx-auto">
          <Link
            href="/Menu"
            className="text-white rounded-full bg-red-400 shadow-lg px-4 font-bold hover:bg-primary hover:text-white p-2 transition-all"
          >
            Show More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Menu
