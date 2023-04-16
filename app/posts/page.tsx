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

export default async props => {
  const rows = await pg.query(`
      SELECT
        posts.id,
        posts.up,
        posts.dn,
        posts.views,
        posts.title,
        left(posts.content, 150) AS content,
        count(comments.id) AS comments
      FROM posts
      LEFT JOIN comments ON
        posts.id = comments.post
      WHERE ($1 AND posts.caste = $1)
      GROUP BY posts.id
    `, [+props.searchParams.caste])
    .then(({ rows }) => rows)
    .catch(err => log([], err))

    return rows.map(post =><PostPreview key={post.id} {...post} />)
}
