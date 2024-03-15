"use client";

interface Props {
  error: Error;
}

export default function ErrorBoundaryAbout({ error }: Props) {
  return (
    <div>
      <h1>About page error</h1>
      <p>{error.message}</p>
    </div>
  );
}
