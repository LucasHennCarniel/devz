import { ProductBase } from '../ProductBase';
import { 
  Globe, 
  ShoppingCart, 
  FileText, 
  Users, 
  BarChart3, 
  CreditCard,
  Truck,
  Settings,
  Shield,
  Smartphone,
  Cloud,
  Zap
} from 'lucide-react';

function AvanteWeb() {
  const features = [
    {
      title: "Gestão de Vendas",
      description: "Controle completo de pedidos, orçamentos e faturamento com emissão automática de notas fiscais.",
      icon: ShoppingCart
    },
    {
      title: "Controle de Estoque",
      description: "Gestão inteligente de produtos com alertas de estoque mínimo e rastreabilidade completa.",
      icon: FileText
    },
    {
      title: "Gestão Financeira",
      description: "Controle de contas a pagar e receber, fluxo de caixa e conciliação bancária automática.",
      icon: CreditCard
    },
    {
      title: "CRM Integrado",
      description: "Relacionamento com clientes, histórico de vendas e campanhas de marketing direcionadas.",
      icon: Users
    },
    {
      title: "Relatórios Gerenciais",
      description: "Dashboards interativos e relatórios customizáveis para tomada de decisão estratégica.",
      icon: BarChart3
    },
    {
      title: "Logística",
      description: "Controle de entregas, rastreamento de pedidos e integração com transportadoras.",
      icon: Truck
    },
    {
      title: "Configuração Flexível",
      description: "Sistema modular que se adapta às necessidades específicas do seu negócio.",
      icon: Settings
    },
    {
      title: "Segurança Avançada",
      description: "Controle de acesso por usuário, backup automático e conformidade com LGPD.",
      icon: Shield
    },
    {
      title: "Acesso Mobile",
      description: "Aplicativo mobile para vendas externas e consultas em tempo real.",
      icon: Smartphone
    }
  ];

  const benefits = [
    {
      title: "Aumento de 40% na Produtividade",
      description: "Automatização de processos repetitivos permite foco em atividades estratégicas."
    },
    {
      title: "Redução de 60% nos Erros Operacionais",
      description: "Validações automáticas e integração entre módulos eliminam retrabalho."
    },
    {
      title: "Controle Total do Negócio",
      description: "Visão 360° da empresa em tempo real para decisões mais assertivas."
    },
    {
      title: "Economia de até 30% nos Custos",
      description: "Otimização de processos e redução de desperdícios operacionais."
    },
    {
      title: "Escalabilidade Garantida",
      description: "Sistema cresce junto com sua empresa sem perda de performance."
    },
    {
      title: "Suporte Especializado",
      description: "Equipe técnica dedicada para treinamento e suporte contínuo."
    }
  ];

  const useCases = [
    {
      title: "Loja de Roupas",
      description: "Controle de estoque por tamanho e cor, promoções sazonais e programa de fidelidade.",
      industry: "Varejo"
    },
    {
      title: "Distribuidora",
      description: "Gestão de múltiplos fornecedores, controle de representantes e logística complexa.",
      industry: "Distribuição"
    },
    {
      title: "E-commerce",
      description: "Integração com marketplaces, gestão de múltiplos canais de venda e fulfillment.",
      industry: "Digital"
    },
    {
      title: "Prestadora de Serviços",
      description: "Controle de ordens de serviço, agendamentos e faturamento recorrente.",
      industry: "Serviços"
    },
    {
      title: "Atacadista",
      description: "Gestão de grandes volumes, tabelas de preço diferenciadas e crédito por cliente.",
      industry: "Atacado"
    },
    {
      title: "MEI/Pequena Empresa",
      description: "Solução simplificada para emissão de notas, controle básico e relatórios essenciais.",
      industry: "MEI"
    }
  ];

  const faqs = [
    {
      question: "O Avante® Web funciona totalmente online?",
      answer: "Sim, o Avante® Web é uma solução 100% cloud que funciona através do navegador. Você pode acessar de qualquer lugar com internet, sem necessidade de instalação de software."
    },
    {
      question: "Quantos usuários podem usar o sistema simultaneamente?",
      answer: "O número de usuários varia conforme o plano contratado. Oferecemos desde planos para 1 usuário até ilimitados, sempre com performance garantida."
    },
    {
      question: "O sistema integra com minha contabilidade?",
      answer: "Sim, o Avante® Web possui integração nativa com os principais sistemas contábeis do mercado e exporta arquivos no formato exigido pelo seu contador."
    },
    {
      question: "Como funciona a emissão de notas fiscais?",
      answer: "A emissão é totalmente automatizada e integrada com a SEFAZ. Suportamos NFe, NFCe, NFSe e todos os tipos de documentos fiscais exigidos pela legislação."
    },
    {
      question: "Posso personalizar relatórios e dashboards?",
      answer: "Sim, o sistema oferece relatórios customizáveis e dashboards personalizáveis. Você pode criar visualizações específicas para suas necessidades."
    },
    {
      question: "Qual é o tempo de implementação?",
      answer: "A implementação básica leva de 3 a 7 dias úteis, incluindo migração de dados, treinamento da equipe e configurações específicas do negócio."
    },
    {
      question: "O sistema funciona offline?",
      answer: "Como é uma solução cloud, o Avante® Web requer conexão com internet. Porém, o aplicativo mobile possui algumas funcionalidades offline básicas."
    },
    {
      question: "Como é feito o backup dos dados?",
      answer: "Realizamos backups automáticos diários em servidores redundantes com certificação de segurança. Seus dados estão sempre protegidos e disponíveis."
    },
    {
      question: "Posso integrar com marketplaces?",
      answer: "Sim, temos integrações nativas com Mercado Livre, Amazon, Shopee e outros principais marketplaces, sincronizando estoque e pedidos automaticamente."
    },
    {
      question: "O sistema atende às exigências da LGPD?",
      answer: "Totalmente. O Avante® Web foi desenvolvido seguindo todas as diretrizes da LGPD, com controles de acesso, auditoria e políticas de privacidade integradas."
    }
  ];

  return (
    <ProductBase
      productName="Avante® Web"
      productSubtitle="ERP Completo para Varejo e Serviços"
      heroDescription="Sistema de gestão empresarial completo, 100% web, ideal para empresas de varejo, prestadoras de serviços e MEI que precisam de uma solução robusta e acessível."
      category="ERP Modular"
      features={features}
      benefits={benefits}
      useCases={useCases}
      faqs={faqs}
      ctaTitle="Simplifique sua gestão com o Avante® Web"
      ctaDescription="Junte-se a mais de 1.000 empresas que já transformaram sua gestão com nossa solução completa."
    />
  );
}

export default AvanteWeb;
