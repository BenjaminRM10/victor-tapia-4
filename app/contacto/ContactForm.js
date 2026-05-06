"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  interest: "Compra de café",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function updateField(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  }

  async function submitForm(event) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await response.json();
    if (!response.ok) {
      setStatus("error");
      setError(result.error || "No pudimos enviar tu mensaje.");
      return;
    }

    setStatus("success");
    setForm(initialState);
  }

  return (
    <form className="contact-form" onSubmit={submitForm}>
      <input
        className="hidden-field"
        name="website"
        value={form.website}
        onChange={updateField}
        tabIndex="-1"
        autoComplete="off"
      />
      <label>
        Nombre completo
        <input name="name" value={form.name} onChange={updateField} required minLength="2" />
      </label>
      <label>
        Correo electrónico
        <input name="email" type="email" value={form.email} onChange={updateField} required />
      </label>
      <label>
        Teléfono
        <input name="phone" value={form.phone} onChange={updateField} placeholder="Opcional" />
      </label>
      <label>
        Interés
        <select name="interest" value={form.interest} onChange={updateField}>
          <option>Compra de café</option>
          <option>Mayoreo</option>
          <option>Distribución</option>
          <option>Otro</option>
        </select>
      </label>
      <label className="contact-form__full">
        Mensaje
        <textarea
          name="message"
          value={form.message}
          onChange={updateField}
          required
          minLength="10"
          rows="6"
        />
      </label>
      <button className="button button--primary contact-form__full" disabled={status === "submitting"}>
        {status === "submitting" ? "Enviando..." : "Enviar mensaje"}
      </button>
      {status === "success" && (
        <p className="form-message form-message--success">
          Gracias. Tu mensaje fue enviado y te responderemos pronto.
        </p>
      )}
      {status === "error" && <p className="form-message form-message--error">{error}</p>}
    </form>
  );
}
