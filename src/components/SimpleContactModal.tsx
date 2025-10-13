import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { API_ENDPOINTS } from '../config/api';
import { Button } from './ui/button';

interface SimpleContactModalProps {
  triggerText?: string;
  triggerClassName?: string;
  useOffset?: boolean;
}

export function SimpleContactModal({
  triggerText = "RECEBA UMA DEMONSTRAÇÃO",
  triggerClassName = "",
  useOffset = false
}: SimpleContactModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = () => {
    console.log('🔔 Modal abrindo...');
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setIsSubmitted(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const dados = {
      nome: formData.get('nome') as string,
      email: formData.get('email') as string,
      telefone: formData.get('telefone') as string,
      cargo: formData.get('cargo') as string,
      empresa: formData.get('empresa') as string,
      tamanho: formData.get('tamanho') as string,
      site: formData.get('site') as string,
      estado: formData.get('estado') as string,
      segmento: formData.get('segmento') as string,
      servico: 'Demonstração',
      mensagem: `Solicitação de demonstração através do site.

Detalhes do contato:
- Cargo: ${formData.get('cargo') || 'Não informado'}
- Empresa: ${formData.get('empresa') || 'Não informada'}
- Tamanho da empresa: ${formData.get('tamanho') || 'Não informado'}
- Site: ${formData.get('site') || 'Não informado'}
- Estado: ${formData.get('estado') || 'Não informado'}
- Segmento: ${formData.get('segmento') || 'Não informado'}`
    };

    console.log('Enviando dados:', dados);
    console.log('URL da API:', API_ENDPOINTS.EMAIL);

    try {
      const response = await fetch(API_ENDPOINTS.EMAIL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados)
      });

      const result = await response.json();
      console.log('Resposta da API:', result);

      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          closeModal();
        }, 2500);
      } else {
        throw new Error(result.message || 'Erro ao enviar formulário');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao enviar formulário. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Estilos inline para garantir funcionamento
  const modalOverlayStyle = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
  };

  const modalContentStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '500px',
    maxHeight: '90vh',
    overflow: 'auto',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
    marginTop: '60px',
    position: 'relative' as const,
  };

  const inputStyle = {
    width: '100%',
    padding: '5px',
    border: '2px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    backgroundColor: 'white',
    color: 'black',
    boxSizing: 'border-box' as const,
  };

  const buttonStyle = {
    width: '100%',
    padding: '15px',
    backgroundColor: '#31496e',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  };

  return (
    <>
      <Button 
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          openModal();
        }}
        className={triggerClassName}
        type="button"
      >
        {triggerText}
      </Button>

      {isOpen && (
        <div style={modalOverlayStyle} onClick={closeModal}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            {isSubmitted ? (
              // Tela de sucesso
              <div className="p-4 sm:p-8 ">
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
                {/* Header */}
                <div className="flex items-start justify-between p-4 sm:p-6 border-b border-gray-300">
                  <h2 className="text-sm sm:text-base font-semibold text-gray-900 pr-3 leading-tight text-left">
                    Preencha o formulário e um dos nossos consultores entrará em contato!
                  </h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0 p"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
                  </button>
                </div>

                {/* Formulário */}
                <form onSubmit={handleSubmit} className="p-4 sm:p-6 contact-modal-form text-left">
                  <div className="space-y-3 sm:space-y-4">
                    
                    <div className="text-left">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                        Nome *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="nome"
                        required
                        disabled={isSubmitting}
                        placeholder="Seu Nome Completo"
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31496e] focus:border-[#31496e] disabled:bg-gray-50"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        disabled={isSubmitting}
                        placeholder="seu@email.com"
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31496e] focus:border-[#31496e] disabled:bg-gray-50"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <input
                        type="text"
                        id="telefone"
                        name="telefone"
                        disabled={isSubmitting}
                        placeholder="(11) 99999-9999"
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31496e] focus:border-[#31496e] disabled:bg-gray-50"
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
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31496e] focus:border-[#31496e] disabled:bg-gray-50"
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
                        placeholder="Nome da sua empresa"
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31496e] focus:border-[#31496e] disabled:bg-gray-50"
                      />
                    </div>

                    <div>
                      <label htmlFor="tamanho" className="block text-sm font-medium text-gray-700 mb-2">
                        Tamanho da Empresa
                      </label>
                      <select 
                        id="tamanho"
                        name="tamanho" 
                        disabled={isSubmitted} 
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31496e] focus:border-[#31496e] disabled:bg-gray-50"
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
                        type="text"
                        id="site"
                        name="site"
                        disabled={isSubmitting}
                        placeholder="www.suaempresa.com.br"
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31496e] focus:border-[#31496e] disabled:bg-gray-50"
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
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31496e] focus:border-[#31496e] disabled:bg-gray-50"
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

                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>
                        Segmento da Empresa
                      </label>
                      <select name="segmento" disabled={isSubmitting} style={inputStyle}>
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

                  <div style={{ marginTop: '20px' }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={buttonStyle}
                    >
                      {isSubmitting ? (
                        <>
                          <div style={{
                            width: '20px',
                            height: '20px',
                            border: '2px solid white',
                            borderTop: '2px solid transparent',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite'
                          }}></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Enviar
                        </>
                      )}
                    </button>
                  </div>

                  <p style={{ 
                    fontSize: '12px', 
                    color: '#666', 
                    marginTop: '15px' 
                  }}>
                    Ao informar meus dados, eu concordo com a{' '}
                    <a href="#" style={{ color: '#31496e' }}>
                      Política de Privacidade
                    </a>
                  </p>

                </form>
              </>
            )}
          </div>
        </div>
      )}
      
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </>
  );
}

export default SimpleContactModal;
