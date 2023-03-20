import { cx, cxInject, log } from '@/utils'
import styles from './Button.module.css'

export const Button = ({
  as: As = 'button' as any,
  round = false,
  ...props
}) =>  {
  if (props.href) As = 'a'
  return <As {...cxInject(props, styles.button, { [styles.round]: round })} />
}