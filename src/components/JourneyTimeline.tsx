import { Code, Database, Brain, TrendingUp, BarChart3, Calculator } from 'lucide-react';

interface Milestone {
  year: number;
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
}

const milestones: Milestone[] = [
  {
    year: 2019,
    title: "Fundação da Devz",
    description: "Início das atividades focadas em desenvolvimento de software personalizado.",
    technologies: ["JavaScript", "HTML/CSS", "Node.js", "MySQL"],
    icon: <Code className="w-4 h-4" />
  },
  {
    year: 2020,
    title: "Primeira Linha ERP",
    description: "Lançamento do primeiro sistema ERP modular para pequenas empresas.",
    technologies: ["React", "Express.js", "PostgreSQL", "Docker"],
    icon: <Database className="w-4 h-4" />
  },
  {
    year: 2021,
    title: "Expansão para IA",
    description: "Incorporação de soluções de Inteligência Artificial nos produtos.",
    technologies: ["Python", "TensorFlow", "FastAPI", "Redis"],
    icon: <Brain className="w-4 h-4" />
  },
  {
    year: 2022,
    title: "Linha Avante®",
    description: "Desenvolvimento da linha completa Avante® para diversos segmentos.",
    technologies: ["TypeScript", "Next.js", "MongoDB", "AWS"],
    icon: <TrendingUp className="w-4 h-4" />
  },
  {
    year: 2023,
    title: "Business Intelligence",
    description: "Especialização em dashboards e relatórios avançados com Power BI.",
    technologies: ["Power BI", "Azure", "GraphQL", "Elasticsearch"],
    icon: <BarChart3 className="w-4 h-4" />
  },
  {
    year: 2024,
    title: "Automação Contábil",
    description: "Lançamento de soluções completas de automação contábil com Python + IA.",
    technologies: ["Python", "Machine Learning", "Kubernetes", "Microservices"],
    icon: <Calculator className="w-4 h-4" />
  }
];

export function JourneyTimeline() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl mb-4 text-gray-900">Nossa Jornada</h1>
        <p className="text-lg text-gray-600">Cinco anos construindo soluções que fazem a diferença</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-16 top-0 bottom-0 w-px bg-gray-200"></div>
        
        {/* Timeline Items */}
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div key={milestone.year} className="relative flex items-start">
              {/* Year Badge */}
              <div className="flex-shrink-0 w-32">
                <div className="bg-blue-600 text-white px-4 py-3 rounded-lg shadow-sm">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      {milestone.icon}
                      <span className="text-lg">{milestone.year}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 ml-8">
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-xl mb-3 text-gray-900">{milestone.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{milestone.description}</p>
                  
                  {/* Technologies */}
                  <div className="space-y-2">
                    <h4 className="text-sm text-gray-500 uppercase tracking-wide">Tecnologias principais</h4>
                    <div className="flex flex-wrap gap-2">
                      {milestone.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection Dot */}
              <div className="absolute left-16 top-6 w-3 h-3 bg-blue-600 rounded-full transform -translate-x-1/2 border-4 border-white shadow-sm z-10"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Stats */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
          <div className="text-3xl text-blue-600 mb-2">6</div>
          <div className="text-gray-600">Anos de inovação</div>
        </div>
        <div className="text-center p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
          <div className="text-3xl text-blue-600 mb-2">24+</div>
          <div className="text-gray-600">Tecnologias dominadas</div>
        </div>
        <div className="text-center p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
          <div className="text-3xl text-blue-600 mb-2">∞</div>
          <div className="text-gray-600">Potencial de crescimento</div>
        </div>
      </div>
    </div>
  );
}