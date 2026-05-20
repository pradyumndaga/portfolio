import { GithubIcon, Linkedin, Mail, Phone, Download, ArrowRight } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const socials = [
  { icon: GithubIcon, href: 'https://github.com/pradyumndaga',                     label: 'GitHub',   ext: true  },
  { icon: Linkedin,   href: 'https://www.linkedin.com/in/pradyumn-daga-7642a213a/', label: 'LinkedIn', ext: true  },
  { icon: Mail,       href: 'mailto:pradyumndaga28@gmail.com',                      label: 'Email',    ext: false },
  { icon: Phone,      href: 'tel:+917044282111',                                    label: 'Phone',    ext: false },
];

const Hero = () => {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

      {/* ── Background mesh ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[15%]  w-72 h-72 bg-[#818cf8]/7  rounded-full blur-[80px]" />
        <div className="absolute bottom-[15%] right-[10%] w-96 h-96 bg-[#4338ca]/12 rounded-full blur-[100px]" />
        <div className="absolute top-[60%] left-[50%]  w-48 h-48 bg-[#818cf8]/5  rounded-full blur-[60px]" />
        <div className="absolute inset-0 opacity-[0.022]"
          style={{ backgroundImage: 'radial-gradient(#818cf8 1px,transparent 1px)', backgroundSize: '38px 38px' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full py-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* ── Left column ── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Status pill */}
            <div className="animate-fade-up delay-0 inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#818cf8]/25 glass">
              <span className="w-2 h-2 rounded-full bg-[#818cf8] shadow-[0_0_6px_#818cf8] animate-pulse" />
              <span className="text-xs font-medium text-gray-300">Senior Engineer · <span className="text-[#818cf8]">Altimetrik</span></span>
            </div>

            {/* Name */}
            <h1 className="animate-fade-up delay-1 font-audiowide font-bold text-white leading-[1.1] mb-4
                           text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              I'm{' '}
              <span className="gradient-text">Pradyumn</span>
              <br className="hidden sm:block" />
              {' '}Daga
            </h1>

            {/* Typewriter */}
            <div className="animate-fade-up delay-2 flex items-center justify-center lg:justify-start gap-2
                            font-audiowide text-gray-400 text-base sm:text-lg mb-5 min-h-[28px]">
              <span className="text-[#818cf8]/50 select-none">&lt;</span>
              <Typewriter options={{
                strings: ['Senior Front-end Engineer','Angular 20 Expert','React Developer','SaaS Co-Founder'],
                autoStart: true, loop: true, deleteSpeed: 30, delay: 55,
              }} />
              <span className="text-[#818cf8]/50 select-none">/&gt;</span>
            </div>

            {/* Bio */}
            <p className="animate-fade-up delay-3 text-gray-400 text-sm sm:text-[0.95rem] leading-relaxed
                          max-w-[480px] mx-auto lg:mx-0 mb-8">
              5+ years shipping scalable web &amp; mobile apps at{' '}
              <span className="text-white font-medium">Altimetrik</span>,{' '}
              <span className="text-white font-medium">Simplifai</span> &amp; <span className="text-white font-medium">TCS</span>.
              Also co-founder of{' '}
              <a href="https://shaadi.rupaiq.in" target="_blank" rel="noreferrer"
                 className="text-[#f472b6] font-medium hover:underline underline-offset-2 transition-colors">
                ShaadiDesk ↗
              </a>
              .
            </p>

            {/* CTAs */}
            <div className="animate-fade-up delay-4 flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <button onClick={() => go('projects')}
                className="group flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#4338ca] to-[#818cf8] text-white font-bold text-sm rounded-xl
                           hover:opacity-90 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#818cf8]/30">
                View Timeline
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <a href="assets/resume.pdf" download="Pradyumn_Daga_Resume.pdf"
                className="flex items-center gap-2 px-6 py-2.5 border border-[#818cf8]/35 text-[#818cf8] font-bold text-sm rounded-xl
                           hover:bg-[#818cf8]/8 hover:border-[#818cf8]/70 transition-all duration-200 hover:scale-105">
                <Download size={15} />
                Resume
              </a>
            </div>

            {/* Social icons */}
            <div className="animate-fade-up delay-5 flex gap-2.5 justify-center lg:justify-start">
              {socials.map(({ icon: Icon, href, label, ext }) => (
                <a key={label} href={href} aria-label={label}
                   target={ext ? '_blank' : undefined} rel={ext ? 'noreferrer' : undefined}
                   className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/8
                              text-gray-500 hover:text-[#818cf8] hover:border-[#818cf8]/50 hover:bg-[#818cf8]/6
                              transition-all duration-200 hover:scale-110">
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right column — avatar ── */}
          <div className="flex-shrink-0 animate-fade-up delay-2">
            <div className="relative">

              {/* Corner-bracket frame */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
                {/* Brackets */}
                {[
                  'top-0 left-0 border-t-2 border-l-2 rounded-tl-2xl',
                  'top-0 right-0 border-t-2 border-r-2 rounded-tr-2xl',
                  'bottom-0 left-0 border-b-2 border-l-2 rounded-bl-2xl',
                  'bottom-0 right-0 border-b-2 border-r-2 rounded-br-2xl',
                ].map((cls, i) => (
                  <div key={i} className={`absolute w-10 h-10 border-[#818cf8]/70 ${cls}`} />
                ))}

                {/* Avatar */}
                <div className="absolute inset-3 rounded-2xl overflow-hidden border border-[#818cf8]/20 animate-float animate-pulse-glow">
                  <img src="assets/avatar.png" alt="Pradyumn Daga" className="w-full h-full object-cover" />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07071b]/20 to-transparent" />
                </div>
              </div>

              {/* Stat chips */}
              <div className="mt-5 flex gap-2.5 justify-center">
                {[
                  { val: '5+', label: 'Years' },
                  { val: '3', label: 'Companies' },
                  { val: '1', label: 'Venture' },
                ].map((s) => (
                  <div key={s.label} className="flex-1 text-center py-2.5 px-3 card rounded-xl">
                    <p className="text-[#818cf8] font-audiowide font-bold text-base">{s.val}</p>
                    <p className="text-gray-500 text-[10px] mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Scroll cue */}
        <div className="flex justify-center mt-14">
          <button onClick={() => go('about')}
            className="flex flex-col items-center gap-1 text-gray-600 hover:text-[#818cf8] transition-colors duration-200 focus:outline-none">
            <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center pt-1.5">
              <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
            </div>
            <span className="text-[9px] tracking-widest uppercase mt-1">Scroll</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
