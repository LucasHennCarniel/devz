import { ProductBase } from '../ProductBase';
import { 
  Scissors, 
  Calendar, 
  Users, 
  CreditCard, 
  BarChart3, 
  Clock,
  Star,
  Smartphone,
  Settings,
  Shield,
  Heart,
  Package
} from 'lucide-react';

function DevzSaloes() {
  const features = [
    {
      title: "Agendamento Inteligente",
      description: "Sistema de agendamento online integrado com controle de horários, profissionais e serviços disponíveis.",
      icon: Calendar
    },
    {
      title: "Gestão de Clientes",
      description: "Cadastro completo com histórico de serviços, preferências e programa de fidelidade personalizado.",
      icon: Users
    },
    {
      title: "Controle Financeiro",
      description: "Gestão de pagamentos, comissões por profissional e controle de contas a pagar/receber.",
      icon: CreditCard
    },
    {
      title: "Estoque de Produtos",
      description: "Controle de produtos de beleza, cosméticos e equipamentos com alertas de reposição.",
      icon: Package
    },
    {
      title: "Relatórios de Performance",
      description: "Dashboards com faturamento por profissional, serviços mais vendidos e análise de rentabilidade.",
      icon: BarChart3
    },
    {
      title: "Gestão de Profissionais",
      description: "Controle de agenda individual, comissões, metas e avaliações de performance.",
      icon: Star
    },
    {
      title: "Controle de Tempo",
      description: "Cronômetro integrado para controle preciso do tempo de cada serviço realizado.",
      icon: Clock
    },
    {
      title: "App Mobile",
      description: "Aplicativo para clientes agendarem e profissionais gerenciarem suas agendas.",
      icon: Smartphone
    },
    {
      title: "Personalização",
      description: "Sistema adaptável para salões de beleza, barbearias, clínicas de estética e spas.",
      icon: Settings
    }
  ];

  const benefits = [
    {
      title: "Aumento de 35% na Taxa de Ocupação",
      description: "Otimização da agenda elimina horários vagos e maximiza o aproveitamento dos profissionais."
    },
    {
      title: "Redução de 50% no No-Show",
      description: "Lembretes automáticos e confirmações reduzem drasticamente as faltas dos clientes."
    },
    {
      title: "Controle Total das Comissões",
      description: "Cálculo automático e transparente das comissões por profissional e tipo de serviço."
    },
    {
      title: "Fidelização de Clientes",
      description: "Programa de pontos, promoções personalizadas e histórico completo de atendimentos."
    },
    {
      title: "Gestão Profissional",
      description: "Relatórios detalhados para tomada de decisão e crescimento do negócio."
    },
    {
      title: "Economia de Tempo",
      description: "Automatização de processos administrativos permite foco no atendimento."
    }
  ];

  const useCases = [
    {
      title: "Salão de Beleza",
      description: "Gestão completa com múltiplos profissionais, serviços variados e controle de produtos.",
      industry: "Beleza"
    },
    {
      title: "Barbearia",
      description: "Sistema simplificado focado em agendamento rápido e controle financeiro eficiente.",
      industry: "Beleza Masculina"
    },
    {
      title: "Clínica de Estética",
      description: "Controle de procedimentos, fichas de anamnese e acompanhamento de tratamentos.",
      industry: "Estética"
    },
    {
      title: "Spa e Wellness",
      description: "Gestão de terapias, pacotes de relaxamento e controle de espaços/equipamentos.",
      industry: "Bem-estar"
    },
    {
      title: "Studio de Beleza",
      description: "Solução para profissionais autônomos com foco em agendamento e fidelização.",
      industry: "Autônomo"
    },
    {
      title: "Esmalteria",
      description: "Sistema especializado em serviços rápidos com gestão otimizada de tempo e filas.",
      industry: "Especializada"
    }
  ];

  const faqs = [
    {
      question: "O sistema permite agendamento online pelos clientes?",
      answer: "Sim, os clientes podem agendar através do app ou site, visualizando horários disponíveis em tempo real e escolhendo o profissional preferido."
    },
    {
      question: "Como funciona o controle de comissões?",
      answer: "O sistema calcula automaticamente as comissões baseado nas regras configuradas (percentual por serviço, profissional ou meta atingida)."
    },
    {
      question: "Posso controlar o estoque de produtos?",
      answer: "Sim, há controle completo de produtos utilizados nos serviços e vendidos no salão, com alertas de estoque mínimo e relatórios de giro."
    },
    {
      question: "O sistema envia lembretes automáticos?",
      answer: "Sim, enviamos lembretes por WhatsApp, SMS ou e-mail configuráveis por horário e tipo de cliente."
    },
    {
      question: "Como funciona a gestão de múltiplos profissionais?",
      answer: "Cada profissional tem sua agenda individual, metas, comissões e relatórios específicos, com visão gerencial consolidada."
    },
    {
      question: "Posso criar pacotes de serviços?",
      answer: "Sim, é possível criar pacotes promocionais, tratamentos sequenciais e planos de fidelidade personalizados."
    },
    {
      question: "O sistema funciona para franquias?",
      answer: "Sim, temos módulo específico para franquias com gestão centralizada e relatórios consolidados por unidade."
    },
    {
      question: "Como é o controle de caixa?",
      answer: "Controle completo com múltiplas formas de pagamento, sangria, fechamento de caixa e conciliação automática."
    },
    {
      question: "Posso personalizar os tipos de serviços?",
      answer: "Totalmente personalizável. Você cadastra seus serviços, preços, tempo de duração e profissionais habilitados."
    },
    {
      question: "O sistema gera relatórios fiscais?",
      answer: "Sim, emite notas fiscais de serviços (NFSe) automaticamente e gera relatórios para entrega à contabilidade."
    }
  ];

  return (
    <ProductBase
      productName="DEVZ Salões"
      productSubtitle="Gestão Completa para Salões de Beleza"
      heroDescription="Sistema especializado para salões de beleza, barbearias e clínicas de estética com agendamento inteligente, gestão de profissionais e controle financeiro completo."
      category="Beleza & Estética"
      features={features}
      benefits={benefits}
      useCases={useCases}
      faqs={faqs}
      ctaTitle="Transforme seu salão com o DEVZ Salões"
      ctaDescription="Junte-se a centenas de salões que já otimizaram sua gestão e aumentaram sua rentabilidade."
    />
  );
}

export default DevzSaloes;