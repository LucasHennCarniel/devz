import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { ArrowRight, Phone, Mail, MessageSquare, Clock, CheckCircle } from 'lucide-react';

export function FinalCTA() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada! Entraremos em contato em até 2 horas.');
  };

  const contactMethods = [
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      value: '(11) 99999-9999',
      description: 'Resposta em até 5 minutos'
    },
    {
      icon: Phone,
      title: 'Telefone',
      value: '(11) 3333-4444',
      description: 'Seg-Sex: 8h às 18h'
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'contato@devz.com.br',
      description: 'Resposta em até 2 horas'
    }
  ];

  const process = [
    'Analisamos seu negócio (gratuito)',
    'Apresentamos a solução ideal',
    'Implementamos em semanas',
    'Acompanhamos seus resultados'
  ];

  return (
    <section id="contato" className="py-16 md:py-24 bg-[#F5F6F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Vamos começar sua transformação digital?
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg">
            Converse conosco agora e descubra como podemos automatizar seus processos, 
            integrar seus sistemas e acelerar seus resultados.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">Atendimento online agora</span>
                </div>
                
                <h3 className="text-gray-900 mb-6">
                  Solicitar Consultoria Gratuita
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome completo *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Seu nome"
                        required
                        className="border-gray-300 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa *</Label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Nome da empresa"
                        required
                        className="border-gray-300 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        className="border-gray-300 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">WhatsApp</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        className="border-gray-300 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Conte sobre seu negócio</Label>
                    <Textarea
                      id="message"
                      placeholder="Qual seu segmento? Quais são seus principais desafios? O que você gostaria de automatizar?"
                      rows={4}
                      className="border-gray-300 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white py-4 text-lg"
                  >
                    Solicitar Consultoria Gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>

                {/* Process Steps */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-gray-900 mb-4">
                    Como funciona nossa consultoria:
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {process.map((step, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#1E40AF] text-white rounded-full flex items-center justify-center text-sm">
                          {index + 1}
                        </div>
                        <span className="text-sm text-gray-600">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Benefits */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div>
              <h3 className="text-gray-900 mb-6">
                Prefere falar diretamente?
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <Card key={index} className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-[#1E40AF]" />
                          </div>
                          <div className="flex-1">
                            <div className="text-gray-900 mb-1">
                              {method.title}
                            </div>
                            <div className="text-[#1E40AF]">
                              {method.value}
                            </div>
                            <div className="text-sm text-gray-500">
                              {method.description}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Guarantees */}
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6">
                <h4 className="text-gray-900 mb-4">
                  Nossos compromissos:
                </h4>
                <div className="space-y-3">
                  {[
                    'Consultoria 100% gratuita',
                    'Resposta em até 2 horas',
                    'Sem compromisso de compra',
                    'Análise detalhada do seu negócio'
                  ].map((guarantee, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">{guarantee}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Urgency */}
            <div className="bg-[#1E40AF] text-white rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6" />
                <h4 className="text-white">
                  Limitado a 10 consultorias por mês
                </h4>
              </div>
              <p className="text-white/90 text-sm">
                Para garantir a qualidade do atendimento, oferecemos apenas 
                10 consultorias gratuitas por mês. Entre em contato agora e 
                garante sua vaga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}