import { GithubIcon, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="py-8 px-5 border-t border-white/5">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-gray-600 text-sm">
        © 2025 <span className="font-sriracha text-[#818cf8]">Pradyumn Daga</span>
      </p>
      <div className="flex items-center gap-4">
        {[
          { icon: GithubIcon, href: 'https://github.com/pradyumndaga',                     label: 'GitHub'   },
          { icon: Linkedin,   href: 'https://www.linkedin.com/in/pradyumn-daga-7642a213a/', label: 'LinkedIn' },
          { icon: Mail,       href: 'mailto:pradyumndaga28@gmail.com',                      label: 'Email'    },
        ].map(({ icon: Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
             className="text-gray-600 hover:text-[#818cf8] transition-colors duration-200">
            <Icon size={16} />
          </a>
        ))}
      </div>
      <p className="text-gray-700 text-xs">React · Vite · Tailwind</p>
    </div>
  </footer>
);

export default Footer;
