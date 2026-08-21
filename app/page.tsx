import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luis — Desarrollador Full Stack",
  description:
    "Portafolio de Luis: productos web, experiencias digitales y DocAuth.",
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
      </nav>

      <section className="hero" id="inicio">
        <div className="dot-pattern" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />

        <div className="hero-copy reveal-first">
          <div className="availability">
            <span className="availability-dot" />
            Disponible para nuevas oportunidades
          </div>
          <p className="eyebrow">DESARROLLADOR FULL STACK · PRODUCT BUILDER</p>
          <h1>
            Construyo productos digitales que se sienten
            <span className="gradient-text"> simples, rápidos y memorables.</span>
          </h1>
          <p className="hero-summary">
            Convierto problemas complejos en experiencias web claras. Desde la
            idea y la interfaz hasta una implementación lista para producción.
          </p>
          <div className="hero-actions">
            <a className="button button-primary shimmer-button" href="#proyectos">
              Explorar mi trabajo <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href="#contacto">
              Hablemos
            </a>
          </div>
          <div className="hero-proof">
            <span>Actualmente construyendo</span>
            <strong>DocAuth</strong>
            <i aria-hidden="true" />
            <span>Frontend · Backend · Producto</span>
          </div>
          <div className="hero-tech" aria-label="Tecnologías principales">
            {stack.slice(0, 6).map((tool) => (
              <span key={tool.label}>
                <img src={`https://cdn.simpleicons.org/${tool.icon}/${tool.color}`} alt="" />
                {tool.label}
              </span>
            ))}
          </div>
        </div>

        <div className="portrait-wrap reveal-second" aria-label="Espacio para fotografía profesional">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="portrait-card">
            <div className="shine-border" aria-hidden="true" />
            <div className="portrait-placeholder">
              <span>LL</span>
              <small>Tu foto profesional</small>
            </div>
            <div className="portrait-caption">
              <span>Basado en México</span>
              <span>Disponible remoto</span>
            </div>
          </div>
        </div>

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

      <section className="section projects-section" id="proyectos">
        <div className="section-heading">
          <div>
            <p className="section-kicker">01 / TRABAJO SELECCIONADO</p>
            <h2>Proyectos con intención.</h2>
          </div>
          <p>
            No sólo código: decisiones, contexto y resultados. Cada proyecto
            muestra cómo pienso y cómo convierto una idea en producto.
          </p>
        </div>

        <article className="featured-project bento-card">
          <div className="border-beam" aria-hidden="true" />
          <div className="project-copy">
            <div className="project-meta">
              <span className="live-pill"><i /> EN PRODUCCIÓN</span>
              <span>2026</span>
            </div>
            <p className="project-index">PROYECTO DESTACADO / 01</p>
            <h3>DocAuth</h3>
            <p className="project-description">
              Una plataforma que transforma la validación documental en un
              proceso rápido, claro y confiable para personas y organizaciones.
            </p>
            <div className="project-tags">
              <span>TypeScript</span><span>React</span><span>API</span><span>Producto</span>
            </div>
            <a className="project-link" href="#contacto">
              Ver caso de estudio <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="project-visual" aria-label="Vista previa provisional de DocAuth">
            <div className="browser-mockup">
              <div className="browser-top">
                <div><i /><i /><i /></div>
                <span>docauth.app</span>
              </div>
              <div className="browser-body">
                <div className="docauth-logo">D<span>•</span></div>
                <p>Verifica. Confía. Avanza.</p>
                <div className="document-card">
                  <div className="document-icon">✓</div>
                  <div><strong>Documento auténtico</strong><small>Validación completada</small></div>
                  <span>100%</span>
                </div>
                <div className="metric-row">
                  <span><strong>&lt; 3s</strong><small>Validación</small></span>
                  <span><strong>24/7</strong><small>Disponible</small></span>
                  <span><strong>Seguro</strong><small>De origen</small></span>
                </div>
              </div>
            </div>
          </div>
        </article>

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
              <span>FOTO</span>
              <small>Una imagen cercana trabajando o creando</small>
            </div>
          </article>
          <article className="stat-card bento-card">
            <strong>01→∞</strong>
            <p>De la primera idea a un producto que puede seguir creciendo.</p>
          </article>
          <article className="stat-card bento-card accent-card">
            <strong>100%</strong>
            <p>Propiedad sobre el resultado, no sólo sobre la tarea asignada.</p>
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
            Esta sección quedará lista para incorporar tus empresas, fechas y
            logros reales sin cambiar el diseño.
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
          <a href="mailto:"><span>CORREO</span><strong>Agregar dirección</strong><i>↗</i></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><span>LINKEDIN</span><strong>Agregar perfil</strong><i>↗</i></a>
          <a href="https://github.com" target="_blank" rel="noreferrer"><span>GITHUB</span><strong>Agregar perfil</strong><i>↗</i></a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#inicio">L<span>.</span></a>
        <p>Diseñado y construido con intención.</p>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </main>
  );
}
