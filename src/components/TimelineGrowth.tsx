import { Code, Database, Brain, BarChart3, Calculator, TrendingUp, Zap } from 'lucide-react';

interface Milestone {
  year: number;
  title: string;
  description: string;
  tools: string[];
  icon: React.ReactNode;
  accent: string;
}

const milestones: Milestone[] = [
  {
    year: 2019,
    title: "Fundação da Devz",
    description: "Início das atividades focadas em desenvolvimento de software personalizado.",
    tools: ["JavaScript", "HTML/CSS", "Node.js", "MySQL"],
    icon: <Code className="w-5 h-5" />,
    accent: "border-blue-400 bg-blue-50"
  },
  {
    year: 2020,
    title: "Primeira Linha ERP",
    description: "Lançamento do primeiro sistema ERP modular para pequenas empresas.",
    tools: ["React", "Express.js", "PostgreSQL", "Docker"],
    icon: <Database className="w-5 h-5" />,
    accent: "border-indigo-400 bg-indigo-50"
  },
  {
    year: 2021,
    title: "Expansão para IA",
    description: "Incorporação de soluções de Inteligência Artificial nos produtos.",
    tools: ["Python", "TensorFlow", "FastAPI", "Redis"],
    icon: <Brain className="w-5 h-5" />,
    accent: "border-purple-400 bg-purple-50"
  },
  {
    year: 2022,
    title: "Linha Avante®",
    description: "Desenvolvimento da linha completa Avante® para diversos segmentos.",
    tools: ["TypeScript", "Next.js", "MongoDB", "AWS"],
    icon: <TrendingUp className="w-5 h-5" />,
    accent: "border-pink-400 bg-pink-50"
  },
  {
    year: 2023,
    title: "Business Intelligence",
    description: "Especialização em dashboards e relatórios avançados com Power BI.",
    tools: ["Power BI", "Azure", "GraphQL", "Elasticsearch"],
    icon: <BarChart3 className="w-5 h-5" />,
    accent: "border-orange-400 bg-orange-50"
  },
  {
    year: 2024,
    title: "Automação Contábil",
    description: "Lançamento de soluções completas de automação contábil com Python + IA.",
    tools: ["Python", "Machine Learning", "Kubernetes", "Microservices"],
    icon: <Calculator className="w-5 h-5" />,
    accent: "border-green-400 bg-green-50"
  }
];

export function TimelineGrowth() {
  return (
    <div className="w-full max-w-5xl mx-auto p-8">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-4">
          <Zap className="w-8 h-8 text-yellow-500" />
          <h1 className="text-4xl text-gray-800">Nossa Evolução</h1>
          <Zap className="w-8 h-8 text-yellow-500" />
        </div>
        <p className="text-lg text-gray-600">De startup a referência em automação</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Central Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 via-purple-300 to-green-300"></div>

        {milestones.map((milestone, index) => (
          <div 
            key={milestone.year} 
            className={`relative flex items-center mb-16 ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
          >
            {/* Content */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
              <div className={`p-6 rounded-lg border-2 ${milestone.accent} shadow-md hover:shadow-lg transition-all duration-300`}>
                {/* Year */}
                <div className="text-2xl mb-2 text-gray-800">{milestone.year}</div>
                
                {/* Title with Icon */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    {milestone.icon}
                  </div>
                  <h3 className="text-lg text-gray-800">{milestone.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {milestone.description}
                </p>

                {/* Technologies */}
                <div className="space-y-2">
                  <div className="text-xs text-gray-500">Tecnologias principais:</div>
                  <div className="flex flex-wrap gap-1">
                    {milestone.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="text-xs bg-white/70 text-gray-700 px-2 py-1 rounded border"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Center Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-gray-400 rounded-full z-10 shadow-sm"></div>

            {/* Connector */}
            <div className={`absolute w-8 h-px bg-gray-300 top-1/2 transform -translate-y-1/2 ${
              index % 2 === 0 ? 'left-1/2 ml-2' : 'right-1/2 mr-2'
            }`}></div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
          <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
          <span>2019</span>
          <div className="w-8 h-px bg-gradient-to-r from-blue-300 to-green-300"></div>
          <span>2024</span>
          <div className="w-3 h-3 bg-green-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}