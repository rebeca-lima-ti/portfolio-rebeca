const educations = [
  {
    type: "Curso Superior",
    title: "Desenvolvimento de Software Multiplataforma",
    institution: "Fatec Profº Jessen Vidal",
    location: "São José dos Campos, SP",
    period: "2025 – 2027 (previsto)",
    status: "Em andamento",
    statusColor: "badge-accent",
    semester: "3º Semestre",
    icon: "🎓",
  },
  {
    type: "Curso Técnico Modular",
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Etec Profª Ilza Nascimento Pintus",
    location: "São José dos Campos, SP",
    period: "Concluído em 06/2024",
    status: "Concluído",
    statusColor: "badge-success",
    icon: "💻",
  },
  {
    type: "Ensino Médio",
    title: "Ensino Médio Completo",
    institution: "E. E. Profº Valmar Lourenço Santiago",
    location: "São José dos Campos, SP",
    period: "Concluído em 12/2022",
    status: "Concluído",
    statusColor: "badge-success",
    icon: "📚",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-choco relative overflow-hidden">
      {/* Decorative line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px opacity-10 hidden lg:block"
        style={{ background: "linear-gradient(to bottom, transparent, #FBF9FF, transparent)", left: "10%" }}
      />

      <div className="container mx-auto px-6 max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="font-caveat text-ribbon text-2xl mb-1">minha trajetória</p>
          <h2 className="font-cinzel text-4xl sm:text-5xl text-pearl font-light tracking-wide">
            Formações
          </h2>
          <div className="section-divider w-32 mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-catawba via-ribbon to-transparent hidden sm:block" />

          <div className="flex flex-col gap-10">
            {educations.map((edu, i) => (
              <div key={i} className="flex gap-8 items-start group">
                {/* Timeline dot */}
                <div className="relative flex-shrink-0 hidden sm:block">
                  <div className="w-8 h-8 rounded-full bg-catawba border-2 border-ribbon flex items-center justify-center text-sm shadow-lg shadow-catawba/40 group-hover:scale-110 transition-transform duration-300">
                    {edu.icon}
                  </div>
                </div>

                {/* Card */}
                <div className="card border border-catawba/20 hover:border-catawba/50 shadow-lg hover:shadow-catawba/10 transition-all duration-300 flex-1 group-hover:-translate-y-0.5">
                  <div className="card-body p-6 gap-3">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-lilac text-xs uppercase tracking-widest font-medium mb-1">
                          {edu.type}
                        </p>
                        <h3 className="font-cinzel text-ribbon text-lg font-medium leading-snug">
                          {edu.title}
                        </h3>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className={`badge ${edu.statusColor} badge-sm border-none text-choco font-medium`}>
                          {edu.status}
                        </span>
                        {edu.semester && (
                          <span className="text-lilac text-xs">{edu.semester}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <p className="text-pearl/70 text-sm font-medium">{edu.institution}</p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-lilac">
                        <span className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
