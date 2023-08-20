import Category from './components/Category'
import api from '@/api/serviceFactory'
import categories from './utils/categories'

interface CategoryType {
  id: number
  name: string
}

async function getCategories() {
  const request = await api.get('/category/all')
  const { data } = request.data
  const categories: CategoryType[] = data
  return categories
}

async function CategoryList() {
  const categories = await getCategories()
  return (
    <div className="flex justify-center gap-4 p-2 mt-2 overflow-auto">
      {categories.map((cat: CategoryType) => {
        return <Category key={cat.id} /* icon={} */ label={cat.name} />
      })}
    </div>
  )
}

export default CategoryList
