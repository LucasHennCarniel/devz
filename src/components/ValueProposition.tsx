import { Card, CardContent } from './ui/card';
import { Check, Zap, Shield, Clock, TrendingUp } from 'lucide-react';

export function ValueProposition() {
  const benefits = [
    {
      icon: Zap,
      title: 'Automação Total',
      description: 'Elimine 85% do trabalho manual com robôs inteligentes que processam documentos e geram relatórios automaticamente.',
      value: '85% menos trabalho manual'
    },
    {
      icon: TrendingUp,
      title: 'Insights Estratégicos',
      description: 'Dashboards em Power BI que transformam seus dados em decisões inteligentes e oportunidades de crescimento.',
      value: 'Decisões baseadas em dados'
    },
    {
      icon: Shield,
      title: 'Compliance Garantido',
      description: 'Integração automática com e-Social, SPED e órgãos fiscais. Mantenha-se sempre em conformidade.',
      value: '100% compliance fiscal'
    },
    {
      icon: Clock,
      title: 'Implementação Rápida',
      description: 'Do diagnóstico à operação completa em semanas, não meses. Veja resultados desde o primeiro dia.',
      value: 'ROI em 30 dias'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-6">
            Por que escolher a Devz?
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg">
            Não somos apenas mais uma empresa de software. Somos especialistas em transformação digital 
            que entregam resultados mensuráveis para seu negócio.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200 bg-gray-50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#1E40AF]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-[#1E40AF]" />
                  </div>
                  
                  <h3 className="text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {benefit.description}
                  </p>

                  <div className="inline-flex items-center gap-2 bg-[#1E40AF]/10 px-4 py-2 rounded-full">
                    <Check className="w-4 h-4 text-[#1E40AF]" />
                    <span className="text-sm text-[#1E40AF]">{benefit.value}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="text-center bg-[#F5F6F7] rounded-lg p-8">
          <h3 className="text-gray-900 mb-4">
            Tecnologia que gera resultados reais
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Nossos clientes relatam em média <strong className="text-gray-900">30% de redução de custos operacionais</strong> e 
            <strong className="text-gray-900"> 50% de aumento na produtividade</strong> nos primeiros 6 meses.
          </p>
        </div>
      </div>
    </section>
  );
}