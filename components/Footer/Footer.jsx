import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div className={styles.socials}>
          <a
            href="https://github.com/Kelsierrr"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/bunni-ojanuyovwi-ba0592386"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:kylenni701@gmail.com"
            className={styles.iconLink}
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
        <div className={styles.copy}>
          © {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
