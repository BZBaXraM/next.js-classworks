"use client";

interface Props {
  error: Error;
}

export default function ErrorBoundaryAccount({ error }: Props) {
  return (
    <div>
      <h1>About page error</h1>
      <p>{error.message}</p>
    </div>
  );
}
