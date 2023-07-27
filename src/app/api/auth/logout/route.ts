import { NextRequest, NextResponse } from 'next/server'

// export const dynamic = 'force_static'

export async function GET(request: NextRequest) {
  const redirectURL = new URL('/', request.nextUrl)

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=; Path=/; max-age=0`,
    },
  })
}
