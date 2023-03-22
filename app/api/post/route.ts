import { pg } from '@/pg'
import { apiRedirect, genMutagen, log } from '@/utils'
import { NextRequest, NextResponse } from 'next/server'

const insertPost = async ({ title, content, tags, mutagen }) => await pg.query(
  `INSERT INTO posts (title, content, tags, mutagen) VALUES ($1, $2, $3, crypt($4, gen_salt('bf', 8))) RETURNING id`,
  [title, content, tags.trim(), mutagen]
).then(({ rows }) => rows[0].id)

const updatePost = async ({ title, content, tags, mutagen, post }) => await pg.query(
  `UPDATE posts SET (title, content, tags) = ($1, $2, $3) WHERE id = $5 AND ($4 = $6 OR mutagen = crypt($4, mutagen))`,
  [title, content, tags.trim(), mutagen, post, process.env.MUTAGEN_OVERRIDE]
).then(({ rowCount }) => { if (!rowCount) throw new Error('Nothing updated') })

export async function POST(req: NextRequest, res: NextResponse) {
  const redirect = apiRedirect(req)
  const formData = await req.formData()
  const fields = Object.fromEntries(formData) as any
  const postId = formData.get('post')

  try {
    if (postId === 'new') {
      const mutagen = await genMutagen()
      const insertedId = await insertPost({ ...fields, mutagen })
      return redirect(`/post/${insertedId}`, { mutagen })
    } else {
      await updatePost(fields)
      return redirect(`/post/${postId}`, { mutagen: fields.mutagen })
    }
  } catch (error) {
    return redirect(`/post/${postId}/edit`, { error, fields })
  }
}