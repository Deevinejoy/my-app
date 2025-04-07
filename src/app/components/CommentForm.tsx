// 'use client';

// import { useState } from 'react';

// interface CommentFormProps {
//   postId: number;
// }

// export default function CommentForm({ postId }: CommentFormProps) {
//   const [authorName, setAuthorName] = useState('');
//   const [authorEmail, setAuthorEmail] = useState('');
//   const [content, setContent] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const commentData = {
//       postId,
//       authorName,
//       authorEmail,
//       content,
//     };

//     const res = await fetch('/api/comments', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(commentData),
//     });

//     if (res.ok) {
//       alert('Comment submitted for review');
//       setAuthorName('');
//       setAuthorEmail('');
//       setContent('');
//     } else {
//       const error = await res.json();
//       alert(`Failed to submit comment: ${error.message || 'Unknown error'}`);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-3">
//       <h3 className="text-xl font-semibold">Leave a Comment</h3>
//       <input
//         type="text"
//         placeholder="Your Name"
//         value={authorName}
//         onChange={(e) => setAuthorName(e.target.value)}
//         required
//         className="w-full border p-2 rounded"
//       />
//       <input
//         type="email"
//         placeholder="Your Email"
//         value={authorEmail}
//         onChange={(e) => setAuthorEmail(e.target.value)}
//         required
//         className="w-full border p-2 rounded"
//       />
//       <textarea
//         placeholder="Your Comment"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         required
//         className="w-full border p-2 rounded"
//       />
//       <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//         Submit Comment
//       </button>
//     </form>
//   );
// }


// components/DisqusComments.tsx
'use client';

import { DiscussionEmbed } from 'disqus-react';

interface DisqusProps {
  postId: number;
  postTitle: string;
  postSlug: string; // example: "my-first-post"
}

export default function DisqusComments({ postId, postTitle, postSlug }: DisqusProps) {
  const shortname = 'your-disqus-shortname'; // replace with your Disqus shortname

  const disqusConfig = {
    url: `http://localhost:3000/blog/${postSlug}`,
    identifier: postId.toString(), // Unique ID for the post
    title: postTitle,
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Comments</h3>
      <DiscussionEmbed shortname={shortname} config={disqusConfig} />
    </div>
  );
}
