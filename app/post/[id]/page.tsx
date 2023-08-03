import { notFound } from 'next/navigation'

import { pg } from '@/pg'
import { PostFull } from '@/components/PostFull'
import { log, ltreeNest } from '@/utils'
import { headers } from 'next/headers'
import Inspect from '@/components/Inspect'
import { cache } from 'react'

import { Nav } from '@/components/Nav'
import { MainMenu } from '@/components/MainMenu'
import { Main } from '@/components/Main'

const commentsPerPage = 50

export const generateMetadata = async ({ params }) => {
  const post = await getPost(params.id)
  if (!post)
    return notFound()
  else
    return { title: post.title }
}

const getPost = cache(async id => {
  const post = await pg.query(
    'WITH updated AS (UPDATE posts SET views = views + 1 WHERE id = $1 RETURNING *) SELECT * FROM updated',
    [id]
  ).then(({ rows }) => rows[0]).catch(err => null)
  return post
})

const calcAttitudes = (comment) => {
  comment.likes = 0
  comment.dislikes = 0
  for (const id in comment.comments) {
    if (comment.comments[id].attitude === '+')
      comment.likes++
    else if (comment.comments[id].attitude === '-')
      comment.dislikes++
    if (comment.comments[id].comments)
      calcAttitudes(comment.comments[id])
  }
}

const getComments = async (id, limit) => {
  const comments = await pg.query(
    `SELECT count(post) over(), * FROM comments WHERE post = $1 LIMIT $2`,
    [id, limit]
  ).then(({ rows, ...rest }) => {
    const postComments = {
      comments: ltreeNest(rows, 'comments'),
      loadedAllComments: rows.length === rows[0].count,
      lastCommentId: rows[rows.length - 1].id
    }
    calcAttitudes(postComments)
    return {
      ...postComments,
      commentsCount: rows.length,
    }
  }).catch(err => ({ comments: [], commentsCount: 0, likes: 0, dislikes: 0, loadedAllComments: true }))
  return comments
}

export default async ({ params, searchParams }) => {
  const { mutagen, limit = 100 } = searchParams
  const post = await getPost(params.id)
  const comments = await getComments(params.id, limit)
  if (!post) return notFound()
  const h = headers()

  return <>
    <Nav searchParams={searchParams} searchUrl="/posts" />
    <MainMenu />
    <Main>
      {searchParams.error && <h1 style={{ color: 'red' }}>{searchParams.error}</h1>}
      <PostFull
        {...post}
        {...comments}
        mutagen={mutagen}
        searchParams={searchParams}
      />
    </Main>
  </>
}
