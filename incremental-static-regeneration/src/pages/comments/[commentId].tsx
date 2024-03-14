import { Comment } from "@/types";
import { comments } from "../../../data/comments";

interface Props {
  comment: Comment;
}

export default function CommentDetails({ comment }: Props) {
  return (
    <div>
      <h3>{comment.name}</h3>
      <p>{comment.description}</p>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const {
    params: { commentId },
  } = context;

  const comment = comments.find((comment) => comment.id === commentId);

  return {
    props: {
      comment,
    },
  };
}
