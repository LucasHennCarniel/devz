import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

function Blog() {
  const categories = [
    { name: 'ERP', color: 'bg-[#1E40AF] text-white' },
    { name: 'Python & IA', color: 'bg-[#3B82F6] text-white' },
    { name: 'Power BI', color: 'bg-gray-100 text-gray-700' },
    { name: 'Gestão', color: 'bg-gray-100 text-gray-700' }
  ];

  const articles = [
    {
      title: 'Como implementar um ERP modular na sua empresa',
      excerpt: 'Descubra as melhores práticas para implementação gradual de um sistema ERP, minimizando riscos e maximizando resultados.',
      category: 'ERP',
      date: '15 Set 2024',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1729184648234-7650c1484905?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTgwNDU4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Automação contábil com Python: 5 scripts essenciais',
      excerpt: 'Conheça os scripts Python mais importantes para automatizar processos contábeis e ganhar eficiência.',
      category: 'Python & IA',
      date: '12 Set 2024',
      readTime: '12 min',
      image: 'https://images.unsplash.com/photo-1667372531881-6f975b1c86db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTgwMjU3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Dashboard empresarial: visualize seus KPIs no Power BI',
      excerpt: 'Aprenda a criar dashboards profissionais que transformam dados em insights acionáveis para seu negócio.',
      category: 'Power BI',
      date: '10 Set 2024',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTgwMTgyODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Gestão financeira digital: tendências para 2024',
      excerpt: 'As principais tendências em gestão financeira digital e como elas podem transformar sua empresa.',
      category: 'Gestão',
      date: '8 Set 2024',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1729184648234-7650c1484905?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTgwNDU4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'IA na contabilidade: o futuro já chegou',
      excerpt: 'Como a inteligência artificial está revolucionando processos contábeis e aumentando a precisão.',
      category: 'Python & IA',
      date: '5 Set 2024',
      readTime: '9 min',
      image: 'https://images.unsplash.com/photo-1667372531881-6f975b1c86db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTgwMjU3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Integração ERP: conectando todos os setores',
      excerpt: 'Estratégias para integrar diferentes setores da empresa através de um sistema ERP eficiente.',
      category: 'ERP',
      date: '3 Set 2024',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1729184648234-7650c1484905?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTgwNDU4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const getCategoryStyle = (categoryName: string) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category?.color || 'bg-gray-100 text-gray-700';
  };

  return (
    <section id="blog" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Blog Devz
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto mb-8">
            Conteúdos exclusivos sobre ERP, automação, Python, IA e gestão empresarial
          </p>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Badge 
                key={category.name} 
                className={`${category.color} px-4 py-2 cursor-pointer hover:opacity-80 transition-opacity border-0`}
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <Card className="border border-gray-200 shadow-sm overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <ImageWithFallback
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryStyle(articles[0].category)}>
                    {articles[0].category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-4">
                  <h3 className="text-gray-900 leading-tight">
                    {articles[0].title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {articles[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{articles[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{articles[0].readTime} de leitura</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button className="flex items-center gap-2 text-[#1E40AF] hover:text-[#1E40AF]/80 transition-colors">
                      <span>Ler artigo completo</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 group cursor-pointer">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryStyle(article.category)}>
                    {article.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="text-gray-900 leading-tight group-hover:text-[#1E40AF] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-2">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-[#1E40AF]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-20 bg-gray-50 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-gray-900 mb-4">
            Receba conteúdos exclusivos
          </h3>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            Assine nossa newsletter e receba semanalmente artigos sobre ERP, automação e tecnologia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6]"
            />
            <button className="bg-[#1E40AF] text-white px-6 py-3 rounded-lg hover:bg-[#1E40AF]/90 transition-colors">
              Assinar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;