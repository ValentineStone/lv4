import { Button } from './Button'
import styled from './Post.module.css'
import Textarea from './Textarea'

export default function EditPost({ id, post, mutagen }) {
  return (
    <form action="/api/post" method="post" id="editpost">
      <figure className={styled.post}>
        <figcaption style={{ marginBottom: '3rem' }}>
          <input
            className="block"
            name="title"
            placeholder="Введите заголовок..."
            defaultValue={post.title}
            autoComplete="off"
          />
        </figcaption>
        <section>
          <Textarea name="content" placeholder="Введите текст статьи..." style={{ minHeight: 400 }} defaultValue={post.content} />
          <input
            className="block"
            name="tags"
            placeholder="Добавьте хэшэги..."
            style={{ margin: '1rem 0' }}
            defaultValue={(post.tags || '').trim()}
            autoComplete="off"
          />
          {mutagen &&
            <input type="hidden" name="mutagen" defaultValue={mutagen} />
          }
          <input type="hidden" name="post" defaultValue={id} />
        </section>
      </figure>
      <Button style={{ margin: '0 auto', display: 'block', fontSize: '1.5rem', marginTop: '2rem' }}>
        {id === 'new' ? 'Опубликовать' : 'Редактировать'}
      </Button>
    </form>
  )
}
