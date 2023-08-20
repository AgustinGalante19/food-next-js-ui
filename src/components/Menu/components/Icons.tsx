import Icon from '@ant-design/icons/lib/components/Icon'
import BurguerSVG from '../svg/Burguer'
import DrinkSVG from '../svg/Drink'
import PizzaSVG from '../svg/Pizza'

export const BurguerIcon = (props: any) => (
  <Icon {...props} component={BurguerSVG} />
)
export const PizzaIcon = (props: any) => (
  <Icon {...props} component={PizzaSVG} />
)
export const DrinkIcon = (props: any) => (
  <Icon {...props} component={DrinkSVG} />
)
