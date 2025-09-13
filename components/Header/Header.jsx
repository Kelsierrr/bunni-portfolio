"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className="container">
        <nav className={styles.nav} aria-label="Primary">
          <Link href="/" className={styles.brand}>Bunni Ojanuyovwi</Link>

          <div className={styles.links}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/projects" className={styles.link}>Projects</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
            <a
              href="https://github.com/Kelsierrr"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btnPrimary} ${styles.cta}`}
              aria-label="GitHub Profile"
            >
              <FaGithub aria-hidden="true" />
              GitHub
            </a>
          </div>

          <button
            className={styles.mobileBtn}
            aria-label="Toggle menu"
            aria-expanded={open ? "true" : "false"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {open && (
          <div className={styles.mobilePanel} role="dialog" aria-label="Mobile menu">
            <Link href="/" className={styles.mobileLink} onClick={() => setOpen(false)}>Home</Link>
            <Link href="/projects" className={styles.mobileLink} onClick={() => setOpen(false)}>Projects</Link>
            <Link href="/contact" className={styles.mobileLink} onClick={() => setOpen(false)}>Contact</Link>
            <a
              href="https://github.com/Kelsierrr"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              GitHub
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
