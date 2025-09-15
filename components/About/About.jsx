import Image from "next/image";
import Section from "../Section/Section";
import styles from "./About.module.css";

export default function About() {
  return (
    // You can change size="tight" to "normal" later (see Section spacing below)
    <Section id="about" title="About Me" size="tight">
      <div className={styles.grid}>
        {/* Left: your photo */}
        <div className={styles.photoWrap}>
          <Image
            src="/images/headshot.jpg"   // replace later if needed
            alt="Portrait of Bunni Ojanuyovwi"
            width={560}
            height={560}
            className={styles.photo}
            sizes="(max-width: 768px) 60vw, 420px"
            priority={false}
          />
        </div>

        {/* Right: your text */}
        <div className={styles.content}>
          <p className={styles.text}>
            I’m <strong>Bunni</strong>, a full stack developer with a
            passion for building modern, responsive, and user-focused applications.
            My focus is on React, Next.js, and the MERN stack, and I enjoy turning
            ideas into clean, functional, and accessible web experiences.
              <br />
            With experience across both frontend and backend, I specialize in
            creating seamless interfaces backed by robust APIs. I’m always eager
            to learn, improve, and collaborate on projects that make a positive impact.
          </p>
        </div>
      </div>
    </Section>
  );
}
