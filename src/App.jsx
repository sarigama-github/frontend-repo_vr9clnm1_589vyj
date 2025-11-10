import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDownRight, ExternalLink } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function useScrolled() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return scrolled
}

const projects = [
  {
    title: 'Realtime Collab Editor',
    desc: 'Operational transforms, CRDTs, and websockets with a sleek React UI.',
    tags: ['React', 'Node', 'WebSocket', 'CRDT'],
    link: '#',
  },
  {
    title: 'E‑commerce Microservices',
    desc: 'Event-driven services with saga orchestration and MongoDB.',
    tags: ['FastAPI', 'MongoDB', 'Kafka', 'Docker'],
    link: '#',
  },
  {
    title: 'AI Image Pipeline',
    desc: 'Async workers for ingestion, tagging, and retrieval over vector DB.',
    tags: ['Python', 'FastAPI', 'Celery', 'Vector DB'],
    link: '#',
  },
]

export default function App() {
  const scrolled = useScrolled()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Global scroll progress
  const progressRef = useRef(null)
  const { scrollYProgress } = useScroll({ container: progressRef })
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  // Hero parallax
  const heroRef = useRef(null)
  const { scrollYProgress: heroProg } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(heroProg, [0, 1], [0, -60])
  const heroOpacity = useTransform(heroProg, [0, 1], [1, 0.7])

  return (
    <div ref={progressRef} className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Scroll progress bar */}
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] bg-white/70" />

      {/* Navbar */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-black/60 border-b border-white/10' : 'bg-transparent'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <button onClick={() => scrollTo('hero')} className="font-semibold tracking-tight text-lg text-white">
              <span className="align-middle">flames.blue</span>
            </button>
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollTo('work')} className="text-sm text-white/70 hover:text-white transition">Work</button>
              <button onClick={() => scrollTo('about')} className="text-sm text-white/70 hover:text-white transition">About</button>
              <button onClick={() => scrollTo('skills')} className="text-sm text-white/70 hover:text-white transition">Skills</button>
              <button onClick={() => scrollTo('contact')} className="text-sm text-white/70 hover:text-white transition">Contact</button>
              <a href="/test" className="text-sm text-white/40 hover:text-white/70">/test</a>
            </nav>
            <div className="flex items-center gap-2">
              <a aria-label="GitHub" href="#" className="p-2 rounded-full hover:bg-white/10 transition"><Github size={18} /></a>
              <a aria-label="LinkedIn" href="#" className="p-2 rounded-full hover:bg-white/10 transition"><Linkedin size={18} /></a>
              <a aria-label="Email" href="#contact" className="p-2 rounded-full hover:bg-white/10 transition"><Mail size={18} /></a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" ref={heroRef} className="relative h-[100svh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Mono gradient overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black"></div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
              Full‑stack developer crafting fast, playful, human software
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, delay: 0.1 }} className="mt-4 text-white/70 text-lg">
              I design and build end‑to‑end experiences — from resilient backends to fluid, interactive interfaces.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, delay: 0.2 }} className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => scrollTo('work')} className="group inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full text-sm font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.2)] hover:shadow-[0_6px_40px_rgba(255,255,255,0.15)] transition">
                View selected work
                <ArrowDownRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </button>
              <button onClick={() => scrollTo('contact')} className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border border-white/20 hover:bg-white/10 transition">
                Get in touch
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Divider line */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Work */}
      <section id="work" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Selected work</h2>
            <a href="#" className="text-sm text-white/70 hover:text-white inline-flex items-center gap-1">All projects <ExternalLink size={16} /></a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.a
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                href={p.link}
                className="group relative rounded-2xl border border-white/10 p-6 bg-white/0 backdrop-blur-[0px] hover:bg-white/5 hover:backdrop-blur-md transition overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition" aria-hidden>
                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
                </div>
                <div className="relative">
                  <h3 className="font-semibold text-lg tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/80 border border-white/10">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-stretch">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              I’m a product‑minded full‑stack developer focused on performance, craft, and delightful details.
              I partner with teams to ship ambitious products quickly without compromising quality.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <Stat kpi="7+" label="years" />
              <Stat kpi="40+" label="projects" />
              <Stat kpi="<200ms" label="TTI targets" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-2xl border border-white/10 p-8 bg-white/0">
            <ul className="relative space-y-4 text-sm text-white/80">
              <li>• End‑to‑end ownership from idea to production</li>
              <li>• Strong foundations in networks, data, and concurrency</li>
              <li>• Accessibility and motion as first‑class UX concerns</li>
              <li>• DX focus: clean APIs, tests, docs, and observability</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Skills</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <SkillCard title="Frontend" items={["React", "Vite", "Tailwind", "Framer Motion", "Radix UI"]} />
            <SkillCard title="Backend" items={["FastAPI", "Node", "MongoDB", "Kafka", "Redis"]} />
            <SkillCard title="Ops & QA" items={["Docker", "CI/CD", "Playwright", "Sentry", "Grafana"]} />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 p-8 sm:p-10 bg-white/0">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Let’s build something great</h2>
            <p className="mt-3 text-white/70">Email me or drop a note — I usually reply within a day.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full text-sm font-medium">
                Email <Mail size={16} />
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border border-white/20 hover:bg-white/10">
                GitHub <Github size={16} />
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border border-white/20 hover:bg-white/10">
                LinkedIn <Linkedin size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} flames.blue — Crafted with care.
      </footer>
    </div>
  )
}

function Stat({ kpi, label }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/0 p-4 text-center">
      <div className="text-2xl font-semibold tracking-tight">{kpi}</div>
      <div className="text-xs uppercase tracking-wider text-white/50">{label}</div>
    </div>
  )
}

function SkillCard({ title, items }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 p-6 bg-white/0">
      <h3 className="font-semibold tracking-tight">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((i) => (
          <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/80 border border-white/10">{i}</span>
        ))}
      </div>
    </motion.div>
  )
}
