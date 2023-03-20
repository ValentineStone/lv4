import { notFound } from 'next/navigation'

import { query } from '@/pg'
import { PostFull } from '@/components/PostFull'
import { log, ltreeNest } from '@/utils'
import { headers } from 'next/headers'
import Inspect from '@/components/Inspect'

export const generateMetadata = async ({ params }) => {
  const post = await getPost(params.id)
  if (!post)
    return notFound()
  else
    return { title: post.title }
}

const getPost = async id => {
  const post = await query(
    'WITH updated AS (UPDATE posts SET views = views + 1 WHERE id = $1 RETURNING *) SELECT * FROM updated',
    [id]
  ).then(({ rows }) => rows[0]).catch(err => null)
  return post
}

const getComments = async id => {
  const comments = await query(
    'SELECT * FROM comments WHERE post = $1',
    [id]
  ).then(({ rows }) => [ltreeNest(rows, 'comments'), rows.length]).catch(err => null)
  return comments
}

export default async ({ params, searchParams }) => {
  const { mutagen } = searchParams
  const post = await getPost(params.id)
  const [comments, commentsCount] = await getComments(params.id)
  if (!post) return notFound()
  const h = headers()

  return (
    <PostFull
      {...post}
      comments={comments}
      commentsCount={commentsCount}
      mutagen={mutagen}
      searchParams={searchParams}
    />
  )
}
