import rebecaImg from "../assets/rebeca.jpeg";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/rebeca-lima-ti",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/becaaalima",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rebeca-lima-925611359",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>),
  },
  {
    label: "E-mail",
    href: "mailto:becaln.ti0@gmail.com",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>),
  },
];

const interests = ["Desenvolvimento Web", "UI/UX Design", "Banco de Dados", "Metodologias Ágeis"];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-choco">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse 80% 60% at 60% 40%, #784a4a55 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse 50% 50% at 20% 80%, #753b4140 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(#dfb0bb 1px, transparent 1px), linear-gradient(90deg, #dfb0bb 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-left max-w-xl">
          <div className="fade-up delay-100">
            <span className="badge bg-catawba/50 text-ribbon border-catawba/50 text-xs tracking-widest uppercase mb-3">
              Software Developer
            </span>
            <h1 className="font-cinzel text-5xl sm:text-6xl lg:text-7xl font-bold shimmer-text leading-tight">
              Rebeca<br />Lima
            </h1>
          </div>

          {/* Objetivo profissional */}
          <p className="fade-up delay-200 text-lilac text-base font-light leading-relaxed">
            Estudante de{" "}
            <span className="text-ribbon font-medium">Desenvolvimento de Software Multiplataforma</span>{" "}
            na Fatec SJC, com interesse em desenvolvimento web, design de interfaces e soluções baseadas em banco de dados. Busco minha primeira oportunidade profissional na área de tecnologia. 🌷
          </p>

          {/* Áreas de interesse */}
          <div className="fade-up delay-300 flex flex-wrap gap-2 justify-center lg:justify-start">
            {interests.map((i) => (
              <span key={i} className="badge bg-catawba/30 text-ribbon border-catawba/40 text-xs py-2.5">
                {i}
              </span>
            ))}
          </div>

          <div className="fade-up delay-300 flex flex-wrap gap-3 justify-center lg:justify-start">
            <a href="/docs/Currículo-Rebeca_Dev.pdf" target="_blank" rel="noreferrer"
              className="btn bg-choco border border-ribbon/60 text-pearl hover:bg-ribbon/20 hover:border-ribbon rounded-full px-6 gap-2 transition-all duration-300">
              Currículo
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
            <button onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="btn bg-catawba/80 border-none text-pearl hover:bg-catawba rounded-full px-6 transition-all duration-300">
              Ver Projetos
            </button>
          </div>

          <div className="fade-up delay-400 flex gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                className="btn btn-circle btn-sm bg-choco border border-pearl/20 text-pearl hover:bg-catawba hover:border-catawba hover:scale-110 transition-all duration-300">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="fade-up delay-200 relative flex-shrink-0">
          <div className="absolute -inset-4 rounded-3xl border border-catawba/30 rotate-3 hidden sm:block" />
          <div className="absolute -inset-8 rounded-3xl border border-ribbon/10 -rotate-2 hidden sm:block" />
          <div className="relative">
            <img src={rebecaImg} alt="Rebeca Lima"
              className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl object-cover border-2 border-ribbon/40 shadow-2xl shadow-catawba/30" />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-ribbon/20 ring-inset" />
          </div>
          <div className="absolute -bottom-4 -left-4 badge bg-catawba text-pearl border-none px-4 py-4 text-xs font-medium shadow-lg shadow-catawba/40">
            🎓 Fatec SJC • DSM
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
        <span className="text-pearl text-xs tracking-widest uppercase">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-ribbon to-transparent" />
      </div>
    </section>
  );
}
