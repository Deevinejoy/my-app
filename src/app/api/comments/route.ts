import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const postId = searchParams.get('postId'); // Extract postId from the query string

    if (!postId) {
      console.error('No postId provided');
      return NextResponse.json({ error: 'Post ID is required' }, { status: 400 });
    }

    const res = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/discreetnarcotics.wordpress.com/comments/?post=${postId}`);

    if (!res.ok) {
      console.error(`Failed to fetch comments: ${res.statusText}`);
      throw new Error(`Failed to fetch comments: ${res.statusText}`);
    }

    const data = await res.json();
    console.log('Fetched comments:', data);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// export async function POST(req: NextRequest) {
//   try {
//     const commentData = await req.json();

//     const res = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/discreetnarcotics.wordpress.com/posts/${post_ID}/replies/new`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         // Add auth if needed
//       },
//       body: JSON.stringify(commentData),
//     });

//     if (!res.ok) {
//       const errorText = await res.text();
//       console.error('WordPress error:', errorText);
//       return NextResponse.json(
//         { message: `Failed to submit comment: ${errorText}` },
//         { status: res.status }
//       );
//     }

//     const data = await res.json();
//     return NextResponse.json(data);
//   } catch (error: any) {
//     console.error('Error submitting comment:', error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
export async function POST(req: Request) {
  try {
    // Parse incoming request body
    const { postId, authorName, authorEmail, content } = await req.json();

    console.log('Received comment data:', { postId, authorName, authorEmail, content });

    // Ensure all required data is present
    if (!postId || !authorName || !authorEmail || !content) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create form data for WordPress submission
    const formData = new FormData();
    formData.append('comment_post_ID', postId.toString());
    formData.append('comment_parent', '0'); // Top-level comment
    formData.append('author', authorName);
    formData.append('email', authorEmail);
    formData.append('comment', content);

    // Log form data for debugging
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    const res = await fetch('https://discreetnarcotics.wordpress.com/wp-comments-post.php', {
      method: 'POST',
      body: formData,
    });

    console.log('Response from WordPress:', res.status);

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Failed to submit comment:', errorText);
      throw new Error(`Failed to submit comment: ${errorText}`);
    }

    return NextResponse.json({ message: 'Comment submitted for review' });
  } catch (error) {
    console.error('Error submitting comment:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
