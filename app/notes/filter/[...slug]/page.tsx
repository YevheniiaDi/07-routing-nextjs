import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function NotesPage({ params }: any) {
  const tag =
    Array.isArray(params.slug) && params.slug.length > 0 ? params.slug[0] : "";

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", tag],
    queryFn: () => fetchNotes(tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}