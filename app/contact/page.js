import styles from "./page.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function ContactPage() {
  return (
    <div className={styles.wrap}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>Contact Me</h1>
          <p className={styles.lead}>
          Want to discuss a potential collaboration? Send a message via the form and I’ll reply by email, or use the WhatsApp button to directly reach me immediately.
          </p>
        </header>

        {/* Single-column, centered form */}
        <div className={styles.formWrap}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
