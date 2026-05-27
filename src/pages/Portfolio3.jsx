import { useState, useEffect, useRef } from "react";
import {
  ChevronDown, Mail, Phone, MapPin, Github, Linkedin,
  ExternalLink, Code, Palette, Server, Menu, X, ArrowUp,
  Star, Zap, Award, Smartphone, Briefcase, GraduationCap,
  Settings, ChevronRight
} from "lucide-react";
import emailjs from "@emailjs/browser";
import ProfilePhoto from "../assets/images/profile.jpeg"
import HealthLinkAdmin from "../assets/images/HealthLinkAdmin.png";
import MboaBusAdmin from "../assets/images/MboaBusAdmin.png";
import G2BIsarl from "../assets/images/G2BIsarl.png";
import MboaBus from "../assets/images/MboaBus.png";

// ─────────────────────────────────────────────────────────────────
// Constante : met ton import ici quand tu auras la photo
const PROFILE_PHOTO = ProfilePhoto; // remplace par : ProfilePhoto
// ─────────────────────────────────────────────────────────────────

export default function Portfolio3() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      const sections = ["accueil", "apropos", "parcours", "competences", "projets", "contact"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, e.target.id]));
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_d6lsu5j", "template_33naegv", e.target, "Nue04JYniMlh45mM2")
      .then(() => {
        setFormStatus("success");
        e.target.reset();
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormStatus(""), 5000);
      })
      .catch(() => setFormStatus("error"));
  };

  const navLinks = [
    { id: "accueil", label: "Accueil" },
    { id: "apropos", label: "À propos" },
    { id: "parcours", label: "Parcours" },
    { id: "competences", label: "Skills" },
    { id: "projets", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  const competences = [
    { nom: "React.js", icon: Code, desc: "Interfaces modernes & interactives", color: "#7c6aff" },
    // { nom: "React Native", icon: Smartphone, desc: "Apps mobiles multiplateformes", color: "#a78bfa" },
    { nom: "Tailwind CSS", icon: Palette, desc: "Design responsive & élégant", color: "#c084fc" },
    // { nom: "Laravel", icon: Server, desc: "APIs robustes & sécurisées", color: "#e879a0" },
    { nom: "JavaScript", icon: Code, desc: "Logique & interactivité", color: "#fb923c" },
    // { nom: "PHP", icon: Server, desc: "Développement backend", color: "#6366f1" },
    { nom: "MySQL", icon: Server, desc: "Gestion de bases de données", color: "#0ea5e9" },
    { nom: "Odoo ERP", icon: Settings, desc: "Modules personnalisés & intégrations", color: "#10b981" },
  ];

  const timeline = [
    {
      type: "formation",
      year: "2022 – 2024",
      title: "BTS en Gestion des Systèmes d'information",
      place: "ISMAM Nkongsamba",
      desc: "Formation en développement logiciel, algorithmique, bases de données et conception orientée objet.",
    },
    {
      type: "formation",
      year: "2024 – 2025",
      title: "Licence en Génie Logiciel",
      place: "IUT de Douala",
      desc: "Formation en développement logiciel, algorithmique, bases de données et conception orientée objet.",
    },
    {
      type: "experience",
      year: "2025",
      title: "Devia Technology",
      desc: "Formation en developpement web avec react js et laravel",
    },
        {
      type: "experience",
      year: "2025",
      title: "Stage developpement odoo",
      place: "Cugit Consulting",
      desc: "Découverte de Odoo et de sa structure, instalatin et configuration de odoo sur vps Linux",
    },
    {
      type: "experience",
      year: "2025 – présent",
      title: "Développeuse Odoo & Web",
      place: "Cugit Consulting",
      desc: "Développement de modules Odoo personnalisés, intégration comptable, gestion multi-branches.",
    },
  ];

  const projets = [
    {
      titre: "HealthLink — Plateforme Médicale",
      desc: "Gestion des dossiers médicaux, rendez-vous et suivi patient. Interface moderne et sécurisée pour professionnels de santé.",
      techs: ["React.js", "Laravel", "Tailwind CSS"],
      image: HealthLinkAdmin,
      status: "Terminé",
      featured: true,
    },
    {
      titre: "MboaBus Admin Dashboard",
      desc: "Tableau de bord interactif avec visualisations en temps réel, gestion des trajets, réservations et notifications.",
      techs: ["React.js", "Strapi API", "Tailwind CSS"],
      image: MboaBusAdmin,
      status: "En cours",
      featured: true,
    },
    {
      titre: "G2BI SARL",
      desc: "Site vitrine pour entreprise de génie civil, développé avec React.js et Tailwind CSS. Performances élevées, design soigné.",
      techs: ["React.js", "Tailwind CSS"],
      image: G2BIsarl,
      status: "Terminé",
      featured: false,
    },
    {
      titre: "MboaBus App",
      desc: "Application mobile permettant la recherche de trajets, réservation de billets et paiement Mobile Money.",
      techs: ["React Native", "Strapi CMS", "Tailwind CSS"],
      image: MboaBus,
      status: "Terminé",
      featured: false,
    },
  ];

  const services = [
    {
      icon: Code,
      titre: "Développement Frontend",
      desc: "Interfaces utilisateur modernes, réactives et accessibles avec React.js et Tailwind CSS.",
      features: ["Responsive Design", "Performance optimisée", "SEO friendly"],
    },
    {
      icon: Server,
      titre: "Développement Backend",
      desc: "APIs robustes et sécurisées avec Laravel, gestion de bases de données et authentification.",
      features: ["API RESTful", "Sécurité avancée", "Architecture scalable"],
    },
    {
      icon: Settings,
      titre: "Modules Odoo",
      desc: "Développement de modules Odoo personnalisés, intégration comptable et gestion multi-branches.",
      features: ["Modules sur mesure", "Intégration ERP", "Workflows métier"],
    },
  ];

  const anim = (id) =>
    `transition-all duration-700 ${
      visibleSections.has(id)
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-8"
    }`;

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        background: "#faf9ff",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --violet: #7c6aff;
          --violet-light: #a78bfa;
          --violet-pale: #ede9fe;
          --violet-xpale: #f5f3ff;
          --pink: #e879a0;
          --bg: #faf9ff;
          --bg-card: #ffffff;
          --text: #1a1628;
          --text-muted: #6b6580;
          --text-light: #a09ab8;
          --border: #e8e3f8;
        }

        .display { font-family: 'Playfair Display', Georgia, serif; }

        .gradient-text {
          background: linear-gradient(135deg, #7c6aff 0%, #c084fc 50%, #e879a0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-bg {
          background: linear-gradient(135deg, #7c6aff 0%, #c084fc 50%, #e879a0 100%);
        }

        .card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        .card:hover {
          border-color: #c4b5fd;
          box-shadow: 0 12px 40px rgba(124,106,255,0.12);
          transform: translateY(-3px);
        }

        .nav-pill {
          position: relative;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
          color: var(--text-muted);
        }

        .nav-pill.active, .nav-pill:hover {
          color: var(--violet);
          background: var(--violet-xpale);
        }

        .btn-primary {
          background: linear-gradient(135deg, #7c6aff, #c084fc);
          color: white;
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 6px 24px rgba(124,106,255,0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(124,106,255,0.4);
        }

        .btn-outline {
          background: transparent;
          color: var(--violet);
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 15px;
          border: 2px solid #c4b5fd;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-outline:hover {
          background: var(--violet-xpale);
          border-color: var(--violet);
          transform: translateY(-2px);
        }

        .timeline-line {
          position: absolute;
          left: 20px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #7c6aff, #e879a0);
        }

        .timeline-dot {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }

        .skill-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 50px;
          background: white;
          border: 1.5px solid var(--border);
          font-size: 13px;
          font-weight: 500;
          color: var(--text);
          transition: all 0.25s;
          cursor: default;
        }

        .skill-chip:hover {
          border-color: #c4b5fd;
          background: var(--violet-xpale);
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(124,106,255,0.15);
        }

        .photo-ring {
          width: min(400px, 85vw);
          height: min(400px, 85vw);
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(135deg, #7c6aff, #c084fc, #e879a0);
          box-shadow: 0 16px 48px rgba(124,106,255,0.3);
        }

        .photo-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: var(--violet-pale);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.18;
          pointer-events: none;
        }

        input, textarea {
          width: 100%;
          padding: 14px 18px;
          background: var(--violet-xpale);
          border: 1.5px solid var(--border);
          border-radius: 14px;
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
        }

        input:focus, textarea:focus {
          border-color: var(--violet-light);
          background: white;
        }

        input::placeholder, textarea::placeholder {
          color: var(--text-light);
        }

        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: #c4b5fd; border-radius: 3px; }
      `}</style>

      {/* ── NAV ── */}
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: "rgba(250,249,255,0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid #ede9fe",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
            <div className="display" style={{ fontSize: 22, fontWeight: 800, color: "#1a1628" }}>
              <span className="gradient-text">Youka</span>
              <span style={{ color: "#a09ab8", fontWeight: 400, fontSize: 13, marginLeft: 6 }}>— dev</span>
            </div>

            {/* Desktop */}
            <div style={{ display: "flex", gap: 4 }} className="hidden md:flex">
              {navLinks.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className={`nav-pill ${activeSection === l.id ? "active" : ""}`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollTo("contact")}
              className="btn-primary hidden md:block"
              style={{ padding: "10px 24px", fontSize: 13 }}
            >
              Me contacter
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#1a1628" }}
              className="md:hidden"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div style={{ background: "white", borderTop: "1px solid #ede9fe", padding: "16px 24px" }}>
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  padding: "12px 16px", borderRadius: 12, border: "none",
                  background: activeSection === l.id ? "#f5f3ff" : "none",
                  color: activeSection === l.id ? "#7c6aff" : "#6b6580",
                  fontSize: 15, fontWeight: 500, cursor: "pointer", marginBottom: 4,
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section
        id="accueil"
        style={{
          minHeight: "100vh", display: "flex", alignItems: "center",
          paddingTop: 100, paddingBottom: 80, position: "relative", overflow: "hidden",
        }}
      >
        {/* Blobs */}
        <div className="blob" style={{ width: 500, height: 500, background: "#c4b5fd", top: -100, right: -100 }} />
        <div className="blob" style={{ width: 400, height: 400, background: "#f0abfc", bottom: -80, left: -80 }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 80, flexWrap: "wrap", justifyContent: "space-between" }}>
            {/* Text */}
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#f5f3ff", border: "1px solid #ddd6fe",
                borderRadius: 50, padding: "6px 16px", marginBottom: 24,
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#7c6aff", display: "inline-block" }} />
                <span style={{ fontSize: 12, fontWeight: 600, color: "#7c6aff", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                  Développeuse Web Junior | React & Odoo ERP
                </span>
              </div>

              <h1 className="display" style={{ fontSize: "clamp(42px, 6vw, 72px)", lineHeight: 1.1, color: "#1a1628", marginBottom: 8 }}>
                Ange Carolle
              </h1>
              <h1 className="display gradient-text" style={{ fontSize: "clamp(42px, 6vw, 72px)", lineHeight: 1.1, marginBottom: 28 }}>
                Youka Djomgoue
              </h1>

              <p style={{ fontSize: 17, color: "#6b6580", lineHeight: 1.8, maxWidth: 500, marginBottom: 40 }}>
                Je conçois des interfaces web modernes et des applications métier orientées expérience utilisateur.
                Passionnée par React.js, les systèmes ERP comme Odoo et les solutions digitales performantes.{" "}
                {/* <span style={{ color: "#7c6aff", fontWeight: 600 }}>React.js</span>,{" "}
                <span style={{ color: "#c084fc", fontWeight: 600 }}>Laravel</span> et{" "}
                <span style={{ color: "#e879a0", fontWeight: 600 }}>Odoo ERP</span>. */}
              </p>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <button className="btn-primary" onClick={() => scrollTo("projets")}>
                  Voir mon portfolio
                </button>
                <button className="btn-outline" onClick={() => scrollTo("contact")}>
                  Travailler ensemble
                </button>
              </div>

              <div style={{ display: "flex", gap: 20, marginTop: 36 }}>
                <a
                  href="https://www.linkedin.com/in/ange-carolle-youka-djomgoue-30b325266"
                  style={{ color: "#a09ab8", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.target.style.color = "#7c6aff")}
                  onMouseLeave={(e) => (e.target.style.color = "#a09ab8")}
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/Ange-carolle"
                  style={{ color: "#a09ab8", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.target.style.color = "#7c6aff")}
                  onMouseLeave={(e) => (e.target.style.color = "#a09ab8")}
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:y.carolle07@gmail.com"
                  style={{ color: "#a09ab8", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.target.style.color = "#7c6aff")}
                  onMouseLeave={(e) => (e.target.style.color = "#a09ab8")}
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Photo */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
              <div className="photo-ring">
                <div className="photo-inner">
                  {PROFILE_PHOTO ? (
                    <img src={PROFILE_PHOTO} alt="Ange Carolle" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    <span className="display gradient-text" style={{ fontSize: 52, fontWeight: 800 }}>YD</span>
                  )}
                </div>
              </div>
              {/* Stats */}
              {/* <div style={{ display: "flex", gap: 12 }}>
                {[
                  { val: "3+", label: "ans d'expérience" },
                  { val: "8+", label: "projets livrés" },
                ].map((s) => (
                  <div key={s.val} style={{
                    background: "white", border: "1px solid #ede9fe",
                    borderRadius: 16, padding: "12px 20px", textAlign: "center",
                    boxShadow: "0 4px 16px rgba(124,106,255,0.08)",
                  }}>
                    <div className="display gradient-text" style={{ fontSize: 26, fontWeight: 800 }}>{s.val}</div>
                    <div style={{ fontSize: 11, color: "#a09ab8", fontWeight: 500 }}>{s.label}</div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", animation: "bounce 2s infinite" }}>
          <ChevronDown size={28} style={{ color: "#c4b5fd" }} />
        </div>
      </section>

      {/* ── À PROPOS ── */}
      <section id="apropos" style={{ padding: "100px 24px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div id="anim-about" data-animate style={{ marginBottom: 60 }} className={anim("anim-about")}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#7c6aff", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>
              QUI SUIS-JE
            </p>
            <h2 className="display" style={{ fontSize: "clamp(32px, 5vw, 52px)", color: "#1a1628" }}>
              À <span className="gradient-text">propos</span>
            </h2>
          </div>

          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", }}>
            <div id="anim-about2" data-animate className={anim("anim-about2")} style={{ transition: "all 0.7s 0.1s" }}>
              <p style={{ fontSize: 16, color: "#6b6580", lineHeight: 1.9, marginBottom: 20 }}>
                Développeuse web passionnée par la création d’interfaces modernes, responsives et orientées utilisateur.
              </p>
              <p style={{ fontSize: 16, color: "#6b6580", lineHeight: 1.9, marginBottom: 20 }}>
                Je travaille principalement avec React.js, Tailwind CSS et les technologies web modernes pour concevoir des applications claires, performantes et agréables à utiliser.
              </p>
              <p style={{ fontSize: 16, color: "#6b6580", lineHeight: 1.9, marginBottom: 36 }}>
                Je m’intéresse également aux systèmes ERP et aux outils de gestion d’entreprise comme Odoo et GLPI, avec une volonté constante d’apprendre et de progresser dans le développement d’applications métier.
                J’accorde une grande importance à la qualité visuelle, à l’expérience utilisateur et à la collaboration sur les projets.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <a
                  href="https://www.linkedin.com/in/ange-carolle-youka-djomgoue-30b325266"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "10px 20px", background: "#0077b5", color: "white",
                    borderRadius: 12, fontSize: 14, fontWeight: 600, textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a
                  href="https://github.com/Ange-carolle"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "10px 20px", background: "#1a1628", color: "white",
                    borderRadius: 12, fontSize: 14, fontWeight: 600, textDecoration: "none",
                  }}
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>

            <div id="anim-about3" data-animate className={anim("anim-about3")} style={{ transition: "all 0.7s 0.2s" }}>
              <div className="card" style={{ padding: 32 }}>
                {[
                  { icon: Mail, label: "Email", val: "y.carolle07@gmail.com", color: "#7c6aff" },
                  { icon: Phone, label: "Téléphone", val: "+237 654 256 536", color: "#c084fc" },
                  { icon: MapPin, label: "Localisation", val: "Douala, Cameroun", color: "#e879a0" },
                //   { icon: Award, label: "Expérience", val: "3+ années", color: "#fb923c" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: item.color + "18",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <item.icon size={20} style={{ color: item.color }} />
                    </div>
                    <div>
                      <p style={{ fontSize: 11, color: "#a09ab8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>{item.label}</p>
                      <p style={{ fontSize: 14, color: "#1a1628", fontWeight: 500 }}>{item.val}</p>
                    </div>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid #ede9fe", paddingTop: 20, marginTop: 4 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981" }} />
                    <span style={{ fontSize: 14, color: "#10b981", fontWeight: 600 }}>Disponible pour nouveaux projets</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: "100px 24px", background: "#faf9ff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#7c6aff", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>
              CE QUE JE FAIS
            </p>
            <h2 className="display" style={{ fontSize: "clamp(32px, 5vw, 52px)", color: "#1a1628" }}>
              Mes <span className="gradient-text">services</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {services.map((s, i) => (
              <div key={i} className="card" style={{ padding: 32 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: "linear-gradient(135deg, #7c6aff, #c084fc)",
                  display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20,
                }}>
                  <s.icon size={24} style={{ color: "white" }} />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a1628", marginBottom: 10 }}>{s.titre}</h3>
                <p style={{ fontSize: 14, color: "#6b6580", lineHeight: 1.7, marginBottom: 20 }}>{s.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {s.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <ChevronRight size={14} style={{ color: "#7c6aff", flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: "#6b6580" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARCOURS ── */}
      <section id="parcours" style={{ padding: "100px 24px", background: "white" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ marginBottom: 60 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#7c6aff", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>
              MON HISTOIRE
            </p>
            <h2 className="display" style={{ fontSize: "clamp(32px, 5vw, 52px)", color: "#1a1628" }}>
              Formations &{" "}
              <span className="gradient-text">expériences</span>
            </h2>
          </div>

          <div style={{ position: "relative", paddingLeft: 56 }}>
            <div className="timeline-line" />
            {timeline.map((item, i) => (
              <div
                key={i}
                id={`tl-${i}`}
                data-animate
                className={anim(`tl-${i}`)}
                style={{
                  display: "flex", gap: 20, marginBottom: 40,
                  transition: `all 0.7s ${i * 0.15}s`,
                }}
              >
                <div
                  className="timeline-dot"
                  style={{
                    background: item.type === "formation" ? "#ede9fe" : "#fce7f3",
                    position: "absolute", left: 0,
                  }}
                >
                  {item.type === "formation"
                    ? <GraduationCap size={16} style={{ color: "#7c6aff" }} />
                    : <Briefcase size={16} style={{ color: "#e879a0" }} />
                  }
                </div>

                <div className="card" style={{ padding: 24, flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1628" }}>{item.title}</h3>
                    <span style={{
                      fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 50,
                      background: item.type === "formation" ? "#f5f3ff" : "#fdf2f8",
                      color: item.type === "formation" ? "#7c6aff" : "#e879a0",
                      border: `1px solid ${item.type === "formation" ? "#ddd6fe" : "#fbcfe8"}`,
                    }}>
                      {item.year}
                    </span>
                  </div>
                  <p style={{ fontSize: 13, color: "#7c6aff", fontWeight: 600, marginBottom: 8 }}>{item.place}</p>
                  <p style={{ fontSize: 14, color: "#6b6580", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPÉTENCES ── */}
      <section id="competences" style={{ padding: "100px 24px", background: "#faf9ff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#7c6aff", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>
              TECHNOLOGIES
            </p>
            <h2 className="display" style={{ fontSize: "clamp(32px, 5vw, 52px)", color: "#1a1628" }}>
              Mes <span className="gradient-text">Compétences</span>
            </h2>
            <p style={{ fontSize: 16, color: "#6b6580", marginTop: 16, maxWidth: 480, margin: "16px auto 0" }}>
              Technologies utilisées pour créer des expériences exceptionnelles
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            {competences.map((c, i) => (
              <div
                key={c.nom}
                id={`sk-${i}`}
                data-animate
                className={`skill-chip ${anim(`sk-${i}`)}`}
                style={{ transition: `all 0.5s ${i * 0.07}s` }}
              >
                <div style={{
                  width: 28, height: 28, borderRadius: 8,
                  background: c.color + "20",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <c.icon size={14} style={{ color: c.color }} />
                </div>
                <span style={{ fontWeight: 600, color: "#1a1628" }}>{c.nom}</span>
                <span style={{ color: "#a09ab8", fontSize: 12 }}>— {c.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJETS ── */}
      <section id="projets" style={{ padding: "100px 24px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#7c6aff", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>
              MES RÉALISATIONS
            </p>
            <h2 className="display" style={{ fontSize: "clamp(32px, 5vw, 52px)", color: "#1a1628" }}>
              <span className="gradient-text">Portfolio</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 28 }}>
            {projets.map((p, i) => (
              <div
                key={i}
                id={`proj-${i}`}
                data-animate
                className={anim(`proj-${i}`)}
                style={{
                  transition: `all 0.7s ${i * 0.1}s`,
                  background: "white",
                  border: "1px solid #ede9fe",
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(124,106,255,0.06)",
                  transition: `transform 0.3s, box-shadow 0.3s, all 0.7s ${i * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 16px 48px rgba(124,106,255,0.15)";
                  e.currentTarget.style.borderColor = "#c4b5fd";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(124,106,255,0.06)";
                  e.currentTarget.style.borderColor = "#ede9fe";
                }}
              >
                <div style={{ position: "relative", overflow: "hidden", height: 220 }}>
                  <img
                    src={p.image}
                    alt={p.titre}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
                    onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(26,22,40,0.5), transparent)",
                  }} />
                  
                  <div style={{
                    position: "absolute", top: 14, right: 14,
                    background: p.status === "Terminé" ? "#f0fdf4" : "#fff7ed",
                    color: p.status === "g" ? "#16a34a" : "#ea580c",
                    border: `1px solid ${p.status === "Terminé" ? "#bbf7d0" : "#fed7aa"}`,
                    padding: "3px 10px", borderRadius: 50, fontSize: 11, fontWeight: 700,
                  }}>
                    {p.status}
                  </div>
                </div>

                <div style={{ padding: 28 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1a1628", marginBottom: 10 }}>{p.titre}</h3>
                  <p style={{ fontSize: 14, color: "#6b6580", lineHeight: 1.7, marginBottom: 18 }}>{p.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                    {p.techs.map((t) => (
                      <span key={t} style={{
                        padding: "4px 12px", borderRadius: 50, fontSize: 12, fontWeight: 600,
                        background: "#f5f3ff", color: "#7c6aff", border: "1px solid #ddd6fe",
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 20 }}>
                    <a href="#" style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      fontSize: 13, fontWeight: 700, color: "#7c6aff", textDecoration: "none",
                    }}>
                      Voir le projet <ExternalLink size={13} />
                    </a>
                    <a href="#" style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      fontSize: 13, fontWeight: 500, color: "#a09ab8", textDecoration: "none",
                    }}>
                      <Github size={14} /> Code source
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "100px 24px", background: "#faf9ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#7c6aff", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>
              TRAVAILLONS ENSEMBLE
            </p>
            <h2 className="display" style={{ fontSize: "clamp(32px, 5vw, 52px)", color: "#1a1628" }}>
              <span className="gradient-text">Collaborons</span>
            </h2>
            <p style={{ fontSize: 16, color: "#6b6580", maxWidth: 500, margin: "16px auto 0", lineHeight: 1.7 }}>
              Un projet en tête ? Envoyez-moi un message et créons quelque chose d'exceptionnel ensemble.
            </p>
          </div>

          <div
            className="contact-grid"
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.4fr",
                gap: 28,
                alignItems: "start",
            }}
          >
            <div className="card" style={{ padding: 32 }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1a1628", marginBottom: 24 }}>Me contacter</h3>
              {[
                { icon: Mail, label: "Email", val: "y.carolle07@gmail.com", href: "mailto:y.carolle07@gmail.com", color: "#7c6aff" },
                { icon: Phone, label: "Téléphone", val: "+237 654 256 536", href: "tel:+237654256536", color: "#c084fc" },
                { icon: MapPin, label: "Localisation", val: "Douala, Cameroun", href: null, color: "#e879a0" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 12,
                    background: item.color + "15",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <item.icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p style={{ fontSize: 11, color: "#a09ab8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>{item.label}</p>
                    {item.href
                      ? <a href={item.href} style={{ fontSize: 13, color: "#1a1628", fontWeight: 500, textDecoration: "none" }}>{item.val}</a>
                      : <p style={{ fontSize: 13, color: "#1a1628", fontWeight: 500 }}>{item.val}</p>
                    }
                  </div>
                </div>
              ))}

              <div style={{ borderTop: "1px solid #ede9fe", paddingTop: 20, marginTop: 8 }}>
                <div style={{ display: "flex", gap: 12 }}>
                  {[
                    { href: "https://www.linkedin.com/in/ange-carolle-youka-djomgoue-30b325266", icon: Linkedin },
                    { href: "https://github.com/Ange-carolle", icon: Github },
                  ].map((s) => (
                    <a key={s.href} href={s.href} style={{
                      width: 38, height: 38, borderRadius: 10, background: "#f5f3ff",
                      border: "1px solid #ddd6fe", display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#7c6aff", transition: "all 0.2s",
                    }}>
                      <s.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 32 }}>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 18 }}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#6b6580", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 8 }}>
                    Nom
                  </label>
                  <input
                    type="text" name="name" required
                    placeholder="Votre nom complet"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div style={{ marginBottom: 18 }}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#6b6580", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 8 }}>
                    Email
                  </label>
                  <input
                    type="email" name="email" required
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#6b6580", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 8 }}>
                    Message
                  </label>
                  <textarea
                    name="message" required rows={5}
                    placeholder="Décrivez votre projet..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: "100%", textAlign: "center" }}>
                  Envoyer le message
                </button>

                {formStatus === "success" && (
                  <div style={{
                    marginTop: 16, padding: "12px 16px", borderRadius: 12,
                    background: "#f0fdf4", border: "1px solid #bbf7d0",
                    color: "#16a34a", fontSize: 14, fontWeight: 500, textAlign: "center",
                  }}>
                    ✓ Message envoyé ! Je vous répondrai sous 24h.
                  </div>
                )}
                {formStatus === "error" && (
                  <div style={{
                    marginTop: 16, padding: "12px 16px", borderRadius: 12,
                    background: "#fef2f2", border: "1px solid #fecaca",
                    color: "#dc2626", fontSize: 14, fontWeight: 500, textAlign: "center",
                  }}>
                    Une erreur est survenue. Réessayez.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        padding: "40px 24px", background: "#1a1628",
        borderTop: "1px solid #2d2640", textAlign: "center",
      }}>
        <div className="display gradient-text" style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>
          Youka Djomgoue
        </div>
        <p style={{ color: "#6b6580", fontSize: 13, marginBottom: 20 }}>
          © 2025 Ange Carolle Youka Djomgoue — Tous droits réservés.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
          {[
            { href: "https://www.linkedin.com/in/ange-carolle-youka-djomgoue-30b325266", icon: Linkedin },
            { href: "https://github.com/Ange-carolle", icon: Github },
            { href: "mailto:y.carolle07@gmail.com", icon: Mail },
          ].map((s) => (
            <a key={s.href} href={s.href} style={{
              width: 38, height: 38, borderRadius: 10,
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#6b6580", transition: "all 0.2s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#c4b5fd"; e.currentTarget.style.borderColor = "#7c6aff50"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#6b6580"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
            >
              <s.icon size={15} />
            </a>
          ))}
        </div>
      </footer>

      {/* ── SCROLL TOP ── */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="btn-primary"
          style={{
            position: "fixed", bottom: 28, right: 28, zIndex: 99,
            width: 48, height: 48, borderRadius: "50%", padding: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <ArrowUp size={20} />
        </button>
      )}

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @media (max-width: 768px) {
          .hidden.md\\:flex { display: none !important; }
          .hidden.md\\:block { display: none !important; }
          .md\\:hidden { display: block !important; }
          /* ABOUT */
        .about-grid {
        grid-template-columns: 1fr !important;
        gap: 36px !important;
        }

        /* CONTACT */
        .contact-grid {
        grid-template-columns: 1fr !important;
        gap: 24px !important;
        }

        /* ABOUT + CONTACT cards */
        .about-grid .card,
        .contact-grid .card {
        padding: 22px !important;
        }

        /* ABOUT text */
        .about-grid p {
        font-size: 15px !important;
        line-height: 1.9 !important;
        }

        /* CONTACT form */
        .contact-grid form {
        width: 100%;
        }

        /* CONTACT inputs */
        .contact-grid input,
        .contact-grid textarea {
        font-size: 16px !important;
        }

        /* CONTACT buttons */
        .contact-grid .btn-primary {
        width: 100%;
        }

        /* FIX overflow mobile */
        .about-grid,
        .contact-grid {
        overflow: hidden;
        }
        }
        @media (min-width: 769px) {
          .md\\:hidden { display: none !important; }
          .hidden.md\\:flex { display: flex !important; }
          .hidden.md\\:block { display: block !important; }
        }
      `}</style>
    </div>
  );
}