import ContactForm from "./ContactForm";
import { siteConfig } from "../siteConfig";

export const metadata = {
  title: "Contacto | MJ Origen",
  description: "Contacta a MJ Origen para compras, mayoreo o distribución.",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container contact-hero__grid">
          <div>
            <a className="back-link" href="/">← Volver al inicio</a>
            <span className="eyebrow">Contacto</span>
            <h1>Cuéntanos qué café necesitas</h1>
            <p>
              Completa el formulario y enviaremos tu solicitud al equipo de MJ
              Origen por Brevo. Es ideal para compras, mayoreo o propuestas de
              distribución.
            </p>
            <div className="contact-details">
              <p>{siteConfig.address}</p>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>
          </div>
          <div className="contact-card">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
