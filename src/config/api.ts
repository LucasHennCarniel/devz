// Configuração da API
// Usa variável de ambiente ou detecta automaticamente o host
const getApiUrl = () => {
  // Se estiver em produção, use a URL de produção
  if (import.meta.env && (import.meta.env as any).VITE_API_URL) {
    return (import.meta.env as any).VITE_API_URL;
  }
  
  // Em desenvolvimento, usa o IP da rede local se não for localhost
  const hostname = window.location.hostname;
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'http://localhost:3000';
  }
  
  // Se acessando pelo IP da rede, usa o mesmo IP para a API
  return `http://${hostname}:3000`;
};

export const API_URL = getApiUrl();
export const API_ENDPOINTS = {
  EMAIL: `${API_URL}/api/email/contato`,
  HEALTH: `${API_URL}/api/health`
};
