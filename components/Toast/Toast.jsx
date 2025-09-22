"use client";
import { useEffect, useState } from "react";
import styles from "./Toast.module.css";

export default function Toast({ message, type = "success", onClose, duration = 3500 }) {
  const [open, setOpen] = useState(Boolean(message));
  useEffect(() => {
    if (!message) return;
    setOpen(true);
    const t = setTimeout(() => { setOpen(false); onClose?.(); }, duration);
    return () => clearTimeout(t);
  }, [message, duration, onClose]);
  if (!open || !message) return null;
  return (
    <div className={`${styles.toast} ${type === "error" ? styles.error : styles.success}`}>
      {message}
    </div>
  );
}
