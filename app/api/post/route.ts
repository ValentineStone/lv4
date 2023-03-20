import { query } from '@/pg'
import { apiRedirect, log } from '@/utils'
import { NextRequest, NextResponse } from 'next/server'
import { randomBytes } from 'crypto'

const genMutagen = () => new Promise(r => randomBytes(16, (err, buff) => r(buff.toString('hex'))))

const insertPost = async ({ title, content, tags, mutagen }) => await query(
  `INSERT INTO posts (title, content, tags, mutagen) VALUES ($1, $2, $3, crypt($4, gen_salt('bf', 8))) RETURNING id`,
  [title, content, tags.trim(), mutagen]
).then(({ rows }) => rows[0].id)

const updatePost_genMutagen = async ({ title, content, tags, mutagen, post }) => await query(
  `UPDATE posts SET (title, content, tags, mutagen) = ($1, $2, $3, crypt($4, gen_salt('bf', 8))) WHERE id = $5`,
  [title, content, tags.trim(), mutagen, post]
)

const updatePost = async ({ title, content, tags, mutagen, post }) => await query(
  `UPDATE posts SET (title, content, tags) = ($1, $2, $3) WHERE id = $5 AND ($4 = $6 OR mutagen = crypt($4, mutagen))`,
  [title, content, tags.trim(), mutagen, post, process.env.MUTAGEN_OVERRIDE]
).then(({ rowCount }) => { if (!rowCount) throw new Error('Nothing updated') })

export async function POST(req: NextRequest, res: NextResponse) {
  const redirect = apiRedirect(req)
  const formData = await req.formData()
  const fields = Object.fromEntries(formData) as any
  const postId = formData.get('post')

  if (postId === 'new') {
    try {
      const mutagen = await genMutagen()
      const insertedId = await insertPost({ ...fields, mutagen })
      return redirect(`/post/${insertedId}`, { mutagen })
    } catch (error) {
      return redirect(`/post/new/edit`, { error, fields })
    }
  } else {
    try {
      if (fields.mutagen === process.env.MUTAGEN_OVERRIDE) {
        fields.mutagen = await genMutagen()
        await updatePost_genMutagen(fields)
      } else
        await updatePost(fields)
      return redirect(`/post/${postId}`, { mutagen: fields.mutagen })
    } catch (error) {
      return redirect(`/post/${postId}/edit`, { error, fields })
    }
  }
}