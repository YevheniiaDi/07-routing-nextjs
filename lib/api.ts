import axios from "axios";
import { Note } from "@/types/note";

const BASE_URL = "https://notehub.webspark.dev/api/notes";
const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const headers = {
  Authorization: `Bearer ${TOKEN}`,
};

export const fetchNotes = async (tag?: string): Promise<Note[]> => {
  const url = tag && tag !== "All"
    ? `${BASE_URL}?tag=${encodeURIComponent(tag)}`
    : BASE_URL;

  const response = await axios.get(url, { headers });
  return response.data;
};

export const fetchNoteById = async (id: number): Promise<Note> => {
  const response = await axios.get(`${BASE_URL}/${id}`, { headers });
  return response.data;
};
