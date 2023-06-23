import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
 
export async function GET(request: NextRequest) {
  if (request.nextUrl.searchParams.get('token') !== process.env.REVALIDATE_TOKEN) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
  }

  const path = request.nextUrl.searchParams.get('path') || '/'
  revalidatePath(path)

  return NextResponse.json({ revalidated: true, now: Date.now() })
}
