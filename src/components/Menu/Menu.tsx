'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import Product from './components/Product'
import products from './utils/products'
import CategoryList from './CategoryList'

function Menu() {
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
        <CategoryList />
        <div className="p-8 flex-col">
          <div className="flex justify-center gap-4 max-md:flex-col max-md:justify-center py-3">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
        <div className="mx-auto">
          <Button
            as={Link}
            href="/Menu"
            color="primary"
            className="text-primary rounded-full bg-white shadow-lg px-4 font-bold hover:bg-primary hover:text-white"
          >
            Show More
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Menu
