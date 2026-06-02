const softSkills = [
	"Trabalho em equipe",
	"Rápido aprendizado",
	"Organização",
	"Resolução de problemas",
	"Metodologia ágil (Scrum)",
	"Inglês intermediário",
	"Comunicação eficaz",
	"Adaptabilidade",
	"Criatividade",
];

const hardSkills = [
	{
		category: "Linguagens",
		icon: "💻",
		items: ["HTML5", "CSS3", "JavaScript", "Python", "SQL", "Java", "PHP", "TypeScript" ],
	},
	{
		category: "Banco de Dados",
		icon: "🗄️",
		items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
	},
	{
		category: "Ferramentas",
		icon: "🛠️",
		items: ["Git", "GitHub", "Figma", "VS Code", "Microsoft Office", "Canva", "Insomnia REST Client"],
	},
	{
		category: "Metodologias",
		icon: "📋",
		items: ["Scrum", "Kanban", "Design Thinking"],
	},
];

export default function About() {
	return (
		<section id="about" className="py-24 bg-base-200 relative overflow-hidden">
			<div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
				style={{ background: "radial-gradient(circle, #753b41 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />

			<div className="container mx-auto px-6 max-w-6xl">
				<div className="text-center mb-16">
					<p className="font-caveat text-ribbon text-2xl mb-1">um pouco</p>
					<h2 className="font-cinzel text-4xl sm:text-5xl text-pearl font-light tracking-wide">Sobre Mim</h2>
					<div className="section-divider w-32 mx-auto mt-4" />
				</div>

				<div className="grid lg:grid-cols-2 gap-10 items-start">
					{/* Bio card */}
					<div className="card bg-base-300 border border-catawba/20 shadow-xl shadow-black/30">
						<div className="card-body gap-4">
							<div className="flex items-center gap-3 mb-1">
								<div className="avatar placeholder">
									<div className="bg-catawba text-pearl rounded-full w-10 text-lg font-cinzel">
										<span>R</span>
									</div>
								</div>
								<div>
									<p className="font-cinzel text-ribbon font-medium">Rebeca Lima Nunes</p>
									<p className="text-lilac text-xs">20 anos • São José dos Campos, SP</p>
								</div>
							</div>

							<p className="text-pearl/80 leading-relaxed text-sm">
								Olá! Meu nome é <span className="text-ribbon font-medium">Rebeca Lima</span> e sou estudante de{" "}
								<span className="text-ribbon font-medium">Desenvolvimento de Software Multiplataforma</span> na Fatec Profº Jessen Vidal, em São José dos Campos.
							</p>
							<p className="text-pearl/80 leading-relaxed text-sm">
								Tenho interesse em desenvolvimento web, design de interfaces e banco de dados. Busco construir soluções que unam boa usabilidade e código de qualidade.
							</p>

							<div className="divider my-1" style={{ borderColor: "#753b4133" }} />

							{/* Objetivo profissional */}
							<div>
								<p className="font-cinzel text-ribbon text-sm font-medium mb-2">Objetivo Profissional</p>
								<p className="text-pearl/70 text-sm leading-relaxed">
									Atuar como Desenvolvedora de Software, contribuindo com projetos que envolvam desenvolvimento web e design de interfaces, aplicando boas práticas e metodologias ágeis.
								</p>
							</div>

							<div className="flex flex-wrap gap-2 mt-1">
								{["DSM • Fatec", "Scrum & Agile", "Open to work"].map((t) => (
									<span key={t} className="badge bg-catawba/40 text-ribbon border-catawba/30 text-xs py-3">{t}</span>
								))}
							</div>
						</div>
					</div>

					{/* Skills column */}
					<div className="flex flex-col gap-7">
						{/* Hard Skills */}
						<div>
							<h3 className="font-cinzel text-ribbon text-xl mb-4">Hard Skills</h3>
							<div className="flex flex-col gap-3">
								{hardSkills.map((group) => (
									<div key={group.category} className="card bg-base-300 border border-catawba/15 shadow-sm">
										<div className="card-body p-4 gap-2">
											<p className="text-lilac text-xs uppercase tracking-widest font-medium flex items-center gap-2">
												<span>{group.icon}</span>{group.category}
											</p>
											<div className="flex flex-wrap gap-2">
												{group.items.map((item) => (
													<span key={item} className="badge bg-catawba/30 text-ribbon border-catawba/30 text-xs py-2.5">
														{item}
													</span>
												))}
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Soft Skills */}
						<div>
							<h3 className="font-cinzel text-ribbon text-xl mb-4">Soft Skills</h3>
							<div className="flex flex-wrap gap-2">
								{softSkills.map((s) => (
									<span key={s} className="badge bg-base-300 text-pearl/80 border-catawba/20 text-xs py-3 gap-1.5">
										<span className="w-1.5 h-1.5 rounded-full bg-ribbon inline-block flex-shrink-0" />
										{s}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
