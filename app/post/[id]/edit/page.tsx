import { notFound } from 'next/navigation'
import { pg } from '@/pg'
import EditPost from '@/components/EditPost'

export const generateMetadata = async ({ params }) => {
  if (params.id === 'new')
    return { title: 'Новый пост' }

  const post = await getPost(params.id)

  if (!post)
    return notFound()
  else
    return { title: post.title }
}

const getPost = async id => await pg.query(
  'SELECT * FROM posts WHERE id = $1',
  [id]
).then(({ rows }) => rows[0]).catch(err => null)

export default async ({ params, searchParams }) => {
  const { mutagen } = searchParams
  let post = {}

  if (searchParams.error && searchParams.fields)
    post = JSON.parse(searchParams.fields)
  else if (params.id !== 'new')
    post = await getPost(params.id) || {}
  return <>
    {searchParams.error && <h1 style={{ color: 'red' }}>{searchParams.error}</h1>}
    <EditPost id={params.id} post={post} mutagen={mutagen} />
  </>
}
