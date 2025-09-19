import { Card, CardContent } from './ui/card';
import { Settings, Zap, BarChart3, ShoppingCart, FileText, TrendingUp } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Settings,
      title: 'ERP Modular',
      description: 'Sistema completo com PDV, NFE, CTE, controle financeiro e gestão de estoque integrados.',
      highlights: ['PDV Integrado', 'Emissão de NFe/CTe', 'Gestão Financeira', 'Controle de Estoque']
    },
    {
      icon: Zap,
      title: 'Automações com Python + IA',
      description: 'Automatize processos contábeis complexos com inteligência artificial e Python.',
      highlights: ['IA para Classificação', 'Scripts Python', 'Integração e-Social', 'Relatórios Automatizados']
    },
    {
      icon: BarChart3,
      title: 'Dashboards em Power BI',
      description: 'Visualize seus dados com relatórios interativos e dashboards profissionais.',
      highlights: ['Relatórios Interativos', 'Análise em Tempo Real', 'KPIs Personalizados', 'Exportação Automática']
    }
  ];

  const stats = [
    { icon: ShoppingCart, number: '500+', label: 'Empresas Atendidas' },
    { icon: FileText, number: '1M+', label: 'Documentos Processados' },
    { icon: TrendingUp, number: '98%', label: 'Satisfação dos Clientes' }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossas Especialidades em Tecnologia
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto">
            Ferramentas avançadas que integram gestão empresarial, automação inteligente e análise de dados
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-gray-600" />
                    </div>
                    <h3 className="text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {feature.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index}>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-500">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}