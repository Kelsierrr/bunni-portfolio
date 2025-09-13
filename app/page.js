import Header from "../components/Header/Header";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className={`${styles.hero}`}>
          <div className="container">
            <h1 className={styles.h1}>Clean, fast, user-focused web apps.</h1>
          </div>
        </section>
      </main>
    </>
  );
}
