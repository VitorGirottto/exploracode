import React from 'react';
import { MessageCircle, Mail, Globe, ArrowRight, Code, Sparkles, Zap } from 'lucide-react';

const ContactPage = () => {
  const contactMethods = [
    {
      name: 'WhatsApp',
      description: 'Fale conosco diretamente',
      icon: MessageCircle,
      link: 'https://wa.me/5511999999999',
      gradient: 'from-green-400 via-green-500 to-emerald-600',
      shadowColor: 'shadow-green-500/25',
      glowColor: 'group-hover:shadow-green-400/40'
    },
    {
      name: 'Email',
      description: 'contato@exploracode.com',
      icon: Mail,
      link: 'mailto:contato@exploracode.com',
      gradient: 'from-blue-400 via-blue-500 to-cyan-600',
      shadowColor: 'shadow-blue-500/25',
      glowColor: 'group-hover:shadow-blue-400/40'
    },
    {
      name: 'Site Completo',
      description: 'Conheça todos os nossos cursos',
      icon: Globe,
      link: '/site',
      gradient: 'from-purple-400 via-purple-500 to-violet-600',
      shadowColor: 'shadow-purple-500/25',
      glowColor: 'group-hover:shadow-purple-400/40'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Advanced Background with Multiple Gradients and Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-800/20 to-violet-900/30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Code Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-purple-400/20 text-6xl font-mono animate-float">&lt;</div>
        <div className="absolute top-40 right-20 text-violet-400/20 text-4xl font-mono animate-float-delayed">/&gt;</div>
        <div className="absolute bottom-32 left-20 text-purple-300/20 text-5xl font-mono animate-float">{"{"}</div>
        <div className="absolute bottom-20 right-10 text-violet-300/20 text-4xl font-mono animate-float-delayed">{"}"}</div>
        <div className="absolute top-1/2 left-5 text-purple-400/10 text-3xl font-mono animate-float">;</div>
        <div className="absolute top-1/3 right-5 text-violet-400/10 text-3xl font-mono animate-float-delayed">=</div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Enhanced Logo Section */}
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-3xl blur-lg opacity-60 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-white via-gray-100 to-gray-200 w-24 h-24 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600 text-3xl font-bold">
                  &lt;/&gt;
                </div>
              </div>
              {/* Sparkle Effects */}
              <Sparkles className="absolute -top-2 -right-2 text-yellow-400 w-5 h-5 animate-bounce" />
              <Zap className="absolute -bottom-1 -left-2 text-purple-400 w-4 h-4 animate-bounce" style={{animationDelay: '0.5s'}} />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-violet-200 bg-clip-text text-transparent mb-3">
              Explora Code
            </h1>
            <p className="text-purple-200/80 text-lg font-medium">Entre em contato conosco</p>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full mx-auto mt-4"></div>
          </div>

          {/* Enhanced Contact Cards */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              const isExternalLink = method.link.startsWith('http') || method.link.startsWith('mailto:');
              
              return (
                <div 
                  key={index} 
                  className="group transform hover:scale-105 transition-all duration-300 ease-out"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {isExternalLink ? (
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative block w-full p-6 rounded-2xl bg-gradient-to-r ${method.gradient} shadow-xl ${method.shadowColor} hover:shadow-2xl ${method.glowColor} transition-all duration-300 overflow-hidden`}
                    >
                      {/* Card Background Effects */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                      
                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                            <IconComponent size={28} className="text-white drop-shadow-lg" />
                          </div>
                          <div>
                            <h3 className="font-bold text-xl text-white drop-shadow-lg">{method.name}</h3>
                            <p className="text-white/90 text-sm font-medium">{method.description}</p>
                          </div>
                        </div>
                        <ArrowRight size={24} className="text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </a>
                  ) : (
                    <a
                      href={method.link}
                      className={`relative block w-full p-6 rounded-2xl bg-gradient-to-r ${method.gradient} shadow-xl ${method.shadowColor} hover:shadow-2xl ${method.glowColor} transition-all duration-300 overflow-hidden`}
                    >
                      {/* Card Background Effects */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                      
                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                            <IconComponent size={28} className="text-white drop-shadow-lg" />
                          </div>
                          <div>
                            <h3 className="font-bold text-xl text-white drop-shadow-lg">{method.name}</h3>
                            <p className="text-white/90 text-sm font-medium">{method.description}</p>
                          </div>
                        </div>
                        <ArrowRight size={24} className="text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          {/* Enhanced Footer */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
              <Code className="text-purple-400 w-5 h-5" />
              <p className="text-purple-200/90 text-sm font-medium">
                Transformando vidas através da programação
              </p>
              <Code className="text-purple-400 w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;