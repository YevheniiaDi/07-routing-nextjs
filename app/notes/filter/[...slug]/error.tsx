"use client";

export default function NotesError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div>
      <h2>Could not fetch the list of notes.</h2>
      <p>{error.message}</p>
    </div>
  );
}
