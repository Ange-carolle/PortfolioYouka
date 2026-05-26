import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Palette, Server, Menu, X, ArrowUp } from 'lucide-react';

export default function Portfolio1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      const sections = ['accueil', 'apropos', 'competences', 'projets', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const competences = [
    { nom: 'React.js', niveau: 90, icon: Code, color: 'from-blue-500 to-cyan-500' },
    { nom: 'Tailwind CSS', niveau: 95, icon: Palette, color: 'from-cyan-500 to-teal-500' },
    { nom: 'Laravel', niveau: 85, icon: Server, color: 'from-red-500 to-orange-500' },
    { nom: 'JavaScript', niveau: 88, icon: Code, color: 'from-yellow-500 to-orange-500' },
    { nom: 'PHP', niveau: 82, icon: Server, color: 'from-purple-500 to-pink-500' },
    { nom: 'MySQL', niveau: 80, icon: Server, color: 'from-blue-600 to-blue-400' }
  ];

  const projets = [
    {
      titre: 'Application E-commerce',
      description: 'Une plateforme e-commerce complète développée avec React.js et Laravel, intégrant un système de paiement sécurisé.',
      technologies: ['React.js', 'Laravel', 'Tailwind CSS', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      lien: '#'
    },
    {
      titre: 'Dashboard Analytique',
      description: 'Interface d\'administration moderne avec visualisation de données en temps réel et gestion utilisateurs.',
      technologies: ['React.js', 'Tailwind CSS', 'Chart.js', 'Laravel API'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      lien: '#'
    },
    {
      titre: 'Site Web Corporate',
      description: 'Site vitrine responsive pour une entreprise avec CMS personnalisé et optimisation SEO.',
      technologies: ['Laravel', 'Tailwind CSS', 'MySQL', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      lien: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              YOUKA
            </div>
            
            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'apropos', label: 'À propos' },
                { id: 'competences', label: 'Compétences' },
                { id: 'projets', label: 'Projets' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-cyan-400 font-semibold'
                      : 'text-white/80 hover:text-cyan-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Menu Mobile */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'apropos', label: 'À propos' },
                { id: 'competences', label: 'Compétences' },
                { id: 'projets', label: 'Projets' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-white/80 hover:text-cyan-400 transition-colors w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Section Accueil */}
      <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-cyan-800/20"></div>
        <div className="text-center z-10 px-4">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 p-1 mb-6">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">YD</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              YOUKA DJOMGOUE
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-light text-white/90 mb-2">
            Ange Carolle
          </h2>
          <p className="text-xl md:text-2xl text-cyan-300 mb-8 font-light">
            Développeuse Web Full-Stack
          </p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12">
            Spécialisée en React.js, Tailwind CSS et Laravel. Je crée des expériences web modernes, 
            performantes et intuitives qui allient esthétique et fonctionnalité.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projets')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Découvrir mes projets
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Me contacter
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/50" size={32} />
        </div>
      </section>

      {/* Section À propos */}
      <section id="apropos" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              À propos de moi
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-white/80 leading-relaxed">
                Passionnée par le développement web depuis plusieurs années, je me spécialise dans la création 
                d'applications web modernes et performantes. Mon expertise couvre l'ensemble de la stack 
                technologique, du front-end au back-end.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Je maîtrise particulièrement React.js pour des interfaces utilisateur dynamiques, 
                Tailwind CSS pour un design moderne et responsive, et Laravel pour des API robustes 
                et sécurisées. Mon approche privilégie toujours l'expérience utilisateur et la qualité du code.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Constamment à l'affût des dernières technologies et meilleures pratiques, 
                j'aime relever de nouveaux défis et contribuer à des projets innovants.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Informations</h3>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-cyan-400" />
                    <span>youka.djomgoue@email.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-cyan-400" />
                    <span>Douala, Cameroun</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code size={18} className="text-cyan-400" />
                    <span>3+ années d'expérience</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a href="#" className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a href="#" className="flex-1 bg-gradient-to-r from-gray-700 to-gray-800 p-4 rounded-xl hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section id="competences" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Mes compétences
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competences.map((competence, index) => {
              const Icon = competence.icon;
              return (
                <div key={competence.nom} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${competence.color}`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{competence.nom}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Niveau</span>
                      <span className="text-cyan-400 font-semibold">{competence.niveau}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className={`h-full bg-gradient-to-r ${competence.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${competence.niveau}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="projets" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Mes projets
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projets.map((projet, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={projet.image} 
                    alt={projet.titre}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{projet.titre}</h3>
                  <p className="text-white/70 mb-4 leading-relaxed">{projet.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projet.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={projet.lien}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                  >
                    Voir le projet <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Me contacter
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Travaillons ensemble</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Vous avez un projet en tête ? Je serais ravie de discuter de vos besoins 
                  et de voir comment nous pouvons créer quelque chose d'extraordinaire ensemble.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20">
                  <Mail className="text-cyan-400" size={24} />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-white/70">youka.djomgoue@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20">
                  <Phone className="text-cyan-400" size={24} />
                  <div>
                    <p className="text-white font-semibold">Téléphone</p>
                    <p className="text-white/70">+237 6XX XXX XXX</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20">
                  <MapPin className="text-cyan-400" size={24} />
                  <div>
                    <p className="text-white font-semibold">Localisation</p>
                    <p className="text-white/70">Douala, Cameroun</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Nom complet</label>
                <input 
                  type="text" 
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  placeholder="Votre nom complet"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  placeholder="votre.email@exemple.com"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea 
                  rows="5"
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                  placeholder="Décrivez votre projet ou votre message..."
                ></textarea>
              </div>
              
              <button 
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => alert('Fonctionnalité de contact à implémenter avec votre backend')}
              >
                Envoyer le message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            © 2025 YOUKA DJOMGOUE Ange Carolle. Tous droits réservés.
          </p>
          <p className="text-white/40 mt-2">
            Développé avec React.js & Tailwind CSS
          </p>
        </div>
      </footer>

      {/* Bouton Retour en haut */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-lg z-50"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}