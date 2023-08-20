import React from 'react'
import { Button } from '@nextui-org/react'
import { BurguerIcon } from './Icons'

interface CatProps {
  label: string
  icon?: React.JSX.Element
}

const Category = ({ /* icon, */ label }: CatProps) => {
  return (
    <Button startContent={<BurguerIcon />} className="w-32" variant="ghost">
      {label}
    </Button>
  )
}

export default Category
