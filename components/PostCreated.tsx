import { Button } from './Button'
import Markdown from './Markdown'
import { SocialButtons } from './Social/Social'

import styled from './Post.module.css'
import { cx } from '@/utils'
import { ReplyForm, Comment } from './Comments'
import EditLinkMessage from './EditLinkMessage'

export const PostFull = ({ id }) => (
  <figure className={styled.post}>
    <figcaption style={{ fontSize: 'larger' }}>
      Готово!
    </figcaption>
    <section className={styled.content}>
      Ваша статья отправленна на премодерацию.
      Для управления и редактирования вашей статьи возспользуйтесь следующей ссылкой:
    </section>
  </figure>
)