import { Comments } from "@/types";

interface Props {
  comment: Comments;
}

export default function CommentDetails({ comment }: Props) {
  return (
    <div>
      <h3>{comment.name}</h3>
      <p>{comment.comment}</p>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { commentId } = context.params;
  const res = await fetch(`http://localhost:3000/api/comments/${commentId}`);
  const comment = await res.json();

  return {
    props: {
      comment,
    },
  };
}
