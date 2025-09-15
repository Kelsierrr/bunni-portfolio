"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {/* Left column: intro text + buttons */}
        <div className={styles.content}>
          <h1 className={styles.title}>
            Hi, I’m <span className={styles.name}>Bunni</span> — Full Stack Developer
          </h1>
          <p className={styles.subtitle}>
            I build clean, responsive, and user-focused web applications with React, Next.js, and the MERN stack.
          </p>

          <div className={styles.actions}>
            <a href="/projects" className={styles.btnPrimary}>
              View Projects
            </a>
            <a href="/contact" className={styles.btnSecondary}>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
