import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock
} from 'lucide-react';
import { SimpleContactModal } from './SimpleContactModal';

function Contact() {

  const contactMethods = [
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      description: 'Resposta em até 5 minutos',
      value: '(11) 99999-9999',
      action: 'Chamar no WhatsApp'
    },
    {
      icon: Phone,
      title: 'Telefone',
      description: 'Seg-Sex: 8h às 18h',
      value: '(11) 3333-4444',
      action: 'Ligar agora'
    },
    {
      icon: Mail,
      title: 'E-mail',
      description: 'Resposta em até 2 horas',
      value: 'contato@devz.com.br',
      action: 'Enviar e-mail'
    }
  ];

  const businessHours = [
    { day: 'Segunda a Sexta:', hours: '8h às 18h' },
    { day: 'Sábado:', hours: '8h às 12h' },
    { day: 'Domingo:', hours: 'Fechado' }
  ];

  return (
    <section id="contato" className="py-16 md:py-24 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fale com Nossos Especialistas
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto">
            Tire suas dúvidas, agende uma demonstração ou solicite um orçamento personalizado para sua empresa
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border border-gray-100 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-devz-accent rounded-full"></div>
                  <h3 className="text-gray-900 text-xl font-semibold">
                    Receba uma Demonstração Gratuita
                  </h3>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-600 mb-8">
                    Clique no botão abaixo para receber uma demonstração personalizada e descobrir como podemos transformar seu negócio.
                  </p>
                  
                  <SimpleContactModal
                    triggerText="Solicitar Demonstração"
                    triggerClassName="
                      w-full 
                      bg-devz-primary 
                      hover:bg-devz-primary-dark 
                      text-white 
                      font-medium 
                      py-3 
                      px-6 
                      h-10 
                      whitespace-nowrap
                    "
                    useOffset={true}
                  />
                </div>

                {/* Como funciona nossa consultoria */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Como funciona nossa consultoria:
                  </h4>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-devz-accent rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <span className="text-sm text-gray-600">Analisamos seu negócio (gratuito)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-devz-accent rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <span className="text-sm text-gray-600">Implementamos em semanas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-devz-accent rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <span className="text-sm text-gray-600">Apresentamos a solução ideal</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-devz-accent rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">4</span>
                      </div>
                      <span className="text-sm text-gray-600">Acompanhamos seus resultados</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    Ou entre em contato pelos nossos canais diretos abaixo
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Methods & Info */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="space-y-4">
              <h3 className="text-gray-900 text-lg font-semibold">
                Prefere falar diretamente?
              </h3>
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-5 w-5 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-gray-900">
                            {method.title}
                          </h4>
                          <p className="text-sm text-gray-500 mb-1">
                            {method.description}
                          </p>
                          <p className="text-sm text-[#31496E]">
                            {method.value}
                          </p>
                          <button className="text-xs text-gray-400 hover:text-[#31496E] transition-colors mt-2">
                            {method.action} →
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Nossos Compromissos */}
            <Card className="border border-gray-100 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Nossos compromissos:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-devz-accent rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-gray-600">Consultoria 100% gratuita</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-devz-accent rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-gray-600">Resposta em até 2 horas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-devz-accent rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-gray-600">Sem compromisso de compra</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-devz-accent rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-gray-600">Análise detalhada do seu negócio</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="border border-gray-100 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-3">
                      Nosso Endereço
                    </h4>
                    <address className="text-sm text-gray-500 not-italic leading-relaxed">
                      Av. Paulista, 1000<br />
                      Sala 1501 - Bela Vista<br />
                      São Paulo - SP<br />
                      CEP: 01310-100
                    </address>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <h4 className="text-gray-900 mb-2">
                Demonstração Gratuita
              </h4>
              <p className="text-gray-500 text-sm mb-4">
                Agende uma demonstração personalizada e veja o Devz em ação
              </p>
              <button 
                className="bg-devz-primary hover:bg-devz-primary-dark text-white rounded-md inline-flex items-center justify-center font-medium px-4 py-2 transition-colors"
              >
                Agendar Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;