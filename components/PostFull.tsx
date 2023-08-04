import { Button } from './Button'
import Markdown from './Markdown'
import { SocialDisplay } from './Social/Social'

import styled from './Post.module.css'
import { cx } from '@/utils'
import { ReplyForm, Comment } from './Comments'
import EditLinkMessage from './EditLinkMessage'
import { Fragment } from 'react'

export const PostFull = ({ id, title, content, views, comments = {}, commentsCount, up, dn, deleted, tags, mutagen, searchParams, likes, dislikes, loadedAllComments, lastCommentId, caste }) => (
  <figure className={styled.post}>
    <figcaption style={{ fontSize: 'larger' }}>
      {title}
    </figcaption>
    {!!mutagen && !searchParams.mutagenForComment && !searchParams.editComment &&
      <EditLinkMessage mutagen={mutagen} post={id} />
    }
    <section className={styled.content}>
      {!deleted && <>
        {caste < 4 &&
          <a className="clear DEV" style={{ float: 'right' }} href={`/api/post/promote?post=${id}&mutagen=${mutagen || process.env.MUTAGEN_OVERRIDE}`}>{caste}🆙</a>
        }
        <a className="clear DEV" style={{ float: 'right' }} href={`/post/${id}/edit?mutagen=${mutagen || process.env.MUTAGEN_OVERRIDE}`}>✏️</a>
      </>}
      <Markdown raw={content} />
    </section>
    <section className={styled.tags}>
      {!!tags && tags.trim().split(' ').map((tag, i) =>
        <Fragment key={tag}><a className="clear" href="#">#{tag}</a>{' '}</Fragment>
      )}
    </section>
    <section>
      <SocialDisplay {...{ views, comments: commentsCount, likes, dislikes }} />
    </section>
    <ReplyForm post={id} reply />
    <section className={styled.comments}>
      {Object.values<any>(comments).map((comment, i) =>
        <Comment key={comment.id} {...comment} searchParams={searchParams} />
      )}
      {!loadedAllComments && <a className={styled.loadMore} href={"?limit=" + (+(searchParams.limit || 0) + 100) + '#' + lastCommentId}>Загрузить ещё</a>}
    </section>
  </figure>
)