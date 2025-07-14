"use client";

import Link from "next/link";
import { Note } from "@/types/note";
import css from "./NoteList.module.css";

interface NoteListProps {
  notes: Note[];
}

export default function NoteList({ notes }: NoteListProps) {
  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li key={note.id} className={css.item}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <p className={css.date}>
            Created: {new Date(note.date).toLocaleDateString()}
          </p>
          <Link href={`/notes/${note.id}`} className={css.detailsLink}>
            View details
          </Link>
          {/* Тут можна додати кнопку Delete, якщо потрібно */}
        </li>
      ))}
    </ul>
  );
}
