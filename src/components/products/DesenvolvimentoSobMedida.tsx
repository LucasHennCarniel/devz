import React from 'react';
import { ProductBase } from '../ProductBase';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Cog, 
  Shield,
  Zap,
  Users,
  Puzzle,
  Rocket,
  Target,
  Wrench
} from 'lucide-react';

/**
 * Componente da página Desenvolvimento Sob Medida
 * Apresenta soluções de desenvolvimento personalizado e sistemas customizados
 */
function DesenvolvimentoSobMedida() {
  const features = [
    {
      title: "Desenvolvimento Web",
      description: "Sistemas web personalizados com tecnologias modernas, responsivos e otimizados para performance.",
      icon: Globe
    },
    {
      title: "Aplicativos Mobile",
      description: "Apps nativos e híbridos para iOS e Android, com integração completa aos seus sistemas.",
      icon: Smartphone
    },
    {
      title: "APIs e Integrações",
      description: "Desenvolvimento de APIs REST, integrações entre sistemas e automação de processos.",
      icon: Code
    },
    {
      title: "Banco de Dados",
      description: "Modelagem e otimização de bancos de dados para alta performance e escalabilidade.",
      icon: Database
    },
    {
      title: "Automação de Processos",
      description: "Automatização de workflows, tarefas repetitivas e processos de negócio complexos.",
      icon: Cog
    },
    {
      title: "Segurança Avançada",
      description: "Implementação de protocolos de segurança, autenticação e proteção de dados sensíveis.",
      icon: Shield
    },
    {
      title: "Performance Otimizada",
      description: "Código otimizado, cache inteligente e arquitetura escalável para máxima performance.",
      icon: Zap
    },
    {
      title: "Interface Intuitiva",
      description: "Design centrado no usuário com interfaces modernas, intuitivas e acessíveis.",
      icon: Users
    },
    {
      title: "Arquitetura Modular",
      description: "Sistemas modulares que crescem com seu negócio, facilitando manutenção e expansão.",
      icon: Puzzle
    }
  ];

  const benefits = [
    {
      title: "Solução 100% Personalizada",
      description: "Sistema desenvolvido especificamente para suas necessidades, sem limitações de softwares prontos."
    },
    {
      title: "Vantagem Competitiva",
      description: "Processos únicos e otimizados que diferenciam sua empresa no mercado."
    },
    {
      title: "Escalabilidade Ilimitada",
      description: "Arquitetura preparada para crescer junto com seu negócio sem limitações."
    },
    {
      title: "Integração Total",
      description: "Perfeita integração com sistemas existentes e futuras expansões."
    },
    {
      title: "Propriedade Intelectual",
      description: "Código-fonte e sistema são 100% seus, sem dependência de terceiros."
    },
    {
      title: "Suporte Especializado",
      description: "Equipe técnica que conhece profundamente seu sistema e negócio."
    }
  ];

  const useCases = [
    {
      title: "Sistema de Gestão Customizado",
      description: "ERP personalizado com módulos específicos para processos únicos da empresa.",
      industry: "Gestão"
    },
    {
      title: "Portal do Cliente",
      description: "Plataforma web para clientes com área restrita, pedidos online e acompanhamento.",
      industry: "Relacionamento"
    },
    {
      title: "App de Vendas Externas",
      description: "Aplicativo mobile para vendedores com catálogo, pedidos offline e sincronização.",
      industry: "Vendas"
    },
    {
      title: "Sistema de Agendamento",
      description: "Plataforma completa para agendamentos com calendário, notificações e pagamentos.",
      industry: "Serviços"
    },
    {
      title: "Marketplace Próprio",
      description: "Plataforma de vendas online com múltiplos vendedores, comissões e gestão completa.",
      industry: "E-commerce"
    },
    {
      title: "Sistema de Produção",
      description: "Controle de produção com rastreabilidade, qualidade e integração com equipamentos.",
      industry: "Indústria"
    }
  ];

  const faqs = [
    {
      question: "Qual é o processo de desenvolvimento?",
      answer: "Seguimos metodologia ágil: levantamento de requisitos, prototipagem, desenvolvimento iterativo, testes e homologação. Você acompanha cada etapa e pode sugerir ajustes."
    },
    {
      question: "Quanto tempo leva para desenvolver um sistema?",
      answer: "Varia conforme a complexidade: sistemas simples de 2-4 meses, médios de 4-8 meses e complexos de 8-18 meses. Fazemos cronograma detalhado após análise inicial."
    },
    {
      question: "Quais tecnologias vocês utilizam?",
      answer: "Trabalhamos com tecnologias modernas: React, Node.js, Python, .NET, PHP, bancos SQL/NoSQL, cloud computing (AWS, Azure) e mobile nativo/híbrido."
    },
    {
      question: "O código-fonte fica comigo?",
      answer: "Sim, você recebe todo o código-fonte, documentação técnica e tem propriedade intelectual completa sobre o sistema desenvolvido."
    },
    {
      question: "Vocês fazem manutenção após a entrega?",
      answer: "Oferecemos contratos de manutenção com correções, atualizações, melhorias e suporte técnico contínuo para garantir o funcionamento perfeito."
    },
    {
      question: "É possível integrar com sistemas existentes?",
      answer: "Absolutamente. Especializamo-nos em integrações complexas com ERPs, CRMs, APIs de terceiros, bancos de dados legados e qualquer sistema existente."
    },
    {
      question: "Como garantem a segurança do sistema?",
      answer: "Implementamos as melhores práticas: criptografia, autenticação segura, controle de acesso, auditoria, backup automático e conformidade com LGPD."
    },
    {
      question: "Posso fazer alterações no sistema depois?",
      answer: "Sim, desenvolvemos com arquitetura flexível que facilita futuras modificações. Podemos implementar novas funcionalidades conforme sua necessidade."
    },
    {
      question: "Vocês oferecem treinamento para a equipe?",
      answer: "Incluímos treinamento completo para usuários finais e administradores, além de documentação detalhada e manuais de uso."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "Trabalhamos com pagamento parcelado conforme cronograma: entrada, parcelas durante desenvolvimento e saldo final na entrega. Valores fixos sem surpresas."
    }
  ];

  return (
    <ProductBase
      productName="Desenvolvimento Sob Medida"
      productSubtitle="Soluções Personalizadas para seu Negócio"
      heroDescription="Desenvolvemos sistemas únicos e personalizados que se adaptam perfeitamente aos seus processos, oferecendo vantagem competitiva e eficiência máxima."
      category="Desenvolvimento Customizado"
      features={features}
      benefits={benefits}
      useCases={useCases}
      faqs={faqs}
      ctaTitle="Transforme sua ideia em realidade"
      ctaDescription="Desenvolva a solução perfeita para seu negócio com nossa equipe especializada."
    />
  );
}

export default DesenvolvimentoSobMedida;
