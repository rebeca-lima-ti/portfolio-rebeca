import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Sobre mim", href: "#about" },
  { label: "Formações", href: "#education" },
  { label: "Projetos", href: "#projects" },
  { label: "Certificações", href: "#certificates" },
  { label: "Eventos", href: "#events" },
  { label: "Trabalhos", href: "#documents" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Observar qual seção está visível
  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px", // Marca como ativo quando está no meio da tela
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`navbar fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${scrolled ? "bg-choco/95 backdrop-blur-md shadow-lg shadow-black/40" : "bg-transparent"
      }`}>
      <div className="navbar-start">
        <button onClick={() => handleNav("#home")}
          className="font-cinzel text-ribbon text-xl tracking-[0.3em] hover:text-pearl transition-colors duration-300">
          REBECA
        </button>
      </div>

      {/* Desktop nav */}
      <div className="navbar-end hidden lg:flex gap-1">
        {links.map((l) => (
          <button key={l.href} onClick={() => handleNav(l.href)}
            className={`btn btn-xs rounded-full border-none font-medium transition-all duration-300 ${active === l.href
                ? "bg-catawba text-pearl"
                : "bg-transparent text-lilac hover:bg-tuscan/50 hover:text-pearl"
              }`}>
            {l.label}
          </button>
        ))}
      </div>

      {/* Mobile hamburger */}
      <div className="navbar-end lg:hidden">
        <button className="btn btn-ghost btn-sm text-ribbon" onClick={() => setMenuOpen(!menuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-choco/98 backdrop-blur-md flex flex-col items-center gap-2 py-4 shadow-xl border-t border-catawba/30">
          {links.map((l) => (
            <button key={l.href} onClick={() => handleNav(l.href)}
              className={`btn btn-sm w-48 rounded-full border-none font-medium transition-all duration-300 ${active === l.href
                  ? "bg-catawba text-pearl"
                  : "bg-tuscan/30 text-lilac hover:bg-tuscan hover:text-pearl"
                }`}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
