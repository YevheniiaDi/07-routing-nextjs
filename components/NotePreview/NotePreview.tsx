"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import css from "./NotePreview.module.css";

interface NotePreviewProps {
  id: number;
}

export default function NotePreview({ id }: NotePreviewProps) {
  const {
    data: note,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (isError || !note) return <p>Something went wrong.</p>;

  return (
    <div className={css.preview}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p>Created: {new Date(note.date).toLocaleDateString()}</p>
    </div>
  );
}
