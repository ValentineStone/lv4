import styles from './MainMenu.module.css'
import { Button } from '@/components/Button'
import { cx } from '@/utils'
import { MobileShow } from './Hide'

export const MainMenu = props => <>
  <input type="checkbox" id="mainmenu-checkbox" defaultChecked className={styles.MainMenuCheckbox} />
  <aside id="menu" className={styles.Aside}>
    <MobileShow>
      <Button href="/post/new/edit" className="mobile-show">
        Опубликовать статью
      </Button>
    </MobileShow>
    <ol>
      <li>Статьи редакции</li>
      <li>Статьи одобренные редакцией</li>
      <li>Песочница</li>
    </ol>
    <div style={{ flexGrow: 1 }}></div>
    <ol className={styles.links}>
      <li><a href={process.env.POST_ID_ABOUT}>О проекте</a></li>
      <li><a href={process.env.POST_ID_HELP}>Справки</a></li>
      <li><a href={process.env.POST_ID_RULES}>Правила</a></li>
      <li><a href={process.env.POST_ID_SUPPORT}>Помощь проекту</a></li>
      <li><a href={process.env.POST_ID_ADMINS}>Администрация</a></li>
      <li className="mobile-show">
        Язык
        <span className="fi fi-ru fis"></span>
      </li>
    </ol>
  </aside>
</>

export const MainMenuHideButton = ({ id, ...rest }) => (
  <label
    {...rest}
    htmlFor="mainmenu-checkbox"
    className={cx(styles['hide-button'], rest.className)}
  />
)