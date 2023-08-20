import React from 'react'
import { Button } from '@nextui-org/react'

interface CatProps {
  label: string
  icon: React.JSX.Element
  selected: boolean
}

const Category = ({ icon, label, selected }: CatProps) => {
  return (
    <Button
      startContent={icon}
      className={`w-32 ${
        selected ? 'bg-primary text-white' : 'bg-white'
      }  shadow-md`}
    >
      {label}
    </Button>
  )
}

export default Category
