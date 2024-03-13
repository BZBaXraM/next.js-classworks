import { Comments } from "@/types";
import { use, useState } from "react";

export default function Comments() {
  const [comments, setComments] = useState<Comments[]>([]);
  const [comment, setComment] = useState<string>("");

  const fetchComments = async () => {
    const res = await fetch("/api/comments");
    const comments = await res.json();
    setComments(comments);
  };

  const submitComment = async () => {
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment }),
    });
    const result = await res.json();
    setComments([...comments, result]);

    console.log("submitComment", result, comments, comment);
  };

  const deleteComment = async (id: string) => {
    const res = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });

    let result = null;
    if (res.headers.get("content-type")?.includes("application/json")) {
      result = await res.json();
    }

    await fetchComments();
    console.log("deleteComment", result, comments);
  };

  const updateComment = async (id: string, comment: string) => {
    const res = await fetch(`/api/comments/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment }),
    });
    const result = await res.json();
    setComments([...comments, result]);
  };

  return (
    <div>
      <h1>Comments</h1>
      <button onClick={fetchComments}>Fetch Comments</button>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit Comment</button>

      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={() => deleteComment(comment)}>Delete Comment</button>
      <button onClick={() => updateComment(comment, comment)}>
        Update Comment
      </button>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.id} - {comment.name}: {comment.comment}
          </li>
        ))}
      </ul>
    </div>
  );
}
