import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luis — Portafolio V2",
  description: "Una segunda dirección visual para el portafolio de Luis: DocAuth, Eni Networks y CAICH.",
};

const specialties = ["Frontend", "Backend", "Producto", "Mapas", "Sistemas internos"];

export default function PortfolioV2() {
  return (
    <main className="v2-page">
      <nav className="v2-nav" aria-label="Navegación V2">
        <a className="v2-monogram" href="#v2-inicio" aria-label="Inicio">LE</a>
        <div className="v2-nav-links">
          <a href="#v2-trabajo">Trabajo</a>
          <a href="#v2-perfil">Perfil</a>
          <a href="#v2-contacto">Contacto</a>
        </div>
        <a className="v2-switch" href="/v3">Ver versión 03 ↗</a>
      </nav>

      <section className="v2-hero" id="v2-inicio">
        <div className="v2-hero-copy">
          <p className="v2-overline">LUIS · FULL STACK / PRODUCT ENGINEER</p>
          <h1>Productos claros para problemas <em>complejos.</em></h1>
          <p className="v2-lead">Diseño interfaces, sistemas y recorridos digitales que conectan personas, datos y operación.</p>
          <div className="v2-actions">
            <a href="#v2-trabajo">Ver proyectos <span>↓</span></a>
            <a href="#v2-contacto">Trabajemos juntos ↗</a>
          </div>
        </div>
        <div className="v2-hero-art" aria-label="Retrato de Luis">
          <span className="v2-issue">02</span>
          <div className="v2-photo-frame"><img src="/perfil.png" alt="Luis" width="360" height="450" /></div>
          <p>Basado en México<br />Disponible remoto</p>
        </div>
        <div className="v2-scroll-line" aria-hidden="true"><span /></div>
      </section>

      <div className="v2-ticker" aria-label="Áreas de especialidad">
        {[...specialties, ...specialties].map((item, index) => <span key={`${item}-${index}`}>{item}<i>◆</i></span>)}
      </div>

      <section className="v2-work" id="v2-trabajo">
        <header className="v2-section-head">
          <p>TRABAJO SELECCIONADO / 2026</p>
          <h2>Tres productos.<br />Tres problemas reales.</h2>
          <span>01—03</span>
        </header>

        <article className="v2-project v2-docauth">
          <div className="v2-project-copy">
            <p className="v2-project-number">01 / PROYECTO PRINCIPAL</p>
            <h3>DocAuth</h3>
            <p>Emisión, aprobación y verificación de documentos digitales mediante enlaces, códigos QR y evidencia criptográfica.</p>
            <ul><li>Producto</li><li>Seguridad digital</li><li>API</li></ul>
            <a href="https://docauth.app/" target="_blank" rel="noopener noreferrer">Visitar DocAuth ↗</a>
          </div>
          <div className="v2-doc-visual">
            <div className="v2-doc-sheet">
              <span>DOCUMENTO VERIFICABLE</span>
              <strong>Confianza<br />digital.</strong>
              <i>✓</i>
              <small>QR · FIRMA · EVIDENCIA</small>
            </div>
          </div>
        </article>

        <div className="v2-project-grid">
          <article className="v2-project v2-eni">
            <figure>
              <img src="/projects/eninetworks/zones-dashboard.png" alt="Panel conceptual de seguimiento, zonas y técnicos de Eni Networks" width="1664" height="936" loading="lazy" />
              <figcaption>Panel conceptual de zonas</figcaption>
            </figure>
            <div className="v2-project-copy">
              <p className="v2-project-number">02 / OPERACIÓN EN CAMPO</p>
              <h3>Eni Networks</h3>
              <p>Seguimiento de instalaciones, selección de turno, técnicos en ruta y administración geográfica de zonas.</p>
              <ul><li>Mapas</li><li>KML / KMZ</li><li>Tracking</li></ul>
            </div>
          </article>

          <article className="v2-project v2-caich">
            <figure>
              <img src="/projects/caich/caich-3.png" alt="Calendario real de CAICH para reservar cubículos" width="2542" height="1255" loading="lazy" />
              <figcaption>Calendario real del sistema</figcaption>
            </figure>
            <div className="v2-project-copy">
              <p className="v2-project-number">03 / SISTEMA INSTITUCIONAL</p>
              <h3>CAICH</h3>
              <p>Sistema de ITSON para organizar citas, disponibilidad y reservación de cubículos desde una agenda centralizada.</p>
              <ul><li>Agenda</li><li>Cubículos</li><li>Acceso por rol</li></ul>
            </div>
          </article>
        </div>
      </section>

      <section className="v2-profile" id="v2-perfil">
        <div className="v2-profile-statement">
          <p>MI ENFOQUE</p>
          <h2>Diseño con intención.<br /><em>Ingeniería con contexto.</em></h2>
        </div>
        <div className="v2-profile-grid">
          <article><span>01</span><h3>Entender</h3><p>El usuario, el objetivo y las restricciones antes de definir la solución.</p></article>
          <article><span>02</span><h3>Construir</h3><p>Interfaces y sistemas completos, desde el flujo hasta la implementación.</p></article>
          <article><span>03</span><h3>Refinar</h3><p>Rendimiento, claridad y pequeños detalles que sostienen la experiencia.</p></article>
        </div>
      </section>

      <section className="v2-contact" id="v2-contacto">
        <p>¿TIENES UN PROYECTO?</p>
        <h2>Hagamos algo<br /><em>que funcione.</em></h2>
        <a href="mailto:">Escríbeme ↗</a>
        <div><span>Correo pendiente</span><span>LinkedIn pendiente</span><span>GitHub pendiente</span></div>
      </section>

      <footer className="v2-footer"><span>LUIS / 2026</span><a href="#v2-inicio">VOLVER ARRIBA ↑</a></footer>
    </main>
  );
}
