import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, Phone, Mail, MessageSquare, Clock, CheckCircle, Users, Upload, Send, ChevronDown } from 'lucide-react';
import { SimpleContactModal } from './SimpleContactModal';

export function FinalCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    telefone: '',
    arquivo: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'arquivo' ? (files ? files[0] : null) : value
    }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simula envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset após 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ email: '', telefone: '', arquivo: null });
      setIsDropdownOpen(false);
    }, 3000);
  };


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };



  const contactMethods = [
    {
      icon: MessageSquare,
      title: 'WhatsApp Suporte',
      value: '(11) 99999-9999',
      description: 'Resposta em até 5 minutos'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Comercial',
      value: '(11) 88888-8888',
      description: 'Resposta em até 5 minutos'
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'contato@devz.com.br',
      description: 'Resposta em até 2 horas'
    },
    {
      icon: Mail,
      title: 'E-mail Comercial',
      value: 'comercial@devz.com.br',
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
    <section id="contato" className="py-16 md:py-24 bg-gradient-to-br from-[#31496e] to-[#31496e]/80 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/3 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Vamos começar sua transformação digital?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Converse conosco agora e descubra como podemos automatizar seus processos, 
            integrar seus sistemas e acelerar seus resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 p-12">   
          {/* Contact Info & Benefits */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div>
              <h3 className="text-gray-900 mb-6">
                Prefere falar diretamente?
              </h3>
              <div className="space-y-4">
                {/* WhatsApp Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {contactMethods.filter(method => method.title.includes('WhatsApp')).map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <Card key={index} className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-devz-primary/10 rounded-lg flex items-center justify-center">
                              <IconComponent className="w-6 h-6 text-devz-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="text-gray-900 mb-1">
                                {method.title}
                              </div>
                              <div className="text-[#31496e]">
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

                {/* Email Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {contactMethods.filter(method => method.title.includes('E-mail')).map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <Card key={index} className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-devz-primary/10 rounded-lg flex items-center justify-center">
                              <IconComponent className="w-6 h-6 text-devz-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="text-gray-900 mb-1">
                                {method.title}
                              </div>
                              <div className="text-[#31496e]">
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
            </div>


            {/* Trabalhe Conosco */}
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6">
                {/* Header do Dropdown */}
                <div 
                  className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
                  onClick={toggleDropdown}
                >
                  <div className="w-12 h-12 bg-devz-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-devz-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-900 mb-1">
                      Trabalhe Conosco
                    </div>
                    <div className="text-[#31496e] mb-2">
                      Faça parte da nossa equipe
                    </div>
                    <div className="text-sm text-gray-500">
                      Envie seu currículo e venha crescer conosco
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {isDropdownOpen ? (
                      <ChevronDown className="w-5 h-5 text-gray-400 rotate-180" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>

                {/* Conteúdo do Dropdown */}
                {isDropdownOpen && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    {isSubmitted ? (
                      <div className="text-center py-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          Currículo enviado com sucesso!
                        </h4>
                        <p className="text-sm text-gray-600">
                          Entraremos em contato em breve. Obrigado!
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            E-mail
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            disabled={isSubmitting}
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-devz-primary focus:border-devz-primary disabled:bg-gray-50"
                            placeholder="seu@email.com"
                          />
                        </div>

                        {/* Telefone */}
                        <div>
                          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                            Telefone
                          </label>
                          <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleInputChange}
                            required
                            disabled={isSubmitting}
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-devz-primary focus:border-devz-primary disabled:bg-gray-50"
                            placeholder="(11) 99999-9999"
                          />
                        </div>

                        {/* Upload de Arquivo */}
                        <div>
                          <label htmlFor="arquivo" className="block text-sm font-medium text-gray-700 mb-2">
                            Currículo (PDF, DOC, DOCX)
                          </label>
                          <div className="relative">
                            <input
                              type="file"
                              id="arquivo"
                              name="arquivo"
                              onChange={handleInputChange}
                              accept=".pdf,.doc,.docx"
                              required
                              disabled={isSubmitting}
                              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-devz-primary focus:border-devz-primary disabled:bg-gray-50 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-devz-primary/10 file:text-devz-primary hover:file:bg-devz-primary/20"
                            />
                            {formData.arquivo && (
                              <div className="mt-2 text-xs text-gray-600 flex items-center gap-1">
                                <Upload className="w-3 h-3" />
                                {formData.arquivo.name}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Botão de Envio */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full mt-4 bg-devz-primary hover:bg-devz-primary-dark text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                              Enviando...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Enviar Currículo
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

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
            <div className="bg-white/10 backdrop-blur-sm  text-green-500 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6" />
                <h4 className="text-gray-600">
                  Limitado a 10 consultorias por mês
                </h4>
              </div>
              <p className="text-gray-600 text-sm">
                Para garantir a qualidade do atendimento, oferecemos apenas
                10 consultorias gratuitas por mês. Entre em contato agora e
                garanta sua vaga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
