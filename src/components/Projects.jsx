import { useEffect, useRef, useState } from 'react';
import { Github, Briefcase, Calendar, MapPin, ExternalLink, Rocket } from 'lucide-react';

/* ─── Timeline data — newest start date first ──────────────────────────── */
const timeline = [
  {
    type: 'venture',
    name: 'ShaadiDesk',
    badge: 'Venture · Live',
    role: 'Co-Founder',
    period: '2026 – Present',
    location: null,
    color: '#f472b6',
    url: 'https://shaadi.rupaiq.in',
    summary: 'Wedding Planning & Guest Management SaaS · Beta v2.0',
    description:
      'A comprehensive wedding planning and guest management SaaS platform built from the ground up. Centralises every aspect of wedding logistics — guests, itineraries, rooms, travel, budgets — with AI-powered features in the pipeline.',
    highlights: [
      'Co-founded and independently architected the product from scratch',
      'Planner module — guest management, itinerary planning & dashboard',
      'Logistics module — room management, travel coordination, baggage tag gen & budget tracking',
      'AI Studio and smart Notify feature in Labs (coming soon)',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'REST APIs', 'GIT'],
    features: [
      { label: 'Guest Management', icon: '👥' },
      { label: 'Itinerary Planning', icon: '📅' },
      { label: 'Room Management', icon: '🏨' },
      { label: 'Travel Coordination', icon: '✈️' },
      { label: 'Baggage Tag Gen', icon: '🏷️' },
      { label: 'Budget Tracking', icon: '💰' },
      { label: 'AI Studio', icon: '🤖', soon: true },
      { label: 'Smart Notify', icon: '🔔', soon: true },
    ],
  },
  {
    type: 'employment',
    name: 'Altimetrik',
    badge: 'Current',
    role: 'Senior Engineer – Product & Platform Engineering',
    period: 'Jun 2025 – Present',
    location: 'Pune, India',
    color: '#818cf8',
    projects: [
      {
        title: 'Enterprise Energy Management Platform',
        description:
          'Frontend development for a large-scale enterprise energy monitoring and management platform. Built scalable Angular solutions for complex energy data workflows and real-time dashboards.',
        highlights: [
          'Enhanced frontend features for enterprise energy monitoring dashboards',
          'Developed scalable UI components using Angular 20 for complex data-heavy screens',
          'Collaborated with cross-functional, cross-geography teams across Agile sprints',
        ],
        tech: ['Angular 20', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'GIT'],
      },
    ],
  },
  {
    type: 'employment',
    name: 'Simplifai',
    badge: null,
    role: 'Front-end Developer',
    period: 'Apr 2023 – May 2025',
    location: 'Pune, India',
    color: '#a78bfa',
    projects: [
      {
        title: 'Flow Builder',
        client: 'Internal',
        description:
          'AI-powered workflow automation platform enabling business users to visually connect and automate apps through a drag-and-drop flow builder interface.',
        highlights: [
          'Config-driven reusable UI components, significantly reducing bundle size',
          'Contributed to end-to-end scalable Angular architecture',
          'Dynamic component rendering based on API-driven configuration',
        ],
        tech: ['Angular 18', 'TypeScript', 'RxJS', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'GIT'],
      },
      {
        title: 'HITL Platform',
        client: 'Internal',
        description:
          'Human-in-the-Loop dashboard for managing automated AI processes — routing tasks to human operators for review, approval, and compliance checks.',
        highlights: [
          'Custom UI components using ShadCN Component Library',
          'OIDC Client integration for secure enterprise authentication',
          'Node.js backend services for API integrations and business logic',
        ],
        tech: ['React', 'Node.js', 'TanStack Router', 'ShadCN', 'OIDC Client', 'JavaScript', 'HTML5', 'CSS3'],
      },
      {
        title: 'Multilingual AI Chatbot',
        description:
          'Voice-enabled AI chatbot delivered as a web widget, iOS app, and Apple Watch companion for an enterprise client. Solo-led from POC to production across all three platforms.',
        highlights: [
          'Created a POC that secured full project approval',
          'Solo-led development across web, iOS & watchOS platforms',
          'Node.js backend for chatbot API communication & voice processing',
        ],
        tech: ['Preact', 'SwiftUI', 'Node.js', 'JavaScript', 'HTML5', 'CSS3', 'GIT'],
      },
    ],
  },
  {
    type: 'employment',
    name: 'Tata Consultancy Services',
    badge: null,
    role: 'Front-end Developer',
    period: 'Aug 2020 – Mar 2023',
    location: 'Pune, India',
    color: '#60a5fa',
    projects: [
      {
        title: 'Airline Web Booking Application',
        description:
          'Fully responsive flight booking web application for a major US airline — search, book, and manage flights with a smooth, accessible user experience across all devices.',
        highlights: [
          'Built responsive booking flows in direct collaboration with client leadership',
          'SWAT team member — resolved critical production incidents efficiently',
          'Contributed to multiple POCs that delivered significant business value',
        ],
        tech: ['Angular', 'JavaScript', 'RxJS', 'NgRX', 'HTML5', 'CSS3', 'GIT'],
      },
    ],
  },
];

/* ─── Tag colours ───────────────────────────────────────────────────────── */
const tagColors = {
  'Angular 20':      'bg-red-950/60 text-red-400 border border-red-800/30',
  'Angular 18':      'bg-red-950/60 text-red-400 border border-red-800/30',
  Angular:           'bg-red-950/60 text-red-400 border border-red-800/30',
  React:             'bg-blue-950/60 text-blue-400 border border-blue-800/30',
  Preact:            'bg-violet-950/60 text-violet-400 border border-violet-800/30',
  TypeScript:        'bg-sky-950/60 text-sky-400 border border-sky-800/30',
  JavaScript:        'bg-yellow-950/60 text-yellow-400 border border-yellow-800/30',
  RxJS:              'bg-pink-950/60 text-pink-400 border border-pink-800/30',
  NgRX:              'bg-orange-950/60 text-orange-400 border border-orange-800/30',
  SwiftUI:           'bg-orange-950/50 text-orange-300 border border-orange-800/30',
  'Node.js':         'bg-green-950/60 text-green-400 border border-green-800/30',
  'TanStack Router': 'bg-teal-950/60 text-teal-400 border border-teal-800/30',
  ShadCN:            'bg-gray-800/60 text-gray-300 border border-gray-600/30',
  'OIDC Client':     'bg-emerald-950/60 text-emerald-400 border border-emerald-800/30',
  'REST APIs':       'bg-green-950/50 text-green-300 border border-green-900/30',
  HTML5:             'bg-orange-950/40 text-orange-300 border border-orange-900/30',
  CSS3:              'bg-blue-950/40 text-blue-300 border border-blue-900/30',
  Vite:              'bg-purple-950/60 text-purple-400 border border-purple-800/30',
  GIT:               'bg-rose-950/60 text-rose-400 border border-rose-800/30',
};

const TechTag = ({ t }) => (
  <span className={`px-2 py-0.5 rounded-md text-[11px] font-medium ${tagColors[t] ?? 'bg-[#1a1939] text-gray-400 border border-[#2d2a6e]/30'}`}>
    {t}
  </span>
);

/* ─── Project card (inside employment entries) ──────────────────────────── */
const ProjectCard = ({ project, color }) => (
  <div className="group bg-[#0a0a22] border border-white/5 rounded-xl p-4 hover:border-white/10 transition-all duration-300">
    <div className="flex items-start justify-between gap-2 mb-2">
      <h5 className="text-sm font-bold text-white group-hover:text-[#818cf8] transition-colors duration-300 leading-snug">
        {project.title}
      </h5>
      {project.client && (
        <span
          className="text-[10px] px-2 py-0.5 rounded-full border whitespace-nowrap flex-shrink-0 font-medium"
          style={{ color, borderColor: `${color}30`, backgroundColor: `${color}08` }}
        >
          {project.client}
        </span>
      )}
    </div>
    <p className="text-gray-500 text-xs leading-relaxed mb-3">{project.description}</p>
    <ul className="mb-3 flex flex-col gap-1">
      {project.highlights.map((h) => (
        <li key={h} className="flex items-start gap-1.5 text-[11px] text-gray-400">
          <span className="text-[#818cf8] mt-0.5 flex-shrink-0 text-[9px]">▸</span>
          {h}
        </li>
      ))}
    </ul>
    <div className="flex flex-wrap gap-1">
      {project.tech.map((t) => <TechTag key={t} t={t} />)}
    </div>
  </div>
);

/* ─── Venture entry ─────────────────────────────────────────────────────── */
const VentureEntry = ({ entry, visible }) => (
  <div
    className={`bg-[#0e0e2d] border rounded-2xl p-5 sm:p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-black/30 ${visible ? 'opacity-100' : 'opacity-0'}`}
    style={{ borderColor: `${entry.color}20` }}
  >
    <div className="absolute inset-0 rounded-2xl opacity-[0.03] pointer-events-none"
      style={{ background: `radial-gradient(ellipse at top left, ${entry.color}, transparent 55%)` }} />

    <div className="flex flex-col lg:flex-row gap-6 relative">
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <h4 className="text-xl font-bold font-audiowide" style={{ color: entry.color }}>{entry.name}</h4>
          <span
            className="text-[10px] px-2.5 py-0.5 rounded-full border font-bold uppercase tracking-wider"
            style={{ color: entry.color, borderColor: `${entry.color}35`, backgroundColor: `${entry.color}10` }}
          >
            {entry.badge}
          </span>
        </div>
        <p className="text-gray-500 text-xs mb-4">{entry.summary}</p>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{entry.description}</p>
        <ul className="flex flex-col gap-1.5 mb-5">
          {entry.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-gray-300">
              <span style={{ color: entry.color }} className="mt-0.5 flex-shrink-0 text-xs">▸</span>
              {h}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {entry.tech.map((t) => <TechTag key={t} t={t} />)}
        </div>
      </div>

      <div className="lg:w-64 flex-shrink-0">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-600 mb-3">Platform Features</p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {entry.features.map((f) => (
            <div
              key={f.label}
              className="flex items-start gap-2 p-2 rounded-lg text-xs"
              style={{ backgroundColor: `${entry.color}06`, border: `1px solid ${entry.color}12` }}
            >
              <span className="text-sm">{f.icon}</span>
              <div>
                <span className="text-gray-300 leading-tight block">{f.label}</span>
                {f.soon && <span className="text-[9px]" style={{ color: entry.color }}>Soon</span>}
              </div>
            </div>
          ))}
        </div>
        <a
          href={entry.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
          style={{ backgroundColor: entry.color, color: '#07071b' }}
        >
          <ExternalLink size={14} />
          shaadi.rupaiq.in
        </a>
      </div>
    </div>
  </div>
);

/* ─── Employment entry ──────────────────────────────────────────────────── */
const EmploymentEntry = ({ entry, visible }) => (
  <div className={`transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-0.5">
          <h4 className="text-lg font-bold text-white font-audiowide">{entry.name}</h4>
          {entry.badge && (
            <span
              className="text-[10px] px-2.5 py-0.5 rounded-full border font-bold uppercase tracking-wider"
              style={{ color: entry.color, borderColor: `${entry.color}35`, backgroundColor: `${entry.color}10` }}
            >
              {entry.badge}
            </span>
          )}
        </div>
        <p className="text-gray-400 text-sm">{entry.role}</p>
      </div>
      <div className="flex flex-col sm:items-end gap-1 text-xs text-gray-500 flex-shrink-0">
        <span className="flex items-center gap-1.5"><Calendar size={11} />{entry.period}</span>
        {entry.location && <span className="flex items-center gap-1.5"><MapPin size={11} />{entry.location}</span>}
      </div>
    </div>

    <div className={`grid gap-3 ${
      entry.projects.length === 1 ? 'grid-cols-1 max-w-xl' :
      entry.projects.length === 2 ? 'grid-cols-1 sm:grid-cols-2' :
      'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    }`}>
      {entry.projects.map((p) => <ProjectCard key={p.title} project={p} color={entry.color} />)}
    </div>
  </div>
);

/* ─── Main section ──────────────────────────────────────────────────────── */
const Projects = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#818cf8] font-audiowide text-xs font-medium mb-2 tracking-widest uppercase">
            Work &amp; Ventures
          </p>
          <h2 className="text-4xl font-bold text-white font-audiowide">
            Career <span className="gradient-text">Timeline</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#4338ca] to-[#818cf8] mx-auto rounded-full" />
          <p className="mt-5 text-gray-500 text-sm max-w-md mx-auto">
            3 companies · 5 projects · 1 live venture — in reverse chronological order.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-5 top-5 bottom-10 w-px bg-gradient-to-b from-[#818cf8]/50 via-[#818cf8]/15 to-transparent" />

          <div className="flex flex-col gap-0">
            {timeline.map((entry, i) => {
              const isLast = i === timeline.length - 1;
              const Icon = entry.type === 'venture' ? Rocket : Briefcase;
              return (
                <div
                  key={entry.name}
                  className={`relative flex gap-5 sm:gap-7 ${isLast ? 'pb-0' : 'pb-12'} transition-all duration-700`}
                  style={{ transitionDelay: `${i * 120}ms`, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)' }}
                >
                  <div className="flex-shrink-0 flex flex-col items-center pt-1">
                    <div
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 z-10 flex-shrink-0"
                      style={{
                        backgroundColor: `${entry.color}12`,
                        borderColor: `${entry.color}50`,
                        boxShadow: `0 0 14px ${entry.color}20`,
                      }}
                    >
                      <Icon size={15} style={{ color: entry.color }} />
                    </div>
                    <span className="text-[10px] text-gray-600 mt-1.5 font-audiowide text-center leading-tight hidden sm:block">
                      {entry.period.split('–')[0].trim().replace('Jun ', '').replace('Apr ', '').replace('Aug ', '')}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0 pt-1">
                    {entry.type === 'venture'
                      ? <div className="relative overflow-hidden rounded-2xl"><VentureEntry entry={entry} visible={visible} /></div>
                      : <EmploymentEntry entry={entry} visible={visible} />
                    }
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-3 mt-2 pl-0.5">
            <div className="w-8 sm:w-10 flex justify-center flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#818cf8]/20" />
            </div>
            <span className="text-xs text-gray-600 font-audiowide">Aug 2020 · Career Start</span>
          </div>
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://github.com/pradyumndaga"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3 border border-[#818cf8]/40 text-[#818cf8] font-semibold rounded-xl hover:bg-[#818cf8]/10 hover:border-[#818cf8]/70 transition-all duration-300 hover:scale-105"
          >
            <Github size={18} />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
