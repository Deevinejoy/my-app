// app/api/blogs/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://public-api.wordpress.com/rest/v1.1/sites/discreetnarcotics.wordpress.com/posts/');
    
    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }

    const data = await res.json();
    
    // Return the posts data
    return NextResponse.json(data.posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
