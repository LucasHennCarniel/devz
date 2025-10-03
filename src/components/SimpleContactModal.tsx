import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

interface SimpleContactModalProps {
  /** Texto do botão que abre o modal */
  triggerText?: string;
  /** Classe CSS adicional para o botão trigger */
  triggerClassName?: string;
  /** Se true, usa classe com margem superior (para página de contato) */
  useOffset?: boolean;
}

/**
 * Modal de contato simples - Passo 1 da implementação
 * Apenas um modal básico para testar se funciona
 */
export function SimpleContactModal({
  triggerText = "RECEBA UMA DEMONSTRAÇÃO",
  triggerClassName = "",
  useOffset = false
}: SimpleContactModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simula envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Fecha o modal após 2 segundos
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  return (
    <>
      <button 
        onClick={handleButtonClick}
        className={`${triggerClassName} font-medium rounded-md transition-colors inline-flex items-center justify-center`}
      >
        {triggerText}
      </button>

      {isOpen && (
        <>
          {/* Overlay escuro que cobre toda a tela */}
          <div 
            className="contact-modal-overlay"
            onClick={handleClose}
          />
          
          {/* Modal centralizado */}
          <div className={useOffset ? "contact-modal-content-offset" : "contact-modal-content"}>
            {isSubmitted ? (
              // Tela de sucesso
              <div className="p-4 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2">
                  Mensagem enviada com sucesso!
                </h2>
                <p className="text-sm sm:text-base text-gray-600 px-2">
                  Entraremos em contato em até 2 horas. Obrigado!
                </p>
              </div>
            ) : (
              <>
                {/* Header do Modal */}
                <div className="flex items-start justify-between p-4 sm:p-6 border-b border-gray-300">
                  <h2 className="text-sm sm:text-base font-semibold text-gray-900 pr-3 leading-tight">
                    Preencha o formulário e um dos nossos consultores entrará em contato!
                  </h2>
                  <button
                    onClick={handleClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0 p"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
                  </button>
                </div>

                {/* Formulário */}
                <form onSubmit={handleSubmit} className="p-4 sm:p-6 contact-modal-form">
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        disabled={isSubmitting}
                        className="w-full px-3 sm:px-5 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31496e] focus:border-[#31496e] disabled:bg-gray-50 p-2"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        disabled={isSubmitting}
                        className="w-full px-3 sm:px-5 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31496e] focus:border-[#31496e] disabled:bg-gray-50 p-2" 
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        disabled={isSubmitting}
                        className="w-full px-3 sm:px-5 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31496e] focus:border-[#31496e] disabled:bg-gray-50 p-2"
                        placeholder="(11) 99999-9999"
                      />
                    </div>

                    <div>
                      <label htmlFor="cargo" className="block text-sm font-medium text-gray-700 mb-2">
                        Cargo
                      </label>
                      <select
                        id="cargo"
                        name="cargo"
                        disabled={isSubmitting}
                        className="w-full px-3 sm:px-5 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31496e] focus:border-[#31496e] disabled:bg-gray-50 p-2"
                      >
                        <option value="">Selecione...</option>
                        <option value="Sócio(a) / CEO / Proprietário(a)">Sócio(a) / CEO / Proprietário(a)</option>
                        <option value="Diretor(a)">Diretor(a)</option>
                        <option value="Gerente">Gerente</option>
                        <option value="Coordenador(a)">Coordenador(a)</option>
                        <option value="Supervisor(a)">Supervisor(a)</option>
                        <option value="Analista">Analista</option>
                        <option value="Assistente">Assistente</option>
                        <option value="Consultor(a)">Consultor(a)</option>
                        <option value="Freelancer">Freelancer</option>
                        <option value="Estudante">Estudante</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        disabled={isSubmitting}
                        className="w-full px-3 sm:px-5 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31496e] focus:border-[#31496e] disabled:bg-gray-50 p-2"
                        placeholder="Nome da sua empresa"
                      />
                    </div>

                    <div>
                      <label htmlFor="tamanho" className="block text-sm font-medium text-gray-700 mb-2">
                        Tamanho da Empresa
                      </label>
                      <select
                        id="tamanho"
                        name="tamanho"
                        disabled={isSubmitting}
                        className="w-full px-3 sm:px-5 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31496e] focus:border-[#31496e] disabled:bg-gray-50 p-2"
                      >
                        <option value="">Selecione...</option>
                        <option value="Microempresa (1-9 funcionários)">Microempresa (1-9 funcionários)</option>
                        <option value="Pequena empresa (10-49 funcionários)">Pequena empresa (10-49 funcionários)</option>
                        <option value="Média empresa (50-249 funcionários)">Média empresa (50-249 funcionários)</option>
                        <option value="Grande empresa (250+ funcionários)">Grande empresa (250+ funcionários)</option>
                        <option value="Pessoa Física / MEI">Pessoa Física / MEI</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="site" className="block text-sm font-medium text-gray-700 mb-2">
                        Site da Empresa
                      </label>
                      <input
                        type="url"
                        id="site"
                        name="site"
                        disabled={isSubmitting}
                        className="w-full px-3 sm:px-5 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31496e] focus:border-[#31496e] disabled:bg-gray-50 p-2"
                        placeholder="www.suaempresa.com.br"
                      />
                    </div>

                    <div>
                      <label htmlFor="estado" className="block text-sm font-medium text-gray-700 mb-2">
                        Estado
                      </label>
                      <select
                        id="estado"
                        name="estado"
                        disabled={isSubmitting}
                        className="w-full px-3 sm:px-5 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31496e] focus:border-[#31496e] disabled:bg-gray-50 p-2"
                      >
                        <option value="">Selecione...</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                      </select>
                    </div>

                     <div className="mb-6">
                       <label htmlFor="segmento" className="block text-sm font-medium text-gray-700 mb-2">
                         Segmento da Empresa
                       </label>
                       <select
                         id="segmento"
                         name="segmento"
                         disabled={isSubmitting}
                         className="w-full px-3 sm:px-5 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31496e] focus:border-[#31496e] disabled:bg-gray-50 p-2"
                       >
                        <option value="">Selecione...</option>
                        <option value="Agronegócio">Agronegócio</option>
                        <option value="Alimentação e Bebidas">Alimentação e Bebidas</option>
                        <option value="Automobilístico">Automobilístico</option>
                        <option value="Construção Civil">Construção Civil</option>
                        <option value="Consultoria">Consultoria</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Educação">Educação</option>
                        <option value="Energia">Energia</option>
                        <option value="Entretenimento">Entretenimento</option>
                        <option value="Farmacêutico">Farmacêutico</option>
                        <option value="Financeiro">Financeiro</option>
                        <option value="Governo">Governo</option>
                        <option value="Imobiliário">Imobiliário</option>
                        <option value="Indústria">Indústria</option>
                        <option value="Logística e Transporte">Logística e Transporte</option>
                        <option value="Mídia e Comunicação">Mídia e Comunicação</option>
                        <option value="Petróleo e Gás">Petróleo e Gás</option>
                        <option value="Recursos Humanos">Recursos Humanos</option>
                        <option value="Saúde">Saúde</option>
                        <option value="Segurança">Segurança</option>
                        <option value="Serviços">Serviços</option>
                        <option value="Software e Cloud">Software e Cloud</option>
                        <option value="Tecnologia">Tecnologia</option>
                        <option value="Telecomunicações">Telecomunicações</option>
                        <option value="Turismo">Turismo</option>
                        <option value="Varejo">Varejo</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 sm:mt-6 bg-devz-primary text-white font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-md transition-colors flex items-center justify-center cursor-pointer p-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-2 sm:mt-3 px-2">
                    Ao informar meus dados, eu concordo com a{' '}
                    <a href="#" className="text-[#31496e] hover:underline">
                      Política de Privacidade
                    </a>
                  </p>
                </form>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default SimpleContactModal;
