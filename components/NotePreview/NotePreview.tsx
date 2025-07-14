"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import css from "./NotePreview.module.css";

interface Props {
  id: number;
}

export default function NotePreview({ id }: Props) {
  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  if (isLoading) return <p>Loading, please wait...</p>;

  if (error || !note) {
    let message = "Something went wrong.";
    if (error instanceof Error) {
      message += ` ${error.message}`;
    }
    return <p>{message}</p>;
  }

  const formattedDate = new Date(note.date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={css.container}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p>Created {formattedDate}</p>
    </div>
  );
}
