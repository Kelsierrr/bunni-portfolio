import styles from "./TechBadge.module.css";

export default function TechBadge({ children }) {
  return <span className={styles.badge}>{children}</span>;
}
