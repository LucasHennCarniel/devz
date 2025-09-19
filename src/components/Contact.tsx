import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock,
  Send
} from 'lucide-react';

function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    alert('Mensagem enviada! Entraremos em contato em breve.');
  };

  const contactMethods = [
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      description: 'Resposta rápida',
      value: '(11) 99999-9999',
      action: 'Chamar no WhatsApp'
    },
    {
      icon: Mail,
      title: 'E-mail',
      description: 'Suporte técnico',
      value: 'contato@devz.com.br',
      action: 'Enviar e-mail'
    },
    {
      icon: Phone,
      title: 'Telefone',
      description: 'Atendimento comercial',
      value: '(11) 3333-4444',
      action: 'Ligar agora'
    }
  ];

  const businessHours = [
    { day: 'Segunda a Sexta:', hours: '8h às 18h' },
    { day: 'Sábado:', hours: '8h às 12h' },
    { day: 'Domingo:', hours: 'Fechado' }
  ];

  return (
    <section id="contato" className="py-16 md:py-24 bg-gray-50">
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
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-gray-900 mb-6">
                  Solicitar Demonstração
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome completo</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Seu nome"
                        required
                        className="border-gray-300 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
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
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        className="border-gray-300 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        className="border-gray-300 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Conte-nos sobre suas necessidades e como podemos ajudar..."
                      rows={5}
                      required
                      className="border-gray-300 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white py-3 rounded-md inline-flex items-center justify-center font-medium"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-200">
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
              <h3 className="text-gray-900">
                Canais de Atendimento
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
                          <p className="text-sm text-[#1E40AF]">
                            {method.value}
                          </p>
                          <button className="text-xs text-gray-400 hover:text-[#1E40AF] transition-colors mt-2">
                            {method.action} →
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Business Hours */}
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-3">
                      Horário de Atendimento
                    </h4>
                    <div className="space-y-2 text-sm">
                      {businessHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-gray-500">{schedule.day}</span>
                          <span className="text-gray-900">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="border border-gray-200 shadow-sm">
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
                className="bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white rounded-md inline-flex items-center justify-center font-medium px-4 py-2"
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