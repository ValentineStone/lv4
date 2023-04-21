import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, res: NextResponse) {
  const url = new URL('/', req.url)
  url.searchParams.set('from', req.url)
  return NextResponse.redirect(url)
}