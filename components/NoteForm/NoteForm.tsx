"use client";

import { useState } from "react";
import axios from "axios";
import css from "./NoteForm.module.css";

export default function NoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
      await axios.post(
        "https://notehub.webspark.dev/api/notes",
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );

      // Очистити форму після успіху
      setTitle("");
      setContent("");
      alert("Note created!");
    } catch (error) {
      console.error("Failed to create note:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={css.input}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className={css.textarea}
        required
      ></textarea>
      <button type="submit" className={css.button}>
        Create Note
      </button>
    </form>
  );
}
