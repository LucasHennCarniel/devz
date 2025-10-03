import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Target, Eye, Heart, Lightbulb } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Simplificar a gestão empresarial através de tecnologia inovadora, oferecendo soluções ERP modulares e automações inteligentes.'
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser referência em soluções tecnológicas para gestão empresarial, democratizando o acesso a ferramentas avançadas de automação.'
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Inovação, transparência, excelência no atendimento e compromisso com o sucesso dos nossos clientes.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Investimos constantemente em Python, IA e Power BI para oferecer as melhores soluções do mercado.'
    }
  ];

  const technologies = [
    'Python + IA',
    'Power BI',
    'React',
    'Node.js',
    'PostgreSQL',
    'Docker',
    'AWS',
    'API REST'
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-gray-900">
                Sobre a <span className="text-[#31496E]">Devz</span>
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Somos uma empresa de tecnologia especializada em soluções ERP modulares, 
                automações contábeis com Python e IA, e dashboards em Power BI. 
                Nossa missão é transformar a gestão empresarial através da tecnologia.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Com anos de experiência no mercado, desenvolvemos soluções que combinam 
                robustez, facilidade de uso e inovação tecnológica para empresas de todos os portes.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                          <h3 className="text-gray-900 mb-2">
                            {value.title}
                          </h3>
                          <p className="text-sm text-gray-500 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1698047682129-c3e217ac08b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTgwNTA3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Equipe Devz trabalhando com tecnologia moderna"
              className="w-full h-96 object-cover rounded-lg shadow-sm border border-gray-200"
            />
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-20 text-center">
          <h3 className="text-gray-900 mb-8">
            Tecnologias que Utilizamos
          </h3>
          <div className="w-full max-w-6xl mx-auto relative overflow-hidden">
            <div 
              className="flex gap-6 flex-shrink-0"
              style={{
                animation: 'techScroll 40s linear infinite',
                width: `${technologies.length * 200}px`
              }}
              onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
              onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech}-${index}`}
                  className="bg-white px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 flex-shrink-0 min-w-[180px] text-center hover:shadow-sm hover:scale-105"
                >
                  <span className="text-gray-600 font-medium whitespace-nowrap">{tech}</span>
                </div>
              ))}
            </div>
            
            {/* Gradients para efeito fade */}
            <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}