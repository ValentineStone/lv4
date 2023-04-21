import styles from './Hide.module.css'
import { cx, cxInject } from '@/utils'

const makeId = id => 'hide-content-' + id

export const HideButton = ({ id, ...rest }) => (
  <label
    {...rest}
    htmlFor={makeId(id)}
    className={cx(styles['hide-button'], rest)}
  />
)

export const HideContent = ({ id, defaultHidden = false, as: As = 'div' as any, inputProps = null, ...rest }) => (
  <>
    <input
      {...inputProps}
      type="checkbox"
      className={cx(styles['hide-checkbox'], inputProps)}
      id={makeId(id)}
      defaultChecked={defaultHidden}
    />
    <As {...cxInject(rest, styles['hide-content'])} />
  </>
)

export const MobileHide = ({ as: As = 'div' as any, ...rest }) =>
  <As {...cxInject(rest, 'mobile-hide')} />
export const MobileShow = ({ as: As = 'div' as any, ...rest }) =>
  <As {...cxInject(rest, 'mobile-show')} />