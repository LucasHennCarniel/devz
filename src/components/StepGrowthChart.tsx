import { ArrowUpRight, Code, Database, Brain, BarChart3, Calculator, TrendingUp } from 'lucide-react';

interface JourneyStep {
  year: number;
  title: string;
  description: string;
  tools: string[];
  icon: React.ReactNode;
  color: string;
}

const steps: JourneyStep[] = [
  {
    year: 2019,
    title: "Fundação da Devz",
    description: "Início das atividades focadas em desenvolvimento de software personalizado.",
    tools: ["JavaScript", "HTML/CSS", "Node.js", "MySQL"],
    icon: <Code className="w-6 h-6" />,
    color: "bg-blue-500"
  },
  {
    year: 2020,
    title: "Primeira Linha ERP",
    description: "Lançamento do primeiro sistema ERP modular para pequenas empresas.",
    tools: ["React", "Express.js", "PostgreSQL", "Docker"],
    icon: <Database className="w-6 h-6" />,
    color: "bg-indigo-500"
  },
  {
    year: 2021,
    title: "Expansão para IA",
    description: "Incorporação de soluções de Inteligência Artificial nos produtos.",
    tools: ["Python", "TensorFlow", "FastAPI", "Redis"],
    icon: <Brain className="w-6 h-6" />,
    color: "bg-purple-500"
  },
  {
    year: 2022,
    title: "Linha Avante®",
    description: "Desenvolvimento da linha completa Avante® para diversos segmentos.",
    tools: ["TypeScript", "Next.js", "MongoDB", "AWS"],
    icon: <TrendingUp className="w-6 h-6" />,
    color: "bg-pink-500"
  },
  {
    year: 2023,
    title: "Business Intelligence",
    description: "Especialização em dashboards e relatórios avançados com Power BI.",
    tools: ["Power BI", "Azure", "GraphQL", "Elasticsearch"],
    icon: <BarChart3 className="w-6 h-6" />,
    color: "bg-orange-500"
  },
  {
    year: 2024,
    title: "Automação Contábil",
    description: "Lançamento de soluções completas de automação contábil com Python + IA.",
    tools: ["Python", "Machine Learning", "Kubernetes", "Microservices"],
    icon: <Calculator className="w-6 h-6" />,
    color: "bg-green-500"
  }
];

export function StepGrowthChart() {
  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl mb-4 text-gray-800">Jornada de Crescimento</h1>
        <p className="text-xl text-gray-600">Construindo o futuro, um degrau por vez</p>
        <ArrowUpRight className="w-8 h-8 text-gray-400 mx-auto mt-4" />
      </div>

      {/* Steps */}
      <div className="relative">
        {steps.map((step, index) => (
          <div 
            key={step.year} 
            className="flex items-center mb-12 last:mb-0"
            style={{ 
              marginLeft: `${index * 80}px`,
              transform: `translateY(-${index * 40}px)`
            }}
          >
            {/* Connection Line */}
            {index > 0 && (
              <div className="absolute w-20 h-px bg-gray-300 -left-20 top-1/2 transform -translate-y-1/2"></div>
            )}

            {/* Step Circle */}
            <div className={`${step.color} rounded-full p-4 text-white shadow-lg z-10 relative`}>
              {step.icon}
              
              {/* Year Badge */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 px-2 py-1 rounded text-sm shadow-md border">
                {step.year}
              </div>
            </div>

            {/* Content Card */}
            <div className="ml-8 bg-white rounded-lg shadow-lg p-6 max-w-sm border-l-4 border-current" style={{ borderLeftColor: step.color.replace('bg-', '#') }}>
              <h3 className="text-xl mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{step.description}</p>
              
              {/* Tools */}
              <div className="space-y-2">
                <h4 className="text-sm text-gray-700">Tecnologias:</h4>
                <div className="flex flex-wrap gap-1">
                  {step.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Growth Indicator */}
      <div className="text-center mt-16 pt-8 border-t border-gray-200">
        <div className="inline-flex items-center gap-4 bg-green-50 px-6 py-3 rounded-full">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <span className="text-green-700">Crescimento Contínuo</span>
          <ArrowUpRight className="w-5 h-5 text-green-600" />
        </div>
      </div>
    </div>
  );
}