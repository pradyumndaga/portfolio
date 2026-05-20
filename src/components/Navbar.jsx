import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      setProgress((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
};

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Timeline', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const progress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#07071b]/92 backdrop-blur-xl border-b border-[#818cf8]/10 shadow-xl shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#4338ca] to-[#818cf8] rounded-r-full transition-[width] duration-75"
          style={{ width: `${progress}%` }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <button
              onClick={() => scrollTo('home')}
              className="font-sriracha text-2xl text-[#818cf8] hover:opacity-80 transition-opacity duration-200 focus:outline-none flex-shrink-0"
            >
              PD<span className="text-white">.</span>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-sm font-medium transition-all duration-300 relative pb-1 focus:outline-none
                    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#818cf8] after:transition-all after:duration-300
                    ${active === link.id
                      ? 'text-[#818cf8] after:w-full'
                      : 'text-gray-400 hover:text-white after:w-0 hover:after:w-full'
                    }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="assets/resume.pdf"
              download="Pradyumn_Daga_Resume.pdf"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#4338ca] to-[#818cf8] text-white font-bold text-sm rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#818cf8]/25"
            >
              <Download size={14} />
              Resume
            </a>

            {/* Animated hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 hover:text-[#818cf8] hover:bg-[#818cf8]/8 transition-all duration-200 focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="w-5 h-[14px] flex flex-col justify-between">
                <span
                  className="block h-0.5 bg-current rounded-full transition-all duration-300 origin-center"
                  style={{ transform: isOpen ? 'translateY(6px) rotate(45deg)' : 'none' }}
                />
                <span
                  className="block h-0.5 bg-current rounded-full transition-all duration-200"
                  style={{ opacity: isOpen ? 0 : 1, transform: isOpen ? 'scaleX(0)' : 'none' }}
                />
                <span
                  className="block h-0.5 bg-current rounded-full transition-all duration-300 origin-center"
                  style={{ transform: isOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-16 left-0 right-0 bg-[#08081e] border-b border-[#818cf8]/10 shadow-2xl transition-all duration-300 ${
            isOpen ? 'translate-y-0' : '-translate-y-3'
          }`}
        >
          <div className="px-5 pt-4 pb-6 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none flex items-center gap-3 ${
                  active === link.id
                    ? 'text-[#818cf8] bg-[#818cf8]/8'
                    : 'text-gray-300 hover:text-white hover:bg-white/4'
                }`}
                style={{ transitionDelay: isOpen ? `${i * 50}ms` : '0ms' }}
              >
                <span className={`text-[10px] font-audiowide tabular-nums transition-colors ${active === link.id ? 'text-[#818cf8]' : 'text-gray-600'}`}>
                  0{i + 1}
                </span>
                {link.label}
              </button>
            ))}

            <div className="mt-3 pt-3 border-t border-[#818cf8]/10">
              <a
                href="assets/resume.pdf"
                download="Pradyumn_Daga_Resume.pdf"
                className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#4338ca] to-[#818cf8] text-white font-bold text-sm rounded-xl active:scale-95 transition-transform duration-150"
                onClick={() => setIsOpen(false)}
              >
                <Download size={15} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
