import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, Target, Eye, Heart, Users, Code, BarChart3, Zap, Calendar, MapPin, Mail, Phone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';


function AboutDevz() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const values = [
    {
      icon: Target,
      title: "Excelência Técnica",
      description: "Comprometidos com a qualidade superior em cada linha de código e solução entregue."
    },
    {
      icon: Zap,
      title: "Inovação Constante",
      description: "Sempre em busca das tecnologias mais avançadas para resolver problemas complexos."
    },
    {
      icon: Users,
      title: "Parceria Estratégica",
      description: "Construímos relacionamentos duradouros baseados em confiança e resultados."
    },
    {
      icon: Heart,
      title: "Paixão por Tecnologia",
      description: "Movidos pela paixão em transformar negócios através da tecnologia."
    }
  ];

  const technologies = [
    { name: "Python", category: "Backend & IA" },
    { name: "JavaScript/TypeScript", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Power BI", category: "Business Intelligence" },
    { name: "SQL Server", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Azure", category: "Cloud" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Git", category: "Versionamento" },
    { name: "Machine Learning", category: "IA" }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Fundação da Devz",
      description: "Início das atividades focadas em desenvolvimento de software personalizado."
    },
    {
      year: "2020",
      title: "Primeira Linha ERP",
      description: "Lançamento do primeiro sistema ERP modular para pequenas empresas."
    },
    {
      year: "2021",
      title: "Expansão para IA",
      description: "Incorporação de soluções de Inteligência Artificial nos produtos."
    },
    {
      year: "2022",
      title: "Linha Avante®",
      description: "Desenvolvimento da linha completa Avante® para diversos segmentos."
    },
    {
      year: "2023",
      title: "Business Intelligence",
      description: "Especialização em dashboards e relatórios avançados com Power BI."
    },
    {
      year: "2024",
      title: "Automação Contábil",
      description: "Lançamento de soluções completas de automação contábil com Python + IA."
    }
  ];

  const stats = [
    { number: "50+", label: "Projetos Entregues" },
    { number: "30+", label: "Clientes Ativos" },
    { number: "5", label: "Anos de Experiência" },
    { number: "100%", label: "Satisfação do Cliente" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                Sobre a Devz
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
                Transformando negócios
                <br />
                <span className="text-white/80">através da tecnologia</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                Somos uma empresa de tecnologia especializada em ERP modular, automações contábeis 
                com Python + IA e dashboards em Power BI, dedicada a impulsionar o crescimento 
                dos nossos clientes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('#contato')}
                className="bg-white hover:bg-white/90 text-[#1E40AF] px-8 py-4 text-lg font-medium rounded-md inline-flex items-center justify-center"
              >
                Fale Conosco
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => scrollToSection('#missao')}
                className="border border-white text-white hover:bg-white hover:text-[#1E40AF] px-8 py-4 text-lg font-medium rounded-md inline-flex items-center justify-center"
              >
                Nossa Missão
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section id="missao" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Missão */}
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-[#1E40AF]/10 rounded-lg flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-[#1E40AF]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Missão</h2>
                <p className="text-gray-600 leading-relaxed">
                  Capacitar empresas com soluções tecnológicas inovadoras e personalizadas, 
                  proporcionando eficiência operacional e crescimento sustentável através de 
                  sistemas ERP modulares e automações inteligentes.
                </p>
              </div>
            </div>

            {/* Visão */}
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center mx-auto">
                <Eye className="w-8 h-8 text-[#3B82F6]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Visão</h2>
                <p className="text-gray-600 leading-relaxed">
                  Ser reconhecida como a principal referência em soluções tecnológicas 
                  empresariais no Brasil, transformando a gestão de negócios através da 
                  inovação e excelência em tecnologia.
                </p>
              </div>
            </div>

            {/* Valores */}
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-[#1E40AF]/10 rounded-lg flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-[#1E40AF]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Valores</h2>
                <p className="text-gray-600 leading-relaxed">
                  Comprometimento com a excelência, inovação constante, transparência, 
                  foco no cliente e responsabilidade social. Construímos relacionamentos 
                  baseados na confiança e resultados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores Detalhados */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores em Ação
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam cada decisão e projeto que desenvolvemos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow duration-200 border border-gray-200">
                  <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-6 h-6 text-[#1E40AF]" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Jornada
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cinco anos construindo soluções que fazem a diferença
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-[#1E40AF] rounded-lg flex items-center justify-center">
                    <span className="text-white font-medium text-lg">{item.year}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Números que Falam
            </h2>
            <p className="text-xl text-gray-600">
              Resultados que demonstram nossa dedicação e expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-medium text-[#1E40AF] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stack Tecnológico
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Utilizamos as tecnologias mais modernas e robustas do mercado
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200 hover:border-[#3B82F6] transition-colors duration-200">
                <div className="text-lg font-medium text-gray-900 mb-1">{tech.name}</div>
                <div className="text-sm text-gray-500">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Especializações que nos tornam únicos no mercado
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-[#1E40AF]/10 rounded-lg flex items-center justify-center mx-auto">
                <Code className="w-8 h-8 text-[#1E40AF]" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Desenvolvimento ERP</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sistemas ERP modulares personalizados para diferentes segmentos, 
                  desde comércio até serviços especializados como clínicas e salões.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-[#3B82F6]" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Automação + IA</h3>
                <p className="text-gray-600 leading-relaxed">
                  Soluções de automação contábil e empresarial utilizando Python 
                  e técnicas avançadas de Inteligência Artificial.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-[#1E40AF]/10 rounded-lg flex items-center justify-center mx-auto">
                <BarChart3 className="w-8 h-8 text-[#1E40AF]" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Business Intelligence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dashboards interativos e relatórios gerenciais avançados em Power BI 
                  para tomada de decisão estratégica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localização e Contato */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Onde Estamos
            </h2>
            <p className="text-xl text-gray-600">
              Presença nacional com atendimento personalizado
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#1E40AF]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Sede Principal</h3>
                  <p className="text-gray-600">
                    São Paulo, SP<br />
                    Atendimento presencial e remoto
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#3B82F6]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Email Comercial</h3>
                  <p className="text-gray-600">
                    contato@devz.com.br<br />
                    Resposta em até 24h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#1E40AF]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Telefone</h3>
                  <p className="text-gray-600">
                    (11) 9999-9999<br />
                    Horário comercial: 8h às 18h
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-6">Agende uma Consultoria</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Converse com nossos especialistas e descubra como a Devz pode 
                transformar sua empresa através da tecnologia.
              </p>
              <Button 
                onClick={() => scrollToSection('#contato')}
                className="w-full bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white px-6 py-3 font-medium"
              >
                Solicitar Consultoria Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Pronto para Transformar seu Negócio?
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Junte-se às empresas que já confiam na Devz para impulsionar 
                seu crescimento através da tecnologia.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('#contato')}
                className="bg-white hover:bg-white/90 text-[#1E40AF] px-8 py-4 text-lg font-medium"
              >
                Fale Conosco Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1E40AF] px-8 py-4 text-lg font-medium"
              >
                Ver Portfólio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutDevz;