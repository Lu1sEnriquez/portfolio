import type { Metadata } from "next";
import { AnimatedBeam } from "../../components/magicui/animated-beam";
import { AuroraText } from "../../components/magicui/aurora-text";
import { BentoCard, BentoGrid } from "../../components/magicui/bento-grid";
import { Dock, DockIcon } from "../../components/magicui/dock";
import { Meteors } from "../../components/magicui/meteors";
import { Particles } from "../../components/magicui/particles";
import { ShineBorder } from "../../components/magicui/shine-border";
import { CopyEmailButton } from "../../components/copy-email-button";
import {
  ArrowDownRightIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
  CheckIcon,
  CopyIcon,
  FileTextIcon,
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
      ["React", "react", "61DAFB"], ["Next.js", "nextdotjs", "FFFFFF"], ["Angular", "angular", "DD0031"],
      ["Astro", "astro", "BC52EE"], ["Zustand", "react", "474747"], ["Tailwind", "tailwindcss", "06B6D4"],
      ["TypeScript", "typescript", "3178C6"], ["JavaScript", "javascript", "F7DF1E"],
    ],
  },
  {
    title: "Backend & APIs",
    tone: "violet",
    items: [
      ["Java", "openjdk", "FFFFFF"], ["Spring", "spring", "6DB33F"], ["C#", "/icons/csharp.svg", "239120"],
      ["ASP.NET", "dotnet", "512BD4"], ["Python", "python", "3776AB"], ["Node.js", "nodedotjs", "5FA04E"],
      ["NestJS", "nestjs", "E0234E"], ["Express", "express", "FFFFFF"],
    ],
  },
  {
    title: "Datos & Eventos",
    tone: "blue",
    items: [
      ["PostgreSQL", "postgresql", "4169E1"], ["SQL Server", "/icons/sqlserver.svg", "CC292B"], ["MySQL", "mysql", "4479A1"],
      ["MongoDB", "mongodb", "47A248"], ["Redis", "redis", "FF4438"], ["InfluxDB", "influxdb", "22ADF6"],
      ["RabbitMQ", "rabbitmq", "FF6600"], ["Mosquitto", "eclipsemosquitto", "3C5280"],
    ],
  },
  {
    title: "Cloud & DevOps",
    tone: "amber",
    items: [
      ["Linux / VPS", "linux", "FCC624"], ["AWS", "/icons/aws.svg", "FFFFFF"], ["Docker", "docker", "2496ED"],
      ["S3 / R2", "cloudflare", "F38020"], ["Vercel", "vercel", "FFFFFF"], ["Sentry", "sentry", "362D59"],
      ["Git", "git", "F05032"],
    ],
  },
] as const;

function TechCloud({ items }: { items: readonly (readonly [string, string, string])[] }) {
  return (
    <div className="v3-tech-cloud">
      {items.map(([name, slug, color]) => {
        const isLocal = slug.endsWith(".svg");
        const src = isLocal ? slug : `https://cdn.simpleicons.org/${slug}/${color}`;
        return (
          <span className="v3-tech" key={name}>
            <img src={src} alt="" width="24" height="24" loading="lazy" />
            {name}
          </span>
        );
      })}
    </div>
  );
}

const updates = [
  ["DocAuth", "Verificación on-chain sub-segundo y credenciales criptográficas QR", "LIVE"],
  ["Eni Networks", "Monitoreo en tiempo real y optimización de despacho técnico (-35%)", "PRIVATE"],
  ["CAICH · ITSON", "Autoservicio clínico institucional, agenda y control de acceso RBAC", "PRIVATE"],
] as const;

export default function PortfolioV3() {
  return (
    <main className="v3-page" id="inicio">
      <Particles quantity={86} />
      <div className="v3-aurora" aria-hidden="true" />
      <nav className="v3-topbar" aria-label="Navegación principal">
        <a className="v3-logo" href="#inicio"><span>LE</span><i /></a>
        <div className="v3-top-links">
          <a href="#proyectos">Proyectos</a><a href="#stack">Stack</a><a href="#contacto">Contacto</a><a href="/cv/CV-Luis-Arturo-Enriquez.pdf" target="_blank" rel="noopener noreferrer">CV</a>
        </div>
        <div className="v3-site-status"><span /> PORTFOLIO / 2026</div>
      </nav>

      <section className="v3-hero">
        <Meteors number={16} />
        <div className="v3-hero-copy">
          <div className="v3-availability"><span /> Disponible para nuevos retos</div>
          <p className="v3-kicker">FULL STACK ENGINEER · MÉXICO / REMOTO</p>
          <h1>Construyo productos<br /><AuroraText className="v3-serif">de punta a punta.</AuroraText></h1>
          <p className="v3-intro">Software Engineer especializado en arquitecturas web distribuidas, telemetría y plataformas operativas en tiempo real. Combino frontend de alta fidelidad, backends escalables (Spring Boot, NestJS) e infraestructura en producción para resolver problemas complejos de negocio.</p>
          <div className="v3-hero-actions">
            <a className="v3-primary" href="#proyectos">Explorar mi trabajo <ArrowDownRightIcon className="v3-button-icon" /></a>
            <a className="v3-secondary" href="/cv/CV-Luis-Arturo-Enriquez.pdf" target="_blank" rel="noopener noreferrer">Ver CV <FileTextIcon className="v3-button-icon" /></a>
            <a className="v3-secondary" href="https://docauth.app/" target="_blank" rel="noopener noreferrer">DocAuth <ArrowUpRightIcon className="v3-button-icon" /></a>
          </div>
          <div className="v3-runtime"><span>Actualmente</span><code>React · Spring · PostgreSQL · Vercel / VPS</code></div>
        </div>

        <aside className="v3-profile-card">
          <ShineBorder />
          <div className="v3-profile-top"><span>PROFILE_01</span><span className="v3-live">● ONLINE</span></div>
          <div className="v3-photo"><img src="/perfil.png" alt="Retrato de Luis Arturo" width="480" height="560" /></div>
          <div className="v3-profile-data">
            <p>Luis Arturo</p><span>Full Stack Engineer</span>
            <dl><div><dt>FOCUS</dt><dd>Real-time systems</dd></div><div><dt>STACK</dt><dd>Spring · React · Nest</dd></div></dl>
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
              <p>Diseñé y desarrollé una plataforma para emitir, aprobar y verificar documentos digitales con QR, evidencia criptográfica y validación on-chain.</p>
              <ul><li>Next.js · Magic UI</li><li>PostgreSQL · Redis</li><li>Vercel · VPS</li></ul>
            </div>
            <figure className="v3-docauth-visual"><img src="/projects/docauth/docauth-certificado.png" alt="Certificado verificable generado por DocAuth" width="1200" height="840" /></figure>
            <a className="v3-project-open" href="#docauth-detail" aria-label="Ver caso de estudio de DocAuth"><span>VER CASO <ArrowUpRightIcon className="v3-inline-icon" /></span></a>
          </BentoCard>

          <BentoCard className="v3-bento-eni" accent="cyan">
            <div className="v3-card-head"><span>FIELD OPS / PRIVATE</span><span>02</span></div>
            <figure><img src="/projects/eninetworks/zones-dashboard.png" alt="Panel geográfico de seguimiento y zonas de Eni Networks" width="1200" height="675" loading="lazy" /></figure>
            <div className="v3-project-copy"><h3>Eni Networks</h3><p>Desarrollé un panel para instalaciones, técnicos en ruta, ubicación en tiempo real y zonas KML / KMZ sobre mapa.</p><div><span>Angular Material</span><span>Spring · Sockets</span><span>Leaflet</span></div></div>
            <a className="v3-project-open" href="#eni-detail" aria-label="Ver caso de estudio de Eni Networks"><span>VER CASO <ArrowUpRightIcon className="v3-inline-icon" /></span></a>
          </BentoCard>

          <BentoCard className="v3-bento-caich" accent="violet">
            <div className="v3-card-head"><span>ITSON / PRIVATE</span><span>03</span></div>
            <figure className="v3-caich-showcase">
              <img className="v3-caich-main" src="/projects/caich/caich-3.png" alt="Calendario real de CAICH con disponibilidad y reservas de cubículos" width="2542" height="1255" loading="lazy" />
              <div className="v3-caich-thumbs" aria-label="Otras pantallas de CAICH">
                <img src="/projects/caich/caich-1.png" alt="Página principal de CAICH" width="2521" height="1267" loading="lazy" />
                <img src="/projects/caich/caich-2.png" alt="Pantalla de inicio de sesión de CAICH" width="2550" height="1261" loading="lazy" />
              </div>
              <figcaption>03 pantallas reales</figcaption>
            </figure>
            <div className="v3-project-copy"><h3>CAICH</h3><p>Implementé un sistema clínico universitario con agenda, reserva de cubículos, monedero y acceso diferenciado por perfil.</p><div><span>Agenda</span><span>Cubículos</span><span>Acceso por rol</span></div></div>
            <a className="v3-project-open" href="#caich-detail" aria-label="Ver caso de estudio de CAICH"><span>VER CASO <ArrowUpRightIcon className="v3-inline-icon" /></span></a>
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

      <section className="v3-project-modal" id="docauth-detail" aria-label="Caso de estudio DocAuth">
        <a className="v3-modal-backdrop" href="#proyectos" aria-label="Cerrar caso de estudio" />
        <article className="v3-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="docauth-title">
          <a className="v3-modal-close" href="#proyectos">CERRAR <span>×</span></a>
          <div className="v3-modal-copy">
            <span>01 / FLAGSHIP · LIVE</span>
            <h2 id="docauth-title">DocAuth</h2>
            <p>Una plataforma de confianza digital que convierte documentos en credenciales verificables. Diseñé el flujo completo de emisión, aprobación y consulta mediante QR, evidencia criptográfica y validación on-chain; también integré analítica, observabilidad e IA para hacer el producto más útil y confiable.</p>
            <div className="v3-modal-metrics">
              <div><strong>&lt; 1s</strong><span>Validación QR & on-chain</span></div>
              <div><strong>100%</strong><span>Trazabilidad auditable</span></div>
              <div><strong>99.9%</strong><span>Uptime con Sentry + PostHog</span></div>
            </div>
            <div className="v3-modal-tags">
              <span>Next.js</span><span>PostgreSQL</span><span>Redis</span><span>Magic UI</span><span>shadcn/ui</span><span>Konva.js</span><span>CSS</span><span>Sentry</span><span>PostHog</span><span>Vercel</span><span>VPS / Linux</span><span>IA</span>
            </div>
            <a className="v3-modal-live" href="https://docauth.app/" target="_blank" rel="noopener noreferrer">Ver producto en vivo <ArrowUpRightIcon className="v3-inline-icon" /></a>
          </div>
          <div className="v3-modal-visual docauth"><figure><img src="/projects/docauth/docauth-certificado.png" alt="Credencial verificable emitida desde DocAuth" width="1200" height="840" /></figure><p>Emisión y verificación de credenciales digitales</p></div>
        </article>
      </section>

      <section className="v3-project-modal" id="eni-detail" aria-label="Caso de estudio Eni Networks">
        <a className="v3-modal-backdrop" href="#proyectos" aria-label="Cerrar caso de estudio" />
        <article className="v3-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="eni-title">
          <a className="v3-modal-close" href="#proyectos">CERRAR <span>×</span></a>
          <div className="v3-modal-copy">
            <span>02 / FIELD OPS · PRIVATE</span>
            <h2 id="eni-title">Eni Networks</h2>
            <p>Panel operativo para visibilidad y coordinación de cuadrillas e instalaciones técnicas en campo. Implementé seguimiento por sockets y geolocalización en tiempo real sobre capas KML / KMZ, integrando notificaciones automáticas al cliente final vía WhatsApp Business API.</p>
            <div className="v3-modal-metrics">
              <div><strong>-35%</strong><span>Tiempo de despacho en campo</span></div>
              <div><strong>Real-time</strong><span>Tracking sockets & Leaflet/KML</span></div>
              <div><strong>Auto</strong><span>Alertas vía WhatsApp API</span></div>
            </div>
            <div className="v3-modal-tags">
              <span>Angular</span><span>Angular Material</span><span>Java</span><span>Spring</span><span>WebSockets</span><span>Leaflet</span><span>KML / KMZ</span><span>Ubicación en tiempo real</span><span>PostgreSQL</span><span>VPS / Linux</span>
            </div>
            <p className="v3-modal-note">Proyecto privado — las capturas muestran la interfaz sin exponer datos sensibles.</p>
          </div>
          <div className="v3-modal-visual">
            <div className="v3-carousel" aria-label="Capturas de Eni Networks">
              <input type="radio" name="eni-slides" id="eni-slide-1" defaultChecked /><input type="radio" name="eni-slides" id="eni-slide-2" /><input type="radio" name="eni-slides" id="eni-slide-3" /><input type="radio" name="eni-slides" id="eni-slide-4" />
              <div className="v3-carousel-viewport"><div className="v3-carousel-rail">
                <figure><img className="v3-carousel-image" src="/projects/eninetworks/zones-dashboard.png" alt="Panel de control de zonas de Eni Networks" width="1672" height="941" /></figure>
                <figure><img className="v3-carousel-image" src="/projects/eninetworks/tracking-1.png" alt="Seguimiento de instalación de Eni Networks" width="377" height="769" /></figure>
                <figure><img className="v3-carousel-image" src="/projects/eninetworks/tracking-2.png" alt="Estado de operación de Eni Networks" width="377" height="769" /></figure>
                <figure><img className="v3-carousel-image" src="/projects/eninetworks/tracking-3.png" alt="Actualización técnica de Eni Networks" width="377" height="769" /></figure>
              </div></div>
              <div className="v3-carousel-nav" aria-label="Elegir captura"><label htmlFor="eni-slide-1"><img src="/projects/eninetworks/zones-dashboard.png" alt="" /><span>Zonas</span></label><label htmlFor="eni-slide-2"><img src="/projects/eninetworks/tracking-1.png" alt="" /><span>Instalación</span></label><label htmlFor="eni-slide-3"><img src="/projects/eninetworks/tracking-2.png" alt="" /><span>Ruta</span></label><label htmlFor="eni-slide-4"><img src="/projects/eninetworks/tracking-3.png" alt="" /><span>Visita</span></label></div>
            </div>
          </div>
        </article>
      </section>

      <section className="v3-project-modal" id="caich-detail" aria-label="Caso de estudio CAICH">
        <a className="v3-modal-backdrop" href="#proyectos" aria-label="Cerrar caso de estudio" />
        <article className="v3-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="caich-title">
          <a className="v3-modal-close" href="#proyectos">CERRAR <span>×</span></a>
          <div className="v3-modal-copy">
            <span>03 / ITSON · PRIVATE</span>
            <h2 id="caich-title">CAICH</h2>
            <p>Sistema clínico universitario integral que reúne agenda médica, reserva de cubículos, monedero digital y control de acceso por roles. Construí una experiencia de autoservicio para estudiantes y una operación ordenada para administración, eliminando solapamientos de turnos en espacios clínicos de alta demanda.</p>
            <div className="v3-modal-metrics">
              <div><strong>100%</strong><span>Autoservicio en reservas</span></div>
              <div><strong>0</strong><span>Solapamientos en agenda</span></div>
              <div><strong>RBAC</strong><span>Roles, permisos y monedero</span></div>
            </div>
            <div className="v3-modal-tags">
              <span>Angular</span><span>Java</span><span>SQL</span><span>Acceso por rol</span>
            </div>
            <p className="v3-modal-note">Proyecto privado realizado para el entorno universitario.</p>
          </div>
          <div className="v3-modal-visual">
            <div className="v3-carousel" aria-label="Capturas de CAICH">
              <input type="radio" name="caich-slides" id="caich-slide-1" defaultChecked /><input type="radio" name="caich-slides" id="caich-slide-2" /><input type="radio" name="caich-slides" id="caich-slide-3" />
              <div className="v3-carousel-viewport"><div className="v3-carousel-rail">
                <figure><img className="v3-carousel-image" src="/projects/caich/caich-3.png" alt="Calendario de reservas de cubículos de CAICH" width="2542" height="1255" /></figure>
                <figure><img className="v3-carousel-image" src="/projects/caich/caich-1.png" alt="Portal principal de CAICH" width="2521" height="1267" /></figure>
                <figure><img className="v3-carousel-image" src="/projects/caich/caich-2.png" alt="Acceso de usuarios de CAICH" width="2550" height="1261" /></figure>
              </div></div>
              <div className="v3-carousel-nav three" aria-label="Elegir captura"><label htmlFor="caich-slide-1"><img src="/projects/caich/caich-3.png" alt="" /><span>Agenda</span></label><label htmlFor="caich-slide-2"><img src="/projects/caich/caich-1.png" alt="" /><span>Portal</span></label><label htmlFor="caich-slide-3"><img src="/projects/caich/caich-2.png" alt="" /><span>Acceso</span></label></div>
            </div>
          </div>
        </article>
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
        <p>“No solo construyo pantallas. Conecto arquitectura distribuida, telemetría en tiempo real y producto para entregar <em>sistemas robustos en producción.</em>”</p>
        <div><span>PRODUCT THINKING</span><span>REAL-TIME SYSTEMS</span><span>PRODUCTION MINDSET</span></div>
      </section>

      <section className="v3-contact" id="contacto">
        <Meteors number={10} />
        <span className="v3-contact-label">03 / HABLEMOS</span>
        <h2>¿Construimos<br /><AuroraText className="v3-serif">algo increíble?</AuroraText></h2>
        <p>Busco colaborar en productos donde una buena interfaz y una ingeniería sólida importen de verdad.</p>
        <div className="v3-contact-actions">
          <a href="mailto:luis.lavz.2300@gmail.com" className="v3-contact-button">
            Iniciar conversación <ArrowUpRightIcon className="v3-button-icon" />
          </a>
          <CopyEmailButton email="luis.lavz.2300@gmail.com" />
          <a
            href="/cv/CV-Luis-Arturo-Enriquez.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="CV-Luis-Arturo-Enriquez.pdf"
            className="v3-contact-cv-button"
          >
            <FileTextIcon className="v3-button-icon" /> Descargar CV
          </a>
        </div>
        <div className="v3-socials" aria-label="Redes sociales">
          <a
            href="mailto:luis.lavz.2300@gmail.com"
            className="v3-social-icon"
            aria-label="Enviar correo a Luis Arturo"
            title="Correo · luis.lavz.2300@gmail.com"
          >
            <MailIcon className="v3-social-svg" />
          </a>
          <a
            href="https://www.linkedin.com/in/luis-arturo-enriquez-v-966b502b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="v3-social-icon linkedin"
            aria-label="Perfil de LinkedIn de Luis Arturo"
            title="LinkedIn"
          >
            <LinkedInIcon className="v3-social-svg" />
          </a>
          <a
            href="https://github.com/Lu1sEnriquez"
            target="_blank"
            rel="noopener noreferrer"
            className="v3-social-icon github"
            aria-label="Perfil de GitHub de Luis Arturo"
            title="GitHub"
          >
            <GitHubIcon className="v3-social-svg" />
          </a>
        </div>
      </section>

      <footer className="v3-footer"><span>LUIS ARTURO © 2026</span><span>DESIGNED & BUILT WITH REACT</span><a href="#inicio">VOLVER ARRIBA <ArrowUpIcon className="v3-inline-icon" /></a></footer>

      <Dock>
        <DockIcon href="#inicio" label="Inicio"><HomeIcon className="v3-dock-svg" /></DockIcon>
        <DockIcon href="#proyectos" label="Proyectos"><GridIcon className="v3-dock-svg" /></DockIcon>
        <DockIcon href="#stack" label="Tecnologías"><TerminalIcon className="v3-dock-svg" /></DockIcon>
        <span className="v3-dock-divider" />
        <DockIcon href="/cv/CV-Luis-Arturo-Enriquez.pdf" label="Ver CV (PDF)"><FileTextIcon className="v3-dock-svg" /></DockIcon>
        <DockIcon href="https://github.com/Lu1sEnriquez" label="GitHub"><GitHubIcon className="v3-dock-svg" /></DockIcon>
        <DockIcon href="https://www.linkedin.com/in/luis-arturo-enriquez-v-966b502b6/" label="LinkedIn"><LinkedInIcon className="v3-dock-svg" /></DockIcon>
        <DockIcon href="mailto:luis.lavz.2300@gmail.com" label="Contacto"><MailIcon className="v3-dock-svg" /></DockIcon>
      </Dock>
    </main>
  );
}
