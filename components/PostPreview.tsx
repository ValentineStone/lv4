import { Button } from './Button'
import Markdown from './Markdown'
import { SocialDisplay } from './Social/Social'

import styled from './Post.module.css'
import { cx } from '@/utils'

export const PostPreview = ({ id, title, content, views, comments, up, dn, likes, dislikes, ...rest }) => (
  <figure className={cx(styled.post, styled.preview)} id={id}>
    <figcaption style={{ fontSize: 'larger' }}>
      {title}
    </figcaption>
    <section className={styled.content}>
      <Markdown raw={content} />
    </section>
    <div className={styled.readMore}>
      <Button href={'/post/' + id}>Читать далее...</Button>
    </div>
    <section>
      <SocialDisplay {...{ views, comments, likes, dislikes }} />
    </section>
  </figure>
)