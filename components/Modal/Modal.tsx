"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import css from "./Modal.module.css";

export default function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <div className={css.overlay} onClick={handleClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
