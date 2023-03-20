import { headers } from 'next/headers'

export default function EditLinkMessage({ id, mutagen }) {
  const url = new URL(`/post/${id}/edit`, 'http://' + headers().get('host'))
  url.searchParams.set('mutagen', mutagen)

  return (
    <section>
      <div className="highlight">
        <a className="clear" style={{ float: 'right', fontSize: 'small' }} href="?">❌</a>
        <small>Ваша ссылка на редактирование:</small>
        <div className="flex" style={{ alignItems: 'center', fontSize: '0.7em' }}>
          <a className="copyable long-link" href={String(url)}>{String(url)}</a>
        </div>
      </div>
    </section>
  )
}