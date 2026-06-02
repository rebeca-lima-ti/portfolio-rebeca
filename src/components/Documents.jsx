const documents = [
  {
    type: "Relatório Técnico",
    title: "Relatório de API – 1º Semestre DSM",
    description:
      "Documentação técnica do projeto de Aprendizado por Projetos Integrados desenvolvido na Fatec SJC. Inclui levantamento de requisitos, modelagem de banco de dados e histórico de sprints da equipe Chronos.",
    institution: "Fatec Profº Jessen Vidal",
    year: "2025",
    status: "Em andamento",
    statusOk: false,
    icon: "📄",
    link: "https://github.com/Team-Chronos/API-DSM-1SEMESTRE-2025",
    linkLabel: "Ver no GitHub",
  },
  // Adicione TCC, artigos e demais trabalhos aqui conforme forem produzidos:
  // {
  //   type: "TCC",
  //   title: "Título do Trabalho",
  //   description: "Resumo do trabalho.",
  //   institution: "Fatec SJC",
  //   year: "20XX",
  //   status: "Em andamento",
  //   statusOk: false,
  //   icon: "🎓",
  // },
];

export default function Documents() {
  return (
    <section id="documents" className="py-24 bg-choco relative overflow-hidden">
      <div
        className="absolute right-0 bottom-0 w-64 h-64 opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #784a4a 0%, transparent 70%)", transform: "translate(20%, 20%)" }}
      />

      <div className="container mx-auto px-6 max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="font-caveat text-ribbon text-2xl mb-1">produção acadêmica</p>
          <h2 className="font-cinzel text-4xl sm:text-5xl text-pearl font-light tracking-wide">
            Trabalhos Acadêmicos
          </h2>
          <div className="section-divider w-32 mx-auto mt-4" />
        </div>

        <div className="flex flex-col gap-6">
          {documents.map((doc, i) => (
            <div
              key={i}
              className="card bg-base-200 border border-catawba/20 hover:border-catawba/50 transition-all duration-300 shadow-lg"
            >
              <div className="card-body p-6 gap-4">
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">{doc.icon}</span>
                  <div className="flex flex-col gap-2 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <span className="badge bg-catawba/30 text-ribbon border-catawba/30 text-xs mb-2">
                          {doc.type}
                        </span>
                        <h3 className="font-cinzel text-ribbon font-medium text-lg leading-snug">
                          {doc.title}
                        </h3>
                      </div>
                      <span
                        className={`badge badge-sm border-none font-medium ${
                          doc.statusOk ? "badge-success text-choco" : "badge-warning text-choco"
                        }`}
                      >
                        {doc.status}
                      </span>
                    </div>

                    <p className="text-pearl/70 text-sm leading-relaxed">{doc.description}</p>

                    <div className="flex flex-wrap items-center justify-between gap-3 mt-1">
                      <div className="flex items-center gap-4 text-xs text-lilac">
                        <span>🏫 {doc.institution}</span>
                        <span>📅 {doc.year}</span>
                      </div>
                      {doc.link && (
                        <a
                          href={doc.link}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-xs bg-choco border border-pearl/20 text-pearl hover:bg-catawba hover:border-catawba rounded-full gap-1.5 transition-all duration-300"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          {doc.linkLabel}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder */}
          <div className="card bg-base-200/40 border border-dashed border-catawba/20">
            <div className="card-body p-6 items-center text-center gap-3">
              <span className="text-3xl opacity-40">📝</span>
              <div>
                <p className="text-pearl/30 text-sm font-medium">TCC, artigos e relatórios</p>
                <p className="text-pearl/20 text-xs mt-1">serão adicionados conforme produzidos ao longo do curso</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
