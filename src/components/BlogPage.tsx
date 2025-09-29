import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { ArrowRight, Calendar, Clock, Search, Tag, TrendingUp, Code, Settings, Brain, BarChart3, Users, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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
      image: 'https://images.unsplash.com/photo-1667372531881-6f975b1c86db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBwcm9ncmFtbWluZyUyMGNvZGV8ZW58MXx8fHwxNzU4MjAwNjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
      image: 'https://images.unsplash.com/photo-1684487747720-1ba29cda82f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwY2hhdGJvdHxlbnwxfHx8fDE3NTgyNDAwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVsbGlnZW5jZSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTgyMTY2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MjQwMDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
      image: 'https://images.unsplash.com/photo-1753955900083-b62ee8d97805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2NvdW50aW5nJTIwYXV0b21hdGlvbiUyMHByb2Nlc3N8ZW58MXx8fHwxNzU4MjQwMDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVsbGlnZW5jZSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTgyMTY2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
      image: 'https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1ODE5MjI0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['DEVZ Clínicas', 'Telemedicina', 'Saúde', 'CFM']
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

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#31496e] to-[#31496e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h1 className="text-4xl lg:text-6xl mb-6">
              Blog Devz
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
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
              className="pl-10 bg-white backdrop-blur border-white/20 text-white placeholder-white focus:bg-white/20"
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
      <section className="py-16 bg-[#F5F6F7]">
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
                    className={`flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-[#31496e] text-white hover:bg-[#31496e]/90'
                        : 'border-gray-300 text-gray-700 hover:bg-[#31496e] hover:text-white hover:border-[#31496e]'
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
            {filteredPosts.slice(1).map((post) => (
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
          {filteredPosts.length > 7 && (
            <div className="text-center mt-12">
              <Button 
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-[#31496e] hover:text-white hover:border-[#31496e]"
              >
                Carregar Mais Posts
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-[#31496e] to-[#31496e] rounded-lg p-8 lg:p-12 text-white">
            <h3 className="text-white mb-4">
              Não perca nenhuma atualização
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Receba em primeira mão as novidades sobre nossos produtos, 
              atualizações tecnológicas e insights exclusivos do mercado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 bg-white backdrop-blur border-white/20 text-gray-900 placeholder-white"
              />
              <Button className="bg-white hover:bg-white/90 text-[#31496e] px-8">
                Inscrever-se
              </Button>
            </div>
            
            <p className="text-xs text-white/70 mt-4">
              Enviamos apenas conteúdo relevante. Sem spam, prometido.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
