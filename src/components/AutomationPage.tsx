import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Bot, Code, BarChart3, Zap, Users, TrendingUp, Clock, Shield, ExternalLink, Sparkles, Brain, Cpu, Database } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function AutomationPage() {
  const solutions = [
    {
      icon: Code,
      title: 'Robôs Python Inteligentes',
      description: 'Scripts que pensam, aprendem e executam tarefas complexas automaticamente',
      hint: 'Eliminam até 95% do trabalho manual'
    },
    {
      icon: Bot,
      title: 'Chatbots com IA Generativa',
      description: 'Assistentes virtuais que conversam como humanos e resolvem problemas reais',
      hint: 'Disponíveis 24/7 em múltiplos canais'
    },
    {
      icon: BarChart3,
      title: 'Power BI Preditivo',
      description: 'Dashboards que não apenas mostram dados, mas preveem tendências',
      hint: 'Decisões baseadas no futuro, não no passado'
    },
    {
      icon: Brain,
      title: 'IA Personalizada',
      description: 'Algoritmos treinados especificamente para resolver seus desafios únicos',
      hint: 'Machine Learning sob medida'
    }
  ];

  const stats = [
    { icon: TrendingUp, number: '300%', label: 'ROI médio dos clientes' },
    { icon: Clock, number: '85%', label: 'Redução de tempo em processos' },
    { icon: Users, number: '50+', label: 'Empresas transformadas' },
    { icon: Shield, number: '99.9%', label: 'Uptime garantido' }
  ];

  const technologies = [
    { name: 'Python', icon: Cpu, color: 'bg-yellow-100 text-yellow-700' },
    { name: 'OpenAI GPT', icon: Sparkles, color: 'bg-purple-100 text-purple-700' },
    { name: 'Power BI', icon: BarChart3, color: 'bg-orange-100 text-orange-700' },
    { name: 'Machine Learning', icon: Brain, color: 'bg-green-100 text-green-700' },
    { name: 'APIs REST', icon: Database, color: 'bg-blue-100 text-blue-700' },
    { name: 'Chatbots', icon: Bot, color: 'bg-indigo-100 text-indigo-700' }
  ];

  const handleExternalRedirect = () => {
    // Placeholder for external domain redirect
    alert('Aqui seria redirecionado para o domínio da empresa de automação');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-[#1E40AF] relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/30 rounded-full -translate-x-48 -translate-y-48 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3B82F6]/30 rounded-full translate-x-48 translate-y-48 animate-pulse"></div>
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
                  Automação que <span className="text-[#3B82F6]">multiplica</span> resultados
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                  Criamos robôs inteligentes, chatbots com IA e dashboards preditivos 
                  que transformam dados em lucro real para sua empresa.
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
                  className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white px-8 py-4 text-lg"
                >
                  Descobrir Como Funciona
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
                >
                  Ver Casos de Sucesso
                </Button>
              </div>
            </div>

            {/* Visual */}
            <div className="relative lg:order-2">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTgwMjU3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Automação e IA em ação"
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-2xl"
                />
                
                {/* Floating Cards */}
                <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">IA Ativa</div>
                      <div className="text-xs text-gray-500">Processando dados</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur rounded-lg p-4 shadow-lg">
                  <div className="text-2xl text-gray-900 mb-1">95%</div>
                  <div className="text-sm text-gray-500">Menos trabalho manual</div>
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
              O que podemos automatizar para você
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto text-lg">
              Cada solução é desenvolvida especificamente para multiplicar seus resultados. 
              Não vendemos software, criamos vantagens competitivas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-gray-900 mb-4">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-500 leading-relaxed mb-6 flex-1">
                      {solution.description}
                    </p>

                    <div className="bg-[#F5F6F7] rounded-lg p-3">
                      <span className="text-sm text-[#1E40AF]">{solution.hint}</span>
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
                Utilizamos as tecnologias mais avançadas do mercado para garantir soluções robustas e escaláveis
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

      {/* Stats & Social Proof */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Resultados que impressionam
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Nossos clientes não apenas economizam tempo - eles descobrem novas formas de gerar receita
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center text-white">
                  <div className="w-16 h-16 bg-[#3B82F6]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-[#3B82F6]" />
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
              "Eles automatizaram nosso atendimento completo. O chatbot resolve 80% das questões sozinho 
              e nossos analistas agora focam apenas em estratégia. O ROI foi de 400% no primeiro ano."
            </blockquote>
            <div className="text-[#3B82F6]">
              CEO de empresa do setor financeiro
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
            identificamos oportunidades ocultas e criamos automações que se pagam em semanas, 
            não meses. Alguns clientes descobriram receitas que nem sabiam que existiam.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl mb-2">🔍</div>
              <h4 className="text-gray-900 mb-2">Diagnóstico Profundo</h4>
              <p className="text-sm text-gray-500">Identificamos oportunidades que você nem sabia que existiam</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="text-gray-900 mb-2">Desenvolvimento Ágil</h4>
              <p className="text-sm text-gray-500">Primeiros resultados em semanas, implementação completa em 30-60 dias</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📈</div>
              <h4 className="text-gray-900 mb-2">ROI Garantido</h4>
              <p className="text-sm text-gray-500">Acompanhamos os resultados até você ver o retorno do investimento</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] rounded-lg p-8 text-white">
            <h3 className="text-white mb-4">
              Curioso para ver o que podemos fazer pelo seu negócio?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Cada empresa que conhecemos tem pelo menos 3 processos que podem ser automatizados 
              com ROI superior a 200%. Descubra quais são os seus.
            </p>
            
            <Button 
              onClick={handleExternalRedirect}
              className="bg-white hover:bg-white/90 text-[#1E40AF] px-8 py-4 text-lg"
            >
              Acessar Site Completo
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}