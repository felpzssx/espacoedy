/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Waves,
  Gamepad2,
  UtensilsCrossed,
  Coffee,
  Wind,
  Wifi,
  Accessibility,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  CheckCircle2,
  Menu,
  X,
  Send,
  MessageCircle,
  Sun,
  ChevronLeft,
  ChevronRight,
  Plus,
  Check
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [currentStructure, setCurrentStructure] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    date: '',
    guests: ''
  });
  const heroImages = ['/piscina.jpg', '/salaoprincipal.jpg', '/espacogouret.jpg', '/areaexterna.jpg'];

  const testimonials = [
    {
      name: 'Maria Silva',
      text: 'Espaço maravilhoso! A piscina é incrível e o atendimento foi nota 10. Recomendo muito para festas de aniversário.'
    },
    {
      name: 'João Santos',
      text: 'Realizamos nossa confraternização da empresa e foi um sucesso. O salão é amplo e a área gourmet é muito completa.'
    },
    {
      name: 'Ana Oliveira',
      text: 'Lugar aconchegante e muito bem cuidado. As redes na varanda são um diferencial delicioso para relaxar.'
    },
    {
      name: 'Carlos Lima',
      text: 'A mesa de sinuca é muito boa e o espaço é bem ventilado. Perfeito para um churrasco com os amigos.'
    },
    {
      name: 'Fernanda Costa',
      text: 'Tudo muito limpo e organizado. A iluminação do salão à noite fica linda para fotos.'
    },
    {
      name: 'Ricardo Alves',
      text: 'Excelente custo-benefício. O Espaço Edy superou nossas expectativas para o chá de bebê.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const heroTimer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(heroTimer);
    };
  }, []);

  const structureCards = [
    {
      title: 'Piscina Refrescante',
      image: '/piscina.jpg',
      text: 'Área externa ensolarada com piso de pedra e paisagismo, perfeita para dias de lazer.',
      icon: <Waves className="w-6 h-6" />
    },
    {
      title: 'Salão Principal',
      image: '/salaoprincipal.jpg',
      text: 'Espaço interno amplo com piso cerâmico limpo e iluminação de embutir, ideal para jantares ou pista de dança.',
      icon: <Coffee className="w-6 h-6" />
    },
    {
      title: 'Entretenimento Garantido',
      image: '/mesadesinuca.jpg',
      text: 'Mesa de sinuca profissional e pebolim em área coberta para diversão de todos os convidados.',
      icon: <Gamepad2 className="w-6 h-6" />
    },
    {
      title: 'Espaço Gourmet',
      image: '/espacogouret.jpg',
      text: 'Churrasqueira de tijolos, bancadas de granito e área de apoio completa para seu buffet.',
      icon: <UtensilsCrossed className="w-6 h-6" />
    },
    {
      title: 'Salão de Festas',
      image: '/salaodefesta.jpg',
      text: 'Espaço coberto com redes e bancos de paletes, ideal para momentos de relaxamento.',
      icon: <Wind className="w-6 h-6" />
    },
    {
      title: 'Área Externa',
      image: '/areaexterna.jpg',
      text: 'Amplo ambiente ao ar livre com iluminação natural, perfeito para confraternizações, montar mesas temáticas e aproveitar o espaço livre do quintal.',
      icon: <Sun className="w-6 h-6" />
    }
  ];

  const differentials = [
    { icon: <Wind />, text: 'Ambiente climatizado/ventilado' },
    { icon: <CheckCircle2 />, text: 'Banheiros acessíveis e limpos' },
    { icon: <Wifi />, text: 'Wi-Fi de alta velocidade' },
    { icon: <UtensilsCrossed />, text: 'Cozinha de apoio com freezer' },
    { icon: <Waves />, text: 'Piscina Privativa' }
  ];

  const checklistItems = {
    offered: [
      'Piscina com área de sol',
      'Churrasqueira completa',
      'Freezer e Geladeira',
      'Mesa de madeira para 12 pessoas',
      'Mesas e cadeiras de plástico',
      'Mesa de Sinuca e Pebolim',
      'Wi-Fi de alta velocidade',
      'Banheiros acessíveis',
      'Redes de descanso',
      'Bancos de palete',
      'Área coberta e ventilada'
    ],
    toBring: [
      'Carvão para churrasqueira',
      'Gelo para bebidas',
      'Pratos e talheres descartáveis',
      'Copos e guardanapos',
      'Toalhas de banho/piscina',
      'Itens de higiene pessoal',
      'Sacos de lixo extras'
    ]
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, date, guests } = formData;

    // Format date from YYYY-MM-DD to DD/MM/YYYY
    const formattedDate = date ? date.split('-').reverse().join('/') : '';

    const text = `Olá, Espaço Edy! Gostaria de checar a disponibilidade do espaço.%0A%0A*Nome:* ${name}%0A*Data do Evento:* ${formattedDate}%0A*Nº de Convidados:* ${guests}`;

    window.open(`https://wa.me/5511986209498?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-brand-gray font-sans text-brand-dark overflow-x-hidden">
      {/* Navigation */}
      <header>
        <nav aria-label="Navegação Principal" className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-3 md:py-4'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 md:h-20">
              <div className="flex-shrink-0">
                <a href="#" aria-label="Espaço Edy - Início" className="flex items-center gap-3">
                  <span className={`font-display font-black text-xl md:text-2xl uppercase tracking-tighter transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
                    Espaço <span className="text-brand-yellow italic">Edy</span>
                  </span>
                </a>
              </div>

              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-6">
                  <a href="#" className={`transition-colors font-semibold text-sm uppercase tracking-wider ${isScrolled ? 'text-brand-dark hover:text-brand-pool' : 'text-white hover:text-brand-yellow'}`}>Início</a>
                  <a href="#estrutura" className={`transition-colors font-semibold text-sm uppercase tracking-wider ${isScrolled ? 'text-brand-dark hover:text-brand-pool' : 'text-white hover:text-brand-yellow'}`}>Estrutura</a>
                  <a href="#checklist" className={`transition-colors font-semibold text-sm uppercase tracking-wider ${isScrolled ? 'text-brand-dark hover:text-brand-pool' : 'text-white hover:text-brand-yellow'}`}>Checklist</a>
                  <a href="#feedback" className={`transition-colors font-semibold text-sm uppercase tracking-wider ${isScrolled ? 'text-brand-dark hover:text-brand-pool' : 'text-white hover:text-brand-yellow'}`}>Depoimentos</a>
                  <a href="#contato" className={`px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-md ${isScrolled ? 'bg-brand-pool text-white hover:bg-brand-dark' : 'bg-brand-yellow text-brand-dark hover:bg-white'}`}>Contato</a>
                </div>
              </div>

              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                  aria-expanded={isMenuOpen}
                  className={`p-2 transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white'}`}
                >
                  {isMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
              >
                <div className="px-4 pt-2 pb-6 space-y-1">
                  <a href="#" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-xl text-base font-semibold hover:bg-brand-gray">Início</a>
                  <a href="#estrutura" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-xl text-base font-semibold hover:bg-brand-gray">Estrutura</a>
                  <a href="#checklist" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-xl text-base font-semibold hover:bg-brand-gray">Checklist</a>
                  <a href="#feedback" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-xl text-base font-semibold hover:bg-brand-gray">Depoimentos</a>
                  <a href="#contato" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-xl text-base font-bold text-brand-pool">Contato</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section aria-labelledby="hero-title" className="relative h-[80vh] min-h-[500px] md:h-screen flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroImage}
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img
                src={heroImages[currentHeroImage]}
                className="w-full h-full object-cover"
                alt={`Imagem do espaço ${currentHeroImage + 1}`}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/20 to-brand-dark/70" />
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10 text-center px-6 max-w-5xl">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 md:mb-6 uppercase tracking-tighter leading-none drop-shadow-2xl">
                Seu Lazer Começa no <br />
                <span className="text-brand-yellow italic">Espaço Edy</span>
              </h1>

              <p className="text-base sm:text-lg md:text-2xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto font-medium drop-shadow-lg px-4">
                O espaço perfeito para criar memórias inesquecíveis com quem você ama.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contato"
                  className="bg-brand-yellow text-brand-dark px-8 py-3.5 md:px-10 md:py-4 rounded-full font-black text-base md:text-lg uppercase tracking-widest shadow-2xl hover:bg-white transition-colors"
                >
                  Reservar Agora
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#estrutura"
                  className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-3.5 md:px-10 md:py-4 rounded-full font-black text-base md:text-lg uppercase tracking-widest hover:bg-white/20 transition-colors"
                >
                  Ver Espaço
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
              aria-hidden="true"
            >
              <div className="w-1 h-2 bg-brand-yellow rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* Nossa Estrutura */}
        <section id="estrutura" className="py-12 md:py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-brand-dark uppercase tracking-widest">Nossa Estrutura</h2>
              <div className="w-20 h-1.5 bg-brand-pool mx-auto rounded-full" />
            </div>

            <div className="relative group">
              <div className="flex justify-center items-center" aria-live="polite">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStructure}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="w-full max-w-4xl"
                  >
                    <div className="bg-brand-gray rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-teal/5 flex flex-col md:flex-row h-auto md:h-[450px]">
                      <div className="w-full md:w-3/5 h-56 md:h-full relative">
                        <img
                          src={structureCards[currentStructure].image}
                          alt={`Foto de: ${structureCards[currentStructure].title}`}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl text-brand-pool shadow-lg" aria-hidden="true">
                          {structureCards[currentStructure].icon}
                        </div>
                      </div>
                      <div className="w-full md:w-2/5 p-6 md:p-12 flex flex-col justify-center bg-white">
                        <span className="text-brand-pool font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] mb-4 block">Destaque {currentStructure + 1} de {structureCards.length}</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 leading-tight">{structureCards[currentStructure].title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-8">{structureCards[currentStructure].text}</p>
                        <div className="flex gap-2" aria-hidden="true">
                          <div className="h-1 w-12 bg-brand-pool rounded-full" />
                          <div className="h-1 w-4 bg-brand-pool/20 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:-mx-8 pointer-events-none">
                <button
                  onClick={() => setCurrentStructure((prev) => (prev - 1 + structureCards.length) % structureCards.length)}
                  aria-label="Ver item anterior da estrutura"
                  className="p-3 md:p-4 rounded-full bg-white shadow-xl text-brand-dark hover:bg-brand-pool hover:text-white transition-all pointer-events-auto border border-gray-100 group/btn"
                >
                  <ChevronLeft className="w-6 h-6 group-hover/btn:-translate-x-1 transition-transform" aria-hidden="true" />
                </button>
                <button
                  onClick={() => setCurrentStructure((prev) => (prev + 1) % structureCards.length)}
                  aria-label="Ver próximo item da estrutura"
                  className="p-3 md:p-4 rounded-full bg-white shadow-xl text-brand-dark hover:bg-brand-pool hover:text-white transition-all pointer-events-auto border border-gray-100 group/btn"
                >
                  <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-3 mt-12" role="tablist" aria-label="Navegação da estrutura">
              {structureCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStructure(index)}
                  role="tab"
                  aria-selected={currentStructure === index}
                  aria-label={`Ver item ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${currentStructure === index ? 'bg-brand-pool w-12' : 'bg-brand-pool/20 w-4'
                    }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Checklist Section */}
        <section id="checklist" className="py-12 md:py-20 bg-brand-gray/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-brand-dark uppercase tracking-widest">Checklist do Evento</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Tudo o que você precisa saber para planejar seu dia perfeito no Espaço Edy.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* O que oferecemos */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-brand-pool/10"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-brand-pool/10 p-3 rounded-2xl text-brand-pool" aria-hidden="true">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-brand-dark">O que o espaço oferece</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" aria-label="Itens oferecidos pelo espaço">
                  {checklistItems.offered.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700 text-sm md:text-base">
                      <CheckCircle2 className="w-4 h-4 text-brand-pool flex-shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* O que trazer */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-brand-dark p-8 md:p-10 rounded-[2.5rem] shadow-xl text-white"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-brand-yellow/20 p-3 rounded-2xl text-brand-yellow" aria-hidden="true">
                    <Plus className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">O que recomendamos trazer</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" aria-label="Itens recomendados para trazer">
                  {checklistItems.toBring.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/80 text-sm md:text-base">
                      <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-8 md:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-gray rounded-2xl p-5 md:p-10 border border-brand-teal/10">
              <div className="text-center mb-8">
                <h2 className="text-xl md:text-2xl font-bold mb-2 text-brand-dark uppercase tracking-wider">Nossas Comodidades</h2>
                <div className="w-12 h-1 bg-brand-pool mx-auto rounded-full" />
              </div>
              <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                {differentials.map((diff, index) => (
                  <div key={index} className="w-[45%] md:w-auto flex-1 min-w-[140px] flex flex-col items-center text-center gap-2 p-3 bg-white rounded-xl shadow-sm">
                    <div className="bg-brand-pool/10 p-2 md:p-3 rounded-lg text-brand-pool" aria-hidden="true">
                      {diff.icon}
                    </div>
                    <p className="font-bold text-brand-dark text-[11px] md:text-xs uppercase tracking-wider">{diff.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="feedback" className="py-12 md:py-20 bg-brand-dark text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 uppercase tracking-wider">Feedback dos Clientes</h2>
              <div className="w-20 h-1 bg-brand-yellow mx-auto rounded-full" />
            </div>

            <div className="relative">
              <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory scrollbar-hide no-scrollbar">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="min-w-[300px] md:min-w-[400px] snap-center bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-white/10 flex flex-col items-center text-center"
                  >
                    <div className="mb-6">
                      <img
                        src={`https://picsum.photos/seed/${testimonial.name}/100/100`}
                        alt={`Foto de ${testimonial.name}`}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-brand-pool object-cover shadow-xl"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex gap-1 mb-4" aria-label="Avaliação 5 estrelas">
                      {[...Array(5)].map((_, i) => (
                        <Sun key={i} className="w-4 h-4 text-brand-yellow fill-brand-yellow" aria-hidden="true" />
                      ))}
                    </div>
                    <p className="text-base md:text-lg italic mb-6 text-white/80 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <h4 className="text-sm font-bold text-brand-yellow uppercase tracking-widest">
                      {testimonial.name}
                    </h4>
                  </motion.div>
                ))}
              </div>

              {/* Scroll Hint */}
              <div className="flex justify-center items-center gap-2 text-white/30 text-xs uppercase tracking-widest mt-4">
                <ChevronLeft className="w-4 h-4 animate-pulse" />
                <span>Deslize para ver mais</span>
                <ChevronRight className="w-4 h-4 animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* Localização e Contato */}
        <section id="contato" className="py-8 md:py-12 bg-brand-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Map Column - Smaller and Integrated */}
              <div className="lg:col-span-1 flex flex-col">
                <h2 className="text-lg font-bold mb-3 text-brand-dark uppercase tracking-wider">Local</h2>
                <a href="https://maps.app.goo.gl/oJPsKJqj3ZDwjZfM6" target="_blank" rel="noopener noreferrer" className="block bg-white p-2 rounded-2xl shadow-sm mb-3 hover:shadow-md transition-shadow group cursor-pointer" aria-label="Ver no Google Maps">
                  <div className="h-32 md:h-40 rounded-xl overflow-hidden bg-brand-teal/5 relative border border-brand-teal/10 transition-colors">
                    <img src="/mapa.png" alt="Mapa de Localização" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col items-center justify-end text-center p-3 opacity-90 group-hover:opacity-100 transition-opacity">
                      <MapPin className="w-6 h-6 text-brand-yellow mb-1 drop-shadow-md group-hover:-translate-y-1 transition-transform" />
                      <p className="text-white font-bold text-xs drop-shadow-md">Abrir no mapa</p>
                    </div>
                  </div>
                </a>
                <a href="https://maps.app.goo.gl/oJPsKJqj3ZDwjZfM6" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-gray-600 bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-all group cursor-pointer" aria-label="Abrir endereço no mapa">
                  <MapPin className="text-brand-pool w-3.5 h-3.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <p className="text-[15px] leading-tight group-hover:text-brand-pool transition-colors">Avenida Dalila, 501- Jardim Margarida - Mogi Das Cruzes - SP</p>
                </a>
              </div>

              {/* Form Column - Simplified */}
              <div className="lg:col-span-2 bg-white p-5 md:p-8 rounded-3xl shadow-xl border border-brand-teal/5">
                <div className="mb-5">
                  <span className="text-brand-pool font-bold text-[9px] uppercase tracking-[0.2em]">Contato Rápido</span>
                  <h2 id="contact-title" className="text-lg md:text-xl font-bold mt-1 text-brand-dark">Consulte sua data</h2>
                </div>

                <form className="space-y-3 md:space-y-4" onSubmit={handleWhatsAppSubmit} aria-labelledby="contact-title">
                  <div className="space-y-1">
                    <label htmlFor="name" className="sr-only">Seu Nome</label>
                    <input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" placeholder="Seu Nome" className="w-full appearance-none min-h-[48px] px-4 py-3 md:py-4 rounded-xl bg-brand-gray/80 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-pool outline-none transition-all text-sm text-brand-dark placeholder:text-gray-400" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <div className="space-y-1">
                      <label htmlFor="date" className="sr-only">Data do Evento</label>
                      <input id="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} type="date" className="w-full appearance-none min-h-[48px] px-4 py-3 md:py-4 rounded-xl bg-brand-gray/80 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-pool outline-none transition-all text-sm text-brand-dark/80" required />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="guests" className="sr-only">Número de Convidados</label>
                      <input id="guests" value={formData.guests} onChange={(e) => setFormData({ ...formData, guests: e.target.value })} type="number" placeholder="Nº de Convidados" className="w-full appearance-none min-h-[48px] px-4 py-3 md:py-4 rounded-xl bg-brand-gray/80 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-pool outline-none transition-all text-sm text-brand-dark placeholder:text-gray-400" required />
                    </div>
                  </div>

                  <button type="submit" className="w-full min-h-[48px] bg-brand-pool text-white py-3 md:py-4 rounded-xl font-bold text-sm md:text-base hover:bg-brand-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-pool/20 mt-2">
                    <Send className="w-3.5 h-3.5" aria-hidden="true" />
                    Solicitar Disponibilidade
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-brand-gray">
                  <div className="flex flex-wrap gap-3 justify-center">
                    <a href="https://wa.me/5511986209498" aria-label="Contato via WhatsApp" className="p-2.5 bg-green-50 text-green-600 rounded-xl hover:bg-green-600 hover:text-white transition-all"><MessageCircle size={20} aria-hidden="true" /></a>
                    <a href="tel:+5511986209498" aria-label="Ligar para Espaço Edy" className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all"><Phone size={20} aria-hidden="true" /></a>
                    <a href="mailto:contato@espacoedy.com.br" aria-label="Enviar E-mail" className="p-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all"><Mail size={20} aria-hidden="true" /></a>
                    <a href="#" aria-label="Seguir no Instagram" className="p-2.5 bg-pink-50 text-pink-600 rounded-xl hover:bg-pink-600 hover:text-white transition-all"><Instagram size={20} aria-hidden="true" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display font-black text-2xl uppercase tracking-tighter mb-6">
            Espaço <span className="text-brand-yellow italic">Edy</span>
          </p>
          <p className="text-white/40 text-sm mb-4">© {new Date().getFullYear()} Espaço Edy. O melhor para seu evento.</p>
          <div className="flex justify-center gap-6 text-xs text-white/30">
            <a href="#" className="hover:text-brand-yellow transition-colors">Privacidade</a>
            <a href="#" className="hover:text-brand-yellow transition-colors">Termos</a>
          </div>
        </div>
      </footer>
    </div >
  );
}
