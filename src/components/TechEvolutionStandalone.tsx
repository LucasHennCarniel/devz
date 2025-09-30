import { useState } from 'react';

interface TechnologyMilestone {
  year: number;
  icon: string;
  title: string;
  description: string;
}

const milestones: TechnologyMilestone[] = [
  {
    year: 2019,
    icon: '💻',
    title: 'JavaScript & React',
    description: 'Início do desenvolvimento com tecnologias web modernas.'
  },
  {
    year: 2020,
    icon: '📄',
    title: 'Node.js & APIs REST',
    description: 'Implementação de backend e integração de APIs.'
  },
  {
    year: 2021,
    icon: '📊',
    title: 'Machine Learning',
    description: 'Incorporação de algoritmos de aprendizado de máquina.'
  },
  {
    year: 2022,
    icon: '📈',
    title: 'Cloud Computing',
    description: 'Migração para arquitetura em nuvem e microserviços.'
  },
  {
    year: 2023,
    icon: '🧠',
    title: 'Inteligência Artificial',
    description: 'Implementação de IA generativa e processamento de linguagem natural.'
  },
  {
    year: 2024,
    icon: '⚡',
    title: 'Automação Avançada',
    description: 'Sistemas autônomos e automação inteligente de processos.'
  }
];

/**
 * Componente standalone de evolução tecnológica refatorado do HTML original.
 * Mantém a mesma funcionalidade e visual, mas usando React + Tailwind.
 *
 * Returns:
 *   JSX.Element: Estrutura visual idêntica ao HTML original.
 */
export function TechEvolutionStandalone(): JSX.Element {
  const [selectedMilestone, setSelectedMilestone] = useState<TechnologyMilestone | null>(null);

  const handleBarClick = (milestone: TechnologyMilestone): void => {
    setSelectedMilestone(selectedMilestone?.year === milestone.year ? null : milestone);
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-3xl p-12 shadow-2xl border border-blue-100">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 tracking-wider">
              • Evolução Tecnológica •
            </h1>
            <p className="text-lg text-gray-600">
              Nossa jornada de crescimento e inovação ao longo dos anos
            </p>
          </div>

          {/* Chart */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => handleBarClick(milestone)}
              >
                <div className="w-full h-56 bg-gradient-to-t from-blue-600 to-blue-400 rounded-2xl flex items-end justify-center p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group-hover:scale-105">
                  <div className="text-4xl mb-4">{milestone.icon}</div>
                </div>
                <div className="mt-4 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  {milestone.year}
                </div>
              </div>
            ))}
          </div>

          {/* Selected Technology Info */}
          {selectedMilestone ? (
            <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="text-5xl">{selectedMilestone.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-xl font-bold text-gray-800">{selectedMilestone.title}</span>
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold">
                    {selectedMilestone.year}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{selectedMilestone.description}</p>
              </div>
            </div>
          ) : (
            <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <p className="text-gray-600 font-medium">
                Clique em um ano para descobrir qual tecnologia foi adquirida
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
