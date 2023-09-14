'use client'

import { Button } from '@nextui-org/react'
interface CatProps {
  label: string
  icon?: React.JSX.Element
}

const Category = ({ icon, label }: CatProps) => {
  return (
    <Button startContent={icon} className="w-32" variant="ghost">
      {label}
    </Button>
  )
}

export default Category
