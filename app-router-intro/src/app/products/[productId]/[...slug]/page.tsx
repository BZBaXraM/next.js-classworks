import React from "react";

interface Props {
  params: {
    slug: string[];
  };
}

export default function Reviews({ params }: Props) {
  console.log("params", params);
  if (params.slug.length < 4) {
    return <h1>Not much params</h1>;
  }
  return (
    <div>
      <h1>more than three</h1>
      <h2>slug - {params.slug.join("/")}</h2>
    </div>
  );
}
