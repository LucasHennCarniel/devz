import { ProductBase } from '../ProductBase';
import { 
  ShoppingCart, 
  Package, 
  CreditCard, 
  BarChart3, 
  Users, 
  Smartphone,
  Globe,
  Truck,
  Tags,
  Calculator,
  Shield,
  Zap
} from 'lucide-react';

function DevzShop() {
  const features = [
    {
      title: "PDV Completo",
      description: "Point of Sale otimizado para varejo com interface intuitiva e operação rápida.",
      icon: CreditCard
    },
    {
      title: "Gestão de Estoque",
      description: "Controle preciso de produtos, variações, códigos de barras e movimentações.",
      icon: Package
    },
    {
      title: "E-commerce Integrado",
      description: "Loja virtual sincronizada com estoque físico e gestão unificada de pedidos.",
      icon: Globe
    },
    {
      title: "Programa de Fidelidade",
      description: "Sistema de pontos, cashback e campanhas promocionais para retenção de clientes.",
      icon: Users
    },
    {
      title: "Vendas Externas",
      description: "App mobile para vendedores externos com catálogo offline e sincronização.",
      icon: Smartphone
    },
    {
      title: "Gestão de Promoções",
      description: "Criação de ofertas, combos, descontos progressivos e campanhas automáticas.",
      icon: Tags
    },
    {
      title: "Relatórios de Vendas",
      description: "Análises detalhadas de performance, produtos mais vendidos e margem de lucro.",
      icon: BarChart3
    },
    {
      title: "Controle de Entregas",
      description: "Gestão de entregas próprias com rastreamento e integração com transportadoras.",
      icon: Truck
    },
    {
      title: "Gestão Financeira",
      description: "Controle de pagamentos, TEF integrado e conciliação automática de cartões.",
      icon: Calculator
    },
    {
      title: "Multi-lojas",
      description: "Gestão centralizada para redes de lojas com transferências entre estoques.",
      icon: ShoppingCart
    },
    {
      title: "Segurança Total",
      description: "Controle de acesso, backup automático e logs de auditoria completos.",
      icon: Shield
    },
    {
      title: "Integração Rápida",
      description: "APIs para conexão com marketplaces, sistemas contábeis e ERPs externos.",
      icon: Zap
    }
  ];

  const benefits = [
    {
      title: "Aumento de 35% nas Vendas",
      description: "PDV otimizado e programa de fidelidade impulsionam conversões e ticket médio."
    },
    {
      title: "Redução de 50% nas Perdas",
      description: "Controle preciso de estoque e alertas inteligentes eliminam rupturas e excessos."
    },
    {
      title: "Produtividade 3x Maior",
      description: "Automação de processos e interface intuitiva aceleram operações de venda."
    },
    {
      title: "Experiência do Cliente Superior",
      description: "Atendimento mais rápido e programa de fidelidade aumentam satisfação."
    },
    {
      title: "Controle Total do Negócio",
      description: "Dashboards em tempo real para tomada de decisões estratégicas assertivas."
    },
    {
      title: "Expansão Facilitada",
      description: "Sistema escalável que suporta crescimento sem complexidade adicional."
    }
  ];

  const useCases = [
    {
      title: "Loja de Roupas",
      description: "Gestão por tamanho/cor, campanhas sazonais e programa de fidelidade com cashback.",
      industry: "Moda"
    },
    {
      title: "Farmácia",
      description: "Controle de lotes, validades, receituário digital e integração com convênios.",
      industry: "Farmácia"
    },
    {
      title: "Supermercado",
      description: "PDV rápido, balança integrada, promocões automáticas e delivery próprio.",
      industry: "Alimentação"
    },
    {
      title: "Loja de Eletrônicos",
      description: "Gestão de garantias, serviços técnicos e parcelamento personalizado.",
      industry: "Eletrônicos"
    },
    {
      title: "Pet Shop",
      description: "Cadastro de pets, agendamento de serviços e controle de medicamentos.",
      industry: "Pet"
    },
    {
      title: "Livraria",
      description: "Gestão de títulos, encomendas, eventos e programa de indicação de livros.",
      industry: "Cultura"
    },
    {
      title: "Loja de Materiais",
      description: "Orçamentos complexos, entrega programada e vendas para obras.",
      industry: "Construção"
    },
    {
      title: "Multi-marca",
      description: "Gestão de várias lojas com produtos diferentes e controle centralizado.",
      industry: "Rede"
    }
  ];

  const faqs = [
    {
      question: "O sistema funciona offline se cair a internet?",
      answer: "Sim, o PDV possui modo offline que armazena vendas localmente e sincroniza automaticamente quando a conexão é restabelecida, garantindo continuidade das vendas."
    },
    {
      question: "Posso integrar com meu e-commerce atual?",
      answer: "Sim, temos integrações nativas com as principais plataformas de e-commerce e APIs para sincronização de produtos, estoque e pedidos em tempo real."
    },
    {
      question: "Como funciona o programa de fidelidade?",
      answer: "Sistema completo de pontos por compra, cashback, cupons personalizados e campanhas automáticas baseadas no perfil de cada cliente."
    },
    {
      question: "O sistema emite cupom fiscal?",
      answer: "Sim, emite NFCe, SAT e todos os documentos fiscais exigidos, com integração direta com a Receita Federal e contingência automática."
    },
    {
      question: "Posso usar em várias lojas?",
      answer: "Sim, ideal para redes com gestão centralizada, transferência entre estoques, relatórios consolidados e controle de performance por unidade."
    },
    {
      question: "Como é feito o controle de estoque?",
      answer: "Controle em tempo real com alertas de estoque mínimo, rastreabilidade completa, inventários facilitados e relatórios de giro por produto."
    },
    {
      question: "O sistema aceita todos os tipos de pagamento?",
      answer: "Sim, aceita dinheiro, cartões (crédito/débito), PIX, boleto e parcelamentos personalizados com TEF integrado para aprovação automática."
    },
    {
      question: "Posso criar promoções automáticas?",
      answer: "Sim, configure promoções por período, produto, cliente ou valor da compra com ativação automática no PDV e e-commerce."
    },
    {
      question: "Como funciona a gestão de vendedores?",
      answer: "Controle de metas, comissões, relatórios individuais e app mobile para vendas externas com catálogo sincronizado."
    },
    {
      question: "O sistema integra com marketplaces?",
      answer: "Sim, integração nativa com Mercado Livre, Amazon, Shopee e outros, sincronizando produtos, estoque e importando pedidos automaticamente."
    }
  ];

  return (
    <ProductBase
      productName="DEVZ Shop"
      productSubtitle="ERP Completo para Varejo Moderno"
      heroDescription="Sistema completo para gestão de lojas físicas e virtuais. PDV avançado, e-commerce integrado, programa de fidelidade e controle total do varejo."
      category="ERP Varejo"
      features={features}
      benefits={benefits}
      useCases={useCases}
      faqs={faqs}
      ctaTitle="Transforme seu varejo com o DEVZ Shop"
      ctaDescription="Mais de 800 lojas já aumentaram suas vendas e fidelizaram clientes com nossa solução completa."
      primaryColor="#865dfb"
    />
  );
}

export default DevzShop;
