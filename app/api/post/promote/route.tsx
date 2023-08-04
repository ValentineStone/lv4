import { pg } from '@/pg'
import { apiRedirect, genMutagen, log } from '@/utils'
import { NextRequest, NextResponse } from 'next/server'

const promotePost = async ({ post, mutagen }) => await pg.query(
  `UPDATE posts SET caste = caste + 1 WHERE id = $1 AND caste < 4 AND ($2 = $3 OR mutagen = crypt($2, mutagen))`,
  [post, mutagen, process.env.MUTAGEN_OVERRIDE]
).then(({ rowCount }) => { if (!rowCount) throw new Error('Nothing updated') })

export async function GET(req: NextRequest, res: NextResponse) {
  console.log(req)
  const redirect = apiRedirect(req)
  const post = req.nextUrl.searchParams.get('post')
  const mutagen = req.nextUrl.searchParams.get('mutagen')
  try {
    await promotePost({ post, mutagen })
    return redirect(`/post/${post}`)
  } catch (error) {
    return redirect(`/post/${post}`, { error })
  }
}