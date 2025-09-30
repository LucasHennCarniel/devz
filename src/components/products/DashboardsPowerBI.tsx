import React from 'react';
import { ProductBase } from '../ProductBase';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Database, 
  Filter, 
  Share2,
  Clock,
  Zap,
  Eye,
  RefreshCw,
  Target,
  Users
} from 'lucide-react';

/**
 * Componente da página Dashboards Power BI
 * Apresenta soluções de Business Intelligence e visualização de dados
 */
function DashboardsPowerBI() {
  const features = [
    {
      title: "Dashboards Interativos",
      description: "Visualizações dinâmicas e interativas que permitem explorar dados em tempo real com filtros avançados.",
      icon: BarChart3
    },
    {
      title: "Análise de Tendências",
      description: "Identificação de padrões e tendências através de análises preditivas e estatísticas avançadas.",
      icon: TrendingUp
    },
    {
      title: "Integração de Dados",
      description: "Conexão com múltiplas fontes de dados: ERP, CRM, planilhas, bancos de dados e APIs.",
      icon: Database
    },
    {
      title: "Filtros Dinâmicos",
      description: "Sistema de filtros inteligentes que permitem segmentação e análise detalhada dos dados.",
      icon: Filter
    },
    {
      title: "Compartilhamento Seguro",
      description: "Controle de acesso por usuário e compartilhamento seguro de relatórios e dashboards.",
      icon: Share2
    },
    {
      title: "Atualizações Automáticas",
      description: "Dados sempre atualizados com sincronização automática e agendamento de refreshs.",
      icon: RefreshCw
    },
    {
      title: "Relatórios Personalizados",
      description: "Criação de relatórios sob medida para diferentes áreas e níveis hierárquicos da empresa.",
      icon: Eye
    },
    {
      title: "Performance Otimizada",
      description: "Carregamento rápido e performance otimizada mesmo com grandes volumes de dados.",
      icon: Zap
    },
    {
      title: "Alertas Inteligentes",
      description: "Notificações automáticas baseadas em metas e indicadores críticos do negócio.",
      icon: Target
    }
  ];

  const benefits = [
    {
      title: "Decisões 70% Mais Rápidas",
      description: "Acesso instantâneo a informações estratégicas acelera o processo de tomada de decisão."
    },
    {
      title: "Aumento de 45% na Produtividade",
      description: "Automatização de relatórios libera tempo para análises estratégicas e ações corretivas."
    },
    {
      title: "Redução de 80% no Tempo de Análise",
      description: "Dashboards interativos eliminam a necessidade de análises manuais demoradas."
    },
    {
      title: "Visibilidade Total do Negócio",
      description: "Visão 360° da empresa com indicadores em tempo real para todas as áreas."
    },
    {
      title: "ROI Mensurável",
      description: "Identificação clara de oportunidades de melhoria e otimização de recursos."
    },
    {
      title: "Cultura Data-Driven",
      description: "Transformação da cultura organizacional com foco em dados e métricas."
    }
  ];

  const useCases = [
    {
      title: "Dashboard Financeiro",
      description: "Controle de fluxo de caixa, DRE, análise de lucratividade e projeções financeiras.",
      industry: "Financeiro"
    },
    {
      title: "Análise de Vendas",
      description: "Performance de vendedores, produtos mais vendidos, sazonalidade e metas comerciais.",
      industry: "Comercial"
    },
    {
      title: "Gestão de Estoque",
      description: "Giro de estoque, produtos em falta, análise ABC e otimização de compras.",
      industry: "Operacional"
    },
    {
      title: "RH e People Analytics",
      description: "Turnover, produtividade, satisfação de funcionários e indicadores de RH.",
      industry: "Recursos Humanos"
    },
    {
      title: "Marketing Digital",
      description: "ROI de campanhas, conversões, funil de vendas e análise de canais digitais.",
      industry: "Marketing"
    },
    {
      title: "Produção e Qualidade",
      description: "Indicadores de produtividade, qualidade, eficiência e controle de processos.",
      industry: "Produção"
    }
  ];

  const faqs = [
    {
      question: "Quais fontes de dados podem ser integradas?",
      answer: "Integramos com ERPs, CRMs, planilhas Excel, bancos de dados (SQL Server, MySQL, Oracle), APIs REST, arquivos CSV, Google Analytics, redes sociais e praticamente qualquer fonte de dados estruturada."
    },
    {
      question: "Os dashboards funcionam em dispositivos móveis?",
      answer: "Sim, todos os dashboards são responsivos e otimizados para visualização em smartphones e tablets, mantendo a interatividade e qualidade visual."
    },
    {
      question: "Com que frequência os dados são atualizados?",
      answer: "A frequência de atualização é configurável conforme sua necessidade: tempo real, horária, diária ou sob demanda. Definimos junto com você a melhor estratégia."
    },
    {
      question: "É possível criar relatórios personalizados?",
      answer: "Absolutamente. Criamos relatórios totalmente personalizados baseados nas suas necessidades específicas, KPIs e métricas importantes para seu negócio."
    },
    {
      question: "Como funciona o controle de acesso?",
      answer: "Implementamos controle granular de acesso por usuário, departamento ou função, garantindo que cada pessoa veja apenas as informações relevantes para seu trabalho."
    },
    {
      question: "Qual é o tempo de implementação?",
      answer: "Projetos simples ficam prontos em 1-2 semanas. Projetos complexos com múltiplas fontes podem levar de 3-6 semanas, incluindo testes e treinamento."
    },
    {
      question: "Vocês oferecem treinamento para a equipe?",
      answer: "Sim, incluímos treinamento completo para sua equipe, documentação detalhada e suporte contínuo para garantir o máximo aproveitamento da solução."
    },
    {
      question: "É possível fazer análises preditivas?",
      answer: "Sim, utilizamos algoritmos de machine learning e análise estatística para criar modelos preditivos e identificar tendências futuras nos seus dados."
    },
    {
      question: "Os dados ficam seguros?",
      answer: "Totalmente. Seguimos as melhores práticas de segurança, criptografia de dados, controle de acesso e conformidade com LGPD para proteger suas informações."
    },
    {
      question: "Posso exportar os relatórios?",
      answer: "Sim, todos os relatórios podem ser exportados em diversos formatos (PDF, Excel, PowerPoint) e podem ser agendados para envio automático por email."
    }
  ];

  return (
    <ProductBase
      productName="Dashboards Power BI"
      productSubtitle="Business Intelligence e Visualização de Dados"
      heroDescription="Transforme seus dados em insights estratégicos com dashboards interativos e análises avançadas que impulsionam a tomada de decisão baseada em dados."
      category="Business Intelligence"
      features={features}
      benefits={benefits}
      useCases={useCases}
      faqs={faqs}
      ctaTitle="Transforme seus dados em vantagem competitiva"
      ctaDescription="Descubra o poder dos seus dados com soluções de BI personalizadas para sua empresa."
    />
  );
}

export default DashboardsPowerBI;
