import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, ArrowRight } from 'lucide-react';

const links = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7044282111',
    href: 'tel:+917044282111',
    color: '#4ade80',
    cta: 'Call me',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'pradyumn-daga',
    href: 'https://www.linkedin.com/in/pradyumn-daga-7642a213a/',
    color: '#38bdf8',
    cta: 'Connect',
    ext: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@pradyumndaga',
    href: 'https://github.com/pradyumndaga',
    color: '#e879f9',
    cta: 'View repos',
    ext: true,
  },
];

const Contact = () => {
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
    <section id="contact" ref={ref} className="py-20 sm:py-24 px-5 bg-[#05051a]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-2">Get In Touch</p>
          <h2 className="font-audiowide font-bold text-white text-3xl sm:text-4xl">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="mt-3 w-14 h-0.5 bg-gradient-to-r from-[#4338ca] to-[#818cf8] mx-auto rounded-full" />
          <p className="mt-5 text-gray-500 text-sm max-w-sm mx-auto">
            Open to new roles, freelance work, and interesting collaborations.
          </p>
        </div>

        {/* Primary email CTA */}
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <a
            href="mailto:pradyumndaga28@gmail.com"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5
                       bg-gradient-to-r from-[#4338ca] to-[#818cf8] text-white font-bold
                       rounded-2xl text-sm hover:opacity-90 transition-all duration-200
                       hover:scale-105 hover:shadow-2xl hover:shadow-[#818cf8]/30"
          >
            <Mail size={17} />
            Drop me an email
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <p className="mt-2.5 text-gray-600 text-xs tracking-wide">pradyumndaga28@gmail.com</p>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#818cf8] shadow-[0_0_6px_#818cf8] animate-pulse" />
            <span className="text-xs text-gray-500">Available for opportunities</span>
          </div>
        </div>

        {/* Link cards — 3 items */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {links.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              target={item.ext ? '_blank' : undefined}
              rel={item.ext ? 'noreferrer' : undefined}
              className={`group flex items-center gap-4 p-5 card rounded-2xl
                          hover:scale-[1.02] transition-all duration-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${item.color}12`, border: `1px solid ${item.color}25` }}
              >
                <item.icon size={19} style={{ color: item.color }} />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-gray-500 text-[10px] uppercase tracking-wider mb-0.5">{item.label}</p>
                <p className="text-white text-sm font-medium truncate">{item.value}</p>
              </div>

              {/* CTA */}
              <div
                className="flex items-center gap-1 text-xs font-medium flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-200"
                style={{ color: item.color }}
              >
                {item.cta}
                {item.ext ? <ExternalLink size={12} /> : <ArrowRight size={12} />}
              </div>
            </a>
          ))}
        </div>

        {/* Location note */}
        <div className={`mt-8 flex items-center justify-center gap-2 text-sm text-gray-600 transition-all duration-700 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <MapPin size={13} />
          <span>Based in Pune, India · Available remotely worldwide</span>
        </div>

      </div>
    </section>
  );
};

export default Contact;
