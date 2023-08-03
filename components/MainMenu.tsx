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
    <ol className={styles.linksCategories}>
      <li><a href="/posts/caste/4">Статьи редакции</a></li>
      <li><a href="/posts/caste/3">Статьи одобренные редакцией</a></li>
      <li><a href="/posts/caste/1,2">Бездна</a></li>
      <li><br/></li>
      <li><a href="/posts/caste/4">Брахманы</a></li>
      <li><a href="/posts/caste/3">Кшатрии</a></li>
      <li><a href="/posts/caste/2">Вайшьи</a></li>
      <li><a href="/posts/caste/1">Шудры</a></li>
      <li><a href="/posts/caste/0">Неприкасаемые</a></li>
      <li><br/></li>
      <li><a href="/posts/caste/0,1,2,3,4">Все</a></li>
    </ol>
    <div style={{ flexGrow: 1 }}></div>
    <ol className={styles.linksAbout}>
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