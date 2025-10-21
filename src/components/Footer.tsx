import { 
  Facebook, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone,
  MapPin,
  MessageCircle
} from 'lucide-react';
import logoDevzWhiteHorizontal from '../img/logos/white group horizontal.png';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    empresa: [
      { label: 'Sobre a Devz', page: 'about-devz' },
      { label: 'Nossa equipe', page: 'about-devz' },
      { label: 'Carreiras', href: '#contato' },
      { label: 'Parceiros', href: '#contato' }
    ],
    produtos: [
      { label: 'ERP Modular', href: '#produtos' },
      { label: 'Automações Python', href: '#automacao' },
      { label: 'Dashboards Power BI', href: '#produtos' },
      { label: 'Soluções Customizadas', href: '#produtos' }
    ],
    suporte: [
      { label: 'Central de Ajuda', href: '#contato' },
      { label: 'Documentação', href: '#blog' },
      { label: 'Treinamentos', href: '#contato' },
      { label: 'Status do Sistema', href: '#contato' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61550844434502', label: 'Facebook' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/devz-group0/posts/?feedView=all', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/devzgroup', label: 'Instagram' }
  ];

  const contactInfo = [
    { icon: Mail, value: 'suporte@devz.com.br' },
    { icon: Phone, value: '0800 591 1276' },
    { icon: MessageCircle, value: '0800 591 1276', label: 'WhatsApp Comercial' },
    { icon: MapPin, value: 'Joaçaba - SC' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="mb-4">
                  <img 
                    src={logoDevzWhiteHorizontal} 
                    alt="Devz Logo" 
                    className="object-contain"
                    style={{ height: 'auto', width: 'auto' }}
                  />
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Transformando a gestão empresarial através de tecnologia inovadora. 
                  ERP modular, automações com Python + IA e dashboards em Power BI.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <IconComponent className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-400">{contact.value}</span>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-5 w-5 text-gray-400" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white mb-4">Empresa</h3>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white mb-4">Produtos</h3>
              <ul className="space-y-3">
                {footerLinks.produtos.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white mb-4">Suporte</h3>
              <ul className="space-y-3">
                {footerLinks.suporte.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white mb-2">
                Fique por dentro das novidades
              </h3>
              <p className="text-gray-400">
                Receba conteúdos exclusivos sobre ERP, automação e tecnologia
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 bg-white border border-gray-300 focus:outline-none focus:border-[#31496e] focus:ring-1 focus:ring-[#31496e]"
              />
              <button className="bg-[#31496e] hover:bg-[#31496e]/90 px-6 py-3 rounded-lg text-white transition-colors duration-200">
                Assinar
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <div>© {currentYear} Devz Group. Todos os direitos reservados.</div>
              <div className="mt-1">CNPJ: 35.115.124/0001-05</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
