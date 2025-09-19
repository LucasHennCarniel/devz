import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  FileText, 
  BarChart3, 
  Users, 
  Brain, 
  Code, 
  ArrowRight,
  CheckCircle,
  Clock,
  TrendingUp
} from 'lucide-react';

function Automation() {
  const automationFeatures = [
    {
      icon: FileText,
      title: 'Importação de XMLs de NFe',
      description: 'Processamento automático de notas fiscais eletrônicas com extração inteligente de dados',
      benefits: ['Reduz 90% do tempo manual', 'Zero erros de digitação', 'Classificação automática']
    },
    {
      icon: BarChart3,
      title: 'Relatórios Contábeis Automatizados',
      description: 'Geração automática de relatórios fiscais e contábeis com base nos dados do sistema',
      benefits: ['DRE automático', 'Balancetes mensais', 'Análises financeiras']
    },
    {
      icon: Users,
      title: 'Integração e-Social e SPED',
      description: 'Envio automático de informações para órgãos governamentais com validação prévia',
      benefits: ['Conformidade garantida', 'Envios automáticos', 'Validação prévia']
    },
    {
      icon: Brain,
      title: 'Classificação Inteligente com IA',
      description: 'Algoritmos de machine learning para classificação automática de documentos e transações',
      benefits: ['Aprendizado contínuo', 'Precisão crescente', 'Redução de retrabalho']
    }
  ];

  const pythonScripts = [
    {
      name: 'Conciliação Bancária',
      description: 'Script que concilia automaticamente extratos bancários com lançamentos do sistema',
      time: '5min',
      frequency: 'Diário'
    },
    {
      name: 'Análise de Inadimplência',
      description: 'Identifica padrões de inadimplência e sugere ações preventivas',
      time: '10min',
      frequency: 'Semanal'
    },
    {
      name: 'Relatório de Margem',
      description: 'Calcula margens de lucro por produto e categoria automaticamente',
      time: '3min',
      frequency: 'Diário'
    }
  ];

  const benefits = [
    'Processamento de milhares de documentos em minutos',
    'Classificação automática com aprendizado contínuo',
    'Integração completa com sistemas governamentais',
    'Relatórios gerados automaticamente'
  ];

  const stats = [
    { value: '85%', label: 'Redução de tempo' },
    { value: '99.9%', label: 'Precisão dos dados' },
    { value: '24/7', label: 'Funcionamento' }
  ];

  return (
    <section id="automacao" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Automação Contábil com <span className="text-[#1E40AF]">Python & IA</span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto">
            Transforme processos manuais em automações inteligentes e ganhe tempo para focar no que realmente importa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-gray-900">
                Inteligência Artificial a Serviço da sua Contabilidade
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Nossa plataforma utiliza Python e algoritmos de Machine Learning para automatizar 
                processos contábeis complexos, reduzindo erros e aumentando a eficiência.
              </p>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#1E40AF] flex-shrink-0" />
                  <span className="text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1667372531881-6f975b1c86db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTgwMjU3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Código Python para automação contábil"
              className="w-full h-96 object-cover rounded-lg shadow-sm border border-gray-200"
            />
          </div>
        </div>

        {/* Automation Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {automationFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-gray-600" />
                    </div>
                    <h3 className="text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full flex-shrink-0"></div>
                        <span className="text-xs text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Python Scripts Examples */}
        <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <Code className="h-6 w-6 text-[#1E40AF]" />
            <h3 className="text-gray-900">
              Scripts Python em Ação
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pythonScripts.map((script, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors duration-200">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-gray-900">{script.name}</h4>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Clock className="h-3 w-3" />
                    <span>{script.time}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-4">
                  {script.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-[#1E40AF]" />
                    <span className="text-xs text-gray-500">{script.frequency}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Automation;