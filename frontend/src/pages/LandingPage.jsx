import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Users, 
  Award, 
  MessageCircle, 
  Mail, 
  Phone,
  ChevronDown,
  ChevronUp,
  Star,
  Clock,
  Target,
  Zap,
  BookOpen,
  Brain,
  Smartphone,
  Monitor,
  Sparkles,
  ArrowRight,
  Play,
  CheckCircle
} from 'lucide-react';

const LandingPage = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const courses = [
    {
      title: 'Programação para Crianças',
      description: 'Introdução lúdica ao mundo da programação com Scratch e conceitos básicos',
      icon: Users,
      age: '8-14 anos',
      duration: '8 semanas',
      gradient: 'from-pink-500 via-purple-500 to-indigo-500',
      price: 'R$ 299'
    },
    {
      title: 'Desenvolvimento Web',
      description: 'HTML, CSS, JavaScript e frameworks modernos para criar sites incríveis',
      icon: Monitor,
      age: '15+ anos',
      duration: '12 semanas',
      gradient: 'from-blue-500 via-purple-500 to-pink-500',
      price: 'R$ 499'
    },
    {
      title: 'Inteligência Artificial',
      description: 'Conceitos de IA, Machine Learning e aplicações práticas',
      icon: Brain,
      age: '16+ anos',
      duration: '10 semanas',
      gradient: 'from-green-500 via-blue-500 to-purple-500',
      price: 'R$ 699'
    },
    {
      title: 'Desenvolvimento Mobile',
      description: 'Criação de aplicativos para Android e iOS',
      icon: Smartphone,
      age: '16+ anos',
      duration: '14 semanas',
      gradient: 'from-orange-500 via-red-500 to-purple-500',
      price: 'R$ 599'
    }
  ];

  const differentials = [
    {
      icon: Target,
      title: 'Acompanhamento Personalizado',
      description: 'Contato direto com cada aluno, acompanhando o progresso individual',
      gradient: 'from-purple-600 to-violet-600'
    },
    {
      icon: Clock,
      title: 'Horários Flexíveis',
      description: 'Aulas semanais com horários que se adaptam à sua rotina',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      icon: Award,
      title: 'Certificação',
      description: 'Certificado de conclusão reconhecido no mercado',
      gradient: 'from-green-600 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Metodologia Prática',
      description: 'Aprenda fazendo projetos reais desde o primeiro dia',
      gradient: 'from-orange-600 to-red-600'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Mãe do João (12 anos)',
      text: 'Meu filho desenvolveu muito a lógica e criatividade. Recomendo!',
      rating: 5,
      avatar: 'MS'
    },
    {
      name: 'Carlos Santos',
      role: 'Profissional em transição',
      text: 'Consegui minha primeira vaga como desenvolvedor após o curso. Excelente!',
      rating: 5,
      avatar: 'CS'
    },
    {
      name: 'Ana Rodrigues',
      role: 'Estudante universitária',
      text: 'O acompanhamento próximo fez toda a diferença no meu aprendizado.',
      rating: 5,
      avatar: 'AR'
    }
  ];

  const faqs = [
    {
      question: 'Como funciona o acompanhamento personalizado?',
      answer: 'Mantemos contato direto com cada aluno através de WhatsApp e email, cobrando atividades, tirando dúvidas e acompanhando o progresso individual.'
    },
    {
      question: 'Preciso ter conhecimento prévio em programação?',
      answer: 'Não! Nossos cursos são desenvolvidos para todos os níveis, desde iniciantes completos até quem já tem alguma experiência.'
    },
    {
      question: 'Qual a idade mínima para participar?',
      answer: 'Oferecemos cursos para todas as idades, começando aos 8 anos com programação infantil até cursos avançados para adultos.'
    },
    {
      question: 'Como são as aulas?',
      answer: 'As aulas são semanais, com duração de 2 horas, em formato presencial ou online, conforme sua preferência.'
    }
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Enhanced Header with Glass Effect */}
      <header className="fixed w-full top-0 z-50 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-900/80 to-black/80 backdrop-blur-lg border-b border-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl blur opacity-60"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Code className="text-white" size={24} />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Explora Code
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors relative group">
                Início
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-violet-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#courses" className="text-gray-300 hover:text-white transition-colors relative group">
                Cursos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-violet-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors relative group">
                Sobre
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-violet-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors relative group">
                Contato
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-violet-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>
            <a 
              href="https://wa.me/5511999999999" 
              className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-violet-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Complex Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-800/20 to-violet-900/30"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-purple-400/20 text-6xl font-mono animate-float">&lt;</div>
          <div className="absolute top-40 right-20 text-violet-400/20 text-4xl font-mono animate-float-delayed">/&gt;</div>
          <div className="absolute bottom-32 left-20 text-purple-300/20 text-5xl font-mono animate-float">{"{"}</div>
          <div className="absolute bottom-20 right-10 text-violet-300/20 text-4xl font-mono animate-float-delayed">{"}"}</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
            <Sparkles className="text-yellow-400 w-4 h-4" />
            <span className="text-purple-200 text-sm">Novo curso de IA disponível!</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-violet-200 bg-clip-text text-transparent">
              Transforme seu futuro com
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              Programação
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Cursos semanais de programação para todas as idades. Do básico ao avançado, 
            com acompanhamento personalizado e metodologia prática.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="#courses" 
              className="group relative bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-violet-700 transition-all duration-300 shadow-xl hover:shadow-purple-500/40 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Ver Cursos</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://wa.me/5511999999999" 
              className="group border-2 border-purple-500 text-purple-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600 hover:border-purple-600 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Courses Section */}
      <section id="courses" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-violet-900/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-violet-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-6">
              <BookOpen className="text-purple-400 w-5 h-5" />
              <span className="text-purple-200 text-sm font-medium">CURSOS DISPONÍVEIS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">
              Nossos Cursos
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Escolha o curso ideal para sua jornada de transformação profissional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => {
              const IconComponent = course.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 rounded-2xl p-6 transition-all duration-300 transform hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-r ${course.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{course.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Idade:</span>
                        <span className="text-purple-400 font-medium">{course.age}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Duração:</span>
                        <span className="text-purple-400 font-medium">{course.duration}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Preço:</span>
                        <span className="text-green-400 font-bold">{course.price}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-105">
                      Saiba Mais
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Differentials Section */}
      <section id="about" className="relative py-20 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/10 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-violet-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-6">
              <Award className="text-purple-400 w-5 h-5" />
              <span className="text-purple-200 text-sm font-medium">NOSSOS DIFERENCIAIS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">
              Por que escolher a Explora Code?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Nossos diferenciais que fazem a diferença na sua jornada
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="group text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-violet-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 rounded-2xl p-8 transition-all duration-300 transform hover:scale-105">
                    <div className={`w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <IconComponent className="text-white" size={36} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 to-violet-900/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-2 mb-6">
              <Star className="text-yellow-400 w-5 h-5" />
              <span className="text-green-200 text-sm font-medium">DEPOIMENTOS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">
              O que nossos alunos dizem
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Histórias reais de transformação e sucesso
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-700 hover:border-green-500/50 rounded-2xl p-8 transition-all duration-300 transform hover:scale-105">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current w-5 h-5" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="relative py-20 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-6">
              <CheckCircle className="text-blue-400 w-5 h-5" />
              <span className="text-blue-200 text-sm font-medium">PERGUNTAS FREQUENTES</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">
              Tire suas dúvidas
            </h2>
            <p className="text-xl text-gray-400">
              Respostas para as principais questões sobre nossos cursos
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 rounded-xl overflow-hidden transition-all duration-300">
                  <button
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-all duration-300"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <span className="font-bold text-white text-lg pr-4">{faq.question}</span>
                    <div className="flex-shrink-0">
                      {expandedFaq === index ? (
                        <ChevronUp className="text-purple-400 w-6 h-6 transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="text-purple-400 w-6 h-6 transition-transform duration-300" />
                      )}
                    </div>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-8 pb-6 border-t border-gray-700/50">
                      <p className="text-gray-300 leading-relaxed pt-4">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="relative py-20 bg-gradient-to-r from-purple-900 via-violet-900 to-purple-900">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <MessageCircle className="text-white w-5 h-5" />
            <span className="text-white text-sm font-medium">ENTRE EM CONTATO</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
            Entre em contato e dê o primeiro passo para transformar sua carreira
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://wa.me/5511999999999" 
              className="group bg-white text-purple-600 px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center space-x-3 shadow-2xl hover:shadow-white/20 transform hover:scale-105"
            >
              <MessageCircle size={24} />
              <span>WhatsApp</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="mailto:contato@exploracode.com" 
              className="group border-2 border-white text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 inline-flex items-center justify-center space-x-3 transform hover:scale-105"
            >
              <Mail size={24} />
              <span>Email</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 to-violet-900/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl blur opacity-60"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Code className="text-white" size={24} />
                  </div>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Explora Code
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                Transformando vidas através da programação com cursos semanais e acompanhamento personalizado. 
                Sua jornada para uma nova carreira começa aqui.
              </p>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <MessageCircle className="text-white" size={20} />
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <Mail className="text-white" size={20} />
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-6">Cursos</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Programação Infantil</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Desenvolvimento Web</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Inteligência Artificial</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Apps Mobile</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-6">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-400">
                  <Phone size={16} className="text-purple-400" />
                  <span>(11) 99999-9999</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <Mail size={16} className="text-purple-400" />
                  <span>contato@exploracode.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 Explora Code. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;