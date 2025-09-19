import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Globe, ShoppingCart, Utensils, Stethoscope, Scissors, Heart, Tractor, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';

interface DevzProductsProps {
  onNavigate?: (page: string) => void;
}

export function DevzProducts({ onNavigate }: DevzProductsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const devzProducts = [
    {
      name: 'DEVZ Web',
      description: '50+ tipos de varejo, Prestadoras de serviços, MEI',
      icon: Globe,
      page: 'devz-web',
      category: 'Varejo Geral',
      highlights: ['PDV Integrado', 'NFe/NFCe', 'Gestão Financeira', 'Controle de Estoque']
    },
    {
      name: 'DEVZ Shop',
      description: 'Para todos os tipos de varejo físico e online',
      icon: ShoppingCart,
      page: 'devz-shop',
      category: 'Varejo Especializado',
      highlights: ['E-commerce', 'Marketplace', 'Omnichannel', 'Analytics']
    },
    {
      name: 'DEVZ Food',
      description: 'Bares, Restaurantes, Delivery, Pizzarias',
      icon: Utensils,
      page: 'devz-food',
      category: 'Alimentação',
      highlights: ['Comanda Digital', 'Delivery Integrado', 'Controle de Mesa', 'Cardápio Online']
    },
    {
      name: 'DEVZ Clínicas',
      description: 'Clínicas, Consultórios, Profissionais da saúde',
      icon: Stethoscope,
      page: 'devz-clinicas',
      category: 'Saúde',
      highlights: ['Prontuário Digital', 'Agendamento', 'Telemedicina', 'TISS/ANS']
    },
    {
      name: 'DEVZ Salões',
      description: 'Salões, Clínicas de estética, Profissionais liberais',
      icon: Scissors,
      page: 'devz-saloes',
      category: 'Beleza',
      highlights: ['Agenda Online', 'Comissões', 'Marketing Digital', 'Fidelização']
    },
    {
      name: 'DEVZ Pet',
      description: 'Pet Shop, Clínicas veterinárias',
      icon: Heart,
      page: 'devz-pet',
      category: 'Pet Care',
      highlights: ['Ficha Veterinária', 'Vacinas', 'Grooming', 'Pet Shop']
    },
    {
      name: 'DEVZ Agro',
      description: 'Produtor rural, Fazendas, Cooperativas',
      icon: Tractor,
      page: 'devz-agro',
      category: 'Agronegócio',
      highlights: ['CTe Agro', 'Rastreabilidade', 'Gestão Rural', 'Cooperativas']
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    const maxIndex = Math.max(0, devzProducts.length - getVisibleCards());
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const getVisibleCards = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth >= 1280) return 4; // xl
    if (window.innerWidth >= 1024) return 3; // lg
    if (window.innerWidth >= 768) return 2;  // md
    return 1; // mobile
  };

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < devzProducts.length - getVisibleCards();

  return (
    <section className="py-16 md:py-24 bg-[#F5F6F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sistemas ERP Especializados
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto">
            Soluções completas desenvolvidas especificamente para cada segmento de negócio, com funcionalidades exclusivas do setor
          </p>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -top-16 right-0 flex gap-2 z-10">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              disabled={!canScrollLeft}
              className="h-10 w-10 rounded-full border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              disabled={!canScrollRight}
              className="h-10 w-10 rounded-full border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Products Container */}
          <div className="overflow-hidden" ref={containerRef}>
            <div 
              className="flex transition-transform duration-300 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / getVisibleCards())}%)`
              }}
            >
              {devzProducts.map((product) => {
                const IconComponent = product.icon;
                return (
                  <div
                    key={product.name}
                    className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
                  >
                    <Card className="border border-gray-200 hover:shadow-lg transition-all duration-200 group cursor-pointer hover:border-gray-300 h-full">
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-lg flex items-center justify-center group-hover:bg-[#1E40AF]/15 transition-colors">
                            <IconComponent className="w-6 h-6 text-[#1E40AF]" />
                          </div>
                          <Badge variant="outline" className="text-xs text-gray-500 border-gray-300">
                            ERP
                          </Badge>
                        </div>
                        
                        <div className="flex-1 mb-6">
                          <h4 className="text-gray-900 mb-2 group-hover:text-[#1E40AF] transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-sm text-gray-500 leading-relaxed mb-4">
                            {product.description}
                          </p>

                          {/* Key Features */}
                          <div className="space-y-2">
                            {product.highlights.map((highlight, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full flex-shrink-0"></div>
                                <span className="text-xs text-gray-600">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button 
                          onClick={() => {
                            if (product.page && onNavigate) {
                              onNavigate(product.page);
                            } else {
                              scrollToSection('#contato');
                            }
                          }}
                          variant="outline" 
                          className="w-full text-sm border-gray-300 text-gray-700 hover:bg-[#1E40AF] hover:text-white hover:border-[#1E40AF] transition-colors"
                        >
                          Ver Detalhes
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(devzProducts.length / getVisibleCards()) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  Math.floor(currentIndex / getVisibleCards()) === index
                    ? 'bg-[#1E40AF] scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
            <h3 className="text-gray-900 mb-4">
              Qual ERP é Ideal para Seu Negócio?
            </h3>
            <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
              Cada segmento tem suas particularidades. Converse conosco e descubra qual sistema DEVZ se adapta melhor ao seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('#contato')}
                className="bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white px-8 py-3"
              >
                Falar com Consultor
              </Button>
              <Button 
                variant="outline"
                onClick={() => onNavigate ? onNavigate('about-devz') : scrollToSection('#sobre')}
                className="border-gray-300 text-gray-900 hover:bg-gray-50 px-8 py-3"
              >
                Conhecer a Devz
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}