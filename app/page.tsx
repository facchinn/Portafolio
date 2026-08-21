'use client'

import { motion } from 'framer-motion'

const navItems = [
  ['Inicio', '#inicio'],
  ['Sobre mí', '#sobre-mi'],
  ['Experiencia', '#experiencia'],
  ['Proyectos', '#proyectos'],
  ['Stack', '#stack'],
  ['Contacto', '#contacto'],
]

const stack = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express',
  'MySQL',
  'MongoDB',
  'REST APIs',
  'Git',
  'GitHub',
  'Azure',
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55 },
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.54 9.54 0 0 1 12 6.7c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 8.5H3.2V21h3.3V8.5ZM4.85 3A1.92 1.92 0 1 0 4.86 6.84 1.92 1.92 0 0 0 4.85 3ZM21 13.84c0-3.76-2-5.5-4.69-5.5-2.16 0-3.13 1.19-3.67 2.02V8.5H9.35V21h3.29v-6.2c0-1.64.31-3.23 2.34-3.23 2 0 2.03 1.87 2.03 3.34V21H21v-7.16Z" />
    </svg>
  )
}

export default function Home() {
  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#inicio" aria-label="Ir al inicio">
            NF<span>.</span>
          </a>
          <div className="nav-links">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
          <a className="nav-cta" href="#contacto">
            Hablemos
          </a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="container hero-inner">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="status-pill">
              <span /> Disponible para nuevas oportunidades
            </div>
            <p className="eyebrow">Hola, soy Nazareno Facchin</p>
            <h1>
              Desarrollo productos web <span>de punta a punta.</span>
            </h1>
            <p className="hero-text">
              Full Stack Developer enfocado en crear aplicaciones claras, rápidas y mantenibles,
              trabajando desde la interfaz hasta el backend, la base de datos y producción.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#proyectos">
                Ver proyectos <ArrowIcon />
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/facchinn"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon /> GitHub
              </a>
              <a
                className="button button-secondary"
                href="https://www.linkedin.com/in/nazafacchin"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-panel"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="window-bar">
              <span />
              <span />
              <span />
              <small>portfolio.tsx</small>
            </div>
            <div className="code-card">
              <p><b>const</b> developer = {'{'}</p>
              <p className="indent">name: <i>&apos;Nazareno Facchin&apos;</i>,</p>
              <p className="indent">role: <i>&apos;Full Stack Developer&apos;</i>,</p>
              <p className="indent">focus: [</p>
              <p className="indent-two"><i>&apos;Frontend&apos;</i>, <i>&apos;Backend&apos;</i>,</p>
              <p className="indent-two"><i>&apos;Databases&apos;</i>, <i>&apos;Production&apos;</i></p>
              <p className="indent">],</p>
              <p className="indent">experience: <strong>&apos;5+ years&apos;</strong></p>
              <p>{'}'}</p>
            </div>
            <div className="panel-footer">
              <span>React</span><span>Next.js</span><span>Node.js</span><span>TypeScript</span>
            </div>
          </motion.div>
        </div>

        <div className="container stats-row">
          <div><strong>5+</strong><span>años en tecnología</span></div>
          <div><strong>Full Stack</strong><span>frontend + backend</span></div>
          <div><strong>7 ECTS</strong><span>University of Helsinki</span></div>
        </div>
      </section>

      <section className="section" id="sobre-mi">
        <div className="container two-col">
          <motion.div {...fadeUp}>
            <p className="section-kicker">01 · Sobre mí</p>
            <h2>Software, producto y resolución de problemas.</h2>
          </motion.div>
          <motion.div className="about-copy" {...fadeUp}>
            <p>
              Soy desarrollador Full Stack con experiencia en desarrollo web, automatización e
              infraestructura tecnológica. Me gusta entender el problema completo antes de escribir
              código y construir soluciones que funcionen bien también después del deploy.
            </p>
            <p>
              Trabajo con frontend, backend, APIs, bases de datos e integraciones. Mi base técnica en
              hardware y automatización me permite mirar los proyectos desde una perspectiva más amplia
              que solamente la interfaz.
            </p>
            <div className="mini-tags">
              <span>Argentina</span><span>Trabajo remoto</span><span>Open to work</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section section-muted" id="experiencia">
        <div className="container">
          <motion.div className="section-heading" {...fadeUp}>
            <p className="section-kicker">02 · Experiencia</p>
            <h2>Experiencia profesional.</h2>
            <p>Desarrollo web aplicado a productos reales y sistemas de producción.</p>
          </motion.div>

          <div className="timeline">
            <motion.article className="timeline-item" {...fadeUp}>
              <div className="timeline-date">2021 — Actualidad</div>
              <div className="timeline-content">
                <p className="role">Desarrollador Web Full Stack</p>
                <h3>SCA — Sistemas, Control y Automatización</h3>
                <p>
                  Desarrollo y mantenimiento de aplicaciones web para proyectos de automatización y
                  optimización de procesos. Trabajo en frontend, backend, bases de datos, integraciones,
                  sistemas internos e infraestructura tecnológica.
                </p>
                <div className="mini-tags">
                  <span>JavaScript</span><span>TypeScript</span><span>MySQL</span><span>Azure</span>
                </div>
              </div>
            </motion.article>

            <motion.article className="timeline-item" {...fadeUp}>
              <div className="timeline-date">Proyecto actual</div>
              <div className="timeline-content">
                <p className="role">Full Stack Developer · Freelance</p>
                <h3>Plan V</h3>
                <p>
                  Participación en el desarrollo y mejora continua de una plataforma de viajes en
                  producción: frontend, backend, MySQL, reservas, disponibilidad, integraciones,
                  despliegues y resolución de incidencias.
                </p>
                <div className="mini-tags">
                  <span>Next.js</span><span>React</span><span>Node.js</span><span>MySQL</span>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="section" id="proyectos">
        <div className="container">
          <motion.div className="section-heading" {...fadeUp}>
            <p className="section-kicker">03 · Proyectos</p>
            <h2>Trabajo seleccionado.</h2>
            <p>Proyectos que muestran producto, desarrollo full stack y trabajo en producción.</p>
          </motion.div>

          <div className="projects-grid">
            <motion.article className="project-card project-featured" {...fadeUp}>
              <div className="project-info">
                <div className="project-topline"><span>Proyecto en producción</span><span>01</span></div>
                <h3>Plan V</h3>
                <p>
                  Plataforma de experiencias y viajes. Trabajo full stack sobre funcionalidades,
                  reservas, disponibilidad, base de datos, integraciones y mantenimiento productivo.
                </p>
                <div className="mini-tags">
                  <span>Next.js</span><span>React</span><span>TypeScript</span><span>Node.js</span><span>MySQL</span>
                </div>
                <div className="project-links">
                  <a href="https://www.planificacionv.com/" target="_blank" rel="noreferrer">
                    Ver sitio <ArrowIcon />
                  </a>
                  <span className="private-label">Código privado</span>
                </div>
              </div>
            </motion.article>

            <motion.article className="project-card" {...fadeUp}>
              <div className="project-code-visual">
                <div><span>01</span><b>React</b></div>
                <div><span>02</span><b>Node.js</b></div>
                <div><span>03</span><b>Testing</b></div>
                <div><span>04</span><b>State</b></div>
              </div>
              <div className="project-info">
                <div className="project-topline"><span>Formación técnica</span><span>02</span></div>
                <h3>Full Stack Open</h3>
                <p>
                  Implementaciones y ejercicios del programa de desarrollo web moderno de la University
                  of Helsinki, completado hasta Part 7 con 7 ECTS y calificación 5/5.
                </p>
                <div className="mini-tags">
                  <span>React</span><span>Node.js</span><span>MongoDB</span><span>Playwright</span><span>Zustand</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/facchinn/full-stack-open" target="_blank" rel="noreferrer">
                    Ver repositorio <ArrowIcon />
                  </a>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="stack">
        <div className="container">
          <motion.div className="section-heading" {...fadeUp}>
            <p className="section-kicker">04 · Stack</p>
            <h2>Herramientas que uso.</h2>
            <p>El stack cambia según el problema; estas son las tecnologías con las que más trabajo.</p>
          </motion.div>
          <motion.div className="stack-grid" {...fadeUp}>
            {stack.map((item, index) => (
              <div className="stack-item" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section" id="formacion">
        <div className="container education-card">
          <motion.div {...fadeUp}>
            <p className="section-kicker">05 · Formación</p>
            <h2>Full Stack Open</h2>
            <p className="education-school">University of Helsinki</p>
          </motion.div>
          <motion.div className="education-result" {...fadeUp}>
            <div><strong>7</strong><span>ECTS</span></div>
            <div><strong>5/5</strong><span>Grade</span></div>
            <p>
              React, Node.js, APIs REST, autenticación, testing, state management y arquitectura de
              aplicaciones full stack.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="container contact-inner">
          <motion.div {...fadeUp}>
            <p className="section-kicker">06 · Contacto</p>
            <h2>¿Construimos algo juntos?</h2>
            <p>
              Estoy abierto a oportunidades Full Stack, Frontend y Backend, tanto en equipos de producto
              como en proyectos donde pueda aportar de punta a punta.
            </p>
          </motion.div>
          <motion.div className="contact-actions" {...fadeUp}>
            <a href="https://www.linkedin.com/in/nazafacchin" target="_blank" rel="noreferrer">
              LinkedIn <ArrowIcon />
            </a>
            <a href="https://github.com/facchinn" target="_blank" rel="noreferrer">
              GitHub <ArrowIcon />
            </a>
          </motion.div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <span>© 2026 Nazareno Facchin</span>
          <span>Full Stack Developer · Argentina</span>
        </div>
      </footer>
    </main>
  )
}
