import { cx, cxInject } from '@/utils'
import styles from './Main.module.css'

export const Main = props => <main {...cxInject(props, styles.Main)} />