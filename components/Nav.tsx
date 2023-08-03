import Inspect from './Inspect'
import styles from './Nav.module.css'
import { Button } from './Button'
import { MainMenuHideButton } from '@/components/MainMenu'
import { MobileHide, MobileShow } from './Hide'


export const Nav = ({ editpost = null, searchParams, searchUrl = null }) => (
  <nav className={styles.nav}>
    <a href="/">
      <img className={styles.logo} src="/logo.png" />
    </a>
    <form action={searchUrl}>
      <input className={styles.search} placeholder="Поиск" name="search" defaultValue={searchParams.search || ''} />
      {!!searchParams.search &&
        <a href="?" className={styles.searchClear}>
          <img className="svgBtn emSvg" src="/cancel.svg" />
        </a>
      }
      <input type="submit" style={{ display: 'none' }} />
    </form>
    <div>
      {!editpost &&
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