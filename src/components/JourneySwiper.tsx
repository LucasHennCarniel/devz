import { useState, useEffect } from 'react';
import { ArrowUp, Code, Database, Brain, BarChart3, Calculator, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

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



export function JourneySwiper() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % milestones.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide(prev => prev === 0 ? milestones.length - 1 : prev - 1);
  };

  const goToNext = () => {
    setCurrentSlide(prev => (prev + 1) % milestones.length);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div className="w-full max-w-7xl mx-auto p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl mb-6 text-gray-800">Nossa Jornada de Crescimento</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Navegue pelos marcos da nossa evolução
        </p>
      </div>

      {/* Swiper Container */}
      <div 
        className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-gray-50"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-gray-50"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>

        {/* Slides Container */}
        <div className="relative w-full h-full">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 translate-x-0' 
                  : index < currentSlide 
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="flex items-center justify-center p-8 h-full">
                <div className="w-full max-w-5xl mx-auto">
                  {/* Current Slide Content */}
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Chart Visualization */}
                    <div className="relative">
                      {/* Background Grid */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="grid grid-cols-6 h-full">
                          {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="border-r border-gray-300"></div>
                          ))}
                        </div>
                      </div>

                      {/* Growth Arrow */}
                      <div className="absolute top-4 right-4 flex items-center text-gray-600">
                        <span className="mr-3 text-sm">Crescimento</span>
                        <ArrowUp className="w-5 h-5" />
                      </div>

                      {/* Mini Chart showing progression */}
                      <div className="relative pt-12 pb-8">
                        <div className="flex items-end justify-between gap-2 h-64">
                          {milestones.map((m, i) => (
                            <div key={m.year} className="flex-1 flex flex-col items-center">
                              {/* Bar */}
                              <div
                                className={`w-full rounded-t-lg shadow-sm transition-all duration-500 relative ${
                                  i === currentSlide 
                                    ? `bg-gradient-to-t ${milestone.color} shadow-lg transform scale-110` 
                                    : 'bg-gray-200'
                                }`}
                                style={{ height: `${m.height}px` }}
                              >
                                {/* Icon */}
                                <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 rounded-full p-2 shadow-md border-2 ${
                                  i === currentSlide 
                                    ? 'bg-white border-current text-current' 
                                    : 'bg-gray-100 border-gray-300 text-gray-400'
                                }`}>
                                  {m.icon}
                                </div>
                              </div>

                              {/* Year */}
                              <div className="mt-3">
                                <div className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                                  i === currentSlide 
                                    ? `bg-gradient-to-r ${milestone.color} text-white shadow-md` 
                                    : 'bg-gray-100 text-gray-600'
                                }`}>
                                  {m.year}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Base Line */}
                        <div className="w-full h-2 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-full mt-4"></div>
                      </div>
                    </div>

                    {/* Detailed Information */}
                    <div className="space-y-6">
                      {/* Year Badge */}
                      <div className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${milestone.color} text-white shadow-lg`}>
                        <span className="text-2xl">{milestone.year}</span>
                      </div>

                      {/* Title with Icon */}
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${milestone.color} text-white shadow-md`}>
                          {milestone.icon}
                        </div>
                        <h2 className="text-3xl text-gray-800">{milestone.title}</h2>
                      </div>

                      {/* Description */}
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>

                      {/* Technologies */}
                      <div className="space-y-4">
                        <h3 className="text-lg text-gray-700">Tecnologias Principais:</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {milestone.tools.map((tool, toolIndex) => (
                            <div
                              key={toolIndex}
                              className="bg-gray-50 text-gray-700 px-4 py-3 rounded-lg shadow-sm border border-gray-200 text-center hover:bg-gray-100 transition-colors duration-200"
                            >
                              {tool}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Progress Indicator */}
                      <div className="pt-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span>Marco {currentSlide + 1} de {milestones.length}</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full bg-gradient-to-r ${milestone.color} transition-all duration-500`}
                              style={{ width: `${((currentSlide + 1) / milestones.length) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {milestones.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Navigation Hints */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-sm text-gray-500 mb-2">
            Use as setas ou aguarde a navegação automática
          </p>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-12 grid grid-cols-3 gap-8">
        <div className="text-center bg-white rounded-lg p-6 shadow-md">
          <div className="text-3xl text-blue-600 mb-2">6</div>
          <div className="text-gray-600">Anos de Evolução</div>
        </div>
        <div className="text-center bg-white rounded-lg p-6 shadow-md">
          <div className="text-3xl text-purple-600 mb-2">20+</div>
          <div className="text-gray-600">Tecnologias Dominadas</div>
        </div>
        <div className="text-center bg-white rounded-lg p-6 shadow-md">
          <div className="text-3xl text-green-600 mb-2">100%</div>
          <div className="text-gray-600">Crescimento Contínuo</div>
        </div>
      </div>
    </div>
  );
}