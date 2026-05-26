// import React, { useState, useEffect } from 'react';
// import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Palette, Server, Menu, X, ArrowUp, Star, Zap, Award, Smartphone } from 'lucide-react';
// import HealthLinkAdmin from "../assets/images/HealthLinkAdmin.png"
// import MboaBusAdmin from "../assets/images/MboaBusAdmin.png"
// import G2BIsarl from "../assets/images/G2BIsarl.png"
// import MboaBus from "../assets/images/MboaBus.png"
// import emailjs from '@emailjs/browser';


// export default function Portfolio2() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('accueil');
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });


//   const [formStatus, setFormStatus] = useState('');

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 300);

//       const sections = ['accueil', 'apropos', 'competences', 'projets', 'contact'];
//       const currentSection = sections.find(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });

//       if (currentSection) {
//         setActiveSection(currentSection);
//       }
//     };

//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   const scrollToSection = (sectionId) => {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//     setIsMenuOpen(false);
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       'service_d6lsu5j',
//       'template_33naegv',
//       e.target,
//       'Nue04JYniMlh45mM2'
//     )
//       .then((result) => {
//         console.log('Email envoyé !', result.text);
//         setFormStatus('Message envoyé avec succès ! Je vous répondrai sous 24h.');
//         e.target.reset();
//         setFormData({ name: '', email: '', message: '' });
//         setTimeout(() => setFormStatus(''), 5000);
//       }, (error) => {
//         console.log('Erreur :', error.text);
//         alert('Une erreur est survenue, essayez à nouveau.');
//       });

//     e.target.reset(); 
//     setFormData({ name: '', email: '', message: '' });
//     setTimeout(() => setFormStatus(''), 5000);
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const competences = [
//     { nom: 'React.js', icon: Code, color: 'from-emerald-400 to-cyan-400', description: 'Développement d\'interfaces modernes' },
//     { nom: 'React Native', icon: Smartphone, color: 'from-blue-400 to-indigo-400', description: 'Applications mobiles multiplateformes' },
//     { nom: 'Tailwind CSS', icon: Palette, color: 'from-violet-400 to-purple-400', description: 'Design responsive et élégant' },
//     { nom: 'Laravel', icon: Server, color: 'from-orange-400 to-red-400', description: 'API robustes et sécurisées' },
//     { nom: 'JavaScript', icon: Code, color: 'from-yellow-400 to-orange-400', description: 'Logique et interactivité' },
//     { nom: 'PHP', icon: Server, color: 'from-indigo-400 to-purple-400', description: 'Développement backend' },
//     { nom: 'MySQL', icon: Server, color: 'from-blue-400 to-cyan-400', description: 'Gestion de bases de données' }
//   ];

//   const projets = [
//     {
//       titre: 'HealthLink - Plateforme de Gestion Médicale',
//       description: 'Plateforme complète pour la gestion des dossiers médicaux, rendez-vous et suivi patient. Interface moderne, sécurisée, et expérience utilisateur fluide, adaptée aux professionnels de santé et patients.',
//       technologies: ['React.js', 'Laravel', 'Tailwind CSS'],
//       image: HealthLinkAdmin,
//       status: 'Terminé',
//       featured: true,
//       github: ""
//     },
//     {
//       titre: 'MboaBus Admin Dashboard',
//       description: 'Tableau de bord interactif avec visualisations en temps réel, gestion centralisée des trajets et réservations, et système de notifications avancé pour un suivi optimal des opérations.',
//       technologies: ['React.js', 'Strapi API', 'Tailwind css'],
//       image: MboaBusAdmin,
//       status: 'En cours',
//       featured: true
//     },
//     {
//       titre: 'G2BI SARL',
//       description: 'Site vitrine développé avec React.js et Tailwind CSS, intégrant des performances élevées, pour mettre en valeur l’expertise et les projets de l’entreprise de génie civil.',
//       technologies: ['React.js', 'Tailwind CSS'],
//       image: G2BIsarl,
//       status: 'Terminé',
//       featured: false
//     },
//     {
//       titre: 'MboaBus App',
//       description: 'Application mobile intuitive permettant aux voyageurs de rechercher et comparer les trajets, réserver leurs billets et payer directement via Mobile Money, le tout avec une interface rapide et accessible partout.',
//       technologies: ['React native', 'Strapi CMS', 'Tailwind CSS'],
//       image: MboaBus,
//       status: 'Terminé',
//       featured: false
//     }
//   ];

//   const services = [
//     {
//       icon: Code,
//       titre: 'Développement Frontend',
//       description: 'Création d\'interfaces utilisateur modernes et interactives avec React.js et Tailwind CSS.',
//       features: ['Responsive Design', 'Performance Optimisée', 'SEO Friendly']
//     },
//     {
//       icon: Server,
//       titre: 'Développement Backend',
//       description: 'APIs robustes et sécurisées avec Laravel, gestion de bases de données et authentification.',
//       features: ['API RESTful', 'Sécurité Avancée', 'Architecture Scalable']
//     },
//     {
//       icon: Zap,
//       titre: 'Applications Full-Stack',
//       description: 'Solutions complètes de la conception à la mise en production avec maintenance incluse.',
//       features: ['Architecture Complète', 'Déploiement', 'Maintenance']
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
//       {/* Cursor Effect */}
//       {/* <div
//         className="fixed w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
//         style={{
//           left: mousePosition.x - 12,
//           top: mousePosition.y - 12,
//           transform: `scale(${showScrollTop ? 1.5 : 1})`
//         }}
//       /> */}

//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-xl z-40 border-b mb-[50px] border-slate-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             <div className="text-3xl font-black">
//               <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
//                 YOUKA
//               </span>
//               <span className="text-slate-400 ml-2 text-sm font-normal">DEV</span>
//             </div>

//             {/* Menu Desktop */}
//             <div className="hidden md:flex items-center space-x-12">
//               {[
//                 { id: 'accueil', label: 'Accueil' },
//                 { id: 'apropos', label: 'À propos' },
//                 { id: 'competences', label: 'Skills' },
//                 { id: 'projets', label: 'Portfolio' },
//                 { id: 'contact', label: 'Contact' }
//               ].map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`relative text-sm font-medium tracking-wide transition-all duration-300 ${activeSection === item.id
//                     ? 'text-emerald-400'
//                     : 'text-slate-300 hover:text-emerald-400'
//                     }`}
//                 >
//                   {item.label}
//                   {activeSection === item.id && (
//                     <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full" />
//                   )}
//                 </button>
//               ))}
//             </div>

//             {/* Menu Mobile */}
//             <button
//               className="md:hidden text-white p-2"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Menu Mobile Dropdown */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-slate-800/95 backdrop-blur-xl border-t border-slate-700">
//             <div className="px-4 py-6 space-y-4">
//               {[
//                 { id: 'accueil', label: 'Accueil' },
//                 { id: 'apropos', label: 'À propos' },
//                 { id: 'competences', label: 'Skills' },
//                 { id: 'projets', label: 'Portfolio' },
//                 { id: 'contact', label: 'Contact' }
//               ].map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className="block w-full text-left px-4 py-3 text-slate-300 hover:text-emerald-400 hover:bg-slate-700/50 rounded-lg transition-all duration-300"
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Section Accueil */}
//       <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//         {/* Background Effects */}
//         <div className="absolute inset-0">
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
//           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
//         </div>

//         <div className="text-center z-10 px-4 max-w-5xl mx-auto">
//           <div className="mb-10 mt-12">
//             <div className="relative w-40 h-40 mx-auto mb-8">
//               <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-spin-slow opacity-20" />
//               <div className="absolute inset-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full p-1">
//                 <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
//                   <span className="text-5xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
//                     YD
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-6 mb-12">
//             <div className="flex items-center justify-center gap-2 mb-4">
//               <Star className="text-emerald-400" size={20} />
//               <span className="text-emerald-400 font-medium tracking-wide">DÉVELOPPEUSE WEB FULL-STACK</span>
//               <Star className="text-emerald-400" size={20} />
//             </div>

//             <h1 className="text-6xl font-black leading-tight">
//               <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
//                 YOUKA
//               </span>
//               <br />
//               <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                 DJOMGOUE
//               </span>
//             </h1>

//             <p className="text-2xl md:text-3xl font-light text-slate-300 tracking-wide">
//               Ange Carolle
//             </p>

//             <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
//               Je transforme vos idées en expériences digitales exceptionnelles.
//               Spécialisée en <span className="text-emerald-400 font-semibold">React.js</span>,
//               <span className="text-cyan-400 font-semibold"> Tailwind CSS</span> et
//               <span className="text-purple-400 font-semibold"> Laravel</span>.
//             </p>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//             <button
//               onClick={() => scrollToSection('projets')}
//               className="group px-10 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-2xl hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-emerald-500/25"
//             >
//               <span className="flex items-center gap-3">
//                 Découvrir mon travail
//                 <ArrowUp className="rotate-45 group-hover:rotate-90 transition-transform duration-300" size={20} />
//               </span>
//             </button>
//             <button
//               onClick={() => scrollToSection('contact')}
//               className="px-10 py-5 border-2 border-emerald-400 text-emerald-400 font-bold rounded-2xl hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-emerald-400/25"
//             >
//               Collaboration
//             </button>
//           </div>
//         </div>

//         <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ChevronDown className="text-slate-500" size={32} />
//         </div>
//       </section>

//       {/* Section Services */}
//       <section className="py-32 px-4 bg-slate-800/50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl md:text-6xl font-black mb-6">
//               <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
//                 Mes Services
//               </span>
//             </h2>
//             <p className="text-xl text-slate-400 max-w-2xl mx-auto">
//               Des solutions complètes pour donner vie à vos projets digitaux
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {services.map((service, index) => {
//               const Icon = service.icon;
//               return (
//                 <div key={index} className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all duration-500 transform hover:scale-105">
//                   <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                   <div className="relative z-10">
//                     <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                       <Icon size={32} className="text-slate-900" />
//                     </div>

//                     <h3 className="text-2xl font-bold text-white mb-4">{service.titre}</h3>
//                     <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>

//                     <div className="space-y-2">
//                       {service.features.map((feature, featureIndex) => (
//                         <div key={featureIndex} className="flex items-center gap-3">
//                           <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full" />
//                           <span className="text-slate-300 text-sm">{feature}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Section À propos */}
//       <section id="apropos" className="py-32 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8">
//               <div>
//                 <h2 className="text-5xl md:text-6xl font-black mb-6">
//                   <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
//                     À propos
//                   </span>
//                 </h2>
//                 <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mb-8" />
//               </div>

//               <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
//                 <p>
//                   <span className="text-emerald-400 font-semibold">Développeuse passionnée</span> avec plus de 3 ans d'expérience,
//                   je me spécialise dans la création d'applications web modernes qui allient performance,
//                   esthétique et expérience utilisateur exceptionnelle.
//                 </p>
//                 <p>
//                   Ma mission ? Transformer vos idées les plus ambitieuses en réalités digitales.
//                   J'utilise les technologies les plus avancées comme <span className="text-cyan-400 font-semibold">React.js</span>,
//                   <span className="text-purple-400 font-semibold"> Tailwind CSS</span> et
//                   <span className="text-orange-400 font-semibold"> Laravel</span> pour créer des solutions qui dépassent vos attentes.
//                 </p>
//                 <p>
//                   Toujours à l'affût des dernières innovations, je privilégie une approche collaborative
//                   et itérative pour garantir des résultats qui correspondent parfaitement à votre vision.
//                 </p>
//               </div>

//               <div className="flex gap-6">
//                 <a href="https://www.linkedin.com/in/ange-carolle-youka-djomgoue-30b325266" className="group flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-300 transform hover:scale-105">
//                   <Linkedin size={20} />
//                   <span className="font-medium">LinkedIn</span>
//                 </a>
//                 <a href="https://github.com/Ange-carolle" className="group flex items-center gap-3 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl transition-all duration-300 transform hover:scale-105">
//                   <Github size={20} />
//                   <span className="font-medium">GitHub</span>
//                 </a>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-xl" />
//               <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700">
//                 <div className="space-y-6">
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center">
//                       <Mail size={24} className="text-slate-900" />
//                     </div>
//                     <div>
//                       <p className="text-slate-400 text-sm">Email</p>
//                       <p className="text-white font-medium">y.carolle07@gmail.com</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
//                       <MapPin size={24} className="text-slate-900" />
//                     </div>
//                     <div>
//                       <p className="text-slate-400 text-sm">Localisation</p>
//                       <p className="text-white font-medium">Douala, Cameroun</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl flex items-center justify-center">
//                       <Award size={24} className="text-slate-900" />
//                     </div>
//                     <div>
//                       <p className="text-slate-400 text-sm">Expérience</p>
//                       <p className="text-white font-medium">3+ années</p>
//                     </div>
//                   </div>

//                   <div className="pt-6 border-t border-slate-700">
//                     <p className="text-emerald-400 font-semibold mb-2">Disponible pour nouveaux projets</p>
//                     <p className="text-slate-400 text-sm">Réponse sous 24h garantie</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section Compétences */}
//       <section id="competences" className="py-32 px-4 bg-slate-800/50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl md:text-6xl font-black mb-6">
//               <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
//                 Expertise
//               </span>
//             </h2>
//             <p className="text-xl text-slate-400 max-w-2xl mx-auto">
//               Technologies maîtrisées pour créer des expériences exceptionnelles
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {competences.map((competence, index) => {
//               const Icon = competence.icon;
//               return (
//                 <div key={competence.nom} className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all duration-500 transform hover:scale-105">
//                   <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                   <div className="relative z-10">
//                     <div className="flex items-center gap-4 mb-6">
//                       <div className={`p-4 rounded-2xl bg-gradient-to-r ${competence.color} group-hover:scale-110 transition-transform duration-300`}>
//                         <Icon size={28} className="text-slate-900" />
//                       </div>
//                       <div>
//                         <h3 className="text-2xl font-bold text-white">{competence.nom}</h3>
//                         <p className="text-slate-400 text-sm">{competence.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Section Projets */}
//       <section id="projets" className="py-32 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl md:text-6xl font-black mb-6">
//               <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
//                 Portfolio
//               </span>
//             </h2>
//             <p className="text-xl text-slate-400 max-w-2xl mx-auto">
//               Une sélection de mes réalisations les plus récentes
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-10">
//             {projets.map((projet, index) => (
//               <div key={index} className={`group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 transition-all duration-500 transform hover:scale-105 ${projet.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}>
//                 <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                 <div className="relative overflow-hidden">
//                   <img
//                     src={projet.image}
//                     alt={projet.titre}
//                     className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

//                   {projet.featured && (
//                     <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
//                       ⭐ Projet phare
//                     </div>
//                   )}

//                   <div className="absolute top-4 right-4">
//                     <span className={`px-3 py-1 rounded-full text-sm font-medium ${projet.status === 'Terminé'
//                       ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
//                       : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
//                       }`}>
//                       {projet.status}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="relative z-10 p-8">
//                   <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
//                     {projet.titre}
//                   </h3>
//                   <p className="text-slate-400 mb-6 leading-relaxed">{projet.description}</p>

//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {projet.technologies.map((tech, techIndex) => (
//                       <span key={techIndex} className="px-4 py-2 bg-slate-700 text-slate-300 rounded-xl text-sm font-medium border border-slate-600 hover:border-emerald-500/50 transition-colors duration-300">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex gap-4">
//                     <a
//                       href="#"
//                       className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-bold group/link"
//                     >
//                       Voir le projet
//                       <ExternalLink size={16} className="group-hover/link:rotate-45 transition-transform duration-300" />
//                     </a>
//                     <a
//                       href=""
//                       className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
//                     >
//                       <Github size={16} />
//                       Code source
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section Contact */}
//       <section id="contact" className="py-32 px-4 bg-slate-800/50">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl md:text-6xl font-black mb-6">
//               <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
//                 Collaborons
//               </span>
//             </h2>
//             <p className="text-xl text-slate-400 max-w-2xl mx-auto">
//               Prêt à donner vie à votre projet ? Envoyez-moi un message et commençons à créer quelque chose d'extraordinaire ensemble.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-xl" />
//               <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700">
//                 <div className="space-y-6">
//                   <h3 className="text-2xl font-bold text-white mb-4">Me contacter</h3>
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center">
//                       <Mail size={24} className="text-slate-900" />
//                     </div>
//                     <div>
//                       <p className="text-slate-400 text-sm">Email</p>
//                       <a href="mailto:y.carolle07@gmail.com" className="text-white font-medium hover:text-emerald-400 transition-colors">
//                         y.carolle07@gmail.com
//                       </a>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
//                       <Phone size={24} className="text-slate-900" />
//                     </div>
//                     <div>
//                       <p className="text-slate-400 text-sm">Téléphone</p>
//                       <a href="tel:+237123456789" className="text-white font-medium hover:text-emerald-400 transition-colors">
//                         +237 654 256 536
//                       </a>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl flex items-center justify-center">
//                       <MapPin size={24} className="text-slate-900" />
//                     </div>
//                     <div>
//                       <p className="text-slate-400 text-sm">Localisation</p>
//                       <p className="text-white font-medium">Douala, Cameroun</p>
//                     </div>
//                   </div>

//                   <div className="pt-6 border-t border-slate-700">
//                     <p className="text-emerald-400 font-semibold mb-2">Disponible pour nouveaux projets</p>
//                     <p className="text-slate-400 text-sm">Réponse sous 24h garantie</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-xl" />
//               <form onSubmit={handleFormSubmit} className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700">
//                 <div className="space-y-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
//                       Nom
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-emerald-400 transition-colors"
//                       placeholder="Votre nom"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-emerald-400 transition-colors"
//                       placeholder="Votre email"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
//                       Message
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       required
//                       rows={5}
//                       className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-emerald-400 transition-colors"
//                       placeholder="Décrivez votre projet..."
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-xl hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-emerald-500/25"
//                   >
//                     Envoyer le message
//                   </button>

//                   {formStatus && (
//                     <div className="text-center text-emerald-400 font-medium animate-pulse">
//                       {formStatus}
//                     </div>
//                   )}
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-12 px-4 bg-slate-900 border-t border-slate-800">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="text-3xl font-black mb-6">
//             <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
//               YOUKA
//             </span>
//             <span className="text-slate-400 ml-2 text-sm font-normal">DEV</span>
//           </div>
//           <p className="text-slate-400 mb-6">© 2025 Youka Djomgoue. Tous droits réservés.</p>
//           <div className="flex justify-center gap-6">
//             <a href="https://www.linkedin.com/in/ange-carolle-youka-djomgoue-30b325266" className="text-slate-400 hover:text-emerald-400 transition-colors">
//               <Linkedin size={24} />
//             </a>
//             <a href="https://github.com/Ange-carolle" className="text-slate-400 hover:text-emerald-400 transition-colors">
//               <Github size={24} />
//             </a>
//             <a href="mailto:y.carolle07@gmail.com" className="text-slate-400 hover:text-emerald-400 transition-colors">
//               <Mail size={24} />
//             </a>
//           </div>
//         </div>
//       </footer>

//       {/* Scroll to Top Button */}
//       {showScrollTop && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full shadow-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110"
//         >
//           <ArrowUp size={24} className="text-white" />
//         </button>
//       )}
//     </div>
//   );
// }