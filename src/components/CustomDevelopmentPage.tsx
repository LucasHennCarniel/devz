import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Code, Smartphone, Globe, Database, Cog, Shield, Zap, Users, Puzzle, Rocket, Target, Wrench, ExternalLink, Sparkles, Brain, Cpu, Layers } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function CustomDevelopmentPage() {
  const solutions = [
    {
      icon: Globe,
      title: 'Sistemas Web Personalizados',
      description: 'Desenvolvimento de plataformas web únicas com tecnologias modernas e performance otimizada',
      hint: 'Soluções que crescem com seu negócio'
    },
    {
      icon: Smartphone,
      title: 'Apps Mobile Nativos',
      description: 'Aplicativos iOS e Android desenvolvidos especificamente para suas necessidades',
      hint: 'Presença mobile profissional'
    },
    {
      icon: Code,
      title: 'APIs e Integrações',
      description: 'Conecte todos os seus sistemas com APIs robustas e integrações inteligentes',
      hint: 'Ecosistema tecnológico unificado'
    },
    {
      icon: Cog,
      title: 'Automação de Processos',
      description: 'Automatize workflows complexos e elimine tarefas repetitivas da sua equipe',
      hint: 'Eficiência máxima garantida'
    }
  ];

  const stats = [
    { icon: Target, number: '100%', label: 'Personalização garantida' },
    { icon: Zap, number: '300%', label: 'Aumento de eficiência' },
    { icon: Users, number: '50+', label: 'Projetos entregues' },
    { icon: Shield, number: '99.9%', label: 'Uptime garantido' }
  ];

  const technologies = [
    { name: 'React', icon: Code, color: 'bg-blue-100 text-blue-700' },
    { name: 'Node.js', icon: Cpu, color: 'bg-green-100 text-green-700' },
    { name: 'Python', icon: Cpu, color: 'bg-yellow-100 text-yellow-700' },
    { name: 'PostgreSQL', icon: Database, color: 'bg-indigo-100 text-indigo-700' },
    { name: 'AWS', icon: Cloud, color: 'bg-orange-100 text-orange-700' },
    { name: 'Docker', icon: Layers, color: 'bg-cyan-100 text-cyan-700' }
  ];

  const useCases = [
    {
      title: 'Sistema de Gestão Customizado',
      description: 'ERP personalizado com módulos específicos para processos únicos da empresa.',
      industry: 'Gestão',
      icon: Cog
    },
    {
      title: 'Portal do Cliente',
      description: 'Plataforma web para clientes com área restrita, pedidos online e acompanhamento.',
      industry: 'Relacionamento',
      icon: Users
    },
    {
      title: 'App de Vendas Externas',
      description: 'Aplicativo mobile para vendedores com catálogo, pedidos offline e sincronização.',
      industry: 'Vendas',
      icon: Smartphone
    },
    {
      title: 'Marketplace Próprio',
      description: 'Plataforma de vendas online com múltiplos vendedores, comissões e gestão completa.',
      industry: 'E-commerce',
      icon: Globe
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'Levantamento de Requisitos',
      description: 'Análise profunda das necessidades e objetivos do projeto',
      icon: Target
    },
    {
      step: '02',
      title: 'Prototipagem e Design',
      description: 'Criação de protótipos interativos e design da interface',
      icon: Puzzle
    },
    {
      step: '03',
      title: 'Desenvolvimento Ágil',
      description: 'Desenvolvimento iterativo com entregas semanais e feedback contínuo',
      icon: Code
    },
    {
      step: '04',
      title: 'Testes e Qualidade',
      description: 'Testes rigorosos para garantir performance e segurança',
      icon: Shield
    },
    {
      step: '05',
      title: 'Deploy e Treinamento',
      description: 'Implementação em produção e treinamento da equipe',
      icon: Rocket
    },
    {
      step: '06',
      title: 'Suporte Contínuo',
      description: 'Manutenção, atualizações e suporte técnico permanente',
      icon: Wrench
    }
  ];

  const handleExternalRedirect = () => {
    // Placeholder for external domain redirect
    alert('Aqui seria redirecionado para o domínio da empresa de desenvolvimento');
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
                  Desenvolvimento <span className="text-[#31496e]">sob medida</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                  Criamos sistemas únicos e personalizados que se adaptam perfeitamente 
                  aos seus processos, oferecendo vantagem competitiva real.
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
                  Ver Portfólio de Projetos
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline"
                  className="border-white text-gray-900 hover:!bg-gray-900 hover:!text-white px-8 py-4 text-lg"
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </div>

            {/* Visual */}
            <div className="relative lg:order-2">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTgwMjU3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Desenvolvimento sob medida em ação"
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-2xl"
                />
                
                {/* Floating Cards */}
                <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Code className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">Código Limpo</div>
                      <div className="text-xs text-gray-500">Arquitetura escalável</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur rounded-lg p-4 shadow-lg">
                  <div className="text-2xl text-gray-900 mb-1">100%</div>
                  <div className="text-sm text-gray-500">Personalizado</div>
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
              Soluções de desenvolvimento personalizadas
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto text-lg">
              Cada sistema é desenvolvido especificamente para suas necessidades. 
              Não vendemos software pronto, criamos soluções únicas.
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
                Utilizamos as tecnologias mais modernas e robustas do mercado para garantir sistemas escaláveis e seguros
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

      {/* Development Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nosso processo de desenvolvimento
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto text-lg">
              Metodologia ágil e transparente que garante qualidade e entrega no prazo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#31496e] to-[#31496e] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="text-sm text-[#31496e] font-semibold mb-2">
                      {process.step}
                    </div>
                    
                    <h3 className="text-gray-900 mb-3 group-hover:text-[#31496e] transition-colors">
                      {process.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Casos de uso por área
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto text-lg">
              Soluções personalizadas para diferentes segmentos e necessidades
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
              Nossos clientes não apenas ganham eficiência - eles transformam seus negócios
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
              "O sistema que desenvolveram revolucionou nossa operação. Processos que levavam 
              horas agora são feitos em minutos. A integração com nossos sistemas existentes 
              foi perfeita e o suporte é excepcional."
            </blockquote>
            <div className="text-[#31496e]">
              CEO de empresa do setor industrial
            </div>
          </div>
        </div>
      </section>

      {/* Curiosity Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Cada projeto é único como sua empresa
          </h2>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            Não trabalhamos com soluções prontas. Analisamos profundamente seu negócio, 
            identificamos oportunidades únicas e criamos sistemas que se tornam vantagem 
            competitiva. Alguns clientes descobriram processos que nem sabiam que existiam.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl mb-2">🔍</div>
              <h4 className="text-gray-900 mb-2">Análise Profunda</h4>
              <p className="text-sm text-gray-500">Entendemos cada detalhe do seu negócio</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="text-gray-900 mb-2">Desenvolvimento Ágil</h4>
              <p className="text-sm text-gray-500">Entregas semanais com feedback contínuo</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🚀</div>
              <h4 className="text-gray-900 mb-2">Inovação Constante</h4>
              <p className="text-sm text-gray-500">Soluções que crescem com seu negócio</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#31496e] to-[#31496e] rounded-lg p-8 text-white">
            <h3 className="text-white mb-4">
              Pronto para transformar sua ideia em realidade?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Cada empresa que conhecemos tem pelo menos uma oportunidade de inovação. 
              Descubra qual é a sua e como podemos desenvolvê-la.
            </p>
            
            <Button 
              onClick={handleExternalRedirect}
              className="bg-white hover:bg-white/90 text-[#31496e] px-8 py-4 text-lg"
            >
              Solicitar Consultoria Gratuita
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
