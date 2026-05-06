import {
  getGoogleMapsEmbedUrl,
  getWhatsappUrl,
  siteConfig,
} from "./siteConfig";

const products = [
  {
    name: "MJ Origen",
    description: "Tradición que se siente, sabor que nos identifica.",
    price: "Consulta el precio",
    image: "/images/mj-origen-product.jpg",
  },
];

const processSteps = [
  ["Cultivo de Origen", "Seleccionamos granos de Ixhuatlán del Café, Veracruz."],
  ["Tostado Artesanal", "Tostamos en lotes pequeños para controlar aroma y cuerpo."],
  ["Empaque Fresco", "Empacamos cada lote para conservar frescura hasta tu taza."],
];

const values = [
  ["Origen Mexicano", "Café con identidad, trazabilidad y sabor local."],
  ["Tueste Fresco", "Lotes recientes para una experiencia aromatica."],
  ["Pasion Artesanal", "Cuidamos cada etapa desde el grano hasta la taza."],
];

export default function HomePage() {
  return (
    <main>
      <Header logoUrl={siteConfig.logoUrl} />
      <section className="hero">
        <div className="hero__overlay" />
        <div className="hero__content container">
          <div className="badge"><span />Café Artesanal de Origen Mexicano</div>
          <h1>
            El Arte del Café
            <strong>Tostado a la Perfección</strong>
          </h1>
          <p>
            MJ Origen es un café cultivado en las altas montañas de Ixhuatlán
            del Café, ubicado entre Orizaba y Córdoba, que nace entre niebla,
            tierra volcánica y tradición cafetalera mexicana. Cada grano es
            cuidadosamente seleccionado y tostado para resaltar un sabor
            auténtico, con aroma intenso, notas equilibradas y un carácter único
            que refleja la riqueza de su origen.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#productos">
              Explorar Catálogo <span aria-hidden>→</span>
            </a>
            <a className="button button--ghost" href="#proceso">
              Ver Proceso
            </a>
          </div>
          <div className="metrics" aria-label="Datos destacados">
            <div><strong>100%</strong><span>Artesanal</span></div>
            <div><strong>MEX</strong><span>Origen Mexicano</span></div>
            <div><strong>∞</strong><span>Pasión por el Café</span></div>
          </div>
        </div>
      </section>

      <section id="productos" className="section section--cream">
        <div className="container">
          <div className="section__intro">
            <span className="eyebrow">Producto destacado</span>
            <h2>MJ Origen - Café Artesanal</h2>
            <p>
              Café de Ixhuatlán del Café, Veracruz. Tostado artesanalmente para
              llevar a tu taza el auténtico sabor del café mexicano.
            </p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <img src={product.image} alt={product.name} />
                <div>
                  <p className="price">{product.price}</p>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <a href="/contacto">Solicitar información</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="section process">
        <div className="container process__grid">
          <div>
            <span className="eyebrow">Nuestro proceso</span>
            <h2>Del origen al tueste con cuidado artesanal</h2>
            <p>
              Cada grano de cafe MJ Origen recorre un camino cuidadosamente
              diseñado para preservar sus notas naturales y entregar una taza
              consistente.
            </p>
            <div className="step-list">
              {processSteps.map(([title, text], index) => (
                <div className="step" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <a className="button button--primary" href="/contacto">
              Contactar a MJ Origen
            </a>
          </div>
          <div className="gallery" aria-label="Galeria del proceso">
            <img src="/images/gallery-bean-selection.jpg" alt="Selección de granos" />
            <img src="/images/gallery-coffee-roasting.jpg" alt="Tostado de café" />
            <img src="/images/gallery-roaster-machine.jpg" alt="Maquina de tostado" />
            <img src="/images/gallery-roasted-beans.jpg" alt="Granos tostados" />
          </div>
        </div>
      </section>

      <section id="valores" className="section section--dark">
        <div className="container">
          <div className="section__intro">
            <span className="eyebrow">Por que elegirnos</span>
            <h2>Calidad, origen y servicio para cada cliente</h2>
          </div>
          <div className="value-grid">
            {values.map(([title, text]) => (
              <article className="value-card" key={title}>
                <div className="value-card__icon">✦</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container">
          <h2>Listo para probar cafe mexicano de origen?</h2>
          <p>
            Escríbenos para compras, pedidos especiales o informacion de
            mayoreo. Te responderemos por correo.
          </p>
          <div className="hero__actions hero__actions--center">
            <a className="button button--primary" href="#productos">Ver Café</a>
            <a className="button button--secondary" href="/contacto">Contacto</a>
          </div>
        </div>
      </section>
      <LocationSection />
      <Footer logoUrl={siteConfig.logoUrl} />
      <WhatsAppButton />
    </main>
  );
}

function Header({ logoUrl }) {
  return (
    <header className="site-header">
      <nav className="container nav">
        <a href="/" aria-label="MJ Origen inicio">
          <img src={logoUrl} alt="MJ Origen" />
        </a>
        <input id="menu-toggle" type="checkbox" className="menu-toggle" aria-label="Abrir menu" />
        <label className="hamburger" htmlFor="menu-toggle"><span /></label>
        <div className="nav__links">
          <a href="#proceso">Nuestro Café</a>
          <a href="#productos">Productos</a>
          <a href="/contacto">Mayoreo</a>
          <a href="#valores">Nosotros</a>
          <a className="nav__cta" href="#productos">Comprar Café</a>
        </div>
      </nav>
    </header>
  );
}

function Footer({ logoUrl }) {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <img src={logoUrl} alt="MJ Origen" />
          <p>Café artesanal mexicano cultivado, tostado y servido con origen.</p>
        </div>
        <div>
          <h3>Explorar</h3>
          <a href="/">Inicio</a>
          <a href="#productos">Productos</a>
          <a href="#proceso">Proceso</a>
          <a href="/contacto">Contacto</a>
        </div>
        <div>
          <h3>Contacto</h3>
          <p>{siteConfig.address}</p>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a className="button button--primary button--small" href="/contacto">
            Enviar mensaje
          </a>
        </div>
      </div>
      <p className="footer__bottom">© 2026 MJ Origen. Todos los derechos reservados.</p>
    </footer>
  );
}

function LocationSection() {
  return (
    <section id="ubicacion" className="section location-section">
      <div className="container location-grid">
        <div>
          <span className="eyebrow">Ubicación</span>
          <h2>Visítanos en Saltillo</h2>
          <p>{siteConfig.address}</p>
          <div className="location-actions">
            <a
              className="button button--primary"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapsQuery)}`}
              target="_blank"
              rel="noreferrer"
            >
              Abrir en Google Maps
            </a>
            <a className="button button--secondary" href="/contacto">
              Contacto
            </a>
          </div>
        </div>
        <div className="map-card">
          <iframe
            title="Mapa de MJ Origen en Saltillo"
            src={getGoogleMapsEmbedUrl()}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={getWhatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Enviar WhatsApp a MJ Origen"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16.01 3.2c-7.05 0-12.79 5.73-12.79 12.78 0 2.25.59 4.45 1.72 6.39L3.1 29.13l6.92-1.82a12.72 12.72 0 0 0 5.99 1.52h.01c7.05 0 12.79-5.73 12.79-12.78 0-3.42-1.33-6.63-3.75-9.04a12.7 12.7 0 0 0-9.05-3.81Zm0 23.48h-.01c-1.91 0-3.78-.51-5.42-1.48l-.39-.23-4.1 1.08 1.09-4-.26-.41a10.6 10.6 0 0 1-1.55-5.66c0-5.86 4.77-10.63 10.65-10.63 2.84 0 5.51 1.11 7.52 3.11a10.57 10.57 0 0 1 3.12 7.52c0 5.87-4.78 10.64-10.65 10.64Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.15-.15.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.57 1.14 3.08 1.3 3.29.16.21 2.25 3.43 5.45 4.81.76.33 1.36.52 1.82.67.77.24 1.46.21 2.01.13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
