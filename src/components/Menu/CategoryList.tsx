'use client'

import CategoryType from '@/types/Category'
import { MehOutlined } from '@ant-design/icons'
import { Tab, Tabs } from '@nextui-org/react'
import Product from './components/Product'

function CategoryList({ categories }: { categories: CategoryType[] }) {
  return (
    <div className="flex w-full flex-col items-center mt-8">
      <Tabs aria-label="Options" color="primary" variant="bordered">
        {categories.map((cat) => (
          <Tab
            key={cat.cat_id}
            title={
              <div className="flex items-center space-x-2">
                <MehOutlined />
                <span>{cat.cat_name}</span>
              </div>
            }
          >
            <div className="p-8 flex-col">
              <div className="flex justify-center gap-4 max-md:flex-col max-md:justify-center py-3">
                {cat.products.map((product) => (
                  <Product product={product} key={product.product_id} />
                ))}
              </div>
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  )
}

export default CategoryList
