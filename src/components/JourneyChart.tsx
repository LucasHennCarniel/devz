import { ArrowUp, Code, Database, Brain, BarChart3, Calculator, TrendingUp } from 'lucide-react';

interface JourneyMilestone {
  year: number;
  title: string;
  description: string;
  tools: string[];
  icon: React.ReactNode;
  height: number;
  color: string;
}

const milestones: JourneyMilestone[] = [
  {
    year: 2019,
    title: "Fundação da Devz",
    description: "Início das atividades focadas em desenvolvimento de software personalizado.",
    tools: ["JavaScript", "HTML/CSS", "Node.js", "MySQL"],
    icon: <Code className="w-5 h-5" />,
    height: 80,
    color: "from-blue-500 to-blue-600"
  },
  {
    year: 2020,
    title: "Primeira Linha ERP",
    description: "Lançamento do primeiro sistema ERP modular para pequenas empresas.",
    tools: ["React", "Express.js", "PostgreSQL", "Docker"],
    icon: <Database className="w-5 h-5" />,
    height: 120,
    color: "from-indigo-500 to-indigo-600"
  },
  {
    year: 2021,
    title: "Expansão para IA",
    description: "Incorporação de soluções de Inteligência Artificial nos produtos.",
    tools: ["Python", "TensorFlow", "FastAPI", "Redis"],
    icon: <Brain className="w-5 h-5" />,
    height: 160,
    color: "from-purple-500 to-purple-600"
  },
  {
    year: 2022,
    title: "Linha Avante®",
    description: "Desenvolvimento da linha completa Avante® para diversos segmentos.",
    tools: ["TypeScript", "Next.js", "MongoDB", "AWS"],
    icon: <TrendingUp className="w-5 h-5" />,
    height: 200,
    color: "from-pink-500 to-pink-600"
  },
  {
    year: 2023,
    title: "Business Intelligence",
    description: "Especialização em dashboards e relatórios avançados com Power BI.",
    tools: ["Power BI", "Azure", "GraphQL", "Elasticsearch"],
    icon: <BarChart3 className="w-5 h-5" />,
    height: 240,
    color: "from-orange-500 to-orange-600"
  },
  {
    year: 2024,
    title: "Automação Contábil",
    description: "Lançamento de soluções completas de automação contábil com Python + IA.",
    tools: ["Python", "Machine Learning", "Kubernetes", "Microservices"],
    icon: <Calculator className="w-5 h-5" />,
    height: 280,
    color: "from-green-500 to-green-600"
  }
];

export function JourneyChart() {
  return (
    <div className="w-full max-w-7xl mx-auto p-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl mb-6 text-gray-800">Nossa Jornada de Crescimento</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Cinco anos construindo soluções inovadoras que transformam negócios
        </p>
      </div>

      {/* Chart Container */}
      <div className="relative bg-white rounded-2xl shadow-lg p-8 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-6 h-full">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border-r border-gray-300"></div>
            ))}
          </div>
        </div>

        {/* Growth Arrow */}
        <div className="absolute top-4 right-8 flex items-center text-gray-600">
          <span className="mr-3">Crescimento</span>
          <ArrowUp className="w-6 h-6" />
        </div>

        {/* Main Chart */}
        <div className="relative pt-16">
          <div className="flex items-end justify-between gap-3">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex-1 group">
                {/* Bar Container */}
                <div className="relative">
                  {/* Bar */}
                  <div
                    className={`w-full bg-gradient-to-t ${milestone.color} rounded-t-lg shadow-lg transition-all duration-500 hover:shadow-xl transform hover:scale-105 relative overflow-hidden`}
                    style={{ height: `${milestone.height}px` }}
                  >
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Icon */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-md border-3 border-current text-current">
                      {milestone.icon}
                    </div>

                    {/* Height indicator */}
                    <div className="absolute top-2 right-2 text-white/70 text-xs px-2 py-1 bg-black/20 rounded">
                      {milestone.height}px
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="mt-4 flex justify-center">
                    <div className={`bg-gradient-to-r ${milestone.color} text-white px-6 py-3 rounded-full shadow-md`}>
                      <span className="text-lg">{milestone.year}</span>
                    </div>
                  </div>
                </div>

                {/* Information Card */}
                <div className="mt-6 bg-gray-50 rounded-lg p-4 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md">
                  <h3 className="text-lg mb-3 text-gray-800">{milestone.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {milestone.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-sm text-gray-700">Tecnologias Principais:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {milestone.tools.map((tool, toolIndex) => (
                        <div
                          key={toolIndex}
                          className="text-xs bg-white text-gray-700 px-3 py-2 rounded-md shadow-sm border border-gray-200 text-center"
                        >
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Base Line */}
          <div className="w-full h-3 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-full mt-0 shadow-inner"></div>
        </div>

        {/* Stats Summary */}
        <div className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl text-blue-600 mb-2">6</div>
            <div className="text-sm text-gray-600">Anos de Evolução</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-purple-600 mb-2">20+</div>
            <div className="text-sm text-gray-600">Tecnologias Dominadas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-green-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Crescimento Contínuo</div>
          </div>
        </div>
      </div>
    </div>
  );
}