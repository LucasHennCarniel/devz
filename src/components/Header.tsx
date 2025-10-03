import React, { useState, useEffect } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { SimpleContactModal } from './SimpleContactModal';
import logoDevz from '../img/logos/logo_devez.png';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  ShoppingCart, 
  Utensils, 
  Stethoscope, 
  Scissors, 
  Heart, 
  Tractor,
  Brain,
  BarChart3,
  Code
} from 'lucide-react';

interface HeaderProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

// Componente para renderizar um card de produto/solução
const ProductCard = ({ item, type, onNavigate, scrollToSection }: {
  item: any;
  type: 'devz' | 'custom';
  onNavigate?: (page: string) => void;
  scrollToSection?: (href: string) => void;
}) => {
  const IconComponent = item.icon;
  const isDevz = type === 'devz';
  
  return (
    <DropdownMenuItem
      key={item.name}
      onClick={() => {
        if (item.page && onNavigate) {
          onNavigate(item.page);
        } else if (item.href && scrollToSection) {
          scrollToSection(item.href);
        }
      }}
      className="group p-0 h-auto bg-transparent transition-all cursor-pointer"
    >
      <div className={`dropdown-card p-3 w-full text-center rounded-lg ${
        isDevz 
          ? 'hover:border-blue-600 focus:border-blue-600' 
          : 'hover:border-devz-accent focus:border-devz-accent'
      }`}>
        <div className="flex flex-col items-center gap-2">
          <div className={`${isDevz ? 'w-20 h-20' : 'w-16 h-16 bg-devz-accent/10'} rounded-lg flex items-center justify-center`}>
            <IconComponent 
              className={`${isDevz ? 'text-blue-600' : 'text-devz-accent'}`}
              style={{ width: '32px', height: '32px' }}
            />
          </div>
          <div>
            <h5 className="text-sm font-semibold text-gray-900 mb-1">{item.name}</h5>
            <p className="text-xs text-gray-600 line-clamp-2">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </DropdownMenuItem>
  );
};

export function Header({ onNavigate, currentPage = 'home' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  // Reset dropdown state when menu closes
  useEffect(() => {
    if (!isMenuOpen) {
      setIsProductsDropdownOpen(false);
    }
  }, [isMenuOpen]);

  // Debug effect
  useEffect(() => {
    console.log('isProductsDropdownOpen changed:', isProductsDropdownOpen);
  }, [isProductsDropdownOpen]);

  const devzProducts = [
    {
      name: 'DEVZ Web',
      description: '50+ tipos de varejo, Prestadoras de serviços, MEI',
      icon: Globe,
      page: 'devz-web'
    },
    {
      name: 'DEVZ Shop',
      description: 'Para todos os tipos de varejo',
      icon: ShoppingCart,
      page: 'devz-shop'
    },
    {
      name: 'DEVZ Food',
      description: 'Bares e Restaurantes, Delivery, Pizzarias',
      icon: Utensils,
      page: 'devz-food'
    },
    {
      name: 'DEVZ Clínicas',
      description: 'Clínicas, Consultórios, Profissionais da saúde',
      icon: Stethoscope,
      page: 'devz-clinicas'
    },
    {
      name: 'DEVZ Salões',
      description: 'Salões, Clínicas de estética, Profissionais liberais',
      icon: Scissors,
      page: 'devz-saloes'
    },
    {
      name: 'DEVZ Pet',
      description: 'Pet Shop, Clínicas veterinárias',
      icon: Heart,
      page: 'devz-pet'
    },
    {
      name: 'DEVZ Agro',
      description: 'Produtor rural, Fazendas, Cooperativas',
      icon: Tractor,
      page: 'devz-agro'
    }
  ];

  const customSolutions = [
    {
      name: 'Automação Python + IA',
      description: 'Scripts inteligentes, processamento de dados e ML',
      icon: Brain,
      page: 'automacao-python'
    },
    {
      name: 'Dashboards Power BI',
      description: 'Visualização de dados e Business Intelligence',
      icon: BarChart3,
      page: 'dashboards-powerbi'
    },
    {
      name: 'Desenvolvimento Sob Medida',
      description: 'Soluções personalizadas para seu negócio',
      icon: Code,
      page: 'desenvolvimento-sob-medida'
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    if (currentPage !== 'home' && onNavigate) {
      onNavigate('home');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        scrollToSection('#contato');
      }, 100);
    } else {
      scrollToSection('#contato');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => onNavigate ? onNavigate('home') : scrollToSection('#home')}
              className="h-12 hover:opacity-90 transition-opacity flex items-center"
            >
              <img 
                src={logoDevz} 
                alt="Devz Logo" 
                className="h-10 w-auto object-contain"
              />
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            {/* Home */}
            <button
              onClick={() => onNavigate ? onNavigate('home') : scrollToSection('#home')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                currentPage === 'home' 
                  ? 'text-devz-primary border-b-2 border-devz-primary' 
                  : 'text-gray-600 hover:text-devz-primary'
              }`}
            >
              Home
            </button>
            
            {/* Sobre a Devz */}
            <button
              onClick={() => onNavigate ? onNavigate('about-devz') : scrollToSection('#sobre')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                currentPage === 'about-devz' 
                  ? 'text-devz-primary border-b-2 border-devz-primary' 
                  : 'text-gray-600 hover:text-devz-primary'
              }`}
            >
              Sobre a Devz
            </button>
            
            {/* Produtos Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-gray-600 hover:text-devz-primary px-3 py-2 text-sm font-medium transition-colors">
                  Produtos
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[900px] p-6 border border-gray-100 shadow-lg bg-white rounded-lg">
                {/* Header minimalista */}
                <div className="mb-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Produtos</h3>
                  <p className="text-sm text-gray-600">Soluções para seu negócio</p>
                </div>

                {/* Linha DEVZ - Layout Horizontal */}
                <div className="mb-8">
                  <div className="flex items-center mb-6">
                    <div className="w-2 h-6 bg-blue-600 rounded-full mr-3"></div>
                    <h4 className="text-base font-bold text-gray-900">Linha DEVZ ERP</h4>
                    <div className="flex-1 h-px bg-gradient-to-r from-blue-600 to-transparent ml-4"></div>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {devzProducts.map((product) => (
                      <ProductCard 
                        item={product} 
                        type="devz" 
                        onNavigate={onNavigate}
                      />
                    ))}
                  </div>
                </div>
                

                {/* Soluções Customizadas - Layout Horizontal */}
                <div>
        <div className="flex items-center mb-6">
          <h4 className="text-base font-bold text-gray-900">Desenvolvimento Customizado</h4>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4"></div>
        </div>
                  <div className="grid grid-cols-3 gap-4">
                    {customSolutions.map((solution) => (
                      <ProductCard 
                        item={solution} 
                        type="custom" 
                        onNavigate={onNavigate}
                        scrollToSection={scrollToSection}
                      />
                    ))}
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Outros itens do menu */}
            <button
              onClick={() => onNavigate ? onNavigate('automacao') : scrollToSection('#automacao')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                currentPage === 'automacao' 
                  ? 'text-devz-primary border-b-2 border-devz-primary' 
                  : 'text-gray-600 hover:text-devz-primary'
              }`}
            >
              Automação
            </button>
            
            <button
              onClick={() => window.location.href = 'https://devzconecta.com'}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-devz-primary transition-colors"
            >
              Devz Conecta
            </button>
            
            <button
              onClick={() => onNavigate ? onNavigate('blog') : scrollToSection('#blog')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                currentPage === 'blog' 
                  ? 'text-devz-primary border-b-2 border-devz-primary' 
                  : 'text-gray-600 hover:text-devz-primary'
              }`}
            >
              Blog
            </button>
            
            <button
              onClick={handleContactClick}
              className="text-gray-600 hover:text-devz-primary px-3 py-2 text-sm font-medium transition-colors"
            >
              Contato
            </button>
          </nav>

          <div className="hidden md:block">
            <SimpleContactModal 
              triggerText="Solicitar Demonstração"
              triggerClassName="bg-devz-primary hover:bg-devz-primary-dark text-white px-6 py-2 font-medium h-10 min-w-fit whitespace-nowrap"
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-devz-primary p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 relative z-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Navigation Items */}
              <button
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('home');
                  } else {
                    scrollToSection('#home');
                  }
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-devz-primary hover:bg-gray-50"
              >
                Home
              </button>
              
              <button
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('about-devz');
                  } else {
                    scrollToSection('#sobre');
                  }
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-devz-primary hover:bg-gray-50"
              >
                Sobre a Devz
              </button>
              
              {/* Mobile Products Section */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    console.log('Produtos clicked, current state:', isProductsDropdownOpen);
                    setIsProductsDropdownOpen(!isProductsDropdownOpen);
                  }}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-600 hover:text-devz-primary hover:bg-gray-50 transition-colors rounded-md"
                >
                  <span>Produtos</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    isProductsDropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`} />
                </button>
                
                {isProductsDropdownOpen && (
                  <div className="pl-4 space-y-1 border-l-2 border-gray-200 ml-3 mt-1 bg-gray-50 rounded-md">
                    {/* Linha DEVZ ERP */}
                    <div className="pt-2">
                      <div className="px-3 py-1 text-sm font-semibold text-blue-600 mb-2">
                        Linha DEVZ ERP
                      </div>
                      {devzProducts.map((product) => (
                        <button
                          key={product.name}
                          onClick={() => {
                            if (product.page && onNavigate) {
                              onNavigate(product.page);
                            }
                            setIsMenuOpen(false);
                          }}
                          className="block w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md transition-colors"
                        >
                          <div className="text-sm font-medium text-gray-900 mb-1">
                            {product.name}
                          </div>
                          <div className="text-xs text-gray-600">
                            {product.description}
                          </div>
                        </button>
                      ))}
                    </div>
                    
                    {/* Desenvolvimento Customizado */}
                    <div className="pt-2">
                      <div className="px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
                        Desenvolvimento Customizado
                      </div>
                      {customSolutions.map((solution) => (
                        <button
                          key={solution.name}
                          onClick={() => {
                            if (solution.page && onNavigate) {
                              onNavigate(solution.page);
                            }
                            setIsMenuOpen(false);
                          }}
                          className="block w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md transition-colors"
                        >
                          <div className="text-sm font-medium text-gray-900 mb-1">
                            {solution.name}
                          </div>
                          <div className="text-xs text-gray-600">
                            {solution.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Outros itens do menu mobile */}
              <button
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('automacao');
                  } else {
                    scrollToSection('#automacao');
                  }
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-devz-primary hover:bg-gray-50"
              >
                Automação
              </button>
              
              <button
                onClick={() => {
                  window.location.href = 'https://devzconecta.com';
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-devz-primary hover:bg-gray-50"
              >
                Devz Conecta
              </button>
              
              <button
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('blog');
                  } else {
                    scrollToSection('#blog');
                  }
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-devz-primary hover:bg-gray-50"
              >
                Blog
              </button>
              
              <button
                onClick={() => {
                  handleContactClick();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-devz-primary hover:bg-gray-50"
              >
                Contato
              </button>
              
              <div className="pt-4">
                <SimpleContactModal 
                  triggerText="RECEBA UMA DEMONSTRAÇÃO"
                  triggerClassName="w-full bg-devz-primary hover:bg-devz-primary-dark text-white font-medium h-10 whitespace-nowrap"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}