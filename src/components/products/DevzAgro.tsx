import { ProductBase } from '../ProductBase';
import { 
  Tractor, 
  MapPin, 
  BarChart3, 
  CloudRain, 
  Sprout, 
  DollarSign,
  Package,
  Calendar,
  Users,
  Truck,
  FileText,
  Shield
} from 'lucide-react';

function DevzAgro() {
  const features = [
    {
      title: "Gestão de Propriedades",
      description: "Controle de múltiplas fazendas, talhões, culturas e atividades agrícolas em uma única plataforma.",
      icon: MapPin
    },
    {
      title: "Controle de Safras",
      description: "Planejamento, acompanhamento e análise de safras com controle de custos e produtividade.",
      icon: Sprout
    },
    {
      title: "Gestão Financeira Rural",
      description: "Controle de custos por cultura, fluxo de caixa rural e análise de rentabilidade por talhão.",
      icon: DollarSign
    },
    {
      title: "Estoque de Insumos",
      description: "Controle de fertilizantes, defensivos, sementes e combustível com rastreabilidade completa.",
      icon: Package
    },
    {
      title: "Máquinas e Equipamentos",
      description: "Gestão de frota agrícola com controle de manutenções, custos operacionais e depreciação.",
      icon: Tractor
    },
    {
      title: "Planejamento Agrícola",
      description: "Calendário de atividades, rotação de culturas e planejamento de plantio baseado em dados históricos.",
      icon: Calendar
    },
    {
      title: "Gestão de Pessoal",
      description: "Controle de funcionários rurais, empreiteiros e custos de mão de obra por atividade.",
      icon: Users
    },
    {
      title: "Logística Rural",
      description: "Controle de transporte, armazenagem e comercialização da produção agrícola.",
      icon: Truck
    },
    {
      title: "Relatórios Técnicos",
      description: "Dashboards com indicadores de produtividade, custos e análises técnico-econômicas.",
      icon: BarChart3
    }
  ];

  const benefits = [
    {
      title: "Aumento de 25% na Produtividade",
      description: "Planejamento baseado em dados históricos e monitoramento preciso das atividades."
    },
    {
      title: "Redução de 30% nos Custos",
      description: "Otimização no uso de insumos e controle rigoroso de gastos por cultura."
    },
    {
      title: "Gestão Completa da Propriedade",
      description: "Visão integrada de todas as operações rurais em tempo real."
    },
    {
      title: "Controle de Conformidade",
      description: "Atendimento às exigências de rastreabilidade e certificações agrícolas."
    },
    {
      title: "Tomada de Decisão Assertiva",
      description: "Relatórios detalhados para análise de viabilidade e planejamento estratégico."
    },
    {
      title: "Sustentabilidade",
      description: "Controle de práticas sustentáveis e otimização do uso de recursos naturais."
    }
  ];

  const useCases = [
    {
      title: "Produtor de Grãos",
      description: "Gestão de soja, milho e outras commodities com controle de custos e produtividade.",
      industry: "Grãos"
    },
    {
      title: "Pecuária",
      description: "Controle de rebanho, pastagens, nutrição e reprodução animal integrada.",
      industry: "Pecuária"
    },
    {
      title: "Fruticultura",
      description: "Gestão especializada para pomares com controle de tratamentos e colheitas.",
      industry: "Frutas"
    },
    {
      title: "Cooperativa",
      description: "Sistema para cooperativas com gestão de múltiplos produtores e recebimento de grãos.",
      industry: "Cooperativa"
    },
    {
      title: "Agricultura Familiar",
      description: "Solução simplificada para pequenos produtores com foco na eficiência operacional.",
      industry: "Familiar"
    },
    {
      title: "Agronegócio",
      description: "Gestão completa para grandes propriedades com múltiplas culturas e operações complexas.",
      industry: "Corporate"
    }
  ];

  const faqs = [
    {
      question: "O sistema funciona offline no campo?",
      answer: "Sim, o app mobile funciona offline e sincroniza automaticamente quando há conexão, permitindo trabalho mesmo em áreas remotas."
    },
    {
      question: "Como é feito o controle de aplicação de defensivos?",
      answer: "Sistema de rastreabilidade completa com registro de produto, dose, área aplicada e responsável técnico, atendendo às exigências legais."
    },
    {
      question: "Posso integrar com equipamentos agrícolas?",
      answer: "Sim, temos integrações com principais marcas de tratores e implementos para coleta automática de dados de campo."
    },
    {
      question: "O sistema calcula custos por hectare?",
      answer: "Sim, há cálculo automático de custos por hectare, por cultura e por talhão, facilitando análises de rentabilidade."
    },
    {
      question: "Como funciona o controle de estoque de insumos?",
      answer: "Controle completo com alertas de estoque mínimo, rastreabilidade de lotes e integração com fornecedores para reposição automática."
    },
    {
      question: "O sistema atende às normas do MAPA?",
      answer: "Sim, atende todas as exigências do MAPA para rastreabilidade, uso de defensivos e certificações agrícolas."
    },
    {
      question: "Posso gerenciar múltiplas propriedades?",
      answer: "Sim, o sistema permite gestão de múltiplas fazendas com relatórios consolidados e individuais por propriedade."
    },
    {
      question: "Como é o controle de maquinário?",
      answer: "Gestão completa de frota com controle de horas trabalhadas, manutenções preventivas, custos operacionais e depreciação."
    },
    {
      question: "O sistema gera relatórios para certificações?",
      answer: "Sim, gera relatórios específicos para certificações como GlobalGAP, UTZ, Rainforest Alliance e outras exigidas pelo mercado."
    },
    {
      question: "Há integração com sistemas meteorológicos?",
      answer: "Sim, integração com estações meteorológicas para monitoramento de clima e apoio na tomada de decisões de campo."
    }
  ];

  return (
    <ProductBase
      productName="DEVZ Agro"
      productSubtitle="Gestão Completa para o Agronegócio"
      heroDescription="Sistema especializado para produtores rurais, cooperativas e empresas do agronegócio com gestão de propriedades, safras, custos e conformidade legal."
      category="Agronegócio"
      features={features}
      benefits={benefits}
      useCases={useCases}
      faqs={faqs}
      ctaTitle="Modernize sua produção com o DEVZ Agro"
      ctaDescription="Junte-se a milhares de produtores que já otimizaram sua gestão rural e aumentaram sua rentabilidade."
      primaryColor="#149156"
    />
  );
}

export default DevzAgro;
