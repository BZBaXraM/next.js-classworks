"use client";

import {useEffect, useState} from "react";
import {Post} from "@/types";
import NotFoundPage from "@/app/posts/not-found";

interface Props {
    params: {
        postId: number;
    }
}

const PostDetails = ({params}: Props) => {
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch post');
                }
                return await response.json();
            } catch (error) {
                console.error('Error fetching post:', error);
                // return null;
                return NotFoundPage();
            }
        };
        fetchPost().then((postData) => setPost(postData));
    }, [params.postId
    ]);

    return (
        <div>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
        </div>
    );
};

export default PostDetails;
