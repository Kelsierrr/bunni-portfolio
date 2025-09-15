"use client";

import styles from "./FloatingWhatsapp.module.css";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/2348106756899"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className={styles.icon} aria-hidden="true" />
    </a>
  );
}
