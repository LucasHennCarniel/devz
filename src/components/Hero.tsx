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
  images: string[];
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
    backgroundGradient: "",
    themeColor: "#6B7280",
    images: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=400&fit=crop&crop=center", // Consultoria/Meeting
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center", // Analytics Dashboard
      "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=300&fit=crop&crop=center"  // Automation/Tech
    ]
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
    backgroundGradient: "",
    themeColor: "#6B7280",
    images: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=400&fit=crop&crop=center", // ERP/Business Management
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center", // Financial Management
      "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=400&h=300&fit=crop&crop=center"  // Inventory/Stock
    ]
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
    backgroundGradient: "",
    themeColor: "#6B7280",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop&crop=center", // Data Analytics/BI
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop&crop=center", // AI/Machine Learning
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center"  // Decision Making/Charts
    ]
  }
];

// Components
interface SlideContentProps {
  slide: Slide;
  index: number;
  currentSlide: number;
  scrollToSection: (href: string) => void;
}

const SlideContent = ({ slide, index, currentSlide, scrollToSection }: SlideContentProps) => (
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
      {/* Left Column - Content */}
      <div className="space-y-8">
        {/* Content Animation */}
        <div 
          className={`space-y-6 transition-all duration-700 ${
            index === currentSlide 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: index === currentSlide ? '300ms' : '0ms' }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white leading-tight">
            {slide.title}
            <span className="text-white/80">{slide.highlight}</span>
            {slide.subtitle && (
              <>
                <br />
                <span className="text-2xl md:text-4xl lg:text-5xl">{slide.subtitle}</span>
              </>
            )}
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            {slide.description}
          </p>
        </div>

        {/* Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
            index === currentSlide 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: index === currentSlide ? '500ms' : '0ms' }}
        >
          <button 
            onClick={() => scrollToSection('#contato')}
            className="bg-white hover:bg-white/90 text-[#31496e] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-md inline-flex items-center justify-center font-medium"
          >
            Solicitar Consultoria Gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button 
            onClick={() => scrollToSection('#produtos')}
            className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300 rounded-md inline-flex items-center justify-center font-medium"
          >
            Ver Soluções
          </button>
        </div>

        {/* Features */}
        <div 
          className={`grid sm:grid-cols-2 gap-4 transition-all duration-700 ${
            index === currentSlide 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: index === currentSlide ? '700ms' : '0ms' }}
        >
          {slide.features.map((feature, featureIndex) => (
            <div 
              key={`${slide.id}-${featureIndex}`} 
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
              style={{ 
                transitionDelay: index === currentSlide ? `${800 + featureIndex * 100}ms` : '0ms' 
              }}
            >
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-white/90 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - Images */}
      <div className="relative">
        <div 
          className={`transition-all duration-700 ${
            index === currentSlide 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-8'
          }`}
          style={{ transitionDelay: index === currentSlide ? '400ms' : '0ms' }}
        >
          <div className="grid grid-cols-2 gap-4">
            {/* Main Image - spans 2 rows */}
            <div className="col-span-2 relative group">
              <div className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <img 
                  src={slide.images[0]} 
                  alt={`${slide.title} - Imagem Principal`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Secondary Images */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <img 
                  src={slide.images[1]} 
                  alt={`${slide.title} - Imagem 2`}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <img 
                  src={slide.images[2]} 
                  alt={`${slide.title} - Imagem 3`}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
        </div>
      </div>
    </div>
  </div>
);

interface DynamicPaginationProps {
  currentSlide: number;
  isTransitioning: boolean;
  onGoToSlide: (index: number) => void;
}

const DynamicPagination = ({ currentSlide, isTransitioning, onGoToSlide }: DynamicPaginationProps) => (
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
          className={`swiper-pagination-bullet-custom transition-all duration-500 ${
            index === currentSlide 
              ? 'w-12 h-3 bg-white shadow-lg shadow-white/40 pagination-active' 
              : 'w-3 h-3 hover:w-8 bg-white/40 hover:bg-white/70 group-hover:shadow-md'
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

interface ProgressIndicatorProps {
  currentSlide: number;
}

const ProgressIndicator = ({ currentSlide }: ProgressIndicatorProps) => (
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
  const intervalRef = useRef<number | undefined>();
  
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
  const handleMouseDown = useCallback((e: any) => {
    e.preventDefault();
    handleDragStart(e.clientX, e.clientY);
  }, [handleDragStart]);

  const handleMouseMove = useCallback((e: any) => {
    handleDragMove(e.clientX, e.clientY);
  }, [handleDragMove]);

  const handleMouseUp = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  // Touch events
  const handleTouchStart = useCallback((e: any) => {
    const touch = e.touches[0];
    handleDragStart(touch.clientX, touch.clientY);
  }, [handleDragStart]);

  const handleTouchMove = useCallback((e: any) => {
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
      // Verifica se o foco está em um input, textarea ou contenteditable
      const activeElement = document.activeElement;
      const isInputFocused = activeElement && (
        activeElement.tagName === 'INPUT' || 
        activeElement.tagName === 'TEXTAREA' || 
        activeElement.hasAttribute('contenteditable')
      );
      
      // Se houver um input focado, não intercepta as teclas
      if (isInputFocused) {
        return;
      }

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
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-devz-primary/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-5 h-5 bg-devz-accent/30 rounded-full animate-float-reverse"></div>
        <div className="absolute top-60 left-1/4 w-3 h-3 bg-devz-primary/40 rounded-full animate-drift"></div>
        <div className="absolute top-80 right-1/3 w-4 h-4 bg-devz-accent/30 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-devz-primary/30 rounded-full animate-float-reverse"></div>
        <div className="absolute bottom-60 right-10 w-4 h-4 bg-devz-accent/40 rounded-full animate-drift"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-32 right-1/4 w-6 h-6 border-2 border-devz-primary/20 rotate-45 animate-rotate-slow"></div>
        <div className="absolute bottom-32 left-1/3 w-5 h-5 bg-devz-accent/20 rounded-full animate-scale-pulse"></div>
        
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
                  <div 
                    className={`absolute inset-0 transition-all duration-1000`}
                    style={{ 
                      background: index === 0 
                        ? 'linear-gradient(to right, #4B5563, #374151)' 
                        : index === 1 
                        ? 'linear-gradient(to right, #374151, #4B5563)' 
                        : 'linear-gradient(to right, #4B5563, #1F2937)'
                    }}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    
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
