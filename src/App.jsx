import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDownRight, ExternalLink, Sparkles } from 'lucide-react'
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

  return (
    <div className="min-h-screen text-gray-900">
      {/* Navbar */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-white/70 border-b border-black/5' : 'bg-transparent'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <button onClick={() => scrollTo('hero')} className="font-semibold tracking-tight text-lg">
              <span className="align-middle">flames.blue</span>
              <Sparkles className="inline ml-2 text-amber-500" size={18} />
            </button>
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollTo('work')} className="text-sm text-gray-600 hover:text-gray-900">Work</button>
              <button onClick={() => scrollTo('about')} className="text-sm text-gray-600 hover:text-gray-900">About</button>
              <button onClick={() => scrollTo('skills')} className="text-sm text-gray-600 hover:text-gray-900">Skills</button>
              <button onClick={() => scrollTo('contact')} className="text-sm text-gray-600 hover:text-gray-900">Contact</button>
              <a href="/test" className="text-sm text-gray-400 hover:text-gray-700">/test</a>
            </nav>
            <div className="flex items-center gap-3">
              <a aria-label="GitHub" href="#" className="p-2 rounded-full hover:bg-black/5"><Github size={18} /></a>
              <a aria-label="LinkedIn" href="#" className="p-2 rounded-full hover:bg-black/5"><Linkedin size={18} /></a>
              <a aria-label="Email" href="#contact" className="p-2 rounded-full hover:bg-black/5"><Mail size={18} /></a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative h-[100svh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Soft gradient overlays for depth without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
              Full‑stack developer crafting fast, playful, human software
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, delay: 0.1 }} className="mt-4 text-gray-600 text-lg">
              I design and build end‑to‑end experiences — from resilient backends to fluid, interactive interfaces.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, delay: 0.2 }} className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => scrollTo('work')} className="group inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition">
                View selected work
                <ArrowDownRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </button>
              <button onClick={() => scrollTo('contact')} className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border border-black/10 hover:bg-black/5 transition">
                Get in touch
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Selected work</h2>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center gap-1">All projects <ExternalLink size={16} /></a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.a
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                href={p.link}
                className="group relative rounded-2xl border border-black/5 p-6 bg-white shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br from-purple-200 to-blue-200 blur-2xl opacity-50 group-hover:opacity-70 transition" />
                <div className="relative">
                  <h3 className="font-semibold text-lg tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-black/5">{t}</span>
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I’m a product‑minded full‑stack developer focused on performance, craft, and delightful details.
              I partner with teams to ship ambitious products quickly without compromising quality.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <Stat kpi="7+" label="years" />
              <Stat kpi="40+" label="projects" />
              <Stat kpi="<200ms" label="TTI targets" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-2xl border border-black/5 p-8 bg-white shadow-sm">
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-gradient-to-tr from-fuchsia-200 to-cyan-200 blur-2xl opacity-60" />
            <ul className="relative space-y-4 text-sm text-gray-700">
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
          <div className="rounded-2xl border border-black/5 p-8 sm:p-10 bg-white shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Let’s build something great</h2>
            <p className="mt-3 text-gray-600">Email me or drop a note — I usually reply within a day.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full text-sm font-medium">
                Email <Mail size={16} />
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border border-black/10 hover:bg-black/5">
                GitHub <Github size={16} />
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border border-black/10 hover:bg-black/5">
                LinkedIn <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} flames.blue — Crafted with care.
      </footer>
    </div>
  )
}

function Stat({ kpi, label }) {
  return (
    <div className="rounded-xl border border-black/5 bg-white p-4 text-center shadow-sm">
      <div className="text-2xl font-semibold tracking-tight">{kpi}</div>
      <div className="text-xs uppercase tracking-wider text-gray-500">{label}</div>
    </div>
  )
}

function SkillCard({ title, items }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-black/5 p-6 bg-white shadow-sm">
      <h3 className="font-semibold tracking-tight">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((i) => (
          <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-black/5">{i}</span>
        ))}
      </div>
    </motion.div>
  )
}
