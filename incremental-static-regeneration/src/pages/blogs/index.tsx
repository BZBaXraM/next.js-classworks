import { Blog } from "@/types";
import { useState } from "react";

export default function Blogs() {
  const [blog, setBlogs] = useState<Blog[]>([]);

  const fetchPosts = async () => {
    const res = await fetch("/api/blogs");
    const blogs = await res.json();
    setBlogs(blogs);
  };
  return (
    <div>
      <h1>Blogs</h1>
      <button onClick={fetchPosts}>Fetch Blogs</button>
      {blog.map((item) => (
        <div key={item.userId}>
          <h3>
            id: {item.id} - {item.title} - {item.body}
          </h3>
        </div>
      ))}
    </div>
  );
}
