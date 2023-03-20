import Inspect from './Inspect'
import styles from './Nav.module.css'
import { Button } from './Button'
import { MainMenuHideButton } from '@/components/MainMenu'
import { MobileHide, MobileShow } from './Hide'


export const Nav = props => (
  <nav className={styles.nav}>
    <a href="/">
      <img className={styles.logo} src="/logo.png" />
    </a>
    <div>
      <input className={styles.search} placeholder="Поиск" />
    </div>
    <div>
      {!props.editpost &&
        <MobileHide>
          <Button href="/post/new/edit" className={`${styles.button} mobile-hide`}>
            Опубликовать статью
          </Button>
        </MobileHide>
      }
      <MobileHide>
        <Button round className={`${styles.button} mobile-hide`}>
          <span style={{ borderRadius: '2em', margin: '0 0.1em' }} className="fi fi-ru fis"></span>
        </Button>
      </MobileHide>
      <MobileShow>
        <Button as={MainMenuHideButton} id="menu" className={styles.button}>
          Меню
        </Button>
      </MobileShow>
    </div>
  </nav>
)