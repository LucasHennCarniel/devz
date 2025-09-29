import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Settings, Code, Globe, ShoppingCart, Utensils, Stethoscope, Scissors, Heart, Tractor } from 'lucide-react';

interface ProductsOverviewProps {
  onNavigate?: (page: string) => void;
}

export function ProductsOverview({ onNavigate }: ProductsOverviewProps) {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const solutions = [
    {
      category: 'Sistemas ERP Especializados',
      icon: Settings,
      description: 'Gestão completa adaptada para seu segmento específico',
      products: [
        { name: 'DEVZ Web', description: 'Varejo geral e prestadores', icon: Globe, page: 'devz-web' },
        { name: 'DEVZ Shop', description: 'E-commerce e varejo', icon: ShoppingCart, page: 'devz-shop' },
        { name: 'DEVZ Food', description: 'Restaurantes e delivery', icon: Utensils, page: 'devz-food' },
        { name: 'DEVZ Clínicas', description: 'Saúde e medicina', icon: Stethoscope, page: 'devz-clinicas' },
        { name: 'DEVZ Salões', description: 'Beleza e estética', icon: Scissors, page: 'devz-saloes' },
        { name: 'DEVZ Pet', description: 'Pet shops e veterinárias', icon: Heart, page: 'devz-pet' },
        { name: 'DEVZ Agro', description: 'Agronegócio', icon: Tractor, page: 'devz-agro' }
      ]
    },
    {
      category: 'Automação & Inteligência',
      icon: Code,
      description: 'Soluções personalizadas com Python e IA',
      features: [
        'Scripts Python inteligentes',
        'Automação de processos contábeis',
        'Dashboards personalizados em Power BI',
        'Integração com sistemas existentes'
      ]
    }
  ];

  return (
    <section id="produtos" className="py-16 md:py-24 bg-[#F5F6F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nossas Soluções
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg">
            Oferecemos duas linhas principais: sistemas ERP especializados por segmento 
            e soluções de automação personalizadas com Python e IA.
          </p>
        </div>

        {/* Main Solutions */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* ERP Systems */}
          <Card className="border-0 shadow-lg bg-white overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#31496e]/10 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-[#31496e]" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1">
                    {solutions[0].category}
                  </h3>
                  <p className="text-gray-500">
                    {solutions[0].description}
                  </p>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {solutions[0].products.map((product) => {
                  const IconComponent = product.icon;
                  return (
                    <div 
                      key={product.name}
                      onClick={() => onNavigate?.(product.page)}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group"
                    >
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:bg-[#31496e]/10 transition-colors">
                        <IconComponent className="w-4 h-4 text-gray-600 group-hover:text-[#31496e]" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-900 group-hover:text-[#31496e] transition-colors">
                          {product.name}
                        </div>
                        <div className="text-xs text-black group-hover:text-white">
                          {product.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Button 
                onClick={() => scrollToSection('#contato')}
                variant="outline" 
                className="w-full border-gray-300 text-white bg-[#1E40AF] hover:bg-[#1E40AF]/90 hover:text-white hover:border-[#31496e] transition-colors"
              >
                Ver Todos os ERPs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Custom Automation */}
          <Card className="border-0 shadow-lg bg-white overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#31496e]/10 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-[#31496e]" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1">
                    {solutions[1].category}
                  </h3>
                  <p className="text-gray-500">
                    {solutions[1].description}
                  </p>
                </div>
              </div>

              <Badge className="bg-[#31496e] text-white mb-6">Mais Procurada</Badge>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {solutions[1].features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#31496e] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#F5F6F7] rounded-lg p-6 mb-6">
                <h4 className="text-gray-900 mb-2">Desenvolvimento Sob Medida</h4>
                <p className="text-sm text-gray-500 mb-4">
                  Analisamos seu negócio e criamos soluções exclusivas que automatizam processos específicos da sua empresa.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Análise de Processos</Badge>
                  <Badge variant="outline" className="text-xs">Desenvolvimento Python</Badge>
                  <Badge variant="outline" className="text-xs">IA & Machine Learning</Badge>
                </div>
              </div>

              <Button 
                onClick={() => onNavigate?.('automacao-python')}
                className="w-full bg-[#31496e] hover:bg-[#31496e]/90 text-white"
              >
                Solicitar Automação
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-gray-900 mb-4">
            Não sabe qual solução é ideal para você?
          </h3>
          <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
            Conversamos com você, entendemos seu negócio e recomendamos a melhor combinação de tecnologias para seus objetivos.
          </p>
          
          <Button 
            onClick={() => scrollToSection('#contato')}
            className="bg-[#31496e] hover:bg-[#31496e]/90 text-white px-8 py-3"
          >
            Falar com Especialista
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
