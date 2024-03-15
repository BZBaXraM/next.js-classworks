interface Props {
  params: {
    slug: string[];
  };
}

export default function Reviews({ params }: Props) {
  console.log("params", params);
  if (params.slug.length < 4) {
    return (
      <div>
        <h1>Reviews</h1>
        <p>Hi!</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Reviews</h1>
    </div>
  );
}
