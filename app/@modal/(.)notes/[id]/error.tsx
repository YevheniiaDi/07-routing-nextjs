"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <div>
      <h2>Could not fetch note details.</h2>
      <p>{error.message}</p>
    </div>
  );
}
