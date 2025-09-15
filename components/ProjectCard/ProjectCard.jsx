import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import styles from "./ProjectCard.module.css";

/**
 * Card props expect an item from lib/projects.js
 * If the project has a case study, link Details to `/projects/[slug]`
 * For pet projects without a page, omit Details
 */
export default function ProjectCard({ project, hasDetails = false }) {
  const { slug, title, summary, tech, liveUrl, repoUrl, imageUrl, featured } = project;

  return (
    <article className={`${styles.card} ${featured ? styles.featured : ""}`}>
      <div className={styles.thumb}>
        <Image
          src={imageUrl || "/images/placeholder.png"}
          alt={`${title} cover`}
          fill
          className={styles.img}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.summary}>{summary}</p>

        <ul className={styles.techList}>
          {tech?.slice(0, 4).map((t) => (
            <li key={t} className={styles.tech}>{t}</li>
          ))}
        </ul>

        <div className={styles.actions}>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={styles.btn}>
              <FaExternalLinkAlt aria-hidden="true" /> Live
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className={styles.btn}>
              <FaGithub aria-hidden="true" /> Code
            </a>
          )}
          {hasDetails && (
            <Link href={`/projects/${slug}`} className={styles.btnSecondary}>
              Details
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
