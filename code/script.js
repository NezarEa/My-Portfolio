const translations = {
  en: {
    nav: { home: "Home", about: "About", skills: "Skills", projects: "Projects", contact: "Contact" },
    hero: { greeting: "Hello, I'm", name: "Nezar EL AYACHI", typewriter: ["Web & Mobile Developer", "Backend & Frontend Enthusiast", "Passionate Programmer"] },
    buttons: { cv: "Download CV", contact: "Contact Info" },
    about: { title: "About Me", desc: "I'm a passionate web and mobile developer with a strong background in backend development and mobile applications. I enjoy building seamless, scalable, and intuitive experiences for users across web and mobile platforms." },
    skills: { title: "Skills", web: "Web Development", backend: "Backend Development", mobile: "Mobile Development", languages: "Programming Languages", tools: "Tools" },
    projects: { title: "Projects", github: "Show Project on GitHub", demo: "Demo", coming: "Coming Soon", view: "View Project" },
    contact: { title: "Contact", name: "Your Name", email: "Your Email", message: "Your Message", send: "Send Message", success: "Your message has been sent successfully!" },
    footer: { rights: "All rights reserved." }
  },
  fr: {
    nav: { home: "Accueil", about: "À propos", skills: "Compétences", projects: "Projets", contact: "Contact" },
    hero: { greeting: "Bonjour, je suis", name: "Nezar EL AYACHI", typewriter: ["Développeur Web & Mobile", "Passionné Backend & Frontend", "Programmeur passionné"] },
    buttons: { cv: "Télécharger CV", contact: "Me Contacter" },
    about: { title: "À propos de moi", desc: "Je suis un développeur web et mobile passionné avec une solide expérience en développement backend et applications mobiles. J'aime créer des expériences fluides, évolutives et intuitives pour les utilisateurs sur les plateformes web et mobiles." },
    skills: { title: "Compétences", web: "Développement Web", backend: "Développement Backend", mobile: "Développement Mobile", languages: "Langages de programmation", tools: "Outils" },
    projects: { title: "Projets", github: "Voir sur GitHub", demo: "Démo", coming: "Bientôt", view: "Voir le projet" },
    contact: { title: "Contact", name: "Votre Nom", email: "Votre Email", message: "Votre Message", send: "Envoyer", success: "Votre message a été envoyé avec succès !" },
    footer: { rights: "Tous droits réservés." }
  }
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

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const keys = el.getAttribute("data-i18n").split(".");
    const text = t(...keys);
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = text;
    } else {
      el.textContent = text;
    }
  });

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) langBtn.textContent = currentLang === "en" ? "FR" : "EN";

  if (window.typedInstance) {
    window.typedInstance.destroy();
  }
  const typewriterEl = document.getElementById("typewriter");
  if (typewriterEl && typeof Typed !== "undefined") {
    const strings = t("hero", "typewriter");
    if (Array.isArray(strings)) {
      window.typedInstance = new Typed("#typewriter", {
        strings,
        typeSpeed: 50,
        backSpeed: 50,
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

document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) langBtn.addEventListener("click", toggleLang);
  const langBtnMobile = document.getElementById("lang-toggle-mobile");
  if (langBtnMobile) langBtnMobile.addEventListener("click", toggleLang);
  applyTranslations();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

AOS.init({ duration: 1000, easing: "ease-in-out", once: true });

const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");

function openMenu() {
  mobileMenu.classList.remove("translate-x-full");
  overlay.classList.remove("hidden");
  overlay.classList.add("block");
  document.body.classList.add("overflow-hidden");
}

function closeMenu() {
  mobileMenu.classList.add("translate-x-full");
  overlay.classList.add("hidden");
  overlay.classList.remove("block");
  document.body.classList.remove("overflow-hidden");
}

menuToggle.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));

async function fetchGitHubRepos() {
  try {
    const res = await fetch("https://api.github.com/users/NezarEa/repos?sort=updated&per_page=9&type=owner");
    if (!res.ok) throw new Error("GitHub API error");
    const repos = await res.json();
    const wanted = [];
    const filtered = repos.filter(r => wanted.includes(r.name));
    const container = document.getElementById("projects-container");
    const loading = document.getElementById("projects-loading");
    if (!container) return;
    if (loading) loading.style.display = "none";
    filtered.forEach(repo => {
      const langColor = {
        JavaScript: "#f7df1e", Python: "#3572a5", Kotlin: "#A97BFF",
        PHP: "#4F5D95", HTML: "#e34c26", CSS: "#563d7c"
      };
      const color = langColor[repo.language] || "#6b7280";
      const desc = repo.description || (currentLang === "fr" ? "Aucune description" : "No description");
      const card = document.createElement("div");
      card.className = "bg-gradient-to-r from-teal-400 to-blue-500 p-6 rounded-lg shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-blue-500/50";
      card.setAttribute("data-aos", "fade-up");
      card.innerHTML = `
        <div class="w-full h-40 rounded-lg mb-4 bg-gray-800/50 flex items-center justify-center">
          <i class="fa-brands fa-github text-6xl text-white/40"></i>
        </div>
        <h3 class="font-semibold text-2xl text-white mb-2">${repo.name}</h3>
        <p class="mt-3 text-gray-200 text-lg line-clamp-2">${desc}</p>
        <div class="mt-3 flex items-center gap-2 text-sm text-gray-300">
          ${repo.language ? `<span class="w-3 h-3 rounded-full" style="background:${color}"></span><span>${repo.language}</span>` : ""}
          <span class="ml-auto"><i class="fa-regular fa-star"></i> ${repo.stargazers_count}</span>
        </div>
        <div class="mt-6 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
          <a href="${repo.html_url}" target="_blank" rel="noopener" style="text-decoration:none"
             class="text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full transition duration-300 w-full sm:w-auto flex items-center justify-center space-x-2 no-underline"
             aria-label="${currentLang === "fr" ? "Voir" : "View"} ${repo.name}">
            <i class="fa-brands fa-github"></i>
            <span data-i18n="projects.github">${currentLang === "fr" ? "Voir sur GitHub" : "Show Project on GitHub"}</span>
          </a>
          ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" rel="noopener" style="text-decoration:none"
               class="text-white bg-green-600 hover:bg-green-700 px-5 py-2 rounded-full transition duration-300 w-full sm:w-auto flex items-center justify-center space-x-2 no-underline">
            <i class="fa-solid fa-play"></i>
            <span>${currentLang === "fr" ? "Démo" : "Demo"}</span>
          </a>` : ""}
        </div>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    console.error("Failed to fetch repos:", err);
  }
}
fetchGitHubRepos();

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !email || !message) {
    alert(currentLang === "fr" ? "Tous les champs sont requis." : "All fields are required.");
    return false;
  }
  return true;
}

document.getElementById("contact-form")?.addEventListener("submit", async function (event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      const msg = document.getElementById("success-message");
      msg.classList.remove("hidden");
      msg.classList.add("opacity-100");
      form.reset();
    } else {
      alert(currentLang === "fr" ? "Un problème est survenu. Veuillez réessayer." : "There was a problem sending your message. Please try again.");
    }
  } catch (error) {
    alert(currentLang === "fr" ? "Une erreur est survenue. Veuillez réessayer." : "An error occurred. Please try again.");
  }
});

document.getElementById("back-to-top")?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
