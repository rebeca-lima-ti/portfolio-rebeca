const events = [
	{
		type: "Projeto Acadêmico",
		title: "API – Aprendizado por Projetos Integrados",
		organizer: "Fatec Profº Jessen Vidal",
		year: "2025",
		semester: "1º Semestre DSM",
		description:
			"Participação como Dev Team na equipe Chronos no desenvolvimento de um sistema de monitoramento de tendências de importação e exportação em São Paulo.",
		highlight: "Equipe Chronos",
		icon: "💻",
		color: "catawba",
	},
	{
		type: "Projeto Acadêmico",
		title: "API – Aprendizado por Projetos Integrados",
		organizer: "Fatec Profº Jessen Vidal - Newe Logistica",
		year: "2025",
		semester: "2º Semestre DSM",
		description:
			"Participação como Product Owner na equipe Chronos no desenvolvimento da plataforma Newe CRM: solução integrada para gestão administrativa, comercial e operacional.",
		highlight: ["Equipe Chronos", "Product Owner"],
		icon: "🎯",
		color: "catawba",
	},
	{
		type: "Projeto Acadêmico",
		title: "API – Aprendizado por Projetos Integrados",
		organizer: "Fatec Profº Jessen Vidal - GSW",
		year: "2026",
		semester: "3º Semestre DSM",
		description:
			"Participação como Dev Team na equipe Java the Hutt no desenvolvimento de um sistema de apontamento de horas para melhorar visibilidade e análise de produtividade.",
		highlight: "Equipe Java the Hutt",
		icon: "🛠️",
		color: "catawba",
	},
	{
		type: "Evento de Tecnologia",
		title: "GDG DevFest 2025 São José dos Campos",
		organizer: "GDG SJC",
		year: "2025",
		semester: "2º Semestre DSM",
		description:
			"Participação como voluntária na organização do GDG DevFest São José dos Campos, contribuindo para a logística, divulgação e suporte durante o evento.",
		highlight: "Equipe GDG SJC",
		icon: "🤝",
		color: "catawba",
	},
	{
		type: "Evento de Tecnologia",
		title: "Science & Business Connection 2025",
		organizer: "Programa Colmeia, PIT",
		year: "2025",
		semester: "2º Semestre DSM",
		description:
			"Participação como participante na Science, evento de inovação e tecnologia promovido pelo Programa Colmeia, com atividades de networking, palestras e workshops.",
		highlight: ["Programa Colmeia", "PIT"],
		icon: "🐝",
		color: "catawba",
	},
	{
		type: "Evento de Tecnologia",
		title: "Science & Business Connection 2026",
		organizer: "Programa Colmeia, PIT",
		year: "2026",
		semester: "3º Semestre DSM",
		description:
			"Participação como participante na Science, evento de inovação e tecnologia promovido pelo Programa Colmeia, com atividades de networking, palestras e workshops.",
		highlight: ["Programa Colmeia", "PIT"],
		icon: "🐝",
		color: "catawba",
	},
];

const upcoming = [
	{ label: "Maratonas de Programação", icon: "⌨️" },
	{ label: "Hackathons", icon: "🏆" },
	{ label: "Semanas de Tecnologia", icon: "📡" },
	{ label: "Workshops e Palestras", icon: "🎤" },
];

export default function Events() {
	const apiProjectCount = events.filter(ev => ev.title === "API – Aprendizado por Projetos Integrados").length;
	const stats = [
		{ value: apiProjectCount, label: "Projeto de API" },
		{ value: "2024", label: "Ano de início na área" },
		{ value: "Scrum", label: "Metodologia aplicada" },
		{ value: "DSM", label: "Curso na Fatec SJC" },
	];

	// prepare items including placeholder so distribution counts include it
	const items = [...events];
	const placeholderItem = { isPlaceholder: true };
	items.push(placeholderItem);

	const isMultiColumn = items.length > 3;
	const firstColCount = Math.ceil(items.length / 2);
	const col1 = isMultiColumn ? items.slice(0, firstColCount) : items;
	const col2 = isMultiColumn ? items.slice(firstColCount) : [];
	return (
		<section id="events" className="py-24 bg-purple relative overflow-hidden">
			<div
				className="absolute top-0 left-0 right-0 h-px opacity-20"
				style={{ background: "linear-gradient(90deg, transparent, #FBF9FF, transparent)" }}
			/>

			<div className="container mx-auto px-6 max-w-5xl">
				{/* Heading */}
				<div className="text-center mb-16">
					<p className="font-caveat text-ribbon text-2xl mb-1">além da sala de aula</p>
					<h2 className="font-cinzel text-4xl sm:text-5xl text-pearl font-light tracking-wide">
						Eventos & Atividades
					</h2>
					<div className="section-divider w-32 mx-auto mt-4" />
				</div>

				<div className="flex flex-col gap-6">
					{/* Events list */}
					<div>
						<h3 className="font-cinzel text-ribbon text-lg mb-4">Participações</h3>
						{isMultiColumn ? (
							<div className="grid md:grid-cols-2 gap-5">
								<div className="flex flex-col gap-5">
									{col1.map((ev, i) => (
										ev.isPlaceholder ? (
											<div key={`ph-1-${i}`} className="card bg-accent/40 border border-dashed border-catawba/20">
												<div className="card-body p-5 items-center text-center gap-2">
													<span className="text-2xl opacity-40">📅</span>
													<p className="text-pearl/30 text-xs">Próximas participações<br />serão adicionadas aqui</p>
												</div>
											</div>
										) : (
											<div key={`c1-${i}`} className="card bg-accent border border-catawba/20 hover:border-catawba/50 transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
												<div className="card-body p-5 gap-3">
													<div className="flex items-start gap-4">
														<span className="text-3xl flex-shrink-0 mt-0.5">{ev.icon}</span>
														<div className="flex flex-col gap-1 flex-1">
															<div className="flex flex-wrap items-center justify-between gap-2">
																<span className="badge bg-catawba/30 text-ribbon border-catawba/30 text-xs">{ev.type}</span>
																<span className="text-lilac text-xs">{ev.year} • {ev.semester}</span>
															</div>
															<h4 className="font-cinzel text-ribbon font-medium text-sm leading-snug">{ev.title}</h4>
															<p className="text-lilac text-xs">{ev.organizer}</p>
															<p className="text-pearl/65 text-sm leading-relaxed mt-1">{ev.description}</p>
															<div className="flex gap-1.5">
																{ev.highlight && (
																	<>
																		{(Array.isArray(ev.highlight) ? ev.highlight : [ev.highlight]).map((h, idx) => (
																			<span key={idx} className="badge bg-catawba/20 text-ribbon border-catawba/20 text-xs self-start mt-1">🏅 {h}</span>
																		))}
																	</>
																)}
															</div>
														</div>
													</div>
												</div>
											</div>
										)
									))}
								</div>
								<div className="flex flex-col gap-5">
									{col2.map((ev, i) => (
										ev.isPlaceholder ? (
											<div key={`ph-2-${i}`} className="card bg-accent/40 border border-dashed border-catawba/20">
												<div className="card-body p-5 items-center text-center gap-2">
													<span className="text-2xl opacity-40">📅</span>
													<p className="text-pearl/30 text-xs">Próximas participações<br />serão adicionadas aqui</p>
												</div>
											</div>
										) : (
											<div key={`c2-${i}`} className="card bg-accent border border-catawba/20 hover:border-catawba/50 transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
												<div className="card-body p-5 gap-3">
													<div className="flex items-start gap-4">
														<span className="text-3xl flex-shrink-0 mt-0.5">{ev.icon}</span>
														<div className="flex flex-col gap-1 flex-1">
															<div className="flex flex-wrap items-center justify-between gap-2">
																<span className="badge bg-catawba/30 text-ribbon border-catawba/30 text-xs">{ev.type}</span>
																<span className="text-lilac text-xs">{ev.year} • {ev.semester}</span>
															</div>
															<h4 className="font-cinzel text-ribbon font-medium text-sm leading-snug">{ev.title}</h4>
															<p className="text-lilac text-xs">{ev.organizer}</p>
															<p className="text-pearl/65 text-sm leading-relaxed mt-1">{ev.description}</p>
															<div className="flex gap-1.5">
																{ev.highlight && (
																	<>
																		{(Array.isArray(ev.highlight) ? ev.highlight : [ev.highlight]).map((h, idx) => (
																			<span key={idx} className="badge bg-catawba/20 text-ribbon border-catawba/20 text-xs self-start mt-1">🏅 {h}</span>
																		))}
																	</>
																)}
															</div>
														</div>
													</div>
												</div>
											</div>
										)
									))}
								</div>
							</div>
						) : (
							<div className="flex flex-col gap-5">
								{items.map((ev, i) => (
									ev.isPlaceholder ? (
										<div key={`ph-${i}`} className="card accent/40 border border-dashed border-catawba/20">
											<div className="card-body p-5 items-center text-center gap-2">
												<span className="text-2xl opacity-40">📅</span>
												<p className="text-pearl/30 text-xs">Próximas participações<br />serão adicionadas aqui</p>
											</div>
										</div>
									) : (
										<div key={i} className="card bg-accent border border-catawba/20 hover:border-catawba/50 transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
											<div className="card-body p-5 gap-3">
												<div className="flex items-start gap-4">
													<span className="text-3xl flex-shrink-0 mt-0.5">{ev.icon}</span>
													<div className="flex flex-col gap-1 flex-1">
														<div className="flex flex-wrap items-center justify-between gap-2">
															<span className="badge bg-catawba/30 text-ribbon border-catawba/30 text-xs">{ev.type}</span>
															<span className="text-lilac text-xs">{ev.year} • {ev.semester}</span>
														</div>
														<h4 className="font-cinzel text-ribbon font-medium text-sm leading-snug">{ev.title}</h4>
														<p className="text-lilac text-xs">{ev.organizer}</p>
														<p className="text-pearl/65 text-sm leading-relaxed mt-1">{ev.description}</p>
														<div className="flex gap-1.5">
															{ev.highlight && (
																<>
																	{(Array.isArray(ev.highlight) ? ev.highlight : [ev.highlight]).map((h, idx) => (
																		<span key={idx} className="badge bg-catawba/20 text-ribbon border-catawba/20 text-xs self-start mt-1">🏅 {h}</span>
																	))}
																</>
															)}
														</div>
													</div>
												</div>
											</div>
										</div>
									)
								))}
							</div>
						)}
					</div>

					<div className="flex flex-col gap-6">
						<div className="card bg-[#21223b] border border-catawba/20 shadow-lg">
							<div className="card-body p-6 gap-4">
								<h3 className="font-cinzel text-ribbon text-lg">Quero participar de...</h3>
								<p className="text-pearl/60 text-sm leading-relaxed">
									Como estudante em início de carreira, estou ativamente buscando oportunidades de participar de eventos da comunidade tecnológica para expandir minha rede e conhecimentos.
								</p>
								<div className="flex flex-col gap-2 mt-1">
									{upcoming.map((u) => (
										<div key={u.label} className="flex items-center gap-3 text-pearl/70 text-sm">
											<span>{u.icon}</span>
											<span>{u.label}</span>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Stats card */}
						<div className="card bg-catawba/20 border border-catawba/30 shadow-lg">
							<div className="card-body p-6 gap-4">
								<h3 className="font-cinzel text-ribbon text-base">Jornada Acadêmica</h3>
								<div className="grid grid-cols-2 gap-4">
									{stats.map((stat) => (
										<div key={stat.label} className="text-center">
											<p className="font-cinzel text-ribbon text-xl font-semibold">{stat.value}</p>
											<p className="text-lilac text-xs mt-0.5">{stat.label}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
