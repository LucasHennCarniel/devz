import { ProductBase } from '../ProductBase';
import { 
  Stethoscope, 
  Calendar, 
  FileText, 
  Users, 
  CreditCard, 
  Clock,
  Shield,
  Smartphone,
  BarChart3,
  Bell,
  Archive,
  UserCheck
} from 'lucide-react';

function DevzClinicas() {
  const features = [
    {
      title: "Agendamento Inteligente",
      description: "Sistema de agendas com controle de disponibilidade, reagendamentos e lista de espera automática.",
      icon: Calendar
    },
    {
      title: "Prontuário Eletrônico",
      description: "Prontuários digitais seguros com histórico completo, anexos e conformidade com CFM.",
      icon: FileText
    },
    {
      title: "Gestão de Pacientes",
      description: "Cadastro completo com histórico médico, anamnese digital e comunicação automatizada.",
      icon: Users
    },
    {
      title: "Controle Financeiro",
      description: "Faturamento de consultas, controle de convênios e gestão de recebimentos.",
      icon: CreditCard
    },
    {
      title: "Receituário Digital",
      description: "Prescrições eletrônicas com assinatura digital e envio direto para farmácias.",
      icon: Stethoscope
    },
    {
      title: "Gestão de Convênios",
      description: "Autorização automática, envio de guias e controle de glosas por operadora.",
      icon: Shield
    },
    {
      title: "App Paciente",
      description: "Aplicativo para agendamentos, consulta de resultados e comunicação com a clínica.",
      icon: Smartphone
    },
    {
      title: "Controle de Horários",
      description: "Gestão de horários de profissionais, salas e equipamentos com otimização automática.",
      icon: Clock
    },
    {
      title: "Relatórios Médicos",
      description: "Relatórios especializados para gestão clínica e indicadores de performance.",
      icon: BarChart3
    },
    {
      title: "Lembretes Automáticos",
      description: "SMS e WhatsApp automáticos para confirmação e lembrete de consultas.",
      icon: Bell
    },
    {
      title: "Arquivo Digital",
      description: "Digitalização e organização de documentos com indexação inteligente.",
      icon: Archive
    },
    {
      title: "Controle de Acesso",
      description: "Perfis de acesso diferenciados para médicos, enfermeiros e recepcionistas.",
      icon: UserCheck
    }
  ];

  const benefits = [
    {
      title: "Redução de 70% no No-Show",
      description: "Lembretes automáticos e confirmações reduzem drasticamente faltas em consultas."
    },
    {
      title: "Aumento de 45% na Produtividade",
      description: "Otimização de agendas e processos digitais liberam tempo para atendimento."
    },
    {
      title: "Conformidade LGPD e CFM",
      description: "Sistema desenvolvido seguindo todas as normas médicas e de privacidade."
    },
    {
      title: "Melhoria na Experiência do Paciente",
      description: "App dedicado e comunicação eficiente aumentam satisfação dos pacientes."
    },
    {
      title: "Controle Total Financeiro",
      description: "Gestão automatizada de convênios e particulares com relatórios detalhados."
    },
    {
      title: "Prontuários Sempre Disponíveis",
      description: "Acesso seguro ao histórico médico completo de qualquer lugar."
    }
  ];

  const useCases = [
    {
      title: "Clínica Médica Geral",
      description: "Gestão completa de consultas, múltiplos médicos e especialidades em um só local.",
      industry: "Clínica"
    },
    {
      title: "Consultório Individual",
      description: "Solução simplificada para médicos autônomos com agenda otimizada e prontuário digital.",
      industry: "Consultório"
    },
    {
      title: "Clínica Odontológica",
      description: "Controle de tratamentos, orçamentos, radiografias e planos de tratamento específicos.",
      industry: "Odontologia"
    },
    {
      title: "Clínica de Psicologia",
      description: "Gestão de sessões, evolução terapêutica e relatórios psicológicos especializados.",
      industry: "Psicologia"
    },
    {
      title: "Fisioterapia",
      description: "Controle de sessões, exercícios prescritos e evolução do paciente com fotos.",
      industry: "Fisioterapia"
    },
    {
      title: "Laboratório de Análises",
      description: "Gestão de exames, resultados digitais e integração com equipamentos laboratoriais.",
      industry: "Laboratório"
    },
    {
      title: "Clínica de Estética",
      description: "Protocolos de tratamento, antes/depois, agendamento de procedimentos estéticos.",
      industry: "Estética"
    },
    {
      title: "Telemedicina",
      description: "Consultas online integradas com prontuário e prescrição eletrônica.",
      industry: "Telemedicina"
    }
  ];

  const faqs = [
    {
      question: "O sistema é aprovado pelo Conselho Federal de Medicina?",
      answer: "Sim, o DEVZ Clínicas segue todas as diretrizes do CFM para prontuários eletrônicos, incluindo assinatura digital, rastreabilidade e segurança dos dados."
    },
    {
      question: "Como funciona a integração com convênios?",
      answer: "Temos integração direta com as principais operadoras para autorização automática, envio de guias e controle de glosas, simplificando toda a gestão de convênios."
    },
    {
      question: "Posso acessar os prontuários de qualquer lugar?",
      answer: "Sim, o sistema é 100% web e permite acesso seguro aos prontuários de qualquer dispositivo com internet, sempre respeitando os níveis de acesso configurados."
    },
    {
      question: "O sistema possui agenda online para pacientes?",
      answer: "Sim, oferecemos agenda online integrada onde pacientes podem agendar consultas em horários disponíveis, com confirmação automática e lembretes."
    },
    {
      question: "Como é feita a assinatura digital das receitas?",
      answer: "Utilizamos certificado digital A1 ou A3 para assinatura eletrônica das receitas, que podem ser enviadas diretamente para farmácias credenciadas."
    },
    {
      question: "O sistema gera relatórios para o CRM médico?",
      answer: "Sim, geramos todos os relatórios exigidos pelos conselhos regionais, incluindo estatísticas de atendimento e dados para fiscalizações."
    },
    {
      question: "Posso anexar imagens e exames aos prontuários?",
      answer: "Sim, o sistema permite anexar imagens, exames, radiografias e qualquer tipo de documento aos prontuários, com visualização integrada."
    },
    {
      question: "Como funciona o controle de múltiplos profissionais?",
      answer: "Cada profissional tem sua agenda independente, controle de horários, comissões e relatórios individuais, com gestão centralizada pela clínica."
    },
    {
      question: "O sistema funciona para telemedicina?",
      answer: "Sim, temos módulo específico para consultas online com videochamada integrada, prontuário eletrônico e prescrição digital para telemedicina."
    },
    {
      question: "Como é garantida a segurança dos dados médicos?",
      answer: "Utilizamos criptografia de ponta, backups automatizados, controle de acesso rigoroso e total conformidade com LGPD e normas médicas de privacidade."
    }
  ];

  return (
    <ProductBase
      productName="DEVZ Clínicas"
      productSubtitle="ERP Completo para Gestão Médica"
      heroDescription="Sistema especializado para clínicas, consultórios e profissionais da saúde. Prontuário eletrônico, agendamento inteligente e gestão completa do atendimento médico."
      category="ERP Médico"
      features={features}
      benefits={benefits}
      useCases={useCases}
      faqs={faqs}
      ctaTitle="Modernize sua clínica com o DEVZ Clínicas"
      ctaDescription="Mais de 300 clínicas já transformaram seu atendimento e aumentaram a eficiência com nossa solução médica."
    />
  );
}

export default DevzClinicas;