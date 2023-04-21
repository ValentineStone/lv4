import { Button } from './Button'
import Markdown from './Markdown'
import { SocialButtons } from './Social/Social'

import styled from './Post.module.css'
import { cx } from '@/utils'

export const PostPreview = ({ id, title, content, views, comments, up, dn, ...rest }) => (
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
      <SocialButtons {...{ views, comments, likes: up, dislikes: dn }} />
    </section>
  </figure>
)