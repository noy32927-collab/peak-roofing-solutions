document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', String(!isOpen));
  });
}

// Before / After slider
const baSlider = document.getElementById('baSlider');
const baRange = document.getElementById('baRange');
const baBeforeWrap = document.getElementById('baBeforeWrap');
const baBeforeImg = document.getElementById('baBeforeImg');
const baHandle = document.getElementById('baHandle');
if (baSlider && baRange && baBeforeWrap && baBeforeImg && baHandle) {
  // Keep the "before" photo at the same rendered size as the "after" photo:
  // its width must match the full slider width, not the clipped wrapper width.
  const syncBeforeImageSize = () => {
    baBeforeImg.style.width = baSlider.offsetWidth + 'px';
  };
  syncBeforeImageSize();
  window.addEventListener('resize', syncBeforeImageSize);

  baRange.addEventListener('input', () => {
    baBeforeWrap.style.width = baRange.value + '%';
    baHandle.style.left = baRange.value + '%';
  });
}

// Testimonial carousel
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.getElementById('testimonialPrev');
const nextBtn = document.getElementById('testimonialNext');
let currentSlide = 0;

function showSlide(index) {
  testimonialSlides.forEach((slide, i) => {
    slide.classList.toggle('hidden', i !== index);
  });
}

if (prevBtn && nextBtn && testimonialSlides.length) {
  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
    showSlide(currentSlide);
  });
  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % testimonialSlides.length;
    showSlide(currentSlide);
  });
}

// Estimate / contact form submission (no backend connected yet)
['estimate-form', 'contactForm'].forEach((id) => {
  const form = document.getElementById(id);
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thanks! This form is not yet connected to a backend. Replace this with a real submission handler (e.g. Formspree, Netlify Forms, or a custom API).');
    });
  }
});

// Gallery filter
const galleryFilters = document.querySelectorAll('.gallery-filter');
const galleryItems = document.querySelectorAll('.gallery-item');
if (galleryFilters.length && galleryItems.length) {
  galleryFilters.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      galleryFilters.forEach((b) => b.classList.remove('bg-navy', 'text-white'));
      galleryFilters.forEach((b) => b.classList.add('bg-surface', 'text-ink'));
      btn.classList.remove('bg-surface', 'text-ink');
      btn.classList.add('bg-navy', 'text-white');

      galleryItems.forEach((item) => {
        const show = filter === 'all' || item.dataset.category === filter;
        item.classList.toggle('hidden', !show);
      });
    });
  });
}
