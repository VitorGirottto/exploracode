import React, { useState } from 'react';
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
  Monitor
} from 'lucide-react';

const LandingPage = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const courses = [
    {
      title: 'Programação para Crianças',
      description: 'Introdução lúdica ao mundo da programação com Scratch e conceitos básicos',
      icon: Users,
      age: '8-14 anos',
      duration: '8 semanas'
    },
    {
      title: 'Desenvolvimento Web',
      description: 'HTML, CSS, JavaScript e frameworks modernos para criar sites incríveis',
      icon: Monitor,
      age: '15+ anos',
      duration: '12 semanas'
    },
    {
      title: 'Inteligência Artificial',
      description: 'Conceitos de IA, Machine Learning e aplicações práticas',
      icon: Brain,
      age: '16+ anos',
      duration: '10 semanas'
    },
    {
      title: 'Desenvolvimento Mobile',
      description: 'Criação de aplicativos para Android e iOS',
      icon: Smartphone,
      age: '16+ anos',
      duration: '14 semanas'
    }
  ];

  const differentials = [
    {
      icon: Target,
      title: 'Acompanhamento Personalizado',
      description: 'Contato direto com cada aluno, acompanhando o progresso individual'
    },
    {
      icon: Clock,
      title: 'Horários Flexíveis',
      description: 'Aulas semanais com horários que se adaptam à sua rotina'
    },
    {
      icon: Award,
      title: 'Certificação',
      description: 'Certificado de conclusão reconhecido no mercado'
    },
    {
      icon: Zap,
      title: 'Metodologia Prática',
      description: 'Aprenda fazendo projetos reais desde o primeiro dia'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Mãe do João (12 anos)',
      text: 'Meu filho desenvolveu muito a lógica e criatividade. Recomendo!',
      rating: 5
    },
    {
      name: 'Carlos Santos',
      role: 'Profissional em transição',
      text: 'Consegui minha primeira vaga como desenvolvedor após o curso. Excelente!',
      rating: 5
    },
    {
      name: 'Ana Rodrigues',
      role: 'Estudante universitária',
      text: 'O acompanhamento próximo fez toda a diferença no meu aprendizado.',
      rating: 5
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <Code className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold text-gray-900">Explora Code</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Início</a>
              <a href="#courses" className="text-gray-700 hover:text-purple-600 transition-colors">Cursos</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">Sobre</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contato</a>
            </nav>
            <a 
              href="https://wa.me/5511999999999" 
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforme seu futuro com
              <span className="text-purple-600"> Programação</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Cursos semanais de programação para todas as idades. Do básico ao avançado, 
              com acompanhamento personalizado e metodologia prática.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#courses" 
                className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Ver Cursos
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Cursos</h2>
            <p className="text-xl text-gray-600">Escolha o curso ideal para sua jornada</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => {
              const IconComponent = course.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{course.age}</span>
                    <span>{course.duration}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Por que escolher a Explora Code?</h2>
            <p className="text-xl text-gray-600">Nossos diferenciais que fazem a diferença</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">O que nossos alunos dizem</h2>
            <p className="text-xl text-gray-600">Depoimentos reais de quem já transformou sua vida</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600">Tire suas dúvidas sobre nossos cursos</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="text-purple-600" size={20} />
                  ) : (
                    <ChevronDown className="text-purple-600" size={20} />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Pronto para começar?</h2>
          <p className="text-xl text-purple-200 mb-8">
            Entre em contato e dê o primeiro passo para transformar sua carreira
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511999999999" 
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a 
              href="mailto:contato@exploracode.com" 
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="text-white" size={20} />
                </div>
                <span className="text-2xl font-bold">Explora Code</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transformando vidas através da programação com cursos semanais e acompanhamento personalizado.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Cursos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Programação Infantil</li>
                <li>Desenvolvimento Web</li>
                <li>Inteligência Artificial</li>
                <li>Apps Mobile</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  (11) 99999-9999
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  contato@exploracode.com
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Explora Code. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;