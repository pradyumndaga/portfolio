import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, GraduationCap, Award, MapPin, Briefcase } from 'lucide-react';

const highlights = [
  'Angular 20 & config-driven UI architecture',
  'React · TanStack Router · ShadCN · OIDC auth',
  'Cross-platform — web, iOS & Apple Watch',
  'State management · RxJS & NgRX',
  'Node.js backend services & REST APIs',
  'Agile delivery across global enterprise clients',
];

const About = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-20 sm:py-24 px-5">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-2">Who I Am</p>
          <h2 className="font-audiowide font-bold text-white text-3xl sm:text-4xl">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-3 w-14 h-0.5 bg-gradient-to-r from-[#4338ca] to-[#818cf8] mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

          {/* ── Left: avatar + info cards ── */}
          <div className={`flex-shrink-0 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {/* Avatar */}
            <div className="relative w-56 sm:w-64 mx-auto lg:mx-0 mb-5">
              <div className="rounded-2xl overflow-hidden border border-[#818cf8]/20 shadow-2xl shadow-black/50">
                <img src="assets/avatar.png" alt="Pradyumn Daga" className="w-full aspect-[4/5] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07071b]/40 via-transparent to-transparent" />
              </div>
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-7 h-7 border-t-2 border-l-2 border-[#818cf8]/60 rounded-tl-xl" />
              <div className="absolute -bottom-2 -right-2 w-7 h-7 border-b-2 border-r-2 border-[#818cf8]/60 rounded-br-xl" />
            </div>

            {/* Quick-info strip */}
            <div className="space-y-2 w-56 sm:w-64 mx-auto lg:mx-0">
              {[
                { icon: Briefcase, text: 'Senior Engineer · Altimetrik', accent: true },
                { icon: MapPin,    text: 'Pune, India' },
                { icon: GraduationCap, text: 'B.Tech CS · CGPA 8.5' },
              ].map(({ icon: Icon, text, accent }) => (
                <div key={text} className="flex items-center gap-2.5 px-3 py-2 card rounded-xl">
                  <Icon size={14} className={accent ? 'text-[#818cf8]' : 'text-gray-500'} />
                  <span className={`text-xs ${accent ? 'text-[#818cf8] font-medium' : 'text-gray-400'}`}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: content ── */}
          <div className={`flex-1 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

            <p className="text-gray-400 text-sm sm:text-[0.95rem] leading-relaxed mb-4">
              Over <span className="text-white font-medium">5 years and 9 months</span> designing and
              developing scalable web and mobile applications. Strong expertise in Angular, React,
              TypeScript, and config-driven UI architecture — delivering user-centric solutions in
              Agile environments.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-7">
              Shipped production apps at{' '}
              <span className="text-white font-medium">Altimetrik</span>,{' '}
              <span className="text-white font-medium">Simplifai</span>, and{' '}
              <span className="text-white font-medium">TCS</span>  — from enterprise energy platforms
              and AI dashboards to global airline booking systems. Also co-founded{' '}
              <span className="text-[#f472b6] font-medium">ShaadiDesk</span>, a live SaaS product.
            </p>

            {/* Highlights */}
            <div className="mb-8">
              <p className="section-label mb-3">What I do</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle2 size={14} className="text-[#818cf8] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { val: '5+',  label: 'Years Exp.' },
                { val: '3',   label: 'Companies' },
                { val: '5',   label: 'Projects' },
                { val: '8.5', label: 'B.Tech CGPA' },
              ].map((s) => (
                <div key={s.label} className="card rounded-xl p-3 text-center hover:-translate-y-0.5">
                  <p className="text-[#818cf8] font-audiowide font-bold text-xl">{s.val}</p>
                  <p className="text-gray-500 text-[11px] mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Training row */}
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              {[
                { icon: Award, label: 'NG-INDIA Conference', sub: 'Gurugram · 2025' },
                { icon: Award, label: 'System Design Cohort', sub: 'Online · 2026' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-3 px-4 py-2.5 card rounded-xl flex-1">
                  <Icon size={15} className="text-[#818cf8] flex-shrink-0" />
                  <div>
                    <p className="text-white text-xs font-medium">{label}</p>
                    <p className="text-gray-500 text-[11px]">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
