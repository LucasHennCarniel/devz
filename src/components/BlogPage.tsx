import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { ArrowRight, Calendar, Clock, Search, Tag, TrendingUp, Code, Settings, Brain, BarChart3, Users, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [postsToShow, setPostsToShow] = useState(6);

  const categories = [
    { id: 'all', name: 'Todos os Posts', icon: Globe },
    { id: 'updates', name: 'Atualizações DEVZ', icon: Settings },
    { id: 'tech', name: 'Tecnologias', icon: Code },
    { id: 'ia', name: 'IA & Automação', icon: Brain },
    { id: 'powerbi', name: 'Power BI', icon: BarChart3 },
    { id: 'tips', name: 'Dicas & Insights', icon: TrendingUp }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'DEVZ Web 2024.3: Nova Interface e Performance 40% Melhor',
      excerpt: 'Descobra as principais melhorias da mais recente versão do DEVZ Web, incluindo redesign da interface, otimizações de performance e novos recursos de automação.',
      category: 'updates',
      author: 'Equipe Devz',
      date: '2024-01-15',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1ODE5MjI0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['DEVZ Web', 'Update', 'Performance', 'UI/UX']
    },
    {
      id: 2,
      title: 'Python 3.12: Como Aproveitamos as Novas Features em Nossas Automações',
      excerpt: 'Análise detalhada das novidades do Python 3.12 e como estamos implementando essas melhorias em nossos scripts de automação contábil e processamento de dados.',
      category: 'tech',
      author: 'Carlos Silva',
      date: '2024-01-12',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
      tags: ['Python', 'Automação', 'Development', 'Performance']
    },
    {
      id: 3,
      title: 'IA Generativa na Contabilidade: Como Nossos Chatbots Estão Evoluindo',
      excerpt: 'Conheça os avanços em IA que estamos implementando nos chatbots DEVZ, incluindo processamento de linguagem natural e automação de atendimento.',
      category: 'ia',
      author: 'Ana Santos',
      date: '2024-01-10',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
      tags: ['IA', 'Chatbot', 'GPT', 'Automação']
    },
    {
      id: 4,
      title: 'Power BI 2024: Novos Visuais e Integração com Azure OpenAI',
      excerpt: 'Explore as últimas atualizações do Power BI e como estamos usando Azure OpenAI para criar dashboards mais inteligentes e insights preditivos.',
      category: 'powerbi',
      author: 'Roberto Lima',
      date: '2024-01-08',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
      tags: ['Power BI', 'Azure', 'BI', 'Analytics']
    },
    {
      id: 5,
      title: 'DEVZ Food: Nova Integração com iFood e Uber Eats',
      excerpt: 'Lançamos integração nativa com as principais plataformas de delivery, automatizando pedidos e sincronizando estoque em tempo real.',
      category: 'updates',
      author: 'Equipe Devz',
      date: '2024-01-05',
      readTime: '4 min',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
      tags: ['DEVZ Food', 'Delivery', 'Integração', 'iFood']
    },
    {
      id: 6,
      title: '5 Processos Contábeis que Você Pode Automatizar Hoje',
      excerpt: 'Guia prático mostrando os processos contábeis mais comuns que podem ser automatizados com Python, gerando economia de até 85% do tempo.',
      category: 'tips',
      author: 'Marina Costa',
      date: '2024-01-03',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
      tags: ['Automação', 'Contabilidade', 'Python', 'Produtividade']
    },
    {
      id: 7,
      title: 'Machine Learning na Previsão de Vendas: Case DEVZ Shop',
      excerpt: 'Como implementamos algoritmos de ML para prever demanda e otimizar estoque em uma rede de varejo que aumentou vendas em 30%.',
      category: 'ia',
      author: 'Dr. Felipe Oliveira',
      date: '2023-12-28',
      readTime: '12 min',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
      tags: ['Machine Learning', 'DEVZ Shop', 'Vendas', 'Predição']
    },
    {
      id: 8,
      title: 'DEVZ Clínicas 2024.1: Telemedicina e Prontuário Eletrônico',
      excerpt: 'Nova versão focada em telemedicina com prontuário eletrônico integrado, atendendo às normas do CFM e melhorando experiência do paciente.',
      category: 'updates',
      author: 'Equipe Devz',
      date: '2023-12-25',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
      tags: ['DEVZ Clínicas', 'Telemedicina', 'Saúde', 'CFM']
    },
    {
      id: 9,
      title: 'React 18 + TypeScript: Modernizando Nossos Componentes',
      excerpt: 'Como migramos nossa base de código para React 18 e implementamos TypeScript em todos os componentes, melhorando performance e manutenibilidade.',
      category: 'tech',
      author: 'João Santos',
      date: '2023-12-20',
      readTime: '9 min',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
      tags: ['React', 'TypeScript', 'Frontend', 'Performance']
    },
    {
      id: 10,
      title: 'Dashboards Interativos: Guia Completo de Power BI',
      excerpt: 'Tutorial passo a passo para criar dashboards profissionais no Power BI, desde conexão de dados até visualizações avançadas.',
      category: 'powerbi',
      author: 'Roberto Lima',
      date: '2023-12-18',
      readTime: '15 min',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
      tags: ['Power BI', 'Dashboard', 'Visualização', 'Tutorial']
    },
    {
      id: 11,
      title: 'ChatGPT-4o no Atendimento: Implementação no DEVZ',
      excerpt: 'Como integramos o GPT-4o em nossos sistemas de atendimento, reduzindo tempo de resposta em 70% e melhorando satisfação do cliente.',
      category: 'ia',
      author: 'Ana Santos',
      date: '2023-12-15',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
      tags: ['GPT-4o', 'Atendimento', 'IA', 'Customer Service']
    },
    {
      id: 12,
      title: 'DEVZ Agro 2024.2: Gestão de Safras e IoT',
      excerpt: 'Nova versão com monitoramento IoT de safras, previsão meteorológica integrada e controle financeiro específico para agronegócio.',
      category: 'updates',
      author: 'Equipe Devz',
      date: '2023-12-12',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
      tags: ['DEVZ Agro', 'IoT', 'Agronegócio', 'Safras']
    },
    {
      id: 13,
      title: '10 Dicas para Otimizar Performance em React',
      excerpt: 'Estratégias práticas para melhorar performance de aplicações React, incluindo lazy loading, memoização e otimização de bundle.',
      category: 'tips',
      author: 'Marina Costa',
      date: '2023-12-10',
      readTime: '12 min',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
      tags: ['React', 'Performance', 'Otimização', 'Frontend']
    },
    {
      id: 14,
      title: 'Docker e Kubernetes: Deploy de Aplicações DEVZ',
      excerpt: 'Como estruturamos nosso pipeline de deploy usando Docker e Kubernetes, garantindo escalabilidade e alta disponibilidade.',
      category: 'tech',
      author: 'Carlos Silva',
      date: '2023-12-08',
      readTime: '11 min',
      image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
      tags: ['Docker', 'Kubernetes', 'DevOps', 'Deploy']
    },
    {
      id: 15,
      title: 'Power BI Service: Colaboração e Segurança',
      excerpt: 'Guia completo sobre configuração de workspaces, permissões e políticas de segurança no Power BI Service para empresas.',
      category: 'powerbi',
      author: 'Roberto Lima',
      date: '2023-12-05',
      readTime: '9 min',
      image: 'https://images.unsplash.com/photo-1416736969005-85cc29c6e129?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
      tags: ['Power BI Service', 'Segurança', 'Colaboração', 'Enterprise']
    },
    {
      id: 16,
      title: 'RPA com Python: Automatizando Processos Repetitivos',
      excerpt: 'Como usar bibliotecas Python para criar robôs de automação que eliminam tarefas manuais e reduzem erros operacionais.',
      category: 'ia',
      author: 'Dr. Felipe Oliveira',
      date: '2023-12-03',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
      tags: ['RPA', 'Python', 'Automação', 'Robôs']
    },
    {
      id: 17,
      title: 'DEVZ Pet 2024.1: Veterinária Digital',
      excerpt: 'Lançamento do módulo veterinário com agenda online, prontuário digital e integração com laboratórios para exames.',
      category: 'updates',
      author: 'Equipe Devz',
      date: '2023-12-01',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
      tags: ['DEVZ Pet', 'Veterinária', 'Agenda', 'Prontuário']
    },
    {
      id: 18,
      title: 'Metodologias Ágeis no Desenvolvimento DEVZ',
      excerpt: 'Como implementamos Scrum e Kanban no desenvolvimento de software, melhorando entregas e comunicação com clientes.',
      category: 'tips',
      author: 'Marina Costa',
      date: '2023-11-28',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
      tags: ['Scrum', 'Kanban', 'Metodologias', 'Desenvolvimento']
    },
    {
      id: 19,
      title: 'Node.js e Express: APIs Robustas e Escaláveis',
      excerpt: 'Melhores práticas para desenvolvimento de APIs com Node.js e Express, incluindo autenticação, validação e testes.',
      category: 'tech',
      author: 'João Santos',
      date: '2023-11-25',
      readTime: '13 min',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
      tags: ['Node.js', 'Express', 'API', 'Backend']
    },
    {
      id: 20,
      title: 'DAX Avançado: Cálculos Complexos no Power BI',
      excerpt: 'Domine fórmulas DAX avançadas para criar medidas complexas, time intelligence e cálculos personalizados no Power BI.',
      category: 'powerbi',
      author: 'Roberto Lima',
      date: '2023-11-22',
      readTime: '14 min',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
      tags: ['DAX', 'Power BI', 'Medidas', 'Time Intelligence']
    },
    {
      id: 21,
      title: 'Segurança em Aplicações Web: Guia Prático',
      excerpt: 'Implementação de práticas de segurança essenciais: HTTPS, CORS, CSP, autenticação JWT e proteção contra ataques comuns.',
      category: 'tips',
      author: 'Carlos Silva',
      date: '2023-11-20',
      readTime: '11 min',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
      tags: ['Segurança', 'Web Security', 'JWT', 'HTTPS']
    },
    {
      id: 22,
      title: 'Deep Learning para Análise Preditiva de Vendas',
      excerpt: 'Como usamos redes neurais para prever tendências de vendas e otimizar estratégias de marketing e estoque.',
      category: 'ia',
      author: 'Dr. Felipe Oliveira',
      date: '2023-11-18',
      readTime: '16 min',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
      tags: ['Deep Learning', 'Vendas', 'Predição', 'Neural Networks']
    },
    {
      id: 23,
      title: 'DEVZ Salões 2024.2: Agenda Inteligente com IA',
      excerpt: 'Nova funcionalidade que usa IA para otimizar agendamentos, reduzir faltas e maximizar ocupação do salão.',
      category: 'updates',
      author: 'Equipe Devz',
      date: '2023-11-15',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
      tags: ['DEVZ Salões', 'IA', 'Agenda', 'Otimização']
    },
    {
      id: 24,
      title: 'Git Flow e CI/CD: Workflow de Desenvolvimento',
      excerpt: 'Estruturação de workflows com Git Flow, GitHub Actions e deploy automatizado para ambientes de produção.',
      category: 'tips',
      author: 'João Santos',
      date: '2023-11-12',
      readTime: '9 min',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
      tags: ['Git Flow', 'CI/CD', 'GitHub Actions', 'DevOps']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  const loadMorePosts = () => {
    setPostsToShow(prev => prev + 6);
  };

  // Reset posts to show when category or search changes
  React.useEffect(() => {
    setPostsToShow(6);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-[#31496e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h1 className="text-4xl lg:text-6xl mb-6">
              Blog Devz
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
              Atualizações das nossas ferramentas, insights sobre tecnologia e 
              tendências que estão transformando o mercado
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Buscar posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white backdrop-blur border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-white focus:border-[#31496e] focus:ring-1 focus:ring-[#31496e]"
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Post em Destaque</h2>
          </div>

          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#31496e] text-white">
                    Destaque
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredPost.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-[#31496e] border-[#31496e]">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.date).toLocaleDateString('pt-BR')}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                  </div>
                </div>
                
                <Button className="bg-[#31496e] hover:bg-[#31496e]/90 text-white w-fit">
                  Ler Post Completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories & Posts */}
      <section className="py-16 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <h3 className="text-gray-900 mb-6">
              Categorias
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-devz-primary text-white hover:bg-devz-primary-dark shadow-md'
                        : 'border-gray-300 text-gray-700 hover:bg-devz-primary hover:text-white hover:border-devz-primary hover:shadow-md transform hover:scale-105'
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    {category.name}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1, postsToShow + 1).map((post) => (
              <Card key={post.id} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-700">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h4 className="text-gray-900 mb-3 line-clamp-2 group-hover:text-[#31496e] transition-colors">
                    {post.title}
                  </h4>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          {postsToShow < filteredPosts.length - 1 && (
            <div className="text-center mt-12">
              <Button 
                onClick={loadMorePosts}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-[#31496e] hover:text-white hover:border-[#31496e] transition-all duration-300"
              >
                Carregar Mais Posts ({filteredPosts.length - postsToShow - 1} restantes)
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 text-center shadow-2xl border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Receba conteúdos exclusivos
            </h3>
            <p className="text-gray-900 mb-8 max-w-2xl mx-auto">
              Assine nossa Newsletter e receba semanalmente artigos sobre ERP, automação e tecnologia em sua caixa de entrada!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900  border border-gray-300 focus:outline-none focus:border-[#31496e] focus:ring-1 focus:ring-[#31496e]"
              />
              <button className="bg-devz-primary text-white px-6 py-3 rounded-lg hover:bg-[#31496e]/90 transition-colors cursor-pointer">
                Assinar
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
