"use client";

import {Post} from "@/types";
import {useEffect, useState} from "react";
import Link from "next/link";

interface Props {
    posts: Post[];
}


const PostPage = ({posts}: Props) => {
    const [data, setData] = useState<Post[]>(posts);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            console.log(response);
            return await response.json();
        };
        // fetchPosts();
        fetchPosts().then((posts) => setData(posts));
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {data?.map((post) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            {post.title}
                        </Link>
                        {/*<p>{post.body}</p>*/}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostPage;