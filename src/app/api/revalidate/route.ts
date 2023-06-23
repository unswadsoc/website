import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
 
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    if (data.secret !== process.env.REVALIDATE_TOKEN) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
    }
  } catch {
    return NextResponse.json({ message: 'Invalid request' }, { status: 400 })
  }

  const path = request.nextUrl.searchParams.get('path') || '/'
  revalidatePath(path)

  return NextResponse.json({ revalidated: true })
}
