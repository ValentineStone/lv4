import Inspect from '@/components/Inspect'
import Head from 'next/head'

export const metadata = {
  title: 'Posts',
}

import { pg } from '@/pg'
import Markdown from '@/components/Markdown'
import { Fragment } from 'react'
import { Button } from '@/components/Button'
import { PostPreview } from '@/components/PostPreview'
import { log } from '@/utils'



export default async ({searchParams}) => {
  let caste = isNaN(searchParams.caste) ? null : +searchParams.caste
  const hasCaste = caste !== null
  const rows = await pg.query(`
    SELECT
      posts.id,
      posts.up,
      posts.dn,
      posts.views,
      posts.title,
      left(posts.content, 500) AS content,
      count(comments.id) AS comments
    FROM posts
    LEFT JOIN comments ON
      posts.id = comments.post
    ${hasCaste ? 'WHERE $1::integer = posts.caste' : ''}
    GROUP BY posts.id
  `, hasCaste ? [caste] : undefined)
    .then(({ rows }) => rows)
    .catch(err => log([], err))
    return rows.map(post =><PostPreview key={post.id} {...post} />)
}
