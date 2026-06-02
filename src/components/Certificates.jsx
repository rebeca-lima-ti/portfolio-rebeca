const certificates = [
  {
    title: "Bootstrap",
    institution: "Senac SJC",
    year: "2025",
    category: "Programação Frontend",
    icon: "🎨",
    status: "confirmed",
  },
  {
    title: "PHP",
    institution: "Senac SJC",
    year: "2025",
    category: "Programação",
    icon: "🧠",
    status: "confirmed",
  },
  {
    title: "WordPress",
    institution: "Senac SJC",
    year: "2025",
    category: "Ferramentas",
    icon: "🔧",
    status: "confirmed",
  },
  // Adicione novos certificados aqui
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-choco relative overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-80 h-80 opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #753b41 0%, transparent 70%)", transform: "translate(-30%, 30%)" }}
      />

      <div className="container mx-auto px-6 max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="font-caveat text-ribbon text-2xl mb-1">conquistas e aprendizados</p>
          <h2 className="font-cinzel text-4xl sm:text-5xl text-pearl font-light tracking-wide">
            Certificações
          </h2>
          <div className="section-divider w-32 mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="card bg-base-200 border border-catawba/20 hover:border-catawba/50 hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              <div className="card-body p-5 gap-3">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-3xl">{cert.icon}</span>
                  <span className="badge bg-catawba/30 text-ribbon border-catawba/30 text-xs">{cert.category}</span>
                </div>
                <div>
                  <h3 className="font-cinzel text-ribbon font-medium text-sm leading-snug">{cert.title}</h3>
                  <p className="text-lilac text-xs mt-1">{cert.institution}</p>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-pearl/40 text-xs flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {cert.year}
                  </span>
                  <span className="badge badge-success badge-xs border-none text-choco font-medium">Concluído</span>
                </div>
              </div>
            </div>
          ))}

          {/* Add more placeholder */}
          <div className="card bg-base-200/40 border border-dashed border-catawba/20 hover:border-catawba/40 transition-all duration-300">
            <div className="card-body p-5 items-center justify-center text-center gap-2">
              <span className="text-2xl opacity-40">＋</span>
              <p className="text-pearl/30 text-xs">Em breve novos<br />certificados</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-pearl/30 text-xs italic">
            * Seção atualizada continuamente conforme novos cursos são concluídos.
          </p>
        </div>
      </div>
    </section>
  );
}
