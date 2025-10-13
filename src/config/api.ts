// Configuração da API
// Usa variável de ambiente ou detecta automaticamente o host
const getApiUrl = () => {
  // Tenta usar variável de ambiente do Vite
  const viteApiUrl = typeof window !== 'undefined' && (window as any).__VITE_API_URL__;
  if (viteApiUrl) {
    return viteApiUrl;
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
