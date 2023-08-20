import { BurguerIcon, DrinkIcon, PizzaIcon } from '../components/Icons'

const categories = [
  {
    id: 1,
    label: 'Burger',
    icon: <BurguerIcon />,
    selected: true,
  },
  {
    id: 2,
    label: 'Pizza',
    icon: <PizzaIcon />,
    selected: false,
  },
  {
    id: 3,
    label: 'Drinks',
    icon: <DrinkIcon />,
    selected: false,
  },
]

export default categories
