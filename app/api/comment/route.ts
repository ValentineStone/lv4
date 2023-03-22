import { pg } from '@/pg'
import { apiRedirect, log, genMutagen } from '@/utils'
import { headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

const insertPostReply = async ({ post, content, mutagen, ...rest }) => await pg.query(`
  INSERT
  INTO comments (
    id,
    post,
    content,
    mutagen
  ) VALUES (
    (SELECT
      (count(*) + 1)::text::ltree
      FROM comments AS child
      WHERE child.post = $1 AND child.id ~ '*{1}'
    ),
    $1, $2, crypt($3, gen_salt('bf', 8))
  ) RETURNING id
  `, [post, content, mutagen]
).then(({ rows }) => rows[0])

const insertCommentReply = async ({ post, content, mutagen, id }) => await pg.query(`
  INSERT
  INTO comments (
    id,
    post,
    content,
    mutagen
  ) VALUES (
    (SELECT
      ($1::text::ltree || (count(*) + 1)::text::ltree)
      FROM comments AS child
      WHERE child.post = $2 AND child.id ~ ($1::text || '.*{1}')::lquery
    ),
    $2, $3, crypt($4, gen_salt('bf', 8))
  ) RETURNING id
  `, [id, post, content, mutagen]
).then(({ rows }) => rows[0])

const updateComment = async ({ post, content, mutagen, id }) => await pg.query(`
  UPDATE comments
  SET content = $3
  WHERE id = $1 AND post = $2 AND ($4 = $5 OR mutagen = crypt($4, mutagen))
  RETURNING id
  `, [id, post, content, mutagen, process.env.MUTAGEN_OVERRIDE]
).then(({ rowCount }) => { if (!rowCount) throw new Error('Nothing updated') })

export async function POST(req: NextRequest, res: NextResponse) {
  const redirect = apiRedirect(req)
  const formData = await req.formData()
  const fields = Object.fromEntries(formData) as any
  try {
    if (fields.reply === 'true') {
      const mutagen = await genMutagen()
      const action = fields.id ? insertCommentReply : insertPostReply
      const reply = await action({ ...fields, mutagen })
      return redirect(
        `/post/${fields.post}`,
        { mutagen, mutagenForComment: reply?.id },
        reply?.id
      )
    } else {
      await updateComment(fields)
      return redirect(
        `/post/${fields.post}`,
        { mutagen: fields.mutagen, mutagenForComment: fields.id },
        fields.id
      )
    }
  } catch (error) {
    return redirect(
      `/post/${fields.post}`,
      { error, fields },
      fields.id
    )
  }
}