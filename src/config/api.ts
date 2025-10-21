// Configuração da API
// Detecta automaticamente o ambiente e configura a URL correta

const getApiUrl = () => {
  // 1. Se houver VITE_API_URL definida nas variáveis de ambiente, usa ela (PRODUÇÃO)
  const viteApiUrl = import.meta.env.VITE_API_URL;
  if (viteApiUrl) {
    console.log('🌐 Usando API URL do ambiente:', viteApiUrl);
    return viteApiUrl;
  }
  
  // 2. Detecção automática para PRODUÇÃO (quando não está em localhost)
  const hostname = window.location.hostname;
  const protocol = window.location.protocol;
  
  // Se não for localhost/127.0.0.1, assume que está em produção
  if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
    // Em produção, usa o mesmo domínio com /api
    const prodUrl = `${protocol}//${hostname}/api`;
    console.log('🚀 Produção detectada. API URL:', prodUrl);
    return prodUrl;
  }
  
  // 3. Desenvolvimento local - usa porta 3001
  const devUrl = 'http://localhost:3001';
  console.log('💻 Desenvolvimento local detectado. API URL:', devUrl);
  return devUrl;
};

export const API_URL = getApiUrl();
export const API_ENDPOINTS = {
  EMAIL: `${API_URL}/api/email/contato`,
  TRABALHE_CONOSCO: `${API_URL}/api/email/trabalhe-conosco`,
  HEALTH: `${API_URL}/api/health`
};
