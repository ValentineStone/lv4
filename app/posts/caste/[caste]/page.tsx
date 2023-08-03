
import { Nav } from '@/components/Nav'
import { MainMenu } from '@/components/MainMenu'
import { Main } from '@/components/Main'

export const metadata = {
  title: 'Posts',
}

import { pg } from '@/pg'
import { PostPreview } from '@/components/PostPreview'
import { log, makeQuery } from '@/utils'

const postsPerPage = 10
const postsLinksCount = 1

export default async ({ params, searchParams }) => {
  const caste = decodeURIComponent(params.caste || '').split(',').map(Number)
  const search = searchParams.search ? decodeURIComponent(searchParams.search) : undefined
  const page = +(searchParams.page || 1) - 1
  const limit = postsPerPage
  const offset = page * postsPerPage
  const { rows } = await pg.query(`
    SELECT
      posts.id,
      posts.views,
      posts.title,
      left(posts.content, 500) AS content,
      count(comments.id) AS comments,
      count(comments.attitude) filter (where comments.attitude = '+' and nlevel(comments.id) = 1) AS likes,
      count(comments.attitude) filter (where comments.attitude = '-' and nlevel(comments.id) = 1) AS dislikes,
      count(*) over() AS count
    FROM posts
    LEFT JOIN comments ON
      posts.id = comments.post
    WHERE
      posts.caste = ANY ($1::integer[])
      AND (($2 = '') OR posts.search_tsv @@ websearch_to_tsquery('russian', $2) OR posts.search_tsv @@ websearch_to_tsquery('simple',  $2))
    GROUP BY posts.id
    ORDER BY
      ts_rank(posts.search_tsv, websearch_to_tsquery('russian', $2)) DESC,
      ts_rank(posts.search_tsv, websearch_to_tsquery('simple',  $2)) DESC,
      posts.id DESC
    LIMIT $3 OFFSET $4
  `, [caste, search || '', limit, offset])
    .catch(error => ({ rows: [], error }))

  const pageLink = (page, text?) => ({ href: makeQuery(searchParams, { page: page + 1 }), text: String(text || page + 1) })

  const postsCount = rows[0]?.count || 0
  const pagesCount = Math.ceil(postsCount / postsPerPage - 1)
  const botPage = Math.max(page - postsLinksCount, 0)
  const topPage = Math.min(page + postsLinksCount, pagesCount)
  const pagesLinks = [pageLink(page)]
  let curr
  for (curr = page - 1; curr >= botPage; curr--)
    pagesLinks.unshift(pageLink(curr))
  if (curr >= 0) {
    if (curr - 1 >= 0)
      pagesLinks.unshift({ text: '...', href: null })
    pagesLinks.unshift(pageLink(0))
  }
  for (curr = page + 1; curr <= topPage; curr++)
    pagesLinks.push(pageLink(curr))
  if (curr <= pagesCount) {
    if (curr + 1 <= pagesCount)
      pagesLinks.push({ text: '...', href: null })
    pagesLinks.push(pageLink(pagesCount))
  }
  return <>
    <Nav searchParams={searchParams} />
    <MainMenu />
    <Main>
      {rows.map(post => <PostPreview key={post.id} {...post} />)}
      {!rows.length &&
        <div style={{ textAlign: 'center' }}>
          Постов не найдено
        </div>
      }
      <div style={{ textAlign: 'center' }}>
        {pagesLinks.map(({ href, text }, i) => <><a href={href} key={i}>{text}</a>{' '}</>)}
      </div>
    </Main>
  </>
}
