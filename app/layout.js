import "./globals.css";
import styles from "./layout.module.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp/FloatingWhatsApp";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.shell}>
        <Header />
        <main className={styles.main}>{children}</main>
        <FloatingWhatsApp />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
