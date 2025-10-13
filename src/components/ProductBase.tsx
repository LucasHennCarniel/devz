import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { ArrowRight, Check, MessageCircle, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SimpleContactModal } from './SimpleContactModal';

interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

interface Benefit {
  title: string;
  description: string;
}

interface UseCase {
  title: string;
  description: string;
  industry?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ProductBaseProps {
  // Hero Section
  productName: string;
  productSubtitle: string;
  heroDescription: string;
  heroImage?: string;
  category: string;
  
  // Features
  features: Feature[];
  
  // Benefits
  benefits: Benefit[];
  
  // Use Cases
  useCases: UseCase[];
  
  // FAQ
  faqs: FAQ[];
  
  // CTA
  ctaTitle?: string;
  ctaDescription?: string;
}

export function ProductBase({
  productName,
  productSubtitle,
  heroDescription,
  heroImage,
  category,
  features,
  benefits,
  useCases,
  faqs,
  ctaTitle = "Pronto para transformar sua gestão?",
  ctaDescription = "Solicite uma demonstração personalizada e descubra como podemos ajudar seu negócio."
}: ProductBaseProps) {
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-devz-primary">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-devz-primary to-devz-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                  {category}
                </Badge>
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
                    {productName}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
                    {productSubtitle}
                  </p>
                  <p className="text-lg text-white/80 leading-relaxed">
                    {heroDescription}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <SimpleContactModal
                  triggerText="Solicitar Demonstração →"
                  triggerClassName="bg-white hover:bg-white/90 text-devz-primary px-8 py-1 text-lg font-medium inline-flex items-center justify-center rounded-md h-auto"
                />
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('#funcionalidades')}
                  className="bg-white hover:bg-white/90 text-devz-primary px-8 py-1 text-lg font-medium"
                >
                  Ver Funcionalidades
                </Button>
              </div>
            </div>

            {heroImage && (
              <div className="relative">
                <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                  <ImageWithFallback
                    src={heroImage}
                    alt={`Interface do ${productName}`}
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Funcionalidades Principais */}
      <section id="funcionalidades" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades Principais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tudo que você precisa para gerenciar seu negócio de forma eficiente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:scale-105">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-devz-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-devz-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher este produto?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Benefícios que fazem a diferença no seu dia a dia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 hover:scale-105 transition-transform duration-300">
                <div className="w-8 h-8 bg-devz-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-1 bg-devz-primary rounded-full"></div>
              <span className="text-sm font-semibold text-devz-primary uppercase tracking-wider">Aplicações Reais</span>
              <div className="w-8 h-1 bg-devz-primary rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Casos de Uso
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como este produto pode ser aplicado no seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="group p-6 bg-white border border-gray-200 hover:border-devz-primary hover:shadow-lg transition-all duration-300 rounded-lg hover:scale-105">
                <div className="space-y-4">
                  {useCase.industry && (
                    <div className="flex items-center gap-2">
                      <Badge className="bg-devz-accent text-white border-0 px-3 py-1 text-xs font-semibold rounded">
                        {useCase.industry}
                      </Badge>
                    </div>
                  )}
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-devz-primary transition-colors duration-200">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {useCase.description}
                    </p>
                  </div>
                  
                  {/* Accent line */}
                  <div className="w-8 h-0.5 bg-devz-accent rounded-full group-hover:w-12 transition-all duration-300"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Tira Dúvidas */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-devz-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-devz-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Tire suas dúvidas
            </h2>
            <p className="text-xl text-gray-600">
              Perguntas frequentes sobre o {productName}
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline">
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Não encontrou a resposta que procurava?
            </p>
            <Button 
              onClick={() => scrollToSection('#contato')}
              variant="outline"
              className="px-8 py-3"
            >
              Fale com nossos especialistas
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-devz-primary to-devz-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-white">
                {ctaTitle}
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {ctaDescription}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SimpleContactModal
                triggerText="Solicitar Demonstração Gratuita →"
                triggerClassName="bg-white hover:bg-white/90 text-devz-primary px-8 py-1 text-lg font-medium inline-flex items-center justify-center rounded-md h-auto"
              />
              <Button 
                variant="outline"
                className="border-white text-devz-primary hover:bg-white hover:bg-white/90 px-8 py-1 text-lg font-medium cursor-pointer"
              >
                Baixar Material
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
