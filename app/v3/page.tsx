import type { Metadata } from "next";
import { AnimatedBeam } from "../../components/magicui/animated-beam";
import { AuroraText } from "../../components/magicui/aurora-text";
import { BentoCard, BentoGrid } from "../../components/magicui/bento-grid";
import { Dock, DockIcon } from "../../components/magicui/dock";
import { Meteors } from "../../components/magicui/meteors";
import { Particles } from "../../components/magicui/particles";
import { ShineBorder } from "../../components/magicui/shine-border";
import {
  ArrowDownRightIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
  GitHubIcon,
  GridIcon,
  HomeIcon,
  LinkedInIcon,
  MailIcon,
  TerminalIcon,
} from "../../components/icons";

export const metadata: Metadata = {
  title: "Luis Arturo — Full Stack Engineer",
  description: "Portafolio de ingeniería full stack: DocAuth, plataformas geoespaciales y sistemas institucionales.",
};

const stack = [
  {
    title: "Frontend",
    tone: "cyan",
    items: [
      ["React", "react", "61DAFB"], ["Angular", "angular", "DD0031"], ["Next.js", "nextdotjs", "FFFFFF"],
      ["Astro", "astro", "BC52EE"], ["TypeScript", "typescript", "3178C6"], ["HTML5", "html5", "E34F26"], ["CSS", "css", "663399"],
    ],
  },
  {
    title: "Backend",
    tone: "violet",
    items: [
      ["Java", "openjdk", "FFFFFF"], ["Spring", "spring", "6DB33F"], ["Python", "python", "3776AB"],
      ["Jupyter", "jupyter", "F37626"], ["ASP.NET", "dotnet", "512BD4"], ["NestJS", "nestjs", "E0234E"],
      ["Express", "express", "FFFFFF"], ["Node.js", "nodedotjs", "5FA04E"],
    ],
  },
  {
    title: "Datos & eventos",
    tone: "blue",
    items: [
      ["SQL", "databricks", "FF3621"], ["PostgreSQL", "postgresql", "4169E1"], ["MySQL", "mysql", "4479A1"],
      ["Mosquitto / MQTT", "eclipsemosquitto", "3C5280"], ["RabbitMQ", "rabbitmq", "FF6600"],
    ],
  },
  {
    title: "Deploy & herramientas",
    tone: "amber",
    items: [
      ["VPS / Linux", "linux", "FCC624"], ["Vercel", "vercel", "FFFFFF"], ["Postman", "postman", "FF6C37"],
      ["Insomnia", "insomnia", "4000BF"], ["Sentry", "sentry", "362D59"], ["Git", "git", "F05032"],
    ],
  },
] as const;

function TechCloud({ items }: { items: readonly (readonly [string, string, string])[] }) {
  return (
    <div className="v3-tech-cloud">
      {items.map(([name, slug, color]) => (
        <span className="v3-tech" key={name}>
          <img src={`https://cdn.simpleicons.org/${slug}/${color}`} alt="" width="24" height="24" loading="lazy" />
          {name}
        </span>
      ))}
    </div>
  );
}

const updates = [
  ["DocAuth", "Credenciales verificables y evidencia on-chain", "LIVE"],
  ["Eni Networks", "Tracking técnico y zonas KML / KMZ", "PRIVATE"],
  ["CAICH · ITSON", "Agenda de citas y cubículos", "PRIVATE"],
] as const;

export default function PortfolioV3() {
  return (
    <main className="v3-page" id="inicio">
      <Particles quantity={86} />
      <div className="v3-aurora" aria-hidden="true" />
      <nav className="v3-topbar" aria-label="Navegación principal">
        <a className="v3-logo" href="#inicio"><span>LE</span><i /></a>
        <div className="v3-top-links">
          <a href="#proyectos">Proyectos</a><a href="#stack">Stack</a><a href="#contacto">Contacto</a>
        </div>
        <div className="v3-version"><a href="/">V1</a><a href="/v2">V2</a><a className="active" href="/v3">V3</a></div>
      </nav>

      <section className="v3-hero">
        <Meteors number={16} />
        <div className="v3-hero-copy">
          <div className="v3-availability"><span /> Disponible para nuevos retos</div>
          <p className="v3-kicker">FULL STACK ENGINEER · MÉXICO / REMOTO</p>
          <h1>Construyo productos<br /><AuroraText className="v3-serif">de punta a punta.</AuroraText></h1>
          <p className="v3-intro">Frontend preciso, backend sólido e infraestructura lista para producción. Convierto operaciones complejas en experiencias claras y confiables.</p>
          <div className="v3-hero-actions">
            <a className="v3-primary" href="#proyectos">Explorar mi trabajo <ArrowDownRightIcon className="v3-button-icon" /></a>
            <a className="v3-secondary" href="https://docauth.app/" target="_blank" rel="noopener noreferrer">Ver DocAuth <ArrowUpRightIcon className="v3-button-icon" /></a>
          </div>
          <div className="v3-runtime"><span>Actualmente</span><code>React · Spring · PostgreSQL · Vercel / VPS</code></div>
        </div>

        <aside className="v3-profile-card">
          <ShineBorder />
          <div className="v3-profile-top"><span>PROFILE_01</span><span className="v3-live">● ONLINE</span></div>
          <div className="v3-photo"><img src="/perfil.png" alt="Retrato de Luis Arturo" width="480" height="560" /></div>
          <div className="v3-profile-data">
            <p>Luis Arturo</p><span>Product-minded engineer</span>
            <dl><div><dt>FOCUS</dt><dd>Web systems</dd></div><div><dt>MODE</dt><dd>Full stack</dd></div></dl>
          </div>
        </aside>

        <div className="v3-scroll-cue"><span>SCROLL TO BUILD</span><i /></div>
      </section>

      <section className="v3-projects" id="proyectos">
        <header className="v3-heading">
          <div><span>01 / TRABAJO SELECCIONADO</span><i /></div>
          <h2>Sistemas reales.<br /><span>Impacto visible.</span></h2>
          <p>Productos web creados para resolver identidad digital, operación en campo y servicios institucionales.</p>
        </header>

        <BentoGrid>
          <BentoCard className="v3-bento-docauth" accent="blue">
            <ShineBorder />
            <div className="v3-card-head"><span>FLAGSHIP / LIVE</span><a href="https://docauth.app/" target="_blank" rel="noopener noreferrer">DOC AUTH <ArrowUpRightIcon className="v3-inline-icon" /></a></div>
            <div className="v3-docauth-copy">
              <span className="v3-card-index">01</span>
              <h3>DocAuth</h3>
              <p>Plataforma para emitir, aprobar y verificar documentos digitales mediante QR, evidencia criptográfica y validación on-chain.</p>
              <ul><li>Producto propio</li><li>Seguridad digital</li><li>Blockchain</li></ul>
            </div>
            <figure className="v3-docauth-visual"><img src="/projects/docauth/docauth-certificado.png" alt="Certificado verificable generado por DocAuth" width="1200" height="840" /></figure>
          </BentoCard>

          <BentoCard className="v3-bento-eni" accent="cyan">
            <div className="v3-card-head"><span>FIELD OPS / PRIVATE</span><span>02</span></div>
            <figure><img src="/projects/eninetworks/zones-dashboard.png" alt="Panel geográfico de seguimiento y zonas de Eni Networks" width="1200" height="675" loading="lazy" /></figure>
            <div className="v3-project-copy"><h3>Eni Networks</h3><p>Tracking de instalaciones, técnicos en ruta y administración de zonas geográficas.</p><div><span>KML / KMZ</span><span>Mapas</span><span>Tracking</span></div></div>
          </BentoCard>

          <BentoCard className="v3-bento-caich" accent="violet">
            <div className="v3-card-head"><span>ITSON / PRIVATE</span><span>03</span></div>
            <figure><img src="/projects/caich/caich-dashboard.png" alt="Sistema CAICH para agenda de citas y cubículos" width="1200" height="675" loading="lazy" /></figure>
            <div className="v3-project-copy"><h3>CAICH</h3><p>Agenda central para organizar atención, disponibilidad y reservación de cubículos.</p><div><span>Agenda</span><span>Citas</span><span>Gestión</span></div></div>
          </BentoCard>

          <BentoCard className="v3-bento-feed" accent="amber">
            <div className="v3-card-head"><span>BUILD LOG</span><span>03 SYSTEMS</span></div>
            <div className="v3-animated-list">
              {updates.map(([name, detail, state], index) => (
                <div key={name} style={{ "--list-delay": `${index * 1.4}s` } as React.CSSProperties}>
                  <i>{String(index + 1).padStart(2, "0")}</i><p><strong>{name}</strong><span>{detail}</span></p><em>{state}</em>
                </div>
              ))}
            </div>
          </BentoCard>
        </BentoGrid>
      </section>

      <section className="v3-stack" id="stack">
        <header className="v3-heading">
          <div><span>02 / CAPACIDADES</span><i /></div>
          <h2>Un stack amplio.<br /><span>Una sola visión.</span></h2>
          <p>Elijo la herramienta por el problema: interfaces, APIs, datos, mensajería y despliegue.</p>
        </header>
        <div className="v3-stack-beam">
          <div className="v3-node">UI</div><div className="v3-node">API</div><div className="v3-node">DATA</div>
          <AnimatedBeam />
        </div>
        <div className="v3-stack-grid">
          {stack.map((group) => (
            <article className={`v3-stack-card ${group.tone}`} key={group.title}>
              <div><span>{group.title}</span><i>{String(group.items.length).padStart(2, "0")}</i></div>
              <TechCloud items={group.items} />
            </article>
          ))}
        </div>
      </section>

      <section className="v3-about">
        <p>“No solo construyo pantallas. Conecto producto, lógica, datos e infraestructura para entregar <em>sistemas completos.</em>”</p>
        <div><span>PRODUCT THINKING</span><span>FULL STACK DELIVERY</span><span>PRODUCTION MINDSET</span></div>
      </section>

      <section className="v3-contact" id="contacto">
        <Meteors number={10} />
        <span className="v3-contact-label">03 / HABLEMOS</span>
        <h2>¿Construimos<br /><AuroraText className="v3-serif">algo increíble?</AuroraText></h2>
        <p>Busco colaborar en productos donde una buena interfaz y una ingeniería sólida importen de verdad.</p>
        <a href="mailto:" className="v3-contact-button">Iniciar conversación <ArrowUpRightIcon className="v3-button-icon" /></a>
        <div className="v3-socials" aria-label="Redes sociales">
          <button type="button" className="v3-social-icon" aria-label="Correo — enlace pendiente" title="Correo · enlace pendiente" disabled>
            <MailIcon className="v3-social-svg" />
          </button>
          <button type="button" className="v3-social-icon linkedin" aria-label="LinkedIn — enlace pendiente" title="LinkedIn · enlace pendiente" disabled>
            <LinkedInIcon className="v3-social-svg" />
          </button>
          <button type="button" className="v3-social-icon github" aria-label="GitHub — enlace pendiente" title="GitHub · enlace pendiente" disabled>
            <GitHubIcon className="v3-social-svg" />
          </button>
        </div>
      </section>

      <footer className="v3-footer"><span>LUIS ARTURO © 2026</span><span>DESIGNED & BUILT WITH REACT</span><a href="#inicio">VOLVER ARRIBA <ArrowUpIcon className="v3-inline-icon" /></a></footer>

      <Dock>
        <DockIcon href="#inicio" label="Inicio"><HomeIcon className="v3-dock-svg" /></DockIcon>
        <DockIcon href="#proyectos" label="Proyectos"><GridIcon className="v3-dock-svg" /></DockIcon>
        <DockIcon href="#stack" label="Tecnologías"><TerminalIcon className="v3-dock-svg" /></DockIcon>
        <span className="v3-dock-divider" />
        <DockIcon href="https://docauth.app/" label="Abrir DocAuth"><ArrowUpRightIcon className="v3-dock-svg" /></DockIcon>
        <DockIcon href="#contacto" label="Contacto"><MailIcon className="v3-dock-svg" /></DockIcon>
      </Dock>
    </main>
  );
}
