import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import NotePreview from "./NotePreview.client";
import { fetchNoteById } from "@/lib/api";
import { Metadata } from "next";

interface PageProps {
  params: { id: string };
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  return {
    title: `Note ${params.id} | NoteHub`,
  };
}

export default async function Page({ params }: PageProps) {
  const id = Number(params.id);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotePreview id={id} />
    </HydrationBoundary>
  );
}