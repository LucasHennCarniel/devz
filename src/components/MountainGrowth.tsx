import { Code, Database, Brain, BarChart3, Calculator, TrendingUp, Mountain } from 'lucide-react';

interface Peak {
  year: number;
  title: string;
  description: string;
  tools: string[];
  icon: React.ReactNode;
  height: number;
  color: string;
}

const peaks: Peak[] = [
  {
    year: 2019,
    title: "Fundação da Devz",
    description: "Início das atividades focadas em desenvolvimento de software personalizado.",
    tools: ["JavaScript", "HTML/CSS", "Node.js", "MySQL"],
    icon: <Code className="w-4 h-4" />,
    height: 60,
    color: "text-blue-600"
  },
  {
    year: 2020,
    title: "Primeira Linha ERP",
    description: "Lançamento do primeiro sistema ERP modular para pequenas empresas.",
    tools: ["React", "Express.js", "PostgreSQL", "Docker"],
    icon: <Database className="w-4 h-4" />,
    height: 100,
    color: "text-indigo-600"
  },
  {
    year: 2021,
    title: "Expansão para IA",
    description: "Incorporação de soluções de Inteligência Artificial nos produtos.",
    tools: ["Python", "TensorFlow", "FastAPI", "Redis"],
    icon: <Brain className="w-4 h-4" />,
    height: 140,
    color: "text-purple-600"
  },
  {
    year: 2022,
    title: "Linha Avante®",
    description: "Desenvolvimento da linha completa Avante® para diversos segmentos.",
    tools: ["TypeScript", "Next.js", "MongoDB", "AWS"],
    icon: <TrendingUp className="w-4 h-4" />,
    height: 180,
    color: "text-pink-600"
  },
  {
    year: 2023,
    title: "Business Intelligence",
    description: "Especialização em dashboards e relatórios avançados com Power BI.",
    tools: ["Power BI", "Azure", "GraphQL", "Elasticsearch"],
    icon: <BarChart3 className="w-4 h-4" />,
    height: 220,
    color: "text-orange-600"
  },
  {
    year: 2024,
    title: "Automação Contábil",
    description: "Lançamento de soluções completas de automação contábil com Python + IA.",
    tools: ["Python", "Machine Learning", "Kubernetes", "Microservices"],
    icon: <Calculator className="w-4 h-4" />,
    height: 260,
    color: "text-green-600"
  }
];

export function MountainGrowth() {
  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Mountain className="w-8 h-8 text-gray-600" />
          <h1 className="text-4xl text-gray-800">Escalando Novos Patamares</h1>
        </div>
        <p className="text-lg text-gray-600">Nossa jornada rumo ao topo da inovação</p>
      </div>

      {/* Mountain Visualization */}
      <div className="relative overflow-x-auto">
        <div className="flex items-end justify-center gap-2 min-w-fit px-8">
          {peaks.map((peak, index) => (
            <div key={peak.year} className="relative group">
              {/* Mountain Peak */}
              <div
                className="relative bg-gradient-to-t from-gray-300 to-gray-100 hover:from-gray-400 hover:to-gray-200 transition-all duration-300 cursor-pointer"
                style={{
                  height: `${peak.height}px`,
                  width: '120px',
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                }}
              >
                {/* Peak Icon */}
                <div className={`absolute top-2 left-1/2 transform -translate-x-1/2 ${peak.color}`}>
                  {peak.icon}
                </div>

                {/* Height Marker */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">
                  {peak.height}m
                </div>
              </div>

              {/* Year Label */}
              <div className="text-center mt-2">
                <div className={`inline-block px-3 py-1 rounded-full text-sm ${peak.color} bg-current bg-opacity-10 border border-current border-opacity-20`}>
                  {peak.year}
                </div>
              </div>

              {/* Info Card - Appears on Hover */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                <div className="bg-white rounded-lg shadow-xl p-4 border max-w-xs min-w-max">
                  <h3 className="text-lg mb-2 text-gray-800">{peak.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{peak.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm text-gray-700">Tecnologias:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {peak.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded text-center"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-r border-b rotate-45 -mt-1.5"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Base Ground */}
        <div className="w-full h-8 bg-gradient-to-r from-green-200 via-green-300 to-green-200 mt-0 rounded-b-lg relative">
          <div className="absolute inset-0 bg-repeat-x opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      {/* Summit Achievement */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-4 rounded-full border border-green-200">
          <Mountain className="w-6 h-6 text-green-600" />
          <span className="text-green-700">Do zero ao pico da inovação em 6 anos</span>
          <TrendingUp className="w-6 h-6 text-green-600" />
        </div>
      </div>
    </div>
  );
}