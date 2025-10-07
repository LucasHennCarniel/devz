import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { ProductsOverview } from './components/ProductsOverview';
import { SocialProof } from './components/SocialProof';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import AboutDevz from './components/AboutDevz';
import Automation from './components/Automation';
import AutomationPage from './components/AutomationPage';
import BlogPage from './components/BlogPage';
import Contact from './components/Contact';

// Import all product pages directly
import DevzWeb from './components/products/DevzWeb';
import DevzShop from './components/products/DevzShop';
import DevzFood from './components/products/DevzFood';
import DevzClinicas from './components/products/DevzClinicas';
import DevzSaloes from './components/products/DevzSaloes';
import DevzPet from './components/products/DevzPet';
import DevzAgro from './components/products/DevzAgro';
import AutomacaoPython from './components/products/AutomacaoPython';
import DashboardsPowerBI from './components/products/DashboardsPowerBI';
import DesenvolvimentoSobMedida from './components/products/DesenvolvimentoSobMedida';


export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Simple navigation function
  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  

  // Render based on current page
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <main>
            <Hero />
            <ValueProposition />
            <ProductsOverview onNavigate={navigateToPage} />
            <SocialProof onNavigate={navigateToPage} />
            <FinalCTA />
          </main>
        );
      case 'about-devz':
        return <AboutDevz />;
      case 'produtos':
        return <Automation />;
      case 'automacao':
        return <AutomationPage />;
      case 'blog':
        return <BlogPage />;
      case 'contato':
        return <Contact />;
      case 'devz-web':
        return <DevzWeb />;
      case 'devz-shop':
        return <DevzShop />;
      case 'devz-food':
        return <DevzFood />;
      case 'devz-clinicas':
        return <DevzClinicas />;
      case 'devz-saloes':
        return <DevzSaloes />;
      case 'devz-pet':
        return <DevzPet />;
      case 'devz-agro':
        return <DevzAgro />;
      case 'automacao-python':
        return <AutomacaoPython />;
      case 'dashboards-powerbi':
        return <DashboardsPowerBI />;
      case 'desenvolvimento-sob-medida':
        return <DesenvolvimentoSobMedida />;
      default:
        return (
          <main>
            <Hero />
            <ValueProposition />
            <ProductsOverview onNavigate={navigateToPage} />
            <SocialProof onNavigate={navigateToPage} />
            <FinalCTA />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={navigateToPage} currentPage={currentPage} />
      {renderPage()}
      <Footer onNavigate={navigateToPage} />
    </div>
  );
  
}
