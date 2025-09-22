"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";
import Toast from "../Toast/Toast";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();

    // Basic client-side validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ sending: false, ok: false, msg: "Please fill in all fields." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus({ sending: false, ok: false, msg: "Enter a valid email address." });
      return;
    }

    try {
      setStatus({ sending: true, ok: null, msg: "" });
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send message");
      setForm({ name: "", email: "", message: "" });
      setStatus({ sending: false, ok: true, msg: "Message sent. I’ll get back to you shortly!" });
    } catch (err) {
      setStatus({ sending: false, ok: false, msg: err.message || "Something went wrong." });
    }
  }

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit} noValidate>
        <div className={styles.row}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={form.name} onChange={onChange} autoComplete="name" placeholder="Your name" required />
        </div>

        <div className={styles.row}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={onChange} autoComplete="email"  placeholder="you@example.com" required />
        </div>

        <div className={styles.row}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={6} value={form.message} onChange={onChange} placeholder="Your message here" required />
        </div>

        {/* Honeypot */}
        <input type="text" name="website" className={styles.hp} tabIndex="-1" autoComplete="off" />

        <div className={styles.actions}>
          <button type="submit" disabled={status.sending}>
            {status.sending ? "Sending…" : "Send Message"}
          </button>
        </div>
      </form>

      <Toast
        message={status.msg}
        type={status.ok ? "success" : status.ok === false ? "error" : "success"}
        onClose={() => setStatus((s) => ({ ...s, msg: "" }))}
      />
    </>
  );
}
