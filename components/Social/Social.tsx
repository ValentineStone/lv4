import { cx } from '@/utils'

import viewsSvg from './views.svg'
import commentSvg from './comment.svg'
import repostSvg from './repost.svg'
import likeSvg from './like.svg'
import dislikeSvg from './dislike.svg'

import styles from './Social.module.css'

export const ViewsDisplay = ({ count = 0 }) =>
  <button className={cx(styles.social, 'svgBtn', count ? 'active' : 'inactive')}>
    <img className={styles.viewsSvg} src={viewsSvg.src} />{' '}
    <span>{count}</span>
  </button>

export const CommentsDisplay = ({ count = 0 }) =>
  <button className={cx(styles.social, 'svgBtn', count ? 'active' : 'inactive')}>
    <img className={styles.commentSvg} src={commentSvg.src} />{' '}
    <span>{count}</span>
  </button>

export const RepostDisplay = ({ active = false }) =>
  <button className={cx(styles.social, 'svgBtn', active ? 'active' : 'inactive')}>
    <img className={styles.repostSvg} src={repostSvg.src} />{' '}
  </button>

export const LikesDisplay = ({ count = 0 }) =>
  <button className={cx(styles.social, 'svgBtn', count ? 'active' : 'inactive')}>
    <img className={styles.likeSvg} src={likeSvg.src} />{' '}
    <span>{count}</span>
  </button>

export const DislikesDisplay = ({ count = 0 }) =>
  <button className={cx(styles.social, 'svgBtn', count ? 'active' : 'inactive')}>
    <img className={styles.dislikeSvg} src={dislikeSvg.src} />{' '}
    <span>{count}</span>
  </button>

export const SocialDisplay = ({
  views,
  comments,
  likes,
  dislikes,
}) => (
  <div className="flex duo">
    <div>
      <ViewsDisplay count={views} />
      <CommentsDisplay count={comments} />
      <RepostDisplay />
    </div>
    <div>
      <LikesDisplay count={likes} />
      <DislikesDisplay count={dislikes} />
    </div>
  </div>
)


export const LikesAndDislikesDisplay = ({
  likes,
  dislikes,
}) => (
  <div className="flex">
    <LikesDisplay count={likes} />
    <DislikesDisplay count={dislikes} />
  </div>
)

export const LikeStatus = ({ liked }) => (
  <div className="social">
    {liked
      ? <img className={styles.likeSvg} src={likeSvg.src} />
      : <img className={styles.dislikeSvg} src={dislikeSvg.src} />
    }
  </div>
)

export const LikeButton = ({ gray = false, name, likeValue = "like", dislikeValue = "dislike", defaultValue = null }) => {
  const rand = String(Math.random()).slice(2)
  const idOn = 'radioOn' + rand
  const idOff = 'radioOff' + rand
  return <>
    <label>
      <input type="radio" name={name} value={likeValue} defaultChecked={likeValue === defaultValue} />
      <img className={cx('emSvg svgBtn', { gray })} src={likeSvg.src} />
    </label>
    {' '}
    <label>
      <input type="radio" name={name} value={dislikeValue} defaultChecked={dislikeValue === defaultValue} />
      <img className={cx('emSvg svgBtn', { gray })} src={dislikeSvg.src} />
    </label >
  </>
}