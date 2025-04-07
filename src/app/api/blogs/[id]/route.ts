// app/api/blogs/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ID = searchParams.get("id");

  if (!ID) {
    return NextResponse.json({ error: "Missing post ID" }, { status: 400 });
  }

  try {
    const res = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/discreetnarcotics.wordpress.com/posts/${ID}/`);

    if (!res.ok) {
      throw new Error('Failed to fetch post');
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}
