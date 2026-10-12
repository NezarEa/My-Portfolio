/* =========================================================
   Nezar Dev — portfolio interactions
   ========================================================= */

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    a11y: {
      skip: "Skip to content",
      theme: "Toggle color theme",
      menu: "Open menu",
      close: "Close menu",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Nezar EL AYACHI",
      roles: [
        "Web & Mobile Developer",
        "Backend & Frontend Enthusiast",
        "Android & Flutter Developer",
      ],
      tagline:
        "I design and build web and mobile products — from REST APIs and databases to polished, responsive interfaces.",
      location: "Tamesna, Morocco",
      availability: "Open to opportunities",
      cta: {
        cv: "Download CV",
        contact: "Get in touch",
        projects: "View projects",
        print: "Print résumé",
      },
    },
    about: {
      title: "About me",
      subtitle: "Product-oriented developer",
      p1: "Product-oriented web and mobile developer with hands-on experience designing, building and improving web and Android applications. Comfortable working with APIs, databases, Firebase and modern development tools. Autonomous, curious and problem-solving minded, I enjoy joining teams where I can contribute to useful products while growing my skills.",
      facts: {
        location: "Location",
        languages: "Languages",
        availability: "Availability",
        education: "Education",
        locationValue: "Tamesna, Morocco",
        languagesValue: "Arabic, English, French",
        availabilityValue: "Open to internships & junior roles",
        educationValue: "Licence in Web & Mobile Development",
      },
    },
    experience: {
      title: "Experience",
      subtitle: "Where I've worked",
      items: [
        {
          role: "Mobile Application Developer",
          company: "4D Business Consulting (4DBC)",
          period: "May 2026 – Jul 2026",
          location: "Agdal, Rabat",
          points: [
            "Built a Flutter mobile app based on the TBusinessWeek website, adapting the UX for Android and iOS.",
            "Integrated the WordPress REST API to fetch and display news content.",
            "Delivered onboarding, search, category filtering, article reading, favorites, notifications and navigation.",
          ],
        },
        {
          role: "Mobile Application Developer",
          company: "4D Business Consulting",
          period: "Mar 2025 – Apr 2025",
          location: "Agdal, Rabat",
          points: [
            "Developed and improved Android apps with Kotlin and Android Studio.",
            "Migrated a video-streaming web app to a native Android application.",
            "Integrated Firebase, Retrofit and REST APIs for backend communication and data handling.",
          ],
        },
      ],
    },
    education: {
      title: "Education",
      subtitle: "My academic path",
      items: [
        {
          degree: "Licence in Web & Mobile Development",
          school:
            "Institut Supérieur de Management, d'Administration et de Génie Informatique",
          period: "Oct 2025 – Aug 2026",
          location: "Agdal, Rabat",
        },
        {
          degree: "Specialized Technician in Mobile Development",
          school: "Cité des Métiers et des Compétences",
          period: "Sep 2023 – Jun 2025",
          location: "Tamesna, Rabat",
        },
        {
          degree: "Baccalaureate — Physical Sciences",
          school: "Mohammad Essarraj High School",
          period: "Sep 2022 – Jun 2023",
          location: "Sidi Yahya Zaer",
        },
      ],
    },
    skills: {
      title: "Skills",
      subtitle: "What I work with",
      groups: {
        web: "Web Development",
        backend: "Backend",
        mobile: "Mobile (Android)",
        db: "Databases",
        tools: "Tools",
        soft: "Soft skills",
      },
    },
    languages: {
      title: "Languages",
      subtitle: "Communication",
      items: [
        { name: "Arabic", level: "Native" },
        { name: "English", level: "Advanced" },
        { name: "French", level: "Basic" },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "Selected work",
      viewAll: "View all on GitHub",
      buttons: { github: "Code", demo: "Live demo", apk: "Demo APK" },
      items: [
        {
          desc: "Multilingual e-commerce platform for parapharmacy products with catalog, search, cart, an admin area and full platform management.",
        },
        {
          desc: "Secure, high-performance e-commerce website with an intuitive shopping experience for customers and powerful tools for admins.",
        },
        {
          desc: "Android app for managing taxi rides with real-time maps, authentication and API calls.",
        },
        {
          desc: "Mobile app to track and reduce your daily ecological footprint.",
        },
        {
          desc: "Dynamic web app built with HTML, CSS, JavaScript and PHP for content-driven sites.",
        },
        {
          desc: "Video-meeting mobile app built with Kotlin and ZegoCloud backend integration.",
        },
        {
          desc: "Android contact manager with dark mode, language selection, quick call/SMS actions and recent calls.",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Let's build something",
      name: "Your name",
      email: "Your email",
      message: "Your message",
      send: "Send message",
      sending: "Sending…",
      success: "Your message has been sent successfully!",
      error: "Something went wrong. Please try again.",
      info: { email: "Email", phone: "Phone", location: "Location" },
    },
    footer: {
      rights: "All rights reserved.",
      license: "Personal data & content — all rights reserved.",
      built: "Built with care",
      backTop: "Back to top",
    },
  },

  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      experience: "Expérience",
      education: "Formation",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
    },
    a11y: {
      skip: "Aller au contenu",
      theme: "Changer de thème",
      menu: "Ouvrir le menu",
      close: "Fermer le menu",
    },
    hero: {
      greeting: "Bonjour, je suis",
      name: "Nezar EL AYACHI",
      roles: [
        "Développeur Web & Mobile",
        "Passionné Backend & Frontend",
        "Développeur Android & Flutter",
      ],
      tagline:
        "Je conçois et développe des produits web et mobiles — des API REST et bases de données aux interfaces soignées et responsives.",
      location: "Tamesna, Maroc",
      availability: "Ouvert aux opportunités",
      cta: {
        cv: "Télécharger le CV",
        contact: "Me contacter",
        projects: "Voir les projets",
        print: "Imprimer le CV",
      },
    },
    about: {
      title: "À propos",
      subtitle: "Développeur orienté produit",
      p1: "Développeur web et mobile orienté produit, avec une expérience pratique dans la conception, le développement et l'amélioration d'applications web et Android. À l'aise avec les API, les bases de données, Firebase et les outils de développement modernes. Autonome, curieux et orienté résolution de problèmes, j'aime rejoindre des équipes où je peux contribuer à des produits utiles tout en développant mes compétences.",
      facts: {
        location: "Localisation",
        languages: "Langues",
        availability: "Disponibilité",
        education: "Formation",
        locationValue: "Tamesna, Maroc",
        languagesValue: "Arabe, Anglais, Français",
        availabilityValue: "Ouvert aux stages & postes junior",
        educationValue: "Licence en Développement Web & Mobile",
      },
    },
    experience: {
      title: "Expérience",
      subtitle: "Parcours professionnel",
      items: [
        {
          role: "Développeur d'applications mobiles",
          company: "4D Business Consulting (4DBC)",
          period: "Mai 2026 – Juil. 2026",
          location: "Agdal, Rabat",
          points: [
            "Conception et développement d'une application mobile Flutter à partir du site TBusinessWeek, avec adaptation de l'expérience utilisateur à Android et iOS.",
            "Intégration de la WordPress REST API pour récupérer et afficher les actualités.",
            "Développement de l'onboarding, de la recherche, du filtrage par catégories, de la lecture d'articles, des favoris, des notifications et de la navigation.",
          ],
        },
        {
          role: "Développeur d'applications mobiles",
          company: "4D Business Consulting",
          period: "Mars 2025 – Avr. 2025",
          location: "Agdal, Rabat",
          points: [
            "Développement et évolution d'applications Android avec Kotlin et Android Studio.",
            "Migration d'une application web de streaming vidéo vers une application mobile Android native.",
            "Intégration de Firebase, Retrofit et d'API REST pour la communication backend et la gestion des données.",
          ],
        },
      ],
    },
    education: {
      title: "Formation",
      subtitle: "Parcours académique",
      items: [
        {
          degree: "Licence en Développement Web & Mobile",
          school:
            "Institut Supérieur de Management, d'Administration et de Génie Informatique",
          period: "Oct. 2025 – Août 2026",
          location: "Agdal, Rabat",
        },
        {
          degree: "Technicien Spécialisé en Développement Mobile",
          school: "Cité des Métiers et des Compétences",
          period: "Sept. 2023 – Juin 2025",
          location: "Tamesna, Rabat",
        },
        {
          degree: "Baccalauréat — Sciences Physiques",
          school: "Lycée Mohammad Essarraj",
          period: "Sept. 2022 – Juin 2023",
          location: "Sidi Yahya Zaer",
        },
      ],
    },
    skills: {
      title: "Compétences",
      subtitle: "Mes outils",
      groups: {
        web: "Développement Web",
        backend: "Backend",
        mobile: "Mobile (Android)",
        db: "Bases de données",
        tools: "Outils",
        soft: "Compétences humaines",
      },
    },
    languages: {
      title: "Langues",
      subtitle: "Communication",
      items: [
        { name: "Arabe", level: "Langue maternelle" },
        { name: "Anglais", level: "Avancé" },
        { name: "Français", level: "Basique" },
      ],
    },
    projects: {
      title: "Projets",
      subtitle: "Travaux sélectionnés",
      viewAll: "Voir tout sur GitHub",
      buttons: { github: "Code", demo: "Démo", apk: "APK démo" },
      items: [
        {
          desc: "Plateforme e-commerce multilingue dédiée aux produits de parapharmacie : catalogue, recherche, panier, espace d'administration et gestion complète de la plateforme.",
        },
        {
          desc: "Site e-commerce sécurisé et performant, offrant une expérience d'achat intuitive aux clients et des outils de gestion puissants aux administrateurs.",
        },
        {
          desc: "Application Android de gestion de trajets taxi avec carte en temps réel, authentification et appels API.",
        },
        {
          desc: "Application mobile pour suivre et réduire son empreinte écologique au quotidien.",
        },
        {
          desc: "Application web dynamique construite avec HTML, CSS, JavaScript et PHP.",
        },
        {
          desc: "Application mobile de visioconférence développée avec Kotlin et l'intégration backend ZegoCloud.",
        },
        {
          desc: "Gestionnaire de contacts Android avec mode sombre, choix de langue, actions rapides (appels/SMS) et appels récents.",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Construisons quelque chose",
      name: "Votre nom",
      email: "Votre email",
      message: "Votre message",
      send: "Envoyer le message",
      sending: "Envoi…",
      success: "Votre message a été envoyé avec succès !",
      error: "Un problème est survenu. Veuillez réessayer.",
      info: { email: "Email", phone: "Téléphone", location: "Localisation" },
    },
    footer: {
      rights: "Tous droits réservés.",
      license: "Données personnelles & contenu — tous droits réservés.",
      built: "Réalisé avec soin",
      backTop: "Retour en haut",
    },
  },
};

let currentLang = localStorage.getItem("lang") || "en";

function t(...keys) {
  let obj = translations[currentLang];
  for (const k of keys) {
    if (obj && typeof obj === "object" && k in obj) obj = obj[k];
    else return keys.join(".");
  }
  return obj;
}

/* -------------------- translations -------------------- */
function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const keys = el.getAttribute("data-i18n").split(".");
    const text = t(...keys);
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = text;
    } else {
      el.textContent = text;
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const keys = el.getAttribute("data-i18n-aria").split(".");
    el.setAttribute("aria-label", t(...keys));
  });

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) langBtn.textContent = currentLang === "en" ? "FR" : "EN";
  const langBtnMobile = document.getElementById("lang-toggle-mobile");
  if (langBtnMobile) langBtnMobile.textContent = currentLang === "en" ? "FR" : "EN";

  if (window.typedInstance) window.typedInstance.destroy();
  const typewriterEl = document.getElementById("typewriter");
  if (typewriterEl && typeof Typed !== "undefined") {
    const strings = t("hero", "roles");
    if (Array.isArray(strings)) {
      window.typedInstance = new Typed("#typewriter", {
        strings,
        typeSpeed: 45,
        backSpeed: 30,
        backDelay: 1600,
        loop: true,
      });
    }
  }

  document.documentElement.lang = currentLang;
}

function toggleLang() {
  currentLang = currentLang === "en" ? "fr" : "en";
  localStorage.setItem("lang", currentLang);
  applyTranslations();
}

/* -------------------- theme -------------------- */
function updateThemeIcon() {
  const isLight = document.documentElement.classList.contains("light");
  const icon = document.querySelector("#theme-toggle i");
  if (icon) icon.className = isLight ? "fa-solid fa-moon" : "fa-solid fa-sun";
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", isLight ? "#f5f7fb" : "#0a0f1e");
}

function applyTheme(theme) {
  document.documentElement.classList.toggle("light", theme === "light");
  localStorage.setItem("theme", theme);
  updateThemeIcon();
}

function toggleTheme() {
  const isLight = document.documentElement.classList.contains("light");
  applyTheme(isLight ? "dark" : "light");
}

/* -------------------- boot -------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  updateThemeIcon();
  document.getElementById("theme-toggle")?.addEventListener("click", toggleTheme);
  document.getElementById("lang-toggle")?.addEventListener("click", toggleLang);
  document.getElementById("lang-toggle-mobile")?.addEventListener("click", toggleLang);

  applyTranslations();

  if (typeof AOS !== "undefined") {
    if (reduceMotion) document.documentElement.classList.add("aos-disabled");
    AOS.init({ duration: 800, easing: "ease-out", once: true, disable: reduceMotion });
  }

  /* smooth scrolling */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      }
    });
  });

  /* mobile menu */
  const menuToggle = document.getElementById("menu-toggle");
  const menuClose = document.getElementById("menu-close");
  const mobileMenu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("overlay");

  const openMenu = () => {
    mobileMenu?.classList.remove("translate-x-full");
    overlay?.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  };
  const closeMenu = () => {
    mobileMenu?.classList.add("translate-x-full");
    overlay?.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  };
  menuToggle?.addEventListener("click", openMenu);
  menuClose?.addEventListener("click", closeMenu);
  overlay?.addEventListener("click", closeMenu);
  mobileMenu?.querySelectorAll("a").forEach((l) => l.addEventListener("click", closeMenu));

  /* scroll progress */
  const progress = document.getElementById("scroll-progress");
  const backTop = document.getElementById("back-to-top");
  const onScroll = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    if (progress) progress.style.width = pct + "%";
    if (backTop) backTop.classList.toggle("hidden", h.scrollTop < 400);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* scroll spy */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link[href^='#']");
  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((l) =>
              l.classList.toggle("active", l.getAttribute("href") === "#" + id)
            );
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* animate skill bars when visible */
  const bars = document.querySelectorAll(".bar > span[data-level]");
  if (bars.length) {
    const animate = (span) => (span.style.width = span.getAttribute("data-level") + "%");
    if ("IntersectionObserver" in window && !reduceMotion) {
      const barObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animate(entry.target);
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      bars.forEach((b) => barObserver.observe(b));
    } else {
      bars.forEach(animate);
    }
  }

  /* contact form */
  const form = document.getElementById("contact-form");
  form?.addEventListener("submit", async function (event) {
    event.preventDefault();
    const msg = document.getElementById("success-message");
    const submitBtn = document.getElementById("submit-button");
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert(currentLang === "fr" ? "Tous les champs sont requis." : "All fields are required.");
      return;
    }

    const original = submitBtn ? submitBtn.textContent : "";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = t("contact", "sending");
    }

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        msg?.classList.remove("hidden");
        msg?.classList.add("opacity-100");
        form.reset();
        setTimeout(() => msg?.classList.add("hidden"), 6000);
      } else {
        alert(t("contact", "error"));
      }
    } catch (error) {
      alert(t("contact", "error"));
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = original;
      }
    }
  });

  /* print résumé */
  document.getElementById("print-resume")?.addEventListener("click", () => window.print());

  /* back to top */
  backTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });
});
