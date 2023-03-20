import { Button } from './Button'
import Markdown from './Markdown'
import { SocialButtons } from './Social/Social'

import styled from './Post.module.css'
import { cx } from '@/utils'
import { ReplyForm, Comment } from './Comments'
import EditLinkMessage from './EditLinkMessage'

export const PostFull = ({ id, title, content, views, comments = {}, commentsCount, up, dn, deleted, tags, mutagen, searchParams }) => (
  <figure className={styled.post}>
    <figcaption style={{ fontSize: 'larger' }}>
      {title}
    </figcaption>
    {!!mutagen && <EditLinkMessage mutagen={mutagen} id={id} />}
    <section className={styled.content}>
      {!deleted && <>
        <a className="clear DEV" style={{ float: 'right' }} href={`/post/${id}/edit?mutagen=${mutagen || process.env.MUTAGEN_OVERRIDE}`}>✏️</a>
      </>}
      <Markdown raw={content} />
    </section>
    <section className={styled.tags}>
      {!!tags && tags.trim().split(' ').map((tag, i) =>
        <a key={i} className="clear" href="#">#{tag}</a>
      )}
    </section>
    <section>
      <SocialButtons {...{ views, comments: commentsCount, likes: up, dislikes: dn }} />
    </section>
    <ReplyForm post={id} reply />
    <section className={styled.comments}>
      {Object.values<any>(comments).map((comment, i) =>
        <Comment {...comment} searchParams={searchParams} />
      )}
    </section>
  </figure>
)