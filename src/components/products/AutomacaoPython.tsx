import { ProductBase } from '../ProductBase';
import { 
  Brain, 
  Code, 
  Zap, 
  FileText, 
  BarChart3, 
  Database,
  Bot,
  Clock,
  Shield,
  Cog,
  TrendingUp,
  Workflow
} from 'lucide-react';

function AutomacaoPython() {
  const features = [
    {
      title: "Scripts Inteligentes",
      description: "Desenvolvimento de automações personalizadas com Python para processos específicos do seu negócio.",
      icon: Code
    },
    {
      title: "Inteligência Artificial",
      description: "Implementação de IA para análise preditiva, classificação de dados e otimização de processos.",
      icon: Brain
    },
    {
      title: "Processamento de Dados",
      description: "Análise e tratamento automatizado de grandes volumes de dados com pandas e numpy.",
      icon: Database
    },
    {
      title: "Robôs de Processo (RPA)",
      description: "Automação de tarefas repetitivas com interface gráfica e integração web.",
      icon: Bot
    },
    {
      title: "Integração de APIs",
      description: "Conexão automática entre sistemas através de APIs REST, webhooks e web scraping.",
      icon: Zap
    },
    {
      title: "Relatórios Automatizados",
      description: "Geração automática de relatórios em Excel, PDF e dashboards interativos.",
      icon: FileText
    },
    {
      title: "Machine Learning",
      description: "Modelos de aprendizado de máquina para previsões, classificações e recomendações.",
      icon: TrendingUp
    },
    {
      title: "Agendamento Inteligente",
      description: "Execução automática de scripts em horários programados ou por eventos específicos.",
      icon: Clock
    },
    {
      title: "Monitoramento e Logs",
      description: "Acompanhamento em tempo real da execução com logs detalhados e alertas automáticos.",
      icon: BarChart3
    },
    {
      title: "Segurança Avançada",
      description: "Criptografia de dados, controle de acesso e auditoria completa das automações.",
      icon: Shield
    },
    {
      title: "Interface Personalizada",
      description: "Desenvolvimento de interfaces web para controle e visualização das automações.",
      icon: Cog
    },
    {
      title: "Workflows Complexos",
      description: "Criação de fluxos de trabalho automatizados com múltiplas etapas e condições.",
      icon: Workflow
    }
  ];

  const benefits = [
    {
      title: "Redução de 80% no Tempo de Processos",
      description: "Automações eliminam trabalho manual repetitivo, liberando equipe para atividades estratégicas."
    },
    {
      title: "Precisão de 99% nas Operações",
      description: "Eliminação de erros humanos com validações automáticas e processamento inteligente."
    },
    {
      title: "Disponibilidade 24/7",
      description: "Scripts executam continuamente sem intervenção humana, aumentando produtividade."
    },
    {
      title: "ROI em Até 3 Meses",
      description: "Retorno rápido do investimento através da otimização de processos operacionais."
    },
    {
      title: "Escalabilidade Ilimitada",
      description: "Automações crescem junto com o volume de dados sem perda de performance."
    },
    {
      title: "Insights Inteligentes",
      description: "IA identifica padrões e oportunidades que passariam despercebidas manualmente."
    }
  ];

  const useCases = [
    {
      title: "Automação Contábil",
      description: "Conciliação bancária automática, classificação de lançamentos e geração de relatórios fiscais.",
      industry: "Contabilidade"
    },
    {
      title: "Análise de Vendas",
      description: "Processamento de dados de vendas, previsões com IA e relatórios gerenciais automáticos.",
      industry: "Comercial"
    },
    {
      title: "Gestão de Estoque",
      description: "Reposição automática baseada em IA, análise de giro e otimização de compras.",
      industry: "Logística"
    },
    {
      title: "Atendimento ao Cliente",
      description: "Chatbots inteligentes, classificação automática de tickets e análise de sentimento.",
      industry: "Customer Success"
    },
    {
      title: "Recursos Humanos",
      description: "Triagem de currículos com IA, automação de folha e análise de performance.",
      industry: "RH"
    },
    {
      title: "Marketing Digital",
      description: "Análise de campanhas, segmentação automática e otimização de anúncios com IA.",
      industry: "Marketing"
    },
    {
      title: "Compliance e Auditoria",
      description: "Monitoramento automático de conformidade, detecção de anomalias e relatórios regulatórios.",
      industry: "Compliance"
    },
    {
      title: "Operações Financeiras",
      description: "Análise de risco com IA, automação de cobranças e reconciliação de pagamentos.",
      industry: "Financeiro"
    }
  ];

  const faqs = [
    {
      question: "Quanto tempo leva para desenvolver uma automação?",
      answer: "O tempo varia de 1 a 8 semanas dependendo da complexidade. Automações simples ficam prontas em poucos dias, enquanto projetos com IA podem levar mais tempo para treinamento dos modelos."
    },
    {
      question: "Preciso ter conhecimento técnico para usar as automações?",
      answer: "Não. Desenvolvemos interfaces intuitivas e fornecemos treinamento completo. As automações funcionam de forma transparente, sem necessidade de conhecimento em programação."
    },
    {
      question: "As automações funcionam com meus sistemas atuais?",
      answer: "Sim, desenvolvemos integrações personalizadas com qualquer sistema, seja através de APIs, bancos de dados ou interfaces web. Python é extremamente versátil para integrações."
    },
    {
      question: "Como é garantida a segurança dos dados?",
      answer: "Implementamos criptografia de ponta a ponta, controle de acesso granular e logs de auditoria. Todos os scripts seguem as melhores práticas de segurança em Python."
    },
    {
      question: "Posso modificar as automações depois de prontas?",
      answer: "Sim, fornecemos documentação completa e suporte para modificações. Também oferecemos contratos de manutenção evolutiva para ajustes e melhorias contínuas."
    },
    {
      question: "O que acontece se uma automação falhar?",
      answer: "Implementamos sistemas de monitoramento com alertas imediatos, logs detalhados e mecanismos de recuperação automática. Oferecemos suporte 24/7 para automações críticas."
    },
    {
      question: "Vocês fazem manutenção das automações?",
      answer: "Sim, oferecemos contratos de manutenção que incluem monitoramento, atualizações, correções e melhorias contínuas das automações desenvolvidas."
    },
    {
      question: "As automações podem tomar decisões sozinhas?",
      answer: "Sim, com IA implementamos automações que analisam dados e tomam decisões baseadas em regras pré-definidas ou modelos de machine learning treinados."
    },
    {
      question: "Qual o custo de uma automação personalizada?",
      answer: "O investimento varia conforme complexidade e escopo. Oferecemos orçamentos detalhados após análise dos processos. O ROI geralmente se paga em poucos meses."
    },
    {
      question: "Vocês fornecem treinamento para a equipe?",
      answer: "Sim, incluímos treinamento completo da equipe, documentação detalhada e suporte durante o período de adaptação às novas automações."
    }
  ];

  return (
    <ProductBase
      productName="Automação Python + IA"
      productSubtitle="Soluções Inteligentes para Automação de Processos"
      heroDescription="Desenvolvimento de automações personalizadas usando Python e Inteligência Artificial para otimizar processos, eliminar trabalho manual e gerar insights inteligentes."
      category="Desenvolvimento Personalizado"
      features={features}
      benefits={benefits}
      useCases={useCases}
      faqs={faqs}
      ctaTitle="Automatize seu negócio com Inteligência Artificial"
      ctaDescription="Junte-se às empresas que já economizam milhares de horas mensais com nossas automações inteligentes."
    />
  );
}

export default AutomacaoPython;