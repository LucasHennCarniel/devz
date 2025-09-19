import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Check } from 'lucide-react';

// Types
interface Slide {
  id: number;
  title: string;
  highlight: string;
  subtitle: string;
  description: string;
  features: string[];
  backgroundGradient: string;
  themeColor: string;
}

// Constants
const SLIDE_DURATION = 8000;
const TRANSITION_DURATION = 600;
const AUTOPLAY_RESET_DELAY = 5000;

// Slide data
const SLIDES: Slide[] = [
  {
    id: 1,
    title: "Consultoria e automações",
    highlight: " inteligentes",
    subtitle: "que geram resultados",
    description: "Do faturamento à contabilidade, do estoque aos relatórios em Power BI — tudo em um só lugar.",
    features: [
      'ERP Modular Completo',
      'Automação com Python + IA',
      'Dashboards em Power BI',
      'Suporte Especializado'
    ],
    backgroundGradient: "bg-gradient-to-r from-[#1E40AF] to-[#3B82F6]",
    themeColor: "#1b1d24ff"
  },
  {
    id: 2,
    title: "Sistemas ERP",
    highlight: " empresariais",
    subtitle: "sob medida",
    description: "Gerencie todos os processos da sua empresa com nosso ERP modular e personalizado para seu negócio.",
    features: [
      'Gestão Financeira Completa',
      'Controle de Estoque',
      'Faturamento Integrado',
      'Relatórios Gerenciais'
    ],
    backgroundGradient: "bg-gradient-to-r from-[#3B82F6] to-[#1E40AF]",
    themeColor: "#3B82F6"
  },
  {
    id: 3,
    title: "Business Intelligence e",
    highlight: " Inteligência Artificial",
    subtitle: "na prática",
    description: "Transforme dados em insights estratégicos com dashboards avançados e IA aplicada ao seu negócio.",
    features: [
      'Dashboards Interativos',
      'Análise Preditiva com IA',
      'KPIs em Tempo Real',
      'Tomada de Decisão Inteligente'
    ],
    backgroundGradient: "bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A]",
    themeColor: "#1E3A8A"
  }
];

// Components
const SlideContent: React.FC<{
  slide: Slide;
  index: number;
  currentSlide: number;
  scrollToSection: (href: string) => void;
}> = ({ slide, index, currentSlide, scrollToSection }) => (
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Content Animation */}
        <div 
          className={`space-y-6 transition-all duration-700 ${
            index === currentSlide 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: index === currentSlide ? '300ms' : '0ms' }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
            {slide.title}
            <span className="text-white/80">{slide.highlight}</span>
            {slide.subtitle && (
              <>
                <br />
                <span className="text-3xl md:text-5xl lg:text-6xl">{slide.subtitle}</span>
              </>
            )}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            {slide.description}
          </p>
        </div>

        {/* Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
            index === currentSlide 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: index === currentSlide ? '500ms' : '0ms' }}
        >
          <button 
            onClick={() => scrollToSection('#contato')}
            className="bg-white hover:bg-white/90 text-[#1E40AF] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-md inline-flex items-center justify-center font-medium"
          >
            Solicitar Consultoria Gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button 
            onClick={() => scrollToSection('#produtos')}
            className="border border-white text-white hover:bg-white hover:text-[#1E40AF] px-8 py-4 text-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300 rounded-md inline-flex items-center justify-center font-medium"
          >
            Ver Soluções
          </button>
        </div>

        {/* Features */}
        <div 
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 max-w-5xl mx-auto transition-all duration-700 ${
            index === currentSlide 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: index === currentSlide ? '700ms' : '0ms' }}
        >
          {slide.features.map((feature, featureIndex) => (
            <div 
              key={`${slide.id}-${featureIndex}`} 
              className="flex flex-col items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
              style={{ 
                transitionDelay: index === currentSlide ? `${800 + featureIndex * 100}ms` : '0ms' 
              }}
            >
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-white/90 text-center text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const DynamicPagination: React.FC<{
  currentSlide: number;
  isTransitioning: boolean;
  onGoToSlide: (index: number) => void;
}> = ({ currentSlide, isTransitioning, onGoToSlide }) => (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
    {SLIDES.map((slide, index) => (
      <button
        key={index}
        onClick={() => onGoToSlide(index)}
        disabled={isTransitioning}
        className={`relative group transition-all duration-500 cursor-pointer disabled:cursor-not-allowed ${
          index === currentSlide 
            ? 'w-12 h-3' 
            : 'w-3 h-3 hover:w-8'
        }`}
      >
        <div 
          className={`w-full h-full rounded-full transition-all duration-500 ${
            index === currentSlide 
              ? 'bg-white shadow-lg shadow-white/40 pagination-active' 
              : 'bg-white/40 hover:bg-white/70 group-hover:shadow-md'
          }`}
        />
        
        {index === currentSlide && (
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-white via-white/90 to-white/70 rounded-full transition-all duration-500"
            style={{ 
              width: `${((currentSlide + 1) / SLIDES.length) * 100}%`,
              animation: 'slideProgress 8s linear infinite'
            }}
          />
        )}
        
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          <div className="bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-xl">
            <div className="font-medium">{slide.title}</div>
            <div className="text-white/70 text-[10px]">Slide {index + 1}</div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-black/80"></div>
          </div>
        </div>
      </button>
    ))}
  </div>
);

const ProgressIndicator: React.FC<{ currentSlide: number }> = ({ currentSlide }) => (
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-3">
    <div className="relative w-8 h-8">
      <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 32 32">
        <circle
          cx="16"
          cy="16"
          r="14"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="16"
          cy="16"
          r="14"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 14}`}
          strokeDashoffset={`${2 * Math.PI * 14 * (1 - (currentSlide + 1) / SLIDES.length)}`}
          className="transition-all duration-700 drop-shadow-sm"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-xs font-bold">{currentSlide + 1}</span>
      </div>
    </div>
    
    <div className="text-white/80 text-sm">
      <div className="font-medium">{SLIDES[currentSlide].title}</div>
      <div className="text-xs text-white/60">{currentSlide + 1} de {SLIDES.length}</div>
    </div>
  </div>
);

export function Hero() {
  // State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();
  
  // Touch/Mouse handling for drag navigation
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragEnd, setDragEnd] = useState({ x: 0, y: 0 });
  const DRAG_THRESHOLD = 50;

  // Utility function
  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Navigation functions
  const resetAutoplay = useCallback(() => {
    setIsAutoplay(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimeout(() => setIsAutoplay(true), AUTOPLAY_RESET_DELAY);
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
    resetAutoplay();
  }, [currentSlide, isTransitioning, resetAutoplay]);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
    resetAutoplay();
  }, [isTransitioning, resetAutoplay]);

  // Drag/Touch handlers
  const handleDragStart = useCallback((clientX: number, clientY: number) => {
    setIsDragging(true);
    setDragStart({ x: clientX, y: clientY });
    setDragEnd({ x: clientX, y: clientY });
  }, []);

  const handleDragMove = useCallback((clientX: number, clientY: number) => {
    if (!isDragging) return;
    setDragEnd({ x: clientX, y: clientY });
  }, [isDragging]);

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const deltaX = dragEnd.x - dragStart.x;
    const deltaY = Math.abs(dragEnd.y - dragStart.y);
    
    // Only navigate if horizontal movement is greater than vertical (to avoid interfering with scroll)
    if (Math.abs(deltaX) > DRAG_THRESHOLD && Math.abs(deltaX) > deltaY) {
      if (deltaX > 0) {
        prevSlide(); // Swipe right = previous slide
      } else {
        nextSlide(); // Swipe left = next slide
      }
    }
  }, [isDragging, dragStart, dragEnd, nextSlide, prevSlide]);

  // Mouse events
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX, e.clientY);
  }, [handleDragStart]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    handleDragMove(e.clientX, e.clientY);
  }, [handleDragMove]);

  const handleMouseUp = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  // Touch events
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleDragStart(touch.clientX, touch.clientY);
  }, [handleDragStart]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleDragMove(touch.clientX, touch.clientY);
  }, [handleDragMove]);

  const handleTouchEnd = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  // Effects
  useEffect(() => {
    if (!isAutoplay) return;

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoplay, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          prevSlide();
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextSlide();
          break;
        case '1':
        case '2':
        case '3':
          event.preventDefault();
          const slideIndex = parseInt(event.key) - 1;
          if (slideIndex >= 0 && slideIndex < SLIDES.length) {
            goToSlide(slideIndex);
          }
          break;
        case 'Escape':
          setIsAutoplay(!isAutoplay);
          break;
      }
    };

    // Global mouse events for drag
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleDragMove(e.clientX, e.clientY);
      }
    };

    const handleGlobalMouseUp = () => {
      if (isDragging) {
        handleDragEnd();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [prevSlide, nextSlide, goToSlide, isAutoplay, isDragging, handleDragMove, handleDragEnd]);

  return (
    <>
      {/* Custom CSS for Dynamic Pagination */}
      <style jsx>{`
        @keyframes slideProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        @keyframes pulseGlow {
          0%, 100% { 
            box-shadow: 0 0 5px rgba(255,255,255,0.3);
          }
          50% { 
            box-shadow: 0 0 20px rgba(255,255,255,0.6), 0 0 30px rgba(255,255,255,0.4);
          }
        }
        
        .pagination-active {
          animation: pulseGlow 2s ease-in-out infinite;
        }
      `}</style>
      
      <section id="home" className="pt-16 relative overflow-hidden">
        <div className="relative min-h-[80vh] lg:min-h-[90vh]">
          {/* Swiper Container */}
          <div 
            className="relative w-full h-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: 'pan-y' }} // Allow vertical scrolling but handle horizontal
          >
            {/* Slides */}
            <div 
              className="flex transition-transform duration-700 ease-in-out w-full h-full"
              style={{ 
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {SLIDES.map((slide, index) => (
                <div 
                  key={slide.id} 
                  className="w-full flex-shrink-0 relative min-h-[80vh] lg:min-h-[90vh]"
                >
                  {/* Background Gradient with Fade Effect */}
                  <div className={`absolute inset-0 ${slide.backgroundGradient} transition-all duration-1000`}>
                    <div className="absolute inset-0 bg-black/5"></div>
                    
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div 
                        className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10 animate-pulse"
                        style={{ 
                          background: `radial-gradient(circle, ${slide.themeColor} 0%, transparent 70%)`,
                          animationDelay: '0s',
                          animationDuration: '4s'
                        }}
                      ></div>
                      <div 
                        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-5 animate-pulse"
                        style={{ 
                          background: `radial-gradient(circle, ${slide.themeColor} 0%, transparent 70%)`,
                          animationDelay: '2s',
                          animationDuration: '6s'
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Content */}
                  <SlideContent 
                    slide={slide}
                    index={index}
                    currentSlide={currentSlide}
                    scrollToSection={scrollToSection}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Components */}
          <DynamicPagination
            currentSlide={currentSlide}
            isTransitioning={isTransitioning}
            onGoToSlide={goToSlide}
          />

          <ProgressIndicator currentSlide={currentSlide} />
        </div>
      </section>
    </>
  );
}
