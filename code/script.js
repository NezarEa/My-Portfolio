document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
});

const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');

// Function to open the mobile menu
const openMenu = () => {
  mobileMenu.classList.remove('translate-x-full');
  overlay.classList.remove('hidden');
  overlay.classList.add('block');
  // Prevent body from scrolling when menu is open
  document.body.classList.add('overflow-hidden');
};

// Function to close the mobile menu
const closeMenu = () => {
  mobileMenu.classList.add('translate-x-full');
  overlay.classList.add('hidden');
  overlay.classList.remove('block');
  // Allow body to scroll again
  document.body.classList.remove('overflow-hidden');
};

// Event listeners
menuToggle.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Close menu when a link is clicked
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("All fields are required.");
    return false;
  }
  return true;
}

document.getElementById("contact-form").addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent the default form submission

  const form = event.target;
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      document.getElementById("success-message").classList.remove("hidden");
      document.getElementById("success-message").classList.add("opacity-100");
      form.reset(); // Reset form fields
    } else {
      alert("There was a problem sending your message. Please try again.");
    }
  } catch (error) {
    alert("An error occurred. Please try again.");
  }
});

function showSuccessMessage() {
  const form = document.getElementById('contact-form');
  const submitButton = document.getElementById('submit-button');
  const successMessage = document.getElementById('success-message');

  form.classList.add('opacity-0');
  submitButton.disabled = true; 
  setTimeout(() => {
    successMessage.classList.remove('hidden');
    successMessage.classList.add('opacity-100');
  }, 500);

  setTimeout(() => {
    form.reset();
    setTimeout(() => {
      form.classList.remove('opacity-0');
      submitButton.disabled = false;
    }, 200);
  }, 3000);
}

document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('link-to-top').addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('bg-gray-900');
    document.body.classList.toggle('text-white');
    document.body.classList.toggle('bg-white');
    document.body.classList.toggle('text-black');
});
