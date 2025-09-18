import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { caseStudies } from "../../../lib/caseStudies";
import TechBadge from "../../../components/Badges/TechBadge";
import ProjectGallery from "../../../components/ProjectGallery/ProjectGallery";

export default function CaseStudyPage({ params }) {
  const { slug } = params;
  const cs = caseStudies[slug];

  if (!cs) return notFound();

  return (
    <div className={styles.wrap}>
      <div className="container">
        {/* Hero */}
        <header className={styles.hero}>
          <h1 className={styles.title}>{cs.title}</h1>
          <p className={styles.summary}>{cs.summary}</p>

          <div className={styles.badges}>
            {cs.stack?.slice(0, 6).map((t) => <TechBadge key={t}>{t}</TechBadge>)}
          </div>

          <div className={styles.links}>
            {cs.links?.live && (
              <a href={cs.links.live} target="_blank" rel="noopener noreferrer" className={styles.btn}>
                View Live
              </a>
            )}
            {cs.links?.repo && (
              <a href={cs.links.repo} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                GitHub
              </a>
            )}
          </div>
        </header>

        {/* Context */}
        <section className={styles.section}>
          <h3 className={styles.h3}>Context</h3>
          <div className={styles.columns}>
            <div>
              <ul className={styles.list}>
                {cs.role?.map((r) => <li key={r}>{r}</li>)}
                {cs.timeline && <li>Timeline: {cs.timeline}</li>}
                {cs.team && <li>Team: {cs.team}</li>}
              </ul>
            </div>
            <div>
              <ul className={styles.list}>
                {cs.stack?.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* Problem → Goals */}
        <section className={styles.section}>
          <h3 className={styles.h3}>Problem → Goals</h3>
          <div className={styles.columns}>
            <div>
              <h4 className={styles.h4}>Problem</h4>
              <ul className={styles.list}>
                {cs.problem?.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>Goals</h4>
              <ul className={styles.list}>
                {cs.goals?.map((g) => <li key={g}>{g}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* Solution + Highlights */}
        <section className={styles.section}>
          <h3 className={styles.h3}>Solution</h3>
          <p>{cs.solution}</p>
          <h4 className={styles.h4}>Highlights</h4>
          <ul className={styles.list}>
            {cs.highlights?.map((h) => <li key={h}>{h}</li>)}
          </ul>
        </section>

        {/* Gallery */}
        <section className={styles.section}>
          <h3 className={styles.h3}>Screenshots</h3>
          <ProjectGallery images={cs.images} />
        </section>

        {/* Results + Next */}
        <section className={styles.section}>
          <h3 className={styles.h3}>Results & Impact</h3>
          <ul className={styles.list}>
            {cs.results?.map((r) => <li key={r}>{r}</li>)}
          </ul>

          <h4 className={styles.h4}>What I’d improve next</h4>
          <ul className={styles.list}>
            {cs.next?.map((n) => <li key={n}>{n}</li>)}
          </ul>
        </section>

        {/* Final CTA */}
        <section className={styles.section}>
          <div className={styles.links}>
            {cs.links?.live && (
              <a href={cs.links.live} target="_blank" rel="noopener noreferrer" className={styles.btn}>
                Visit Live Site
              </a>
            )}
            <a href="/contact" className={styles.btnSecondary}>Contact Me</a>
          </div>
        </section>
      </div>
    </div>
  );
}
