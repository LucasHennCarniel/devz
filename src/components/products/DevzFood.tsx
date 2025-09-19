import { ProductBase } from '../ProductBase';
import { 
  Utensils, 
  Clock, 
  Truck, 
  CreditCard, 
  Users, 
  BarChart3,
  Smartphone,
  ChefHat,
  Calendar,
  MapPin,
  Receipt,
  Settings
} from 'lucide-react';

function DevzFood() {
  const features = [
    {
      title: "PDV Especializado",
      description: "Point of Sale otimizado para bares e restaurantes com interface intuitiva e rápida.",
      icon: CreditCard
    },
    {
      title: "Gestão de Cardápio",
      description: "Controle completo de pratos, bebidas, ingredientes e receitas com custo automático.",
      icon: ChefHat
    },
    {
      title: "Delivery Integrado",
      description: "Gestão de entregas com rastreamento, tempo estimado e integração com apps de delivery.",
      icon: Truck
    },
    {
      title: "Controle de Mesas",
      description: "Gerenciamento de ocupação, reservas e divisão de comandas em tempo real.",
      icon: Utensils
    },
    {
      title: "Gestão de Funcionários",
      description: "Controle de turnos, comissões de garçons e relatórios de produtividade por colaborador.",
      icon: Users
    },
    {
      title: "Relatórios Específicos",
      description: "Análises de vendas por período, pratos mais vendidos e margem de contribuição.",
      icon: BarChart3
    },
    {
      title: "App Garçom",
      description: "Aplicativo mobile para pedidos direto na mesa, reduzindo tempo e erros.",
      icon: Smartphone
    },
    {
      title: "Gestão de Horários",
      description: "Controle de funcionamento, happy hour e preços diferenciados por período.",
      icon: Clock
    },
    {
      title: "Reservas Online",
      description: "Sistema de reservas integrado com confirmação automática e gestão de agenda.",
      icon: Calendar
    },
    {
      title: "Multi-unidades",
      description: "Gestão centralizada para redes de restaurantes com visão consolidada.",
      icon: MapPin
    },
    {
      title: "Comandas Eletrônicas",
      description: "Controle digital de comandas com impressão automática na cozinha.",
      icon: Receipt
    },
    {
      title: "Configuração Flexível",
      description: "Adaptável para diferentes tipos: restaurante, bar, pizzaria, lanchonete.",
      icon: Settings
    }
  ];

  const benefits = [
    {
      title: "Redução de 50% no Tempo de Atendimento",
      description: "App garçom e PDV otimizado aceleram significativamente o processo de pedidos."
    },
    {
      title: "Aumento de 35% no Ticket Médio",
      description: "Sugestões automáticas e upselling inteligente aumentam o valor por cliente."
    },
    {
      title: "Controle Total de Custos",
      description: "Gestão precisa de ingredientes e receitas para máxima rentabilidade."
    },
    {
      title: "Eliminação de Erros de Pedidos",
      description: "Comunicação digital entre salão e cozinha reduz falhas operacionais."
    },
    {
      title: "Gestão Inteligente de Delivery",
      description: "Otimização de rotas e tempos para maior satisfação do cliente."
    },
    {
      title: "Relatórios Especializados",
      description: "Métricas específicas do setor para decisões estratégicas assertivas."
    }
  ];

  const useCases = [
    {
      title: "Restaurante Tradicional",
      description: "Gestão completa de mesas, cardápio sazonal e controle de reservas para restaurantes tradicionais.",
      industry: "Restaurante"
    },
    {
      title: "Pizzaria",
      description: "Controle de sabores, tamanhos, delivery próprio e integração com apps terceiros.",
      industry: "Pizzaria"
    },
    {
      title: "Bar/Pub",
      description: "Gestão de happy hour, drinks especiais, eventos e controle de estoque de bebidas.",
      industry: "Bar"
    },
    {
      title: "Fast Food",
      description: "PDV rápido, combos pré-configurados e gestão de filas para atendimento express.",
      industry: "Fast Food"
    },
    {
      title: "Lanchonete",
      description: "Sistema simplificado para lanches, sucos e atendimento rápido no balcão.",
      industry: "Lanchonete"
    },
    {
      title: "Food Truck",
      description: "Solução mobile completa para vendas itinerantes com PDV em tablet.",
      industry: "Food Truck"
    },
    {
      title: "Delivery Dark Kitchen",
      description: "Foco total em delivery com múltiplas marcas e otimização de operação virtual.",
      industry: "Dark Kitchen"
    },
    {
      title: "Cafeteria",
      description: "Gestão de cafés especiais, programa de fidelidade e vendas de grãos.",
      industry: "Cafeteria"
    }
  ];

  const faqs = [
    {
      question: "O sistema funciona em tablets para o garçom usar?",
      answer: "Sim, temos um aplicativo nativo para tablets e smartphones que permite aos garçons fazer pedidos diretamente na mesa, com sincronização instantânea com a cozinha e PDV."
    },
    {
      question: "Como funciona a integração com apps de delivery?",
      answer: "Integramos nativamente com iFood, Uber Eats, Rappi e outros. Os pedidos chegam automaticamente no sistema, atualizando estoque e gerando relatórios unificados."
    },
    {
      question: "Posso controlar ingredientes e receitas?",
      answer: "Sim, o sistema possui gestão completa de receitas com baixa automática de ingredientes, controle de custo por prato e alertas de estoque mínimo."
    },
    {
      question: "O sistema funciona offline se a internet cair?",
      answer: "Sim, o PDV possui modo offline que sincroniza automaticamente quando a conexão é restabelecida, garantindo continuidade do atendimento."
    },
    {
      question: "Como é feito o controle de mesas e comandas?",
      answer: "Interface visual mostra ocupação em tempo real, permite transferência entre mesas, divisão de comandas e controle de tempo de permanência."
    },
    {
      question: "Posso configurar preços diferentes para delivery e balcão?",
      answer: "Sim, o sistema permite tabelas de preços diferenciadas por canal de venda, período do dia e tipo de cliente."
    },
    {
      question: "Como funciona o controle de funcionários?",
      answer: "Gestão completa de turnos, comissões por garçom, relatórios de produtividade e controle de acesso por perfil de usuário."
    },
    {
      question: "O sistema emite cupom fiscal?",
      answer: "Sim, emite SAT, NFCe e todos os tipos de cupons fiscais exigidos, com integração direta com a Receita Federal."
    },
    {
      question: "Posso gerenciar várias unidades no mesmo sistema?",
      answer: "Sim, ideal para redes de restaurantes com visão consolidada, transferência entre estoques e relatórios comparativos."
    },
    {
      question: "Como é feita a gestão de reservas?",
      answer: "Sistema de reservas online integrado com confirmação automática, lista de espera e histórico completo de clientes."
    }
  ];

  return (
    <ProductBase
      productName="DEVZ Food"
      productSubtitle="ERP Especializado para Bares e Restaurantes"
      heroDescription="Sistema completo para gestão de restaurantes, bares, pizzarias e delivery. PDV otimizado, controle de mesas, app garçom e integração com delivery."
      category="ERP Especializado"
      features={features}
      benefits={benefits}
      useCases={useCases}
      faqs={faqs}
      ctaTitle="Revolucione seu restaurante com o DEVZ Food"
      ctaDescription="Mais de 500 estabelecimentos já aumentaram suas vendas e reduziram custos com nossa solução especializada."
    />
  );
}

export default DevzFood;