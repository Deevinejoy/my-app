// app/api/blogs/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '1';
    const perPage = searchParams.get('per_page') || '6';
    
    // WordPress.com API endpoint for posts
    const res = await fetch(
      `https://public-api.wordpress.com/rest/v1.1/sites/discreetnarcotics.wordpress.com/posts?page=${page}&number=${perPage}`
    );

    if (!res.ok) {
      console.error(`Failed to fetch posts: ${res.statusText}`);
      throw new Error(`Failed to fetch posts: ${res.statusText}`);
    }

    const data = await res.json();
    
    // Create a response with pagination headers
    const response = NextResponse.json(data.posts);
    
    // Add pagination headers
    response.headers.set('X-WP-Total', data.found?.toString() || '0');
    response.headers.set('X-WP-TotalPages', Math.ceil((data.found || 0) / Number(perPage)).toString());
    
    return response;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}