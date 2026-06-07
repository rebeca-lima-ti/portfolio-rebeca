import apiProjImg from "../assets/api-proj.png";

const projects = [
  {
    title: "Acompanhamento do Desempenho de Municípios do Estado de São Paulo – 1º Semestre DSM",
    subtitle: "Aprendizado por Projetos Integrados",
    year: "2025",
    status: "Concluído",
    statusColor: "badge-success",
    image: apiProjImg,
    repo: "https://github.com/Team-Chronos/API-DSM-1SEMESTRE-2025",
    problem: "Falta de uma ferramenta acessível para monitorar as tendências do mercado de importação e exportação no estado de São Paulo, dificultando a análise de dados por pequenas empresas e pesquisadores.",
    objective: "Desenvolver um sistema web para visualização e análise de dados de importação e exportação no estado de São Paulo, com dashboards interativos e relatórios periódicos.",
    methodology: "Metodologia Scrum com sprints quinzenais. A equipe Chronos é composta por Product Owner, Scrum Master e Dev Team, utilizando GitHub para controle de versão e Jira para gestão de tarefas.",
    technologies: ["Python", "SQL", "GitHub", "Scrum", "Banco de Dados"],
    challenges: "Organização e tratamento de grandes volumes de dados públicos em formato inconsistente, exigindo processos de limpeza e normalização antes da inserção no banco.",
    results: "Projeto completo (1º semestre). Estrutura do banco de dados modelada e todas as telas do sistema em funcionamento com gráficos e busca funcionais. Mais informações no repositório GitHub.",
    role: "Dev Team — responsável pela modelagem e manutenção do banco de dados e atualizações periódicas no repositório.",
  },
  {
    title: "Plataforma Newe CRM – 2º Semestre DSM",
    subtitle: "Aprendizado por Projetos Integrados",
    year: "2025",
    status: "Concluído",
    statusColor: "badge-success",
    image: apiProjImg,
    repo: "https://github.com/Team-Chronos/API-DSM-2SEMESTRE-2025",
    problem: "Falta de uma plataforma única que centralize e padronize processos administrativos, comerciais e operacionais, dificultando a visualização de informações, notificações e relatórios.",
    objective: "Desenvolver uma plataforma integrada para gestão administrativa, comercial e operacional que centralize dados, processos e relatórios, garantindo maior eficiência e controle para a empresa.",
    methodology: "Metodologia Scrum com sprints de 3 semanas. A equipe Chronos utiliza Jira para gestão de tarefas, GitHub para controle de versão, e segue Definition of Ready (DoR) e Definition of Done (DoD) estabelecidas.",
    technologies: ["React", "TypeScript", "Node.js", "MySQL", "Bootstrap", "Scrum"],
    challenges: "Integração de múltiplos módulos (administrativo, comercial, operacional), geração automática de certificados e relatórios em PDF, e tratamento de grandes volumes de dados com dashboards dinâmicos.",
    results: "Projeto completo (2º semestre). Plataforma funcional com módulos de eventos, participação, checklists prediais e de frota, geração de certificados e relatórios. Frontend responsivo com componentes reutilizáveis e backend estruturado com Node.js.",
    role: "P.O. (Product Owner) — responsável pela definição e priorização das funcionalidades, garantindo que o produto atenda às necessidades dos usuários e aos objetivos do negócio.",
  },
  {
    title: "Controle de Apontamento de Horas – 3º Semestre DSM",
    subtitle: "Aprendizado por Projetos Integrados",
    year: "2026",
    status: "Concluído",
    statusColor: "badge-success",
    image: apiProjImg,
    repo: "https://github.com/fatec-api/java-the-hutt",
    problem: "Sistema de apontamento de horas obsoleto que sofre com lentidão e falhas de integração, deixando a diretoria sem visibilidade sobre produtividade das equipes, performance de projetos e alocação de recursos.",
    objective: "Desenvolver uma aplicação web com sistema de controle centralizado de apontamento de horas, oferecendo visibilidade sobre esforço, custos e base de cobrança para tomada de decisão estratégica.",
    methodology: "Metodologia Scrum com sprints de 3 semanas. Primeira sprint com arquitetura monolítica para validar regras de negócio. Próximas sprints com estratégia de microsserviços. Utiliza Git Flow para versionamento.",
    technologies: ["Java", "Spring Boot", "React", "TypeScript", "MySQL", "Docker", "Tailwind CSS"],
    challenges: "Implementação de múltiplas regras de custo e faturamento por projeto e profissional, integração de microsserviços, geração de relatórios analíticos complexos, e validação de apontamentos com histórico de alterações.",
    results: "Projeto completo (3º semestre). Sistema web funcional com autenticação via Keycloak, apontamento de horas por atividade, aprovação de apontamentos, relatórios de custo vs orçamento, e dashboards com insights sobre produtividade.",
    role: "Dev Team — responsável pelo desenvolvimento de componentes React com TypeScript, integração com backend Spring Boot, e implementação de diversas funcionalidades.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 80% 50%, #6a6c97 0%, transparent 60%)" }} />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <p className="font-caveat text-ribbon text-2xl mb-1">o que eu construí</p>
          <h2 className="font-cinzel text-4xl sm:text-5xl text-pearl font-light tracking-wide">Projetos</h2>
          <div className="section-divider w-32 mx-auto mt-4" />
        </div>

        <div className="flex flex-col gap-10">
          {projects.map((p, i) => (
            <div key={i} className="card bg-primary-content border border-catawba/20 hover:border-catawba/50 shadow-xl shadow-black/20 transition-all duration-300 overflow-hidden">
              {/* Header com imagem */}
              <div className="flex flex-col lg:flex-row">
                {/* <div className="relative lg:w-80 xl:w-96 flex-shrink-0 overflow-hidden">
                  <img src={p.image} alt={p.title}
                    className="w-full h-48 lg:h-full object-cover"
                    style={{ minHeight: 200 }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-300/60 to-transparent lg:hidden" />
                </div> */}

                <div className="card-body p-6 lg:p-8 gap-5">
                  {/* Título e status */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-lilac text-xs uppercase tracking-widest font-medium mb-1">{p.subtitle} • {p.year}</p>
                      <h3 className="font-cinzel text-ribbon text-2xl font-medium">{p.title}</h3>
                      <p className="text-pearl/50 text-xs mt-1">Função: {p.role}</p>
                    </div>
                    <span className={`badge ${p.statusColor} badge-sm border-none text-choco font-medium flex-shrink-0`}>{p.status}</span>
                  </div>

                  {/* Grid de detalhes estruturados */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <InfoBlock icon="🔍" label="Problema Identificado" text={p.problem} />
                    <InfoBlock icon="🎯" label="Objetivo" text={p.objective} />
                    <InfoBlock icon="⚙️" label="Metodologia" text={p.methodology} />
                    <InfoBlock icon="🏆" label="Resultados" text={p.results} />
                  </div>

                  {/* Desafio técnico */}
                  <div className="rounded-xl bg-catawba/10 border border-catawba/20 p-4">
                    <p className="text-lilac text-xs uppercase tracking-widest font-medium mb-1">⚡ Desafio Técnico</p>
                    <p className="text-pearl/70 text-sm leading-relaxed">{p.challenges}</p>
                  </div>

                  {/* Tags + link */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {p.technologies.map((t) => (
                        <span key={t} className="badge bg-catawba/30 text-ribbon border-catawba/30 text-xs py-2">{t}</span>
                      ))}
                    </div>
                    <a href={p.repo} target="_blank" rel="noreferrer"
                      className="btn btn-sm bg-choco border border-pearl/20 text-pearl hover:bg-catawba hover:border-catawba rounded-full gap-2 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      Repositório
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon */}
        <div className="mt-8 card bg-base-300/50 border border-dashed border-catawba/30">
          <div className="card-body items-center text-center py-10">
            <span className="text-4xl mb-2">🚀</span>
            <p className="font-cinzel text-lilac text-lg">Mais projetos em breve...</p>
            <p className="text-pearl/50 text-sm">Acompanhe pelo GitHub!</p>
            <a href="https://github.com/rebeca-lima-ti" target="_blank" rel="noreferrer"
              className="btn btn-sm bg-catawba/30 border-catawba/40 text-ribbon hover:bg-catawba hover:text-pearl rounded-full mt-3 transition-all duration-300">
              @rebeca-lima-ti
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ icon, label, text }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-lilac text-xs uppercase tracking-widest font-medium">{icon} {label}</p>
      <p className="text-pearl/70 text-sm leading-relaxed">{text}</p>
    </div>
  );
}
