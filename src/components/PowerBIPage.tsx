import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, BarChart3, PieChart, TrendingUp, Database, Filter, Share2, Clock, Zap, Eye, RefreshCw, Target, Users, ExternalLink, Sparkles, Brain, Cpu, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function PowerBIPage() {
  const solutions = [
    {
      icon: BarChart3,
      title: 'Dashboards Interativos',
      description: 'Visualizações dinâmicas que permitem explorar dados em tempo real com filtros avançados',
      hint: 'Decisões baseadas em dados atualizados'
    },
    {
      icon: TrendingUp,
      title: 'Análise Preditiva',
      description: 'Identificação de tendências e padrões através de algoritmos de machine learning',
      hint: 'Preveja o futuro do seu negócio'
    },
    {
      icon: Database,
      title: 'Integração Multi-Fonte',
      description: 'Conecte ERPs, CRMs, planilhas e APIs em uma única plataforma de análise',
      hint: 'Todos os dados em um só lugar'
    },
    {
      icon: Target,
      title: 'Alertas Inteligentes',
      description: 'Notificações automáticas baseadas em metas e indicadores críticos',
      hint: 'Nunca perca uma oportunidade'
    }
  ];

  const stats = [
    { icon: TrendingUp, number: '70%', label: 'Decisões mais rápidas' },
    { icon: Clock, number: '80%', label: 'Redução no tempo de análise' },
    { icon: Users, number: '45%', label: 'Aumento na produtividade' },
    { icon: Target, number: '100%', label: 'Visibilidade do negócio' }
  ];

  const technologies = [
    { name: 'Power BI', icon: BarChart3, color: 'bg-orange-100 text-orange-700' },
    { name: 'Azure Data Factory', icon: Database, color: 'bg-blue-100 text-blue-700' },
    { name: 'SQL Server', icon: Database, color: 'bg-green-100 text-green-700' },
    { name: 'Python', icon: Cpu, color: 'bg-yellow-100 text-yellow-700' },
    { name: 'Machine Learning', icon: Brain, color: 'bg-purple-100 text-purple-700' },
    { name: 'APIs REST', icon: Globe, color: 'bg-indigo-100 text-indigo-700' }
  ];

  const useCases = [
    {
      title: 'Dashboard Financeiro',
      description: 'Controle de fluxo de caixa, DRE, análise de lucratividade e projeções financeiras.',
      industry: 'Financeiro',
      icon: BarChart3
    },
    {
      title: 'Análise de Vendas',
      description: 'Performance de vendedores, produtos mais vendidos, sazonalidade e metas comerciais.',
      industry: 'Comercial',
      icon: TrendingUp
    },
    {
      title: 'Gestão de Estoque',
      description: 'Giro de estoque, produtos em falta, análise ABC e otimização de compras.',
      industry: 'Operacional',
      icon: Database
    },
    {
      title: 'RH e People Analytics',
      description: 'Turnover, produtividade, satisfação de funcionários e indicadores de RH.',
      industry: 'Recursos Humanos',
      icon: Users
    }
  ];

  const handleExternalRedirect = () => {
    // Placeholder for external domain redirect
    alert('Aqui seria redirecionado para o domínio da empresa de Power BI');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-[#31496e] relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/30 rounded-full -translate-x-48 -translate-y-48 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#31496e]/30 rounded-full translate-x-48 translate-y-48 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/20 rounded-full -translate-x-32 -translate-y-32 animate-bounce"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-32">
            {/* Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur">
                  Uma empresa Devz Group
                </Badge>
                
                <h1 className="text-4xl lg:text-6xl xl:text-7xl leading-tight">
                  Dados que <span className="text-[#31496e]">impulsionam</span> decisões
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                  Transforme seus dados em insights estratégicos com dashboards interativos 
                  e análises avançadas que revolucionam a tomada de decisão.
                </p>
              </div>

              {/* Key Technologies */}
              <div className="flex flex-wrap gap-3">
                {technologies.slice(0, 4).map((tech) => {
                  const IconComponent = tech.icon;
                  return (
                    <div key={tech.name} className="flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-2">
                      <IconComponent className="w-4 h-4" />
                      <span className="text-sm">{tech.name}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleExternalRedirect}
                  className="bg-[#31496e] hover:bg-[#31496e]/90 text-white px-8 py-4 text-lg"
                >
                  Ver Dashboards em Ação
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline"
                  className="border-white text-gray-900 hover:!bg-gray-900 hover:!text-white px-8 py-4 text-lg"
                >
                  Solicitar Demonstração
                </Button>
              </div>
            </div>

            {/* Visual */}
            <div className="relative lg:order-2">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTgwMjU3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dashboards Power BI em ação"
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-2xl"
                />
                
                {/* Floating Cards */}
                <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">Dashboard Ativo</div>
                      <div className="text-xs text-gray-500">Dados em tempo real</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur rounded-lg p-4 shadow-lg">
                  <div className="text-2xl text-gray-900 mb-1">70%</div>
                  <div className="text-sm text-gray-500">Decisões mais rápidas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Soluções de Business Intelligence
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto text-lg">
              Cada dashboard é desenvolvido especificamente para suas necessidades. 
              Não vendemos relatórios prontos, criamos insights personalizados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#31496e] to-[#31496e] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-gray-900 mb-4">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-500 leading-relaxed mb-6 flex-1">
                      {solution.description}
                    </p>

                    <div className="bg-[#F5F6F7] rounded-lg p-3">
                      <span className="text-sm text-[#31496e]">{solution.hint}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Technology Stack */}
          <div className="bg-[#F5F6F7] rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-gray-900 mb-4">
                Stack tecnológico de ponta
              </h3>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Utilizamos as tecnologias mais avançadas do mercado para garantir dashboards robustos e escaláveis
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <div key={tech.name} className={`flex items-center gap-3 px-4 py-3 rounded-lg ${tech.color}`}>
                    <IconComponent className="w-5 h-5" />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Casos de uso por área
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto text-lg">
              Dashboards personalizados para cada departamento da sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#31496e] to-[#31496e] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-gray-900 mb-2 group-hover:text-[#31496e] transition-colors">
                      {useCase.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">
                      {useCase.description}
                    </p>

                    <Badge variant="outline" className="text-[#31496e] border-[#31496e]">
                      {useCase.industry}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats & Social Proof */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Resultados que impressionam
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Nossos clientes não apenas visualizam dados - eles descobrem oportunidades ocultas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center text-white">
                  <div className="w-16 h-16 bg-[#31496e]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-[#31496e]" />
                  </div>
                  <div className="text-3xl lg:text-4xl mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Testimonial */}
          <div className="bg-white/10 backdrop-blur rounded-lg p-8 text-center">
            <blockquote className="text-xl text-white mb-6">
              "Os dashboards que criaram revolucionaram nossa gestão. Agora tomamos decisões 
              baseadas em dados reais e identificamos oportunidades que antes passavam despercebidas. 
              O ROI foi de 300% no primeiro ano."
            </blockquote>
            <div className="text-[#31496e]">
              Diretor Financeiro de empresa do setor varejo
            </div>
          </div>
        </div>
      </section>

      {/* Curiosity Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Cada dashboard conta uma história única
          </h2>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            Não trabalhamos com templates prontos. Analisamos profundamente seus dados, 
            identificamos padrões ocultos e criamos visualizações que revelam insights 
            que transformam seu negócio. Alguns clientes descobriram receitas que nem sabiam que existiam.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl mb-2">📊</div>
              <h4 className="text-gray-900 mb-2">Análise Profunda</h4>
              <p className="text-sm text-gray-500">Identificamos padrões que você nem sabia que existiam</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="text-gray-900 mb-2">Tempo Real</h4>
              <p className="text-sm text-gray-500">Dados sempre atualizados para decisões instantâneas</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="text-gray-900 mb-2">Insights Acionáveis</h4>
              <p className="text-sm text-gray-500">Não apenas dados, mas recomendações práticas</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#31496e] to-[#31496e] rounded-lg p-8 text-white">
            <h3 className="text-white mb-4">
              Pronto para descobrir o poder dos seus dados?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Cada empresa que conhecemos tem dados valiosos que não estão sendo aproveitados. 
              Descubra quais insights estão escondidos nos seus dados.
            </p>
            
            <Button 
              onClick={handleExternalRedirect}
              className="bg-white hover:bg-white/90 text-[#31496e] px-8 py-4 text-lg"
            >
              Solicitar Análise Gratuita
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
