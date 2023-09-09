'use client'

import CategoryType from '@/types/Category'
import { Image, Tab, Tabs } from '@nextui-org/react'
import NextImage from 'next/image'
import ProductsList from './components/ProductsList'
import { useCartStore } from '@/hooks/zustand/useCartStore'

function CategoryList({ categories }: { categories: CategoryType[] }) {
  const { items } = useCartStore()
  return (
    <div className="flex w-full flex-col items-center mt-8">
      <button
        onClick={() => console.log(items)}
        className="p-2 bg-primary text-white rounded font-bold my-2"
      >
        See cart
      </button>
      <Tabs aria-label="Options" color="primary" variant="bordered">
        {categories.map((cat) => (
          <Tab
            key={cat.cat_id}
            title={
              <div className="flex items-center space-x-2">
                <div className="h-[30px] w-[30px] flex justify-center items-center">
                  <Image
                    as={NextImage}
                    src={cat.cat_icon}
                    alt="burguer icon"
                    width={20}
                    height={20}
                  />
                </div>
                <span>{cat.cat_name}</span>
              </div>
            }
          >
            <ProductsList products={cat.products} />
          </Tab>
        ))}
      </Tabs>
    </div>
  )
}

export default CategoryList
