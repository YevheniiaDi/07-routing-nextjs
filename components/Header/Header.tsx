"use client";

import Link from "next/link";
import css from "./Header.module.css";
import TagsMenu from "./TagsMenu";

export default function Header() {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home" className={css.logo}>
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/" className={css.navLink}>Home</Link>
          </li>
          <li>
            <TagsMenu /> {/* Новий компонент замість Notes */}
          </li>
        </ul>
      </nav>
    </header>
  );
}
