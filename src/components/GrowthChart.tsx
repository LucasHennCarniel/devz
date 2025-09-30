import { useState } from 'react';
import { Code, Database, Brain, TrendingUp, BarChart3, Calculator } from 'lucide-react';

interface Milestone {
  year: number;
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  height: number;
}

const milestones: Milestone[] = [
  {
    year: 2019,
    title: "Fundação da Devz",
    description: "Início das atividades focadas em desenvolvimento de software personalizado.",
    technologies: ["JavaScript", "HTML/CSS", "Node.js", "MySQL"],
    icon: <Code className="w-4 h-4" />,
    height: 120
  },
  {
    year: 2020,
    title: "Primeira Linha ERP",
    description: "Lançamento do primeiro sistema ERP modular para pequenas empresas.",
    technologies: ["React", "Express.js", "PostgreSQL", "Docker"],
    icon: <Database className="w-4 h-4" />,
    height: 160
  },
  {
    year: 2021,
    title: "Expansão para IA",
    description: "Incorporação de soluções de Inteligência Artificial nos produtos.",
    technologies: ["Python", "TensorFlow", "FastAPI", "Redis"],
    icon: <Brain className="w-4 h-4" />,
    height: 200
  },
  {
    year: 2022,
    title: "Linha Avante®",
    description: "Desenvolvimento da linha completa Avante® para diversos segmentos.",
    technologies: ["TypeScript", "Next.js", "MongoDB", "AWS"],
    icon: <TrendingUp className="w-4 h-4" />,
    height: 240
  },
  {
    year: 2023,
    title: "Business Intelligence",
    description: "Especialização em dashboards e relatórios avançados com Power BI.",
    technologies: ["Power BI", "Azure", "GraphQL", "Elasticsearch"],
    icon: <BarChart3 className="w-4 h-4" />,
    height: 280
  },
  {
    year: 2024,
    title: "Automação Contábil",
    description: "Lançamento de soluções completas de automação contábil com Python + IA.",
    technologies: ["Python", "Machine Learning", "Kubernetes", "Microservices"],
    icon: <Calculator className="w-4 h-4" />,
    height: 320
  }
];

export function GrowthChart() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="mb-4 text-gray-900">Jornada de Crescimento Devz</h1>
        <p className="text-lg text-gray-600">Nossa evolução tecnológica ao longo dos anos</p>
      </div>

      {/* Chart Container */}
      <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        {/* Y-Axis with Labels */}
        <div className="absolute left-8 top-8 bottom-16 w-16 flex flex-col justify-between">
          {/* Y-Axis Line */}
          <div className="absolute left-12 top-0 bottom-0 w-px bg-gray-300"></div>
          
          {/* Y-Axis Labels */}
          {[350, 300, 250, 200, 150, 100, 50, 0].map((value, index) => (
            <div key={value} className="relative flex items-center">
              {/* Tick Mark */}
              <div className="w-2 h-px bg-gray-300 ml-11"></div>
              {/* Label */}
              <span className="absolute right-14 text-xs text-gray-500 whitespace-nowrap">
                {value}
              </span>
              {/* Grid Line */}
              <div className="absolute left-12 w-full h-px bg-gray-100 opacity-50" style={{ width: 'calc(100vw - 12rem)' }}></div>
            </div>
          ))}
          
          {/* Y-Axis Title */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm text-gray-600 whitespace-nowrap">
            Índice de Evolução
          </div>
        </div>

        {/* Background Grid */}
        <div className="absolute inset-8 opacity-5 ml-16">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-gray-300"></div>
            ))}
          </div>
        </div>

        {/* Growth Arrow Path */}
        <svg className="absolute inset-8 w-auto h-auto pointer-events-none ml-16" style={{ width: 'calc(100% - 6rem)', height: 'calc(100% - 4rem)' }}>
          <defs>
            <linearGradient id="arrowGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.9" />
            </linearGradient>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" 
              refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
            </marker>
          </defs>
          <path
            d="M 50 90% Q 40% 60%, 85% 10%"
            stroke="url(#arrowGradient)"
            strokeWidth="4"
            fill="none"
            markerEnd="url(#arrowhead)"
            className="drop-shadow-sm"
          />
        </svg>

        {/* Chart Bars */}
        <div className="relative flex items-end justify-between gap-4 h-96 pt-12 ml-16">
          {milestones.map((milestone, index) => (
            <div 
              key={milestone.year} 
              className="flex-1 flex flex-col items-center group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Bar */}
              <div
                className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-500 hover:shadow-xl relative overflow-hidden"
                style={{ height: `${milestone.height}px` }}
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                
                {/* Icon */}
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 text-white">
                  {milestone.icon}
                </div>

                {/* Value Label on Bar */}
                <div className="absolute top-1 right-1 text-white text-xs bg-black/20 px-1 rounded">
                  {milestone.height}
                </div>
              </div>

              {/* Year Label */}
              <div className="mt-4 px-3 py-1 bg-blue-600 text-white rounded-full text-sm shadow-md">
                {milestone.year}
              </div>

              {/* Hover Card */}
              {hoveredIndex === index && (
                <div className="absolute bottom-full mb-8 left-1/2 transform -translate-x-1/2 z-20 animate-in fade-in slide-in-from-bottom-2 duration-200">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 min-w-80 max-w-sm">
                    <div className="text-center mb-3">
                      <div className="inline-flex items-center gap-2 text-blue-600 mb-1">
                        {milestone.icon}
                        <span className="text-lg">{milestone.year}</span>
                      </div>
                      <h3 className="text-gray-900">{milestone.title}</h3>
                      <div className="text-sm text-gray-500 mt-1">
                        Índice de Evolução: {milestone.height}
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {milestone.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-xs text-gray-500 uppercase tracking-wide">Tecnologias</h4>
                      <div className="flex flex-wrap gap-1">
                        {milestone.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow pointing down */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-gray-200 rotate-45 -mt-1.5"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* X-Axis */}
        <div className="w-full h-px bg-gray-300 mt-8 ml-16"></div>
        
        {/* X-Axis Label */}
        <div className="text-center mt-4 text-sm text-gray-600">
          Anos de Operação
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
          <div className="text-3xl text-blue-600 mb-2">2019-2024</div>
          <div className="text-gray-700">Período de crescimento</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
          <div className="text-3xl text-blue-600 mb-2">6 marcos</div>
          <div className="text-gray-700">Principais conquistas</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
          <div className="text-3xl text-blue-600 mb-2">24+ techs</div>
          <div className="text-gray-700">Tecnologias dominadas</div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">Passe o mouse sobre as barras para ver detalhes de cada marco</p>
        <div className="inline-flex items-center gap-2 text-blue-600 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm">Crescimento contínuo desde 2019</span>
        </div>
      </div>
    </div>
  );
}