import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luis — Desarrollador Full Stack",
  description:
    "Luis, desarrollador full stack. Conoce DocAuth, mi proyecto principal de emisión y verificación de documentos digitales.",
};

const stack = [
  { label: "TypeScript", icon: "typescript", color: "3178C6" },
  { label: "React", icon: "react", color: "61DAFB" },
  { label: "Next.js", icon: "nextdotjs", color: "FFFFFF" },
  { label: "Astro", icon: "astro", color: "FF5D01" },
  { label: "Node.js", icon: "nodedotjs", color: "5FA04E" },
  { label: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
  { label: "PostgreSQL", icon: "postgresql", color: "4169E1" },
  { label: "Docker", icon: "docker", color: "2496ED" },
  { label: "Git", icon: "git", color: "F05032" },
  { label: "Figma", icon: "figma", color: "F24E1E" },
];

const capabilities = [
  {
    number: "01",
    title: "Producto",
    text: "Convierto una necesidad ambigua en una experiencia clara, priorizada y lista para usar.",
  },
  {
    number: "02",
    title: "Frontend",
    text: "Interfaces rápidas, accesibles y cuidadas hasta el último estado y microdetalle.",
  },
  {
    number: "03",
    title: "Backend",
    text: "APIs, autenticación, datos e integraciones construidos para crecer con el producto.",
  },
];

function TechIcon({ tool }: { tool: (typeof stack)[number] }) {
  return (
    <div className="tech-icon">
      <img src={`https://cdn.simpleicons.org/${tool.icon}/${tool.color}`} alt="" />
      <span>{tool.label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav-shell" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          L<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#proyectos">Proyectos</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#contacto">Contacto</a>
        </div>
        <a className="nav-cta" href="#contacto">
          Trabajemos juntos <span aria-hidden="true">↗</span>
        </a>
        <a className="nav-version" href="/v2">Ver V2</a>
      </nav>

      <section className="hero" id="inicio">
        <div className="dot-pattern" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-aurora" aria-hidden="true"><i /><i /><i /></div>
        <div className="particles" aria-hidden="true">{Array.from({ length: 18 }, (_, i) => <i key={i} />)}</div>
        <div className="meteor-field" aria-hidden="true">{Array.from({ length: 5 }, (_, i) => <i key={i} />)}</div>

        <div className="hero-copy reveal-first">
          <div className="availability">
            <span className="availability-dot" />
            Disponible para nuevas oportunidades
          </div>
          <p className="eyebrow">SOY LUIS / DESARROLLADOR FULL STACK</p>
          <h1>
            Ideas que llegan
            <span className="aurora-text"> a producción.</span>
          </h1>
          <p className="hero-summary">
            Diseño y desarrollo experiencias web de principio a fin.
            Mi proyecto principal es DocAuth: documentos digitales que
            se pueden emitir, compartir y verificar.
          </p>
          <div className="hero-actions">
            <a className="button button-primary shimmer-button" href="#proyectos">
              Conocer DocAuth <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-secondary" href="#contacto">
              Hablemos
            </a>
          </div>
          <a className="hero-proof" href="https://docauth.app/" target="_blank" rel="noopener noreferrer">
            <span className="availability-dot" aria-hidden="true" />
            <span>MI PROYECTO EN VIVO</span>
            <strong>DocAuth</strong>
            <span>docauth.app ↗</span>
          </a>
          <div className="hero-tech" aria-label="Tecnologías principales">
            {stack.slice(0, 6).map((tool) => (
              <span key={tool.label}>
                <img src={`https://cdn.simpleicons.org/${tool.icon}/${tool.color}`} alt="" />
                {tool.label}
              </span>
            ))}
          </div>
        </div>

        <div className="portrait-wrap reveal-second" aria-label="Luis, desarrollador full stack">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="portrait-card">
            <div className="shine-border" aria-hidden="true" />
            <div className="portrait-placeholder">
              <img src="/perfil.png" alt="Retrato de Luis" width="360" height="450" />
            </div>
            <div className="portrait-caption">
              <span>Basado en México</span>
              <span>Disponible remoto</span>
            </div>
          </div>
        </div>

        <p className="video-text" aria-hidden="true">LUIS</p>

        <a className="scroll-cue" href="#proyectos">
          <span>DESLIZA PARA EXPLORAR</span>
          <i aria-hidden="true">↓</i>
        </a>
      </section>

      <section className="stack-band" aria-label="Tecnologías">
        <div className="marquee-fade marquee-fade-left" />
        <div className="marquee-fade marquee-fade-right" />
        <div className="marquee-track">
          {[...stack, ...stack].map((tool, index) => (
            <span key={`${tool.label}-${index}`}>
              <img src={`https://cdn.simpleicons.org/${tool.icon}/${tool.color}`} alt="" />
              {tool.label}<i aria-hidden="true">✦</i>
            </span>
          ))}
        </div>
      </section>


      <section className="section projects-section" id="proyectos">
        <div className="section-heading">
          <div>
            <p className="section-kicker">01 / TRABAJO SELECCIONADO</p>
            <h2>Un producto real.<br /><span className="gradient-text">Una idea hecha sistema.</span></h2>
          </div>
          <p>
            DocAuth es mi proyecto principal: una plataforma para acompañar
            todo el recorrido de un documento institucional.
          </p>
        </div>

        <article className="featured-project bento-card magic-card" id="docauth">
          <div className="border-beam" aria-hidden="true" />
          <div className="project-copy">
            <div className="project-meta">
              <span className="live-pill"><i /> EN PRODUCCIÓN</span>
              <span>2026</span>
            </div>
            <p className="project-index">PROYECTO PRINCIPAL / SEGURIDAD DIGITAL</p>
            <h3>DocAuth</h3>
            <p className="project-description">
              Del diseño de una plantilla a una credencial verificable.
              DocAuth reúne aprobaciones, emisión documental y consulta
              pública de autenticidad en una misma plataforma.
            </p>
            <div className="project-tags">
              <span>Documentos digitales</span><span>QR</span><span>API & webhooks</span>
            </div>
            <div className="project-actions">
              <a className="button button-primary shimmer-button" href="https://docauth.app/" target="_blank" rel="noopener noreferrer">Visitar DocAuth <span aria-hidden="true">↗</span></a>
              <a className="project-link" href="#docauth-detalle">Explorar el producto <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <figure className="docauth-preview">
            <div className="preview-topline"><span>DOC / AUTH</span><span>PRODUCTO EN VIVO ↗</span></div>
            <a href="https://docauth.app/" target="_blank" rel="noopener noreferrer" aria-label="Abrir DocAuth y conocer sus credenciales digitales">
              <img src="https://docauth.app/landing/movil/demo_certificado.png" alt="Certificado de demostración publicado por DocAuth, con firma y código QR" width="2400" height="1680" loading="lazy" />
            </a>
            <figcaption>Certificado de demostración del sitio de DocAuth.</figcaption>
            <div className="preview-features"><span>QR verificable</span><span>Evidencia criptográfica</span></div>
          </figure>
        </article>

        <div className="case-bento" id="docauth-detalle">
          <article className="case-context bento-card magic-card">
            <p className="section-kicker">EL RETO</p>
            <h3>La confianza también necesita una buena experiencia.</h3>
            <p>Emitir una credencial y comprobar su integridad son partes del mismo recorrido. DocAuth conecta a la organización que la emite con la persona que necesita verificarla.</p>
            <div className="case-flow" aria-label="Recorrido documental"><span>Diseñar</span><i aria-hidden="true">→</i><span>Aprobar</span><i aria-hidden="true">→</i><span>Verificar</span></div>
          </article>
          <article className="case-capabilities bento-card magic-card">
            <p className="section-kicker">DENTRO DEL PRODUCTO</p>
            <ol>
              <li><span>01</span><div><h3>Plantillas visuales</h3><p>Editor con campos dinámicos.</p></div></li>
              <li><span>02</span><div><h3>Aprobación y emisión</h3><p>Firmas coordinadas y lotes desde Excel o CSV.</p></div></li>
              <li><span>03</span><div><h3>Verificación pública</h3><p>Consulta de documentos mediante enlace o QR.</p></div></li>
            </ol>
          </article>
          <article className="case-note bento-card magic-card"><span className="case-symbol" aria-hidden="true">↔</span><div><h3>Conectado a otros sistemas</h3><p>API y webhooks para integrar los flujos documentales.</p></div></article>
          <article className="case-note bento-card magic-card"><span className="case-symbol" aria-hidden="true">◎</span><div><h3>Diseñado para organizaciones</h3><p>Roles y permisos para diseñar, aprobar y emitir.</p></div></article>
        </div>

        <section className="tracking-case" aria-labelledby="tracking-title">
          <div className="tracking-heading">
            <div>
              <p className="section-kicker">02 / OPERACIÓN EN CAMPO</p>
              <h2 id="tracking-title">Seguimiento que le da certeza a cada visita.</h2>
            </div>
            <p>Una experiencia para que las personas elijan su turno, sigan a su técnico y sepan cuándo llegó a su domicilio.</p>
          </div>

          <article className="tracking-feature bento-card magic-card">
            <div className="tracking-copy">
              <span className="private-lock">PROYECTO PRIVADO</span>
              <p className="section-kicker">ENI NETWORKS / MAPAS Y ZONAS</p>
              <h3>Visibilidad para el cliente y control para la operación.</h3>
              <p>Diseñé una experiencia de seguimiento de instalaciones que conecta el avance de una visita con ubicación, rutas y zonas de atención.</p>
              <div className="tracking-tags"><span>Seguimiento en campo</span><span>Mapas</span><span>Administración de zonas</span></div>
            </div>
            <figure className="tracking-admin-preview">
              <img src="/projects/eninetworks/zones-dashboard.png" alt="Vista conceptual de un panel administrativo con zonas de servicio, técnicos y rutas de instalación" width="1664" height="936" loading="lazy" />
              <figcaption>Vista conceptual del panel de zonas y operación.</figcaption>
            </figure>
          </article>

          <div className="tracking-gallery" aria-label="Flujo móvil de seguimiento en Eni Networks">
            <figure className="tracking-screen bento-card">
              <img src="/projects/eninetworks/tracking-1.png" alt="Selección de turno para una instalación de Eni Networks" width="375" height="812" loading="lazy" />
              <figcaption><span>01</span> Selección de turno</figcaption>
            </figure>
            <figure className="tracking-screen bento-card">
              <img src="/projects/eninetworks/tracking-2.png" alt="Seguimiento de técnico en ruta sobre mapa" width="375" height="812" loading="lazy" />
              <figcaption><span>02</span> Técnico en ruta</figcaption>
            </figure>
            <figure className="tracking-screen bento-card">
              <img src="/projects/eninetworks/tracking-3.png" alt="Confirmación de técnico en el domicilio sobre mapa" width="375" height="812" loading="lazy" />
              <figcaption><span>03</span> Técnico en sitio</figcaption>
            </figure>
          </div>
        </section>

        <div className="project-grid">
          <article className="project-card bento-card private-card">
            <div className="private-visual visual-violet">
              <span className="private-lock">PRIVADO</span>
              <div className="abstract-window"><i /><i /><i /></div>
            </div>
            <div className="small-project-copy">
              <p>PLATAFORMA INTERNA / 02</p>
              <h3>Caso confidencial</h3>
              <span>Flujos operativos convertidos en una interfaz simple y medible.</span>
              <div className="project-tags"><span>Dashboard</span><span>UX</span><span>Datos</span></div>
            </div>
          </article>
          <article className="project-card bento-card private-card">
            <div className="private-visual visual-mint">
              <span className="private-lock">LOCAL</span>
              <div className="abstract-terminal"><i /><i /><i /><i /></div>
            </div>
            <div className="small-project-copy">
              <p>EXPERIMENTO DE PRODUCTO / 03</p>
              <h3>Laboratorio local</h3>
              <span>Prototipo funcional para validar una idea antes de invertir en escala.</span>
              <div className="project-tags"><span>Prototipo</span><span>Full stack</span></div>
            </div>
          </article>
        </div>
      </section>

      <section className="section technical-section" aria-labelledby="stack-title">
        <div className="section-heading compact-heading">
          <div>
            <p className="section-kicker">STACK TÉCNICO</p>
            <h2 id="stack-title">Herramientas para llevar ideas a producción.</h2>
          </div>
          <p>Un stack pensado para interfaces pulidas, lógica sólida y productos que pueden crecer.</p>
        </div>
        <div className="technical-grid">
          <article className="tech-card bento-card">
            <p>FRONTEND</p>
            <div className="tech-icon-grid">
              {stack.slice(0, 4).map((tool) => <TechIcon key={tool.label} tool={tool} />)}
            </div>
          </article>
          <article className="tech-card bento-card">
            <p>BACKEND & DATOS</p>
            <div className="tech-icon-grid">
              {stack.slice(4, 8).map((tool) => <TechIcon key={tool.label} tool={tool} />)}
            </div>
          </article>
          <article className="tech-card bento-card tooling-card">
            <p>HERRAMIENTAS</p>
            <div className="tech-icon-grid">
              {stack.slice(8).map((tool) => <TechIcon key={tool.label} tool={tool} />)}
            </div>
            <small>Y las que el reto necesite.</small>
          </article>
          <article className="impact-card bento-card">
            <p>FORMA DE TRABAJAR</p>
            <strong>Diseño + Ingeniería</strong>
            <span>Decisiones técnicas con foco en usuario, rendimiento y negocio.</span>
          </article>
        </div>
      </section>

      <section className="section about-section" id="sobre-mi">
        <div className="section-heading">
          <div>
            <p className="section-kicker">02 / SOBRE MÍ</p>
            <h2>Técnica con criterio de producto.</h2>
          </div>
        </div>
        <div className="about-grid">
          <article className="about-intro bento-card">
            <p className="large-quote">
              Me interesa el punto donde una interfaz bonita deja de ser sólo
              bonita y empieza a <span>resolver algo de verdad.</span>
            </p>
            <p className="about-body">
              Trabajo de extremo a extremo: entiendo el problema, diseño el
              recorrido, construyo la solución y observo cómo funciona en el
              mundo real. Disfruto colaborar con equipos que cuidan el producto
              tanto como la tecnología.
            </p>
          </article>
          <article className="about-photo bento-card">
            <div className="photo-placeholder-secondary">
              <img src="/perfil.png" alt="Luis" width="360" height="450" loading="lazy" />
            </div>
          </article>
          <article className="stat-card bento-card">
            <strong>01→∞</strong>
            <p>De la primera idea a un producto que puede seguir creciendo.</p>
          </article>
          <article className="stat-card bento-card accent-card">
            <strong>DocAuth ↗</strong>
            <p>Mi proyecto principal, disponible para explorar en línea.</p>
          </article>
        </div>
      </section>

      <section className="section experience-section" id="experiencia">
        <div className="section-heading">
          <div>
            <p className="section-kicker">03 / EXPERIENCIA</p>
            <h2>Cómo aporto valor.</h2>
          </div>
          <p>
            Producto, interfaces y sistemas: las áreas en las que enfoco mi trabajo.
          </p>
        </div>

        <div className="experience-list">
          {capabilities.map((item) => (
            <article className="experience-row" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <p className="section-kicker">04 / MI PROCESO</p>
        <div className="process-heading">
          <h2>Claridad antes que complejidad.</h2>
          <p>Una forma de trabajar enfocada en avanzar rápido sin perder intención.</p>
        </div>
        <div className="process-grid">
          <article><span>01</span><h3>Entender</h3><p>Objetivo, usuario, contexto y restricciones antes de tocar una línea de código.</p></article>
          <article><span>02</span><h3>Construir</h3><p>Una primera versión coherente, medible y lo bastante buena para aprender.</p></article>
          <article><span>03</span><h3>Refinar</h3><p>Datos, observación y detalle para convertir una solución funcional en una gran experiencia.</p></article>
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="contact-glow" aria-hidden="true" />
        <p className="section-kicker">05 / CONTACTO</p>
        <h2>
          ¿Tienes un reto interesante?
          <span className="gradient-text"> Construyámoslo.</span>
        </h2>
        <p className="contact-copy">
          Estoy disponible para oportunidades de tiempo completo, colaboraciones
          y productos que necesiten una mezcla de ingeniería y sensibilidad visual.
        </p>
        <a className="button button-primary contact-button shimmer-button" href="mailto:">
          Envíame un mensaje <span aria-hidden="true">↗</span>
        </a>
        <div className="contact-links" id="datos-contacto-pendientes">
          <a href="mailto:"><span>CORREO</span><strong>luis.lavz.2300@gmail.com</strong><i>↗</i></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><span>LINKEDIN</span><strong>https://www.linkedin.com/in/luis-arturo-enriquez-v-966b502b6/</strong><i>↗</i></a>
          <a href="https://github.com" target="_blank" rel="noreferrer"><span>GITHUB</span><strong>https://github.com/Lu1sEnriquez</strong><i>↗</i></a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#inicio">L<span>.</span></a>
        <p>Diseñado y construido con intención.</p>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>

      <nav className="portfolio-dock" aria-label="Navegación rápida">
        <a href="#inicio" aria-label="Inicio">L<span>.</span></a>
        <a href="#proyectos">DocAuth</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#contacto">Contacto <span aria-hidden="true">↗</span></a>
      </nav>
    </main>
  );
}
