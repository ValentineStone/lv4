import { query } from '@/pg'
import { apiRedirect, log } from '@/utils'
import { headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

const insertPostReply = async ({ post, content, ...rest }) => await query(`
  INSERT
    INTO comments (
      id,
      post,
      content
    ) VALUES (
      (SELECT
        (count(*) + 1)::text::ltree
        FROM comments AS child
        WHERE child.post = $1 AND child.id ~ '*{1}'
      ),
      $1, $2
    ) RETURNING *`,
  [post, content]
).then(({ rows }) => rows[0])

const insertCommentReply = async ({ replyToId, post, content }) => await query(`
  INSERT
    INTO comments (
      id,
      post,
      content
    ) VALUES (
      (SELECT
        ($1::text::ltree || (count(*) + 1)::text::ltree)
        FROM comments AS child
        WHERE child.post = $2 AND child.id ~ ($1::text || '.*{1}')::lquery
      ),
      $2, $3
    ) RETURNING *`,
  [replyToId, post, content]
).then(({ rows }) => rows[0])

export async function POST(req: NextRequest, res: NextResponse) {
  const formData = await req.formData()
  const request = {
    url: req.url,
    body: Object.fromEntries(formData)
  }
  const postId = formData.get('post')
  if (formData.get('reply') === 'true') {
    const replyTo = formData.get('id')
    const replyData = await (replyTo ? insertCommentReply : insertPostReply)({
      replyToId: formData.get('id'),
      post: formData.get('post'),
      content: formData.get('content'),
    })
    return apiRedirect(req)(
      `/post/${postId}`,
      {  },
      replyData?.id
    )
  } else {
    const commentId = formData.get('id')
    return apiRedirect(req)(
      `/post/${postId}`,
      { request, editComment: commentId },
      commentId
    )
  }
}