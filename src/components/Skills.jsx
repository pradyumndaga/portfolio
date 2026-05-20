import { useEffect, useRef, useState } from 'react';

const categories = [
  {
    id: 'all',
    label: 'All',
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    skills: [
      { name: 'Angular 20',       exp: '~60 mo', level: 5, primary: true  },
      { name: 'React',            exp: '~26 mo', level: 4, primary: true  },
      { name: 'RxJS',             exp: '~60 mo', level: 4                  },
      { name: 'NgRX',             exp: '~60 mo', level: 4                  },
      { name: 'Preact',           exp: '~14 mo', level: 3                  },
      { name: 'TanStack Router',  exp: '',        level: 3                  },
      { name: 'ShadCN',           exp: '',        level: 4                  },
      { name: 'Config-driven UI', exp: '',        level: 5, primary: true  },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { name: 'TypeScript', exp: '~69 mo', level: 5, primary: true },
      { name: 'JavaScript', exp: '~69 mo', level: 5, primary: true },
      { name: 'HTML5',      exp: '~69 mo', level: 5                },
      { name: 'CSS3',       exp: '~69 mo', level: 5                },
      { name: 'SwiftUI',    exp: '~14 mo', level: 3                },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Infra',
    skills: [
      { name: 'Node.js',     exp: '~26 mo', level: 4 },
      { name: 'REST APIs',   exp: '~69 mo', level: 5 },
      { name: 'GIT',         exp: '~69 mo', level: 5 },
      { name: 'Vite',        exp: '~48 mo', level: 4 },
      { name: 'JEST',        exp: '',        level: 3 },
      { name: 'OIDC Client', exp: '',        level: 3 },
    ],
  },
];

// Flatten all skills for the "All" tab
const allSkills = categories.slice(1).flatMap((c) =>
  c.skills.map((s) => ({ ...s, cat: c.id }))
);

const levelLabel = ['', 'Beginner', 'Familiar', 'Intermediate', 'Advanced', 'Expert'];
const levelColor = [
  '',
  'bg-gray-700/50 text-gray-500',
  'bg-[#4338ca]/30 text-[#818cf8]/50',
  'bg-[#4338ca]/50 text-[#818cf8]/70',
  'bg-[#818cf8]/15 text-[#818cf8]/90',
  'bg-[#818cf8]/25 text-[#818cf8]',
];

const Dots = ({ level }) => (
  <div className="flex gap-0.5 mt-1">
    {[1,2,3,4,5].map((d) => (
      <div key={d} className={`w-1.5 h-1.5 rounded-full transition-all ${d <= level ? 'bg-[#818cf8]' : 'bg-white/10'}`} />
    ))}
  </div>
);

const SkillChip = ({ skill, visible, delay }) => (
  <div
    className={`group relative p-3.5 card rounded-xl hover:-translate-y-0.5 cursor-default
      transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    style={{ transitionDelay: `${delay}ms` }}
    title={levelLabel[skill.level]}
  >
    <div className="flex items-start justify-between gap-2">
      <p className={`text-sm font-medium leading-snug ${skill.primary ? 'text-white' : 'text-gray-300'}`}>
        {skill.name}
      </p>
      {skill.exp && (
        <span className="text-[10px] text-gray-600 whitespace-nowrap flex-shrink-0 mt-0.5">{skill.exp}</span>
      )}
    </div>
    <Dots level={skill.level} />
    {/* Level label on hover */}
    <div className={`absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-medium
                    opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap pointer-events-none
                    ${levelColor[skill.level]}`}>
      {levelLabel[skill.level]}
    </div>
  </div>
);

const Skills = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const displayed = activeTab === 'all'
    ? allSkills
    : categories.find((c) => c.id === activeTab)?.skills ?? [];

  return (
    <section id="skills" ref={sectionRef} className="py-20 sm:py-24 px-5 bg-[#05051a]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="section-label mb-2">What I Use</p>
          <h2 className="font-audiowide font-bold text-white text-3xl sm:text-4xl">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="mt-3 w-14 h-0.5 bg-gradient-to-r from-[#4338ca] to-[#818cf8] mx-auto rounded-full" />
        </div>

        {/* Tab filters */}
        <div className={`flex flex-wrap justify-center gap-2 mb-8 transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none
                ${activeTab === c.id
                  ? 'bg-gradient-to-r from-[#4338ca] to-[#818cf8] text-white shadow-lg shadow-[#818cf8]/20'
                  : 'border border-white/10 text-gray-400 hover:border-[#818cf8]/40 hover:text-white'
                }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Skill chip grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {displayed.map((skill, i) => (
            <SkillChip key={skill.name} skill={skill} visible={visible} delay={i * 35} />
          ))}
        </div>

        {/* Legend */}
        <div className={`mt-10 flex flex-wrap justify-center items-center gap-x-5 gap-y-2 transition-all duration-700 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-[10px] text-gray-600 uppercase tracking-wider">Proficiency:</span>
          {[3, 4, 5].map((l) => (
            <div key={l} className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((d) => (
                  <div key={d} className={`w-1.5 h-1.5 rounded-full ${d <= l ? 'bg-[#818cf8]' : 'bg-white/10'}`} />
                ))}
              </div>
              <span className="text-[10px] text-gray-500">{levelLabel[l]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
