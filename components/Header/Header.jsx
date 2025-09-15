"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
          {/* Centered links */}
          <div className={styles.linksCenter}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/projects" className={styles.link}>Projects</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </div>

          {/* Mobile toggle on the right */}
          <button
            className={styles.mobileBtn}
            aria-label="Toggle menu"
            aria-expanded={open ? "true" : "false"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </nav>

        {open && (
          <div className={styles.mobilePanel} role="dialog" aria-label="Mobile menu">
            <Link href="/" className={styles.mobileLink} onClick={() => setOpen(false)}>Home</Link>
            <Link href="/projects" className={styles.mobileLink} onClick={() => setOpen(false)}>Projects</Link>
            <Link href="/contact" className={styles.mobileLink} onClick={() => setOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
}
