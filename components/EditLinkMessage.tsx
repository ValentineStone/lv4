import { makeUrl } from '@/utils'

export default function EditLinkMessage({ post, comment = undefined, mutagen }) {
  const editUrl = String(makeUrl(
    `/post/${post}${comment ? '' : '/edit'}`,
    { editComment: comment, mutagen },
    comment
  ))

  return (
    <section>
      <div className="highlight">
        <a className="clear" style={{ float: 'right', fontSize: 'small' }} href="?">❌</a>
        <small>Ваша ссылка на редактирование:</small>
        <div className="flex" style={{ alignItems: 'center', fontSize: '0.7em', wordBreak: 'break-all' }}>
          <a className="copyable long-link" href={editUrl}>{editUrl}</a>
        </div>
      </div>
    </section>
  )
}