"use client";

export default function NoteDetailsError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div>
      <h2>Could not fetch note details.</h2>
      <p>{error.message}</p>
    </div>
  );
}
