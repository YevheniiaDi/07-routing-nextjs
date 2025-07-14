"use client";

import { useState } from "react";
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
  const [page, setPage] = useState(1);

  const {
    data: notes,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["notes", tag, page],
    queryFn: () => fetchNotes(tag),
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (isError) return <p>Could not fetch notes. {error.message}</p>;
  if (!notes || notes.length === 0) return <p>No notes found.</p>;

  const totalPages = 5; // Заміни на реальний розрахунок, якщо треба

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <main>
      <NoteForm />
      <SearchBox />
      <NoteList notes={notes} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </main>
  );
}
