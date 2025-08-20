import React from 'react';
import { MessageCircle, Mail, Globe, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  const contactMethods = [
    {
      name: 'WhatsApp',
      description: 'Fale conosco diretamente',
      icon: MessageCircle,
      link: 'https://wa.me/5511999999999',
      color: 'bg-green-500 hover:bg-green-600',
      textColor: 'text-white'
    },
    {
      name: 'Email',
      description: 'contato@exploracode.com',
      icon: Mail,
      link: 'mailto:contato@exploracode.com',
      color: 'bg-blue-500 hover:bg-blue-600',
      textColor: 'text-white'
    },
    {
      name: 'Site Completo',
      description: 'Conheça todos os nossos cursos',
      icon: Globe,
      link: '/site',
      color: 'bg-purple-600 hover:bg-purple-700',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-4 shadow-lg">
            <div className="text-purple-600 text-2xl font-bold">
              &lt;/&gt;
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Explora Code</h1>
          <p className="text-purple-200 text-lg">Entre em contato conosco</p>
        </div>

        {/* Contact Cards */}
        <div className="space-y-4">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            const isExternalLink = method.link.startsWith('http') || method.link.startsWith('mailto:');
            
            return (
              <div key={index} className="transform hover:scale-105 transition-all duration-200">
                {isExternalLink ? (
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${method.color} ${method.textColor} p-6 rounded-xl shadow-lg flex items-center justify-between w-full transition-all duration-200 hover:shadow-xl`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{method.name}</h3>
                        <p className="text-sm opacity-90">{method.description}</p>
                      </div>
                    </div>
                    <ArrowRight size={20} className="opacity-70" />
                  </a>
                ) : (
                  <a
                    href={method.link}
                    className={`${method.color} ${method.textColor} p-6 rounded-xl shadow-lg flex items-center justify-between w-full transition-all duration-200 hover:shadow-xl block`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{method.name}</h3>
                        <p className="text-sm opacity-90">{method.description}</p>
                      </div>
                    </div>
                    <ArrowRight size={20} className="opacity-70" />
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-purple-200 text-sm">
            Transformando vidas através da programação
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;