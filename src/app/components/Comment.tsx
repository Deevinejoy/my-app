'use client';

import { useEffect, useState } from 'react';

interface Comment {
  ID: number;
  author: {
    name: string;
  };
  content: string;
  date: string;
}

interface CommentsProps {
  postId: number;
}

export default function Comments({ postId }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comments?postId=${postId}`);
        if (!res.ok) throw new Error(`Error fetching comments: ${res.statusText}`);
        const data = await res.json();
        setComments(data.comments); // Correctly access `comments` array
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [postId]);

  if (loading) return <p>Loading comments...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.ID} className="comment">
            <p>
              <strong>{comment.author?.name || 'Anonymous'}</strong> on{' '}
              {new Date(comment.date).toLocaleDateString()}
            </p>
            <div
              className="comment-content"
              dangerouslySetInnerHTML={{ __html: comment.content }}
            />
          </div>
        ))
      )}
    </div>
  );
}
