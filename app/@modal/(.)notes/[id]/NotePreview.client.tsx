"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import Modal from "@/components/Modal/Modal";
import css from "./NotePreview.module.css";

interface Props {
  id: number;
}

export default function NotePreview({ id }: Props) {
  const { data: note, isLoading, error } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (error || !note) return <p>Something went wrong.</p>;

  const formattedDate = new Date(note.date).toLocaleDateString();

  return (
    <Modal>
      <div className={css.container}>
        <h2 className={css.title}>{note.title}</h2>
        <p className={css.paragraph}>{note.content}</p>
        <p className={css.paragraph}>Created on: {formattedDate}</p>
      </div>
    </Modal>
  );
}

