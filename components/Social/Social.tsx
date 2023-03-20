import { cx } from '@/utils'

import viewsSvg from './views.svg'
import commentSvg from './comment.svg'
import repostSvg from './repost.svg'
import likeSvg from './like.svg'
import dislikeSvg from './dislike.svg'

import styles from './Social.module.css'

export const ViewsButton = ({ count = 0 }) =>
  <button className={cx(styles.social, { [styles.active]: count })}>
    <img className={styles.viewsSvg} src={viewsSvg.src} />{' '}
    <span>{count}</span>
  </button>

export const CommentsButton = ({ count = 0 }) =>
  <button className={cx(styles.social, { [styles.active]: count })}>
    <img className={styles.commentSvg} src={commentSvg.src} />{' '}
    <span>{count}</span>
  </button>

export const RepostButton = ({ active = false }) =>
  <button className={cx(styles.social, { [styles.active]: active })}>
    <img className={styles.repostSvg} src={repostSvg.src} />{' '}
  </button>

export const LikesButton = ({ count = 0 }) =>
  <button className={cx(styles.social, { [styles.active]: count })}>
    <img className={styles.likeSvg} src={likeSvg.src} />{' '}
    <span>{count}</span>
  </button>

export const DislikesButton = ({ count = 0 }) =>
  <button className={cx(styles.social, { [styles.active]: count })}>
    <img className={styles.dislikeSvg} src={dislikeSvg.src} />{' '}
    <span>{count}</span>
  </button>

export const SocialButtons = ({
  views,
  comments,
  likes,
  dislikes,
}) => (
  <div className="flex duo">
    <div>
      <ViewsButton count={views} />
      <CommentsButton count={comments} />
      <RepostButton />
    </div>
    <div>
      <LikesButton count={likes} />
      <DislikesButton count={dislikes} />
    </div>
  </div>
)


export const LikesButtons = ({
  likes,
  dislikes,
}) => (
  <div className="flex">
    <LikesButton count={likes} />
    <DislikesButton count={dislikes} />
  </div>
)

export const LikeStatus = ({ liked }) =>
  <div className="social">
    {liked
      ? <img className={styles.likeSvg} src="/static/like.svg" />
      : <img className={styles.dislikeSvg} src="/static/dislike.svg" />
    }
  </div>