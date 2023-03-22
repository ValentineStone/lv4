import { cx, jsonParse, log, toLocaleStringRu } from '@/utils'
import Markdown from './Markdown'
import { CommentsButton, LikesButtons, SocialButtons } from './Social/Social'
import { Status } from './Status'
import Textarea from './Textarea'
import styles from './Post.module.css'
import { Button } from './Button'
import Inspect from './Inspect'
import EditLinkMessage from './EditLinkMessage'

export const ReplyForm = ({ id = null, post = null, reply = false, content = '', mutagen = '' }) =>
  <section className={styles['write-comment']}>
    <form method="post" action="/api/comment">
      <Textarea name="content" placeholder={mutagen ? 'Редактировать...' : 'Написать ответ...'} defaultValue={content} />
      <input name="post" hidden defaultValue={post} />
      <input name="reply" hidden defaultValue={String(reply)} />
      {!!id && <input name="id" hidden defaultValue={id} />}
      {!!mutagen && <input name="mutagen" hidden defaultValue={mutagen} />}
      <div className="flex duo">
        <div>
          <img src="/attach-file.svg" />{' '}
          <img src="/attach-image.svg" />
        </div>
        <div>
          <Button className={styles['post-comment']}>
            {mutagen ? 'Редактировать' : 'Отправить'}
          </Button>
        </div>
      </div>
    </form>
  </section>

export const Comment = ({ id, post, content, comments = {}, up, dn, time, deleted, searchParams, ...rest }) => {
  const comments_array = Object.values<any>(comments)

  return (
    <div className={styles.comment} id={id}>
      <div className="flex duo">
        <div className={cx(styles.info, 'flex')}>
          <div><a className="clear" href={'#' + id}>#{id}</a></div>
          <div title={toLocaleStringRu(time)} className={styles.datetime}>
            {toLocaleStringRu(time)}
          </div>
        </div>
        <div className="flex">
          {!deleted && <>
            <a className="clear DEV" href={`/ADMIN/DELETE_COMMENT/${post}/${id}`}>🗑️</a>
            <a className="clear DEV" href={`?mutagen=${process.env.MUTAGEN_OVERRIDE}&editComment=${id}#${id}`}>✏️</a>
          </>}
          <LikesButtons likes={up} dislikes={dn} />
        </div>
      </div>
      {(id === searchParams.editComment)
        ? <ReplyForm post={post} id={id} content={content} mutagen={searchParams.mutagen} />
        : (
          <div className={styles.content}>
            {deleted
              ? <div className="disabled">[комментарий удален]</div>
              : <Markdown raw={content} />
            }
          </div>
        )
      }
      {id === searchParams.replyTo &&
        <ReplyForm post={post} id={searchParams.replyTo} reply />
      }
      {id === searchParams.mutagenForComment &&
        <EditLinkMessage post={post} comment={id} mutagen={searchParams.mutagen} />
      }
      <div className={styles.actions}>
        <a className="clear" href={`?replyTo=${id}#${id}`}>Ответить</a>
        <a className="clear">Пожаловаться</a>
      </div>
      <div className={styles.comments}>
        {comments_array.map((reply, i) =>
          <div className={styles.reply} key={reply.id}>
            <Comment {...reply} searchParams={searchParams} />
          </div>
        )}
      </div>
    </div >
  )
}