import { Comment } from "@/types";
import { useState } from "react";

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [comment, setComment] = useState<string>("");
  const [update, setUpdateComment] = useState<{ [key: string]: string }>({});

  const fetchComments = async () => {
    const res = await fetch("/api/comments");
    const comments = await res.json();
    setComments(comments);
  };

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment }),
    });

    const data = await response.json();
    console.log(`Data: ${data}`);
    fetchComments();
  };

  const deleteComment = async (id: string) => {
    const response = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    console.log(`Deleted data: ${data}`);
    fetchComments();
  };

  const updateComment = async (id: string) => {
    const response = await fetch(`/api/comments/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, comment: update[id] }),
    });

    const data = await response.json();
    console.log(`Updated data: ${data}`);
    fetchComments();
  };

  return (
    <div>
      <h1>Comments</h1>
      <button
        style={{
          margin: "10px ",
          backgroundColor: "lightgreen",
          color: "black",
        }}
        onClick={fetchComments}
      >
        Fetch Comments
      </button>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        style={{
          margin: "10px ",
          backgroundColor: "lightblue",
          color: "black",
        }}
        onClick={submitComment}
      >
        Submit new Comment
      </button>
      {comments.map((item) => (
        <div key={item.id}>
          <h2>
            id: {item.id} - {item.name}
          </h2>
          <input
            type="text"
            value={update[item.id] || ""}
            onChange={(e) =>
              setUpdateComment({ ...update, [item.id]: e.target.value })
            }
          />
          <button
            style={{
              margin: "10px ",
              backgroundColor: "lightblue",
              color: "black",
            }}
            onClick={() => updateComment(item.id)}
          >
            Update Comment
          </button>
          <button
            style={{
              margin: "10px ",
              backgroundColor: "lightcoral",
              color: "black",
            }}
            onClick={() => deleteComment(item.id)}
          >
            Delete Comment
          </button>
        </div>
      ))}
    </div>
  );
}
