import { Posts } from "@/types";
import { useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState<Posts[]>([]);

  const fetchPosts = async () => {
    const res = await fetch("/api/posts");
    const posts = await res.json();
    setPosts(posts);
  };
  return (
    <div>
      <h1>Posts</h1>
      <button onClick={fetchPosts}>Fetch Posts</button>
      <ul>
        {posts.map((posts) => (
          <li key={posts.userId}>
            {posts.title}: {posts.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
