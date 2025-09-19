import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Check, Star, Zap, BarChart3, Cog, Globe, ShoppingCart, Utensils, Stethoscope, Scissors, Heart, Tractor, ArrowRight } from 'lucide-react';

interface ProductsProps {
  onNavigate?: (page: string) => void;
}

export function Products({ onNavigate }: ProductsProps) {
  const solutions = [
    {
      icon: Zap,
      name: 'Automação Python + IA',
      description: 'Scripts inteligentes e automações personalizadas para eliminar trabalhos manuais e otimizar processos específicos da sua empresa.',
      features: [
        'Análise completa dos processos',
        'Desenvolvimento de robôs específicos',
        'Integração com APIs e sistemas',
        'Monitoramento e manutenção'
      ],
      featured: true,
      page: 'automacao-python'
    },
    {
      icon: BarChart3,
      name: 'Dashboards Power BI',
      description: 'Dashboards e relatórios em Power BI totalmente personalizados, transformando seus dados em insights estratégicos.',
      features: [
        'Dashboards personalizados',
        'KPIs específicos do negócio',
        'Análise preditiva com IA',
        'Treinamento em Power BI'
      ],
      featured: false
    },
    {
      icon: Cog,
      name: 'Desenvolvimento Sob Medida',
      description: 'Sistema de gestão empresarial desenvolvido especificamente para seu modelo de negócio, integrando todos os processos da sua empresa.',
      features: [
        'Módulos personalizados',
        'Integração com sistemas existentes',
        'Interface adaptada ao seu fluxo',
        'Treinamento completo da equipe'
      ],
      featured: false
    }
  ];

  const process = [
    { step: '1', title: 'Diagnóstico', description: 'Análise completa dos seus processos atuais' },
    { step: '2', title: 'Proposta', description: 'Solução personalizada com escopo detalhado' },
    { step: '3', title: 'Orçamento', description: 'Investimento transparente baseado no valor' },
    { step: '4', title: 'Implementação', description: 'Desenvolvimento e entrega da solução' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const devzProducts = [
    {
      name: 'DEVZ Web',
      description: '50+ tipos de varejo, Prestadoras de serviços, MEI',
      icon: Globe,
      page: 'devz-web',
      category: 'Varejo Geral'
    },
    {
      name: 'DEVZ Shop',
      description: 'Para todos os tipos de varejo físico e online',
      icon: ShoppingCart,
      page: 'devz-shop',
      category: 'Varejo Especializado'
    },
    {
      name: 'DEVZ Food',
      description: 'Bares, Restaurantes, Delivery, Pizzarias',
      icon: Utensils,
      page: 'devz-food',
      category: 'Alimentação'
    },
    {
      name: 'DEVZ Clínicas',
      description: 'Clínicas, Consultórios, Profissionais da saúde',
      icon: Stethoscope,
      page: 'devz-clinicas',
      category: 'Saúde'
    },
    {
      name: 'DEVZ Salões',
      description: 'Salões, Clínicas de estética, Profissionais liberais',
      icon: Scissors,
      page: 'devz-saloes',
      category: 'Beleza'
    },
    {
      name: 'DEVZ Pet',
      description: 'Pet Shop, Clínicas veterinárias',
      icon: Heart,
      page: 'devz-pet',
      category: 'Pet Care'
    },
    {
      name: 'DEVZ Agro',
      description: 'Produtor rural, Fazendas, Cooperativas',
      icon: Tractor,
      page: 'devz-agro',
      category: 'Agronegócio'
    }
  ];

  return (
    <section id="produtos" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Desenvolvimento Personalizado
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto">
            Criamos soluções únicas sob medida para os desafios específicos da sua empresa, utilizando tecnologias avançadas.
          </p>
        </div>



        {/* Custom Solutions */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <Card 
                key={solution.name} 
                className={`border shadow-sm hover:shadow-lg transition-all duration-200 group cursor-pointer ${
                  solution.featured ? 'border-[#1E40AF] ring-1 ring-[#1E40AF]/20' : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => {
                  if (solution.page && onNavigate) {
                    onNavigate(solution.page);
                  } else {
                    scrollToSection('#contato');
                  }
                }}
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                    <IconComponent className="w-6 h-6 text-gray-600" />
                  </div>
                  
                  {solution.featured && (
                    <Badge className="bg-[#1E40AF] text-white mb-4">Mais Procurada</Badge>
                  )}
                  
                  <h3 className="text-gray-900 mb-4 group-hover:text-[#1E40AF] transition-colors">{solution.name}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline" 
                    className="w-full border-gray-300 text-gray-700 hover:bg-[#1E40AF] hover:text-white hover:border-[#1E40AF] transition-colors"
                  >
                    {solution.page ? 'Ver Detalhes' : 'Solicitar Orçamento'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Investment Process */}
        <div className="bg-[#F5F6F7] rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-gray-900 mb-4">Como Definimos o Investimento</h3>
            <p className="text-gray-500 max-w-3xl mx-auto">
              Nossa abordagem é 100% consultiva. Analisamos seu negócio e desenvolvemos a solução ideal para suas necessidades específicas.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-white border-2 border-[#1E40AF] text-[#1E40AF] rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span>{item.step}</span>
                </div>
                <h4 className="text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-gray-900 mb-4">Vamos Desenvolver Sua Solução Ideal?</h3>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            Converse com nossos especialistas e descubra como podemos criar uma solução tecnológica exclusiva para seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={() => scrollToSection('#contato')}
              className="bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white px-8 py-3"
            >
              Solicitar Consultoria Gratuita
            </Button>
            <Button 
              variant="outline"
              onClick={() => onNavigate ? onNavigate('about-devz') : scrollToSection('#sobre')}
              className="border-gray-300 text-gray-900 hover:bg-gray-50 px-8 py-3"
            >
              Conhecer a Devz
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {['Consultoria Gratuita', 'Orçamento Sem Compromisso', 'Suporte Especializado', 'Desenvolvimento Sob Medida'].map((item) => (
              <Badge key={item} variant="outline" className="border-gray-300 text-gray-600">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}