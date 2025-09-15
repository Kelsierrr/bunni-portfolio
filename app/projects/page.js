import styles from "./page.module.css";
import { projects } from "../../lib/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

/**
 * Projects index (no filters).
 * - Featured projects appear first.
 * - Case-study pages exist for these slugs:
 *   evanshills, ekime, pennysense
 */
const CASE_STUDY_SLUGS = new Set(["evanshills", "ekime", "pennysense"]);

export default function ProjectsPage() {
  // sort: featured first, keep rest order
  const sorted = [...projects].sort((a, b) => (b.featured === a.featured ? 0 : b.featured ? 1 : -1));

  return (
    <div className={styles.wrap}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.lead}>
            A selection of web apps and tools I’ve built — clean, responsive, and production-minded.
          </p>
        </header>

        <div className={styles.grid}>
          {sorted.map((p) => (
            <ProjectCard
              key={p.slug}
              project={p}
              hasDetails={CASE_STUDY_SLUGS.has(p.slug)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
