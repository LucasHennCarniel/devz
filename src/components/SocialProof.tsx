import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Quote, Star, ArrowRight, Building2, TrendingUp, Users, FileText } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface SocialProofProps {
  onNavigate?: (page: string) => void;
}

// Componente contador animado
function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '' }: {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function para animação mais suave
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div ref={elementRef} className="text-3xl lg:text-4xl text-gray-900 mb-2">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

export function SocialProof({ onNavigate }: SocialProofProps) {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    {
      icon: Building2,
      value: 500,
      suffix: '+',
      label: 'Empresas transformadas',
      description: 'Desde MEIs até grandes corporações'
    },
    {
      icon: FileText,
      value: 1000000,
      suffix: '+',
      label: 'Documentos processados',
      description: 'NFes, CTes automatizados mensalmente',
      formatAs: 'million' // Para mostrar como 1M+
    },
    {
      icon: TrendingUp,
      value: 85,
      suffix: '%',
      label: 'Redução de trabalho manual',
      description: 'Média dos nossos clientes'
    },
    {
      icon: Users,
      value: 98,
      suffix: '%',
      label: 'Satisfação dos clientes',
      description: 'Avaliariam nosso trabalho como excelente'
    }
  ];

  const testimonials = [
    {
      quote: "A Devz automatizou nossa contabilidade completa. O que levava 3 dias agora é feito em 30 minutos. O ROI foi imediato.",
      author: "Carlos Silva",
      role: "Diretor Financeiro",
      company: "TechCorp Soluções",
      rating: 5
    },
    {
      quote: "Implementaram nosso ERP em 2 semanas. A diferença na gestão foi como sair da idade da pedra para o futuro.",
      author: "Ana Santos",
      role: "CEO",
      company: "Beleza & Estilo Salões",
      rating: 5
    },
    {
      quote: "Os dashboards em Power BI nos deram visibilidade total do negócio. Decisões que eram no 'achismo' agora são baseadas em dados reais.",
      author: "Roberto Lima",
      role: "Gerente Geral",
      company: "Lima Agronegócios",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Resultados que falam por si
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg mb-12">
            Mais de 500 empresas já transformaram seus negócios com nossas soluções. 
            Veja os números que comprovam nossa eficácia.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#31496E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-[#31496E]" />
                  </div>
                  
                  {/* Contador animado */}
                  {stat.formatAs === 'million' ? (
                    <AnimatedCounter 
                      end={1} 
                      suffix="M+" 
                      duration={2500}
                    />
                  ) : (
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix={stat.suffix}
                      duration={index * 200 + 2000} // Stagger animation
                    />
                  )}
                  
                  <div className="font-semibold text-gray-900 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Depoimentos reais de empresários que transformaram seus negócios com a Devz
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-sm bg-gray-50/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-[#31496E]/20 mb-4" />
                  
                  <blockquote className="text-gray-600 leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <div className="text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-[#31496E]">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#31496E] to-[#3B82F6] rounded-lg p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Pronto para transformar seu negócio?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Junte-se a mais de 500 empresas que já revolucionaram sua gestão. 
            Agende uma demonstração gratuita e veja a diferença na prática.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('#contato')}
              className="bg-white hover:bg-white/90 text-[#31496E] px-8 py-3 rounded-md inline-flex items-center justify-center font-medium"
            >
              Agendar Demonstração
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={() => onNavigate?.('about-devz')}
              className="border border-white text-white hover:bg-white hover:text-[#31496E] px-8 py-3 rounded-md inline-flex items-center justify-center font-medium"
            >
              Conhecer a Devz
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}