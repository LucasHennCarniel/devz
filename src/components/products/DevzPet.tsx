import { ProductBase } from '../ProductBase';
import { 
  Heart, 
  Calendar, 
  FileText, 
  Pill, 
  CreditCard, 
  BarChart3,
  Stethoscope,
  Package,
  Users,
  Smartphone,
  AlertTriangle,
  Camera
} from 'lucide-react';

function DevzPet() {
  const features = [
    {
      title: "Prontuário Eletrônico",
      description: "Ficha completa do paciente com histórico médico, vacinas, exames e tratamentos realizados.",
      icon: FileText
    },
    {
      title: "Agendamento Veterinário",
      description: "Sistema de agendamento para consultas, cirurgias e retornos com controle de veterinários.",
      icon: Calendar
    },
    {
      title: "Controle de Medicamentos",
      description: "Gestão de estoque farmacêutico com controle de lotes, validades e prescrições médicas.",
      icon: Pill
    },
    {
      title: "Gestão de Clientes e Pets",
      description: "Cadastro completo de tutores e seus pets com fotos, características e informações importantes.",
      icon: Heart
    },
    {
      title: "Controle Financeiro",
      description: "Gestão de consultas, procedimentos, vendas de produtos e planos de saúde pet.",
      icon: CreditCard
    },
    {
      title: "Estoque Integrado",
      description: "Controle de medicamentos, rações, acessórios e produtos veterinários.",
      icon: Package
    },
    {
      title: "Relatórios Clínicos",
      description: "Dashboards com estatísticas de atendimentos, receita e indicadores de saúde.",
      icon: BarChart3
    },
    {
      title: "Prescrições Digitais",
      description: "Emissão de receitas eletrônicas com assinatura digital e controle de medicamentos.",
      icon: Stethoscope
    },
    {
      title: "App para Tutores",
      description: "Aplicativo para tutores acompanharem a saúde do pet e agendarem consultas.",
      icon: Smartphone
    }
  ];

  const benefits = [
    {
      title: "Melhoria de 60% no Atendimento",
      description: "Prontuário digital permite acesso rápido ao histórico completo do paciente."
    },
    {
      title: "Redução de 40% nos Erros Médicos",
      description: "Alertas automáticos para alergias, medicações e histórico médico crítico."
    },
    {
      title: "Controle Total do Estoque",
      description: "Gestão eficiente de medicamentos evita vencimentos e otimiza compras."
    },
    {
      title: "Fidelização de Clientes",
      description: "Lembretes de vacinas, consultas e cuidados especiais fortalecem o relacionamento."
    },
    {
      title: "Gestão Profissional",
      description: "Relatórios detalhados para análise de performance e crescimento da clínica."
    },
    {
      title: "Conformidade Legal",
      description: "Atende às exigências do CFMV para prontuários e prescrições veterinárias."
    }
  ];

  const useCases = [
    {
      title: "Clínica Veterinária",
      description: "Gestão completa com prontuários, agendamento, cirurgias e internações.",
      industry: "Veterinária"
    },
    {
      title: "Pet Shop",
      description: "Controle de vendas, estoque de produtos e serviços como banho e tosa.",
      industry: "Varejo Pet"
    },
    {
      title: "Hospital Veterinário",
      description: "Sistema robusto para emergências, internações e procedimentos complexos.",
      industry: "Hospitalar"
    },
    {
      title: "Consultório Veterinário",
      description: "Solução simplificada para veterinários autônomos e pequenas clínicas.",
      industry: "Consultório"
    },
    {
      title: "Clínica de Especialidades",
      description: "Gestão especializada para cardiologia, oftalmologia e outras especialidades veterinárias.",
      industry: "Especialidades"
    },
    {
      title: "Centro de Zoonoses",
      description: "Controle de campanhas de vacinação, castração e atendimentos públicos.",
      industry: "Público"
    }
  ];

  const faqs = [
    {
      question: "O sistema atende às normas do CFMV?",
      answer: "Sim, o DEVZ Pet foi desenvolvido seguindo todas as diretrizes do Conselho Federal de Medicina Veterinária para prontuários e prescrições eletrônicas."
    },
    {
      question: "Como funciona o controle de medicamentos controlados?",
      answer: "O sistema possui módulo específico para medicamentos controlados com rastreabilidade completa, relatórios para vigilância sanitária e controle de prescrições."
    },
    {
      question: "Posso acessar o prontuário de qualquer lugar?",
      answer: "Sim, sendo 100% web, você pode acessar os prontuários de qualquer dispositivo com internet, mantendo a segurança e privacidade dos dados."
    },
    {
      question: "O sistema controla planos de saúde pet?",
      answer: "Sim, há integração com principais planos de saúde pet do mercado, com controle de autorizações e faturamento automático."
    },
    {
      question: "Como funciona o agendamento para emergências?",
      answer: "O sistema permite encaixe de emergências, priorizando por gravidade e alertando a equipe médica automaticamente."
    },
    {
      question: "Posso cadastrar múltiplos pets por tutor?",
      answer: "Sim, cada tutor pode ter vários pets cadastrados com prontuários individuais e histórico familiar compartilhado quando relevante."
    },
    {
      question: "O sistema gera receitas com validade legal?",
      answer: "Sim, as prescrições são geradas com assinatura digital certificada e atendem à legislação veterinária vigente."
    },
    {
      question: "Como é feito o controle de vacinas?",
      answer: "Carteira de vacinação digital com alertas automáticos de reforços, histórico completo e relatórios de cobertura vacinal."
    },
    {
      question: "Posso integrar com laboratórios?",
      answer: "Sim, temos integrações com principais laboratórios veterinários para envio de exames e recebimento de resultados automaticamente."
    },
    {
      question: "O sistema funciona para atendimento domiciliar?",
      answer: "Sim, há módulo específico para veterinários que fazem atendimento domiciliar com app mobile offline e sincronização automática."
    }
  ];

  return (
    <ProductBase
      productName="DEVZ Pet"
      productSubtitle="Sistema Completo para Clínicas Veterinárias"
      heroDescription="Solução especializada para clínicas veterinárias, pet shops e hospitais com prontuário eletrônico, controle farmacêutico e gestão completa do atendimento pet."
      category="Veterinária"
      features={features}
      benefits={benefits}
      useCases={useCases}
      faqs={faqs}
      ctaTitle="Cuide melhor dos pets com o DEVZ Pet"
      ctaDescription="Junte-se a centenas de veterinários que já modernizaram seus atendimentos e melhoraram a qualidade do cuidado pet."
      primaryColor="#ffd45c"
    />
  );
}

export default DevzPet;
