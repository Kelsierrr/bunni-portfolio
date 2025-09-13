import "./globals.css";
import styles from "./layout.module.css";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.shell}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
