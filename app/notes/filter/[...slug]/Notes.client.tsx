"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";
import NoteForm from "@/components/NoteForm/NoteForm";
import SearchBox from "@/components/SearchBox/SearchBox";
import Pagination from "@/components/Pagination/Pagination";

interface Props {
  tag: string; 
}

export default function NotesClient({ tag }: Props) {
  const {
    data: notes,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["notes", tag],
    queryFn: () => fetchNotes(tag),
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (isError) return <p>Could not fetch notes. {error.message}</p>;
  if (!notes || notes.length === 0) return <p>No notes found.</p>;

  return (
    <main>
      <NoteForm />
      <SearchBox />
      <NoteList notes={notes} />
      <Pagination />
    </main>
  );
}
