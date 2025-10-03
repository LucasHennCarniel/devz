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

  // TODO: Define these functions and data
  const prevSlide = () => setCurrentIndex(Math.max(0, currentIndex - 1));
  const nextSlide = () => setCurrentIndex(currentIndex + 1);
  const canScrollLeft = currentIndex > 0;
  const canScrollRight = true; // TODO: Implement logic
  const getVisibleCards = () => 4; // TODO: Implement responsive logic
  const scrollToSection = (selector: string) => {
    // TODO: Implement scroll logic
    console.log('Scroll to:', selector);
  };

  const devzProducts = [
    // TODO: Add product data
    {
      name: 'Devz Web',
      icon: Globe,
      page: 'devz-web',
      category: 'web',
      highlights: ['Gestão completa', 'Integração online', 'Relatórios avançados']
    },
    // Add more products...
  ];

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
                    <Card className="border border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer hover:border-gray-300 h-full">
                      <CardContent className="p-6 h-full flex flex-col group">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 bg-[#31496e]/10 rounded-lg flex items-center justify-center group-hover:bg-[#31496e]/15 transition-colors">
                            <IconComponent className="w-6 h-6 text-[#31496e]" />
                          </div>
                          <Badge variant="outline" className="text-xs text-gray-500 border-gray-300">
                            ERP
                          </Badge>
                        </div>
                        <div className="flex-1 mb-6">
                          <h4 className="text-gray-900 mb-2 group-hover:text-[#31496e] transition-colors">
                            {product.name}
                          </h4>
                          {/* Key Features */}
                          <div className="space-y-2">
                            {product.highlights.map((highlight, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-[#31496e] rounded-full flex-shrink-0"></div>
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
                          className="w-full text-sm border-gray-300 text-gray-700 hover:bg-devz-primary hover:text-white hover:border-devz-primary transition-colors"
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
                    ? 'bg-[#31496e] scale-125'
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
                className="bg-devz-primary hover:bg-devz-primary-dark text-white px-8 py-3 transition-colors"
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
