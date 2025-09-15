import styles from "./Section.module.css";

export default function Section({ id, title, children, size = "normal" }) {
  const classes = [
    styles.section,
    size === "tight" ? styles.tight : "",
    size === "loose" ? styles.loose : ""
  ].join(" ");

  return (
    <section id={id} className={classes}>
      <div className="container">
        {title && <h2 className={styles.title}>{title}</h2>}
        {children}
      </div>
    </section>
  );
}
