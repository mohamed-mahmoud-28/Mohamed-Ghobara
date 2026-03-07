/* ═══ TRANSLATIONS ═══ */
const translations = {
  en: {
    nav_home: "Home", nav_about: "About", nav_certs: "Certificates", nav_projects: "Projects", nav_contact: "Contact",
    hero_tag: "Available for work", hero_title_1: "Hi, I'm", hero_title_2: "Front-End Developer",
    hero_desc: "Building responsive, accessible, and high-performance web experiences with clean, modern code and attention to every detail.",
    hero_cv: "Download CV", hero_view: "View Projects",
    chip_frontend: "Front-End", chip_ui: "UI / UX",
    about_label: "Who I Am", about_title: 'Passionate About <em>Crafting</em> Digital Experiences',
    about_desc: "I'm a front-end developer focused on creating clean, efficient web applications. With a keen eye for design and strong foundation in modern web technologies, I deliver exceptional user experiences.",
    about_years: "Year Experience", about_projects: "Projects Done", stat_certs: "Certifications",
    skills_title: "Tech Stack",
    certs_label: "My Certifications", certs_title: 'Certificates & <em>Achievements</em>', cert_view: "View Certificate",
    proj_label: "My Work", proj_title: 'Featured <em>Projects</em>', proj_live: "Live Demo", proj_code: "GitHub",
    contact_label: "Get In Touch", contact_title: 'Contact <em>Me</em>',
    contact_subtitle: "Have a project in mind or want to collaborate? I'd love to hear from you.",
    contact_subtitle2: "Have a project in mind or want to collaborate? I'd love to hear from you.",
    contact_together: "Let's work together",
    form_name: "Your Name", form_email: "Your Email", form_phone: "Phone",
    form_optional: "(Optional)", form_message: "Message", form_send: "Send Message",
    footer_copy: "© 2025 Mohamed Ghobara. All rights reserved.", scroll_label: "Scroll",
    theme_to_light: "Switch to light mode", theme_to_dark: "Switch to dark mode",
    lang_switch: "Switch to Arabic",
  },
  ar: {
    nav_home: "الرئيسية", nav_about: "عني", nav_certs: "الشهادات", nav_projects: "المشاريع", nav_contact: "تواصل",
    hero_tag: "متاح للعمل", hero_title_1: "مرحباً، أنا", hero_title_2: "مطور واجهات أمامية",
    hero_desc: "أبني تجارب ويب متجاوبة وسريعة الأداء بكود نظيف وحديث، مع اهتمام بكل التفاصيل.",
    hero_cv: "تحميل السيرة الذاتية", hero_view: "عرض المشاريع",
    chip_frontend: "واجهات أمامية", chip_ui: "تصميم UI",
    about_label: "من أنا", about_title: 'شغوف <em>بصنع</em> تجارب رقمية',
    about_desc: "أنا مطور واجهات أمامية متخصص في بناء تطبيقات ويب نظيفة وفعّالة، أقدم تجارب مستخدم استثنائية.",
    about_years: "سنة خبرة", about_projects: "مشروع منجز", stat_certs: "شهادة",
    skills_title: "التقنيات المستخدمة",
    certs_label: "شهاداتي", certs_title: 'الشهادات <em>والإنجازات</em>', cert_view: "عرض الشهادة",
    proj_label: "أعمالي", proj_title: 'أبرز <em>المشاريع</em>', proj_live: "معاينة مباشرة", proj_code: "GitHub",
    contact_label: "تواصل معي", contact_title: 'تواصل <em>معي</em>',
    contact_subtitle: "هل لديك مشروع أو تريد التعاون؟ يسعدني سماعك.",
    contact_subtitle2: "هل لديك مشروع أو تريد التعاون؟ يسعدني سماعك.",
    contact_together: "لنعمل معاً",
    form_name: "الاسم الكامل", form_email: "البريد الإلكتروني", form_phone: "الهاتف",
    form_optional: "(اختياري)", form_message: "الرسالة", form_send: "إرسال الرسالة",
    footer_copy: "© 2025 محمد محمود غبارة. جميع الحقوق محفوظة.", scroll_label: "مرر",
    theme_to_light: "التبديل للوضع الفاتح", theme_to_dark: "التبديل للوضع الداكن",
    lang_switch: "Switch to English",
  }
};

/* ═══ STATE ═══ */
let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'dark';
let sliderIndex = 0;
let slidesPerView = 2;
const TOTAL_CERTS = 4;
let autoSlideTimer = null;
let twTimer = null;
let twActiveLang = 'en';

/* ═══ TYPEWRITER ═══ */
function startTypewriter(lang) {
  twActiveLang = lang;
  const el = document.getElementById('hero-name-typed');
  if (!el) return;
  if (twTimer) { clearTimeout(twTimer); twTimer = null; }

  const textEn = el.dataset.en || 'Mohamed Ghobara';
  const textAr = el.dataset.ar || 'محمد محمود غبارة';

  if (lang === 'ar') {
    el.classList.add('rtl-cursor');
  } else {
    el.classList.remove('rtl-cursor');
  }

  const TYPE_SPEED = 85, DELETE_SPEED = 40, PAUSE_FULL = 2500, PAUSE_EMPTY = 400;

  function loop() {
    const text = twActiveLang === 'ar' ? textAr : textEn;
    function type(i) {
      el.textContent = text.slice(0, i);
      el.setAttribute('aria-label', text.slice(0, i));
      if (i < text.length) twTimer = setTimeout(() => type(i + 1), TYPE_SPEED);
      else twTimer = setTimeout(() => erase(text.length), PAUSE_FULL);
    }
    function erase(i) {
      el.textContent = text.slice(0, i);
      if (i > 0) twTimer = setTimeout(() => erase(i - 1), DELETE_SPEED);
      else twTimer = setTimeout(loop, PAUSE_EMPTY);
    }
    type(0);
  }

  el.textContent = '';
  twTimer = setTimeout(loop, 200);
}

/* ═══ DOMContentLoaded ═══ */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  applyTheme(currentTheme);
  applyLang(currentLang);
  startTypewriter(currentLang);
  initHamburger();
  initScrollReveal();
  initScrollTop();
  initActiveNav();
  initSlider();
  initModal();
  initCursor();
  initCountUp();
  initContactForm();
});

/* ═══ LOADER ═══ */
function initLoader() {
  const pctEl = document.getElementById('loader-pct');
  const barEl = document.getElementById('loader-bar');
  const progressEl = document.getElementById('loader-progress');
  let pct = 0;

  const interval = setInterval(() => {
    const inc = pct < 30 ? Math.random() * 5 + 3
      : pct < 60 ? Math.random() * 4 + 2
        : pct < 85 ? Math.random() * 3 + 1
          : Math.random() * 2 + 0.5;
    pct = Math.min(100, pct + inc);
    const rounded = Math.round(pct);
    pctEl.textContent = rounded + '%';
    barEl.style.width = pct + '%';
    if (progressEl) progressEl.setAttribute('aria-valuenow', rounded);

    if (pct >= 100) {
      clearInterval(interval);
      pctEl.textContent = '100%';
      barEl.style.width = '100%';
      setTimeout(() => document.getElementById('page-loader').classList.add('hidden'), 600);
    }
  }, 55);
}

/* ═══ THEME ═══ */
function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
  applyTheme(currentTheme);
}

function applyTheme(theme) {
  const html = document.documentElement;
  const themeBtn = document.getElementById('theme-btn');
  const t = translations[currentLang];

  if (theme === 'light') {
    html.classList.remove('dark');
    html.classList.add('light');
    document.body.style.background = '#f0f4f9';
    document.body.style.color = '#0d1b2a';
    if (themeBtn) themeBtn.setAttribute('aria-label', t.theme_to_dark || 'Switch to dark mode');
  } else {
    html.classList.add('dark');
    html.classList.remove('light');
    document.body.style.background = '#04070d';
    document.body.style.color = '#e4ecf5';
    if (themeBtn) themeBtn.setAttribute('aria-label', t.theme_to_light || 'Switch to light mode');
  }

  const iconDark = document.getElementById('theme-icon-dark');
  const iconLight = document.getElementById('theme-icon-light');
  if (iconDark) iconDark.classList.toggle('hidden', theme === 'light');
  if (iconLight) iconLight.classList.toggle('hidden', theme === 'dark');
}

/* ═══ CV DOWNLOAD ═══ */
function downloadCV() {
  const link = document.createElement('a');
  link.href = 'Mohamed Mahmoud CV.pdf';
  link.download = 'Mohamed_Mahmoud_Ghobara-CV.pdf';
  link.click();
}

/* ═══ LANGUAGE ═══ */
function toggleLang() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  localStorage.setItem('lang', currentLang);
  applyLang(currentLang);
}

function applyLang(lang) {
  const t = translations[lang];
  document.documentElement.setAttribute('lang', lang);
  document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Font family via class — CSS handles per-element overrides
  document.body.style.fontFamily = lang === 'ar' ? "'Cairo', sans-serif" : "'Outfit', 'Cairo', sans-serif";

  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.textContent = lang === 'en' ? 'AR' : 'EN';
    langBtn.setAttribute('aria-label', t.lang_switch || 'Toggle language');
  }

  // Translate all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update placeholders
  document.querySelectorAll('[data-placeholder-en]').forEach(el => {
    el.placeholder = lang === 'ar' ? el.dataset.placeholderAr : el.dataset.placeholderEn;
  });

  // ── Form icon & padding: handled by CSS [dir="rtl"] rules.
  // Only update inline styles that CSS cannot reach (the icon absolute position
  // is already handled in style.css via [dir="rtl"] .form-icon).
  // We keep this block only to stay compatible with dynamic form rebuilds.
  const formIcons = document.querySelectorAll('.form-icon');
  const formInputs = document.querySelectorAll('.form-input-padded');
  if (lang === 'ar') {
    formIcons.forEach(i => { i.style.left = 'auto'; i.style.right = '0.75rem'; });
    formInputs.forEach(i => {
      i.style.paddingLeft = '1rem';
      i.style.paddingRight = '2.75rem';
      i.style.direction = 'rtl';
      i.style.textAlign = 'right';
    });
  } else {
    formIcons.forEach(i => { i.style.left = '0.75rem'; i.style.right = 'auto'; });
    formInputs.forEach(i => {
      i.style.paddingLeft = '2.75rem';
      i.style.paddingRight = '1rem';
      i.style.direction = 'ltr';
      i.style.textAlign = 'left';
    });
  }

  // ── Hero text: text-align and direction only — no flex/justify overrides.
  // All structural layout is handled by CSS [dir="rtl"] rules.
  const heroText = document.getElementById('hero-text');
  if (heroText) {
    heroText.style.textAlign = lang === 'ar' ? 'right' : '';
    // Remove any previously set inline flex overrides so CSS rules take over
    const hb = heroText.querySelector('.hero-buttons');
    if (hb) hb.style.justifyContent = '';
    const hs = heroText.querySelector('.hero-stats');
    if (hs) hs.style.justifyContent = '';
    const tl = heroText.querySelector('.tag-line');
    if (tl) tl.style.justifyContent = '';
  }

  // Restart typewriter with new language
  startTypewriter(lang);
  // Update theme button label in new language
  applyTheme(currentTheme);
}

/* ═══ HAMBURGER / MOBILE MENU ═══ */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('aside-overlay');
  const aside = document.getElementById('aside-menu');
  const closeBtn = document.getElementById('aside-close');
  if (!hamburger || !overlay || !aside || !closeBtn) return;

  function openMenu() {
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'all';
    overlay.removeAttribute('aria-hidden');
    aside.classList.add('open');
    aside.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    overlay.setAttribute('aria-hidden', 'true');
    aside.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.focus();
  }

  hamburger.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  document.querySelectorAll('#aside-menu nav a').forEach(a => a.addEventListener('click', closeMenu));
}

/* ═══ SCROLL REVEAL ═══ */
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => el.classList.add('visible'));
    return;
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => obs.observe(el));
}

/* ═══ SCROLL TO TOP ═══ */
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;

  const handleScroll = () => btn.classList.toggle('visible', window.scrollY > 400);
  window.addEventListener('scroll', handleScroll, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ═══ ACTIVE NAV ═══ */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  if (!sections.length || !links.length) return;

  const handleScroll = () => {
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 140) current = s.id; });
    links.forEach(link => {
      const isActive = link.getAttribute('href') === '#' + current;
      link.classList.toggle('active', isActive);
      link.setAttribute('aria-current', isActive ? 'page' : 'false');
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
}

/* ═══ CERTIFICATE SLIDER ═══ */
function initSlider() {
  // Enforce LTR on slider elements regardless of page dir
  const sliderEl = document.getElementById('cert-slider');
  const sliderWrapper = sliderEl?.parentElement;
  if (sliderEl) {
    sliderEl.setAttribute('dir', 'ltr');
    sliderEl.style.direction = 'ltr';
  }
  if (sliderWrapper) {
    sliderWrapper.setAttribute('dir', 'ltr');
    sliderWrapper.style.direction = 'ltr';
  }

  updateSlidesPerView();
  renderDots();
  goToSlide(0);

  window.addEventListener('resize', () => {
    updateSlidesPerView();
    goToSlide(Math.min(sliderIndex, TOTAL_CERTS - slidesPerView));
    renderDots();
  });

  document.getElementById('prev-btn')?.addEventListener('click', () => {
    clearAutoSlide();
    const max = TOTAL_CERTS - slidesPerView;
    sliderIndex = sliderIndex <= 0 ? max : sliderIndex - 1;
    goToSlide(sliderIndex);
    scheduleAutoSlide();
  });

  document.getElementById('next-btn')?.addEventListener('click', () => {
    clearAutoSlide();
    const max = TOTAL_CERTS - slidesPerView;
    sliderIndex = sliderIndex >= max ? 0 : sliderIndex + 1;
    goToSlide(sliderIndex);
    scheduleAutoSlide();
  });

  scheduleAutoSlide();
}

function clearAutoSlide() {
  if (autoSlideTimer) { clearInterval(autoSlideTimer); autoSlideTimer = null; }
}

function scheduleAutoSlide() {
  clearAutoSlide();
  autoSlideTimer = setInterval(() => {
    const max = TOTAL_CERTS - slidesPerView;
    sliderIndex = sliderIndex >= max ? 0 : sliderIndex + 1;
    goToSlide(sliderIndex);
  }, 4000);
}

function updateSlidesPerView() {
  slidesPerView = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  const pct = 100 / slidesPerView;
  document.querySelectorAll('.cert-card').forEach(c => c.style.width = pct + '%');
}

function goToSlide(index) {
  const max = TOTAL_CERTS - slidesPerView;
  sliderIndex = Math.max(0, Math.min(index, max));
  // Always translate in the LTR (positive = left) direction.
  // The slider container has direction:ltr forced via CSS, so this is always correct.
  const offset = (100 / slidesPerView) * sliderIndex;
  const slider = document.getElementById('cert-slider');
  if (slider) slider.style.transform = `translateX(-${offset}%)`;

  document.querySelectorAll('.slider-dot').forEach((d, i) => {
    const isActive = i === sliderIndex;
    d.setAttribute('aria-selected', String(isActive));
    d.setAttribute('aria-label', `Slide ${i + 1}${isActive ? ' (current)' : ''}`);
    d.style.background = isActive ? '#00dcb4' : 'rgba(255,255,255,0.07)';
    d.style.width = isActive ? '22px' : '8px';
  });
}

function renderDots() {
  const dotsEl = document.getElementById('slider-dots');
  if (!dotsEl) return;
  const count = Math.max(1, TOTAL_CERTS - slidesPerView + 1);
  dotsEl.innerHTML = '';

  for (let i = 0; i < count; i++) {
    const dot = document.createElement('button');
    dot.className = 'slider-dot';
    dot.style.cssText = 'height:8px;border-radius:4px;border:none;cursor:pointer;transition:all 0.3s;';
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.setAttribute('aria-selected', String(i === sliderIndex));
    dot.style.background = i === sliderIndex ? '#00dcb4' : 'rgba(255,255,255,0.07)';
    dot.style.width = i === sliderIndex ? '22px' : '8px';
    dot.addEventListener('click', () => { clearAutoSlide(); goToSlide(i); scheduleAutoSlide(); });
    dotsEl.appendChild(dot);
  }
}

/* ═══ CERTIFICATE MODAL ═══ */
function initModal() {
  const overlay = document.getElementById('cert-modal');
  const closeBtn = document.getElementById('modal-close');
  if (!overlay || !closeBtn) return;

  document.addEventListener('click', e => {
    const btn = e.target.closest('.cert-view-btn');
    if (!btn) return;

    const card = btn.closest('.cert-card-inner');
    if (!card) return;

    const imgEl = card.querySelector('.cert-img-el');
    const nameEl = card.querySelector('.cert-title');
    const issuerEl = card.querySelector('[class*="mono"]');

    const modalImg = document.getElementById('modal-img');
    const modalName = document.getElementById('modal-cert-name');
    const modalIssuer = document.getElementById('modal-cert-issuer');

    if (modalImg) { modalImg.src = imgEl?.src || ''; modalImg.alt = (nameEl?.textContent || '') + ' certificate image'; }
    if (modalName) modalName.textContent = nameEl?.textContent || '';
    if (modalIssuer) modalIssuer.textContent = issuerEl?.textContent?.trim() || '';

    overlay.classList.add('open');
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'all';
    overlay.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  });

  function closeModal() {
    overlay.classList.remove('open');
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    overlay.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

/* ═══ CUSTOM CURSOR ═══ */
function initCursor() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  document.body.classList.add('has-custom-cursor');

  let mouseX = -200, mouseY = -200;
  let ringX = -200, ringY = -200;
  let ringW = 32, ringH = 32;
  let targetRingW = 32, targetRingH = 32;
  const LERP = 0.13;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!dot.classList.contains('visible')) {
      dot.classList.add('visible');
      ring.classList.add('visible');
      ringX = mouseX;
      ringY = mouseY;
    }
  }, { passive: true });

  const selector = 'a, button, [role="button"], .cert-card-inner, .project-card, .skill-item, .ci, input, textarea';
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('mouseenter', () => {
      targetRingW = 52; targetRingH = 52;
      ring.style.borderColor = 'rgba(0,220,180,0.9)';
      ring.style.background = 'rgba(0,220,180,0.06)';
      dot.style.width = '5px'; dot.style.height = '5px';
    });
    el.addEventListener('mouseleave', () => {
      targetRingW = 32; targetRingH = 32;
      ring.style.borderColor = 'rgba(0,220,180,0.55)';
      ring.style.background = 'transparent';
      dot.style.width = '7px'; dot.style.height = '7px';
    });
  });

  function animate() {
    dot.style.transform = `translate(${mouseX - 3.5}px, ${mouseY - 3.5}px)`;
    ringX += (mouseX - ringX) * LERP;
    ringY += (mouseY - ringY) * LERP;
    ringW += (targetRingW - ringW) * 0.18;
    ringH += (targetRingH - ringH) * 0.18;
    ring.style.transform = `translate(${ringX - ringW / 2}px, ${ringY - ringH / 2}px)`;
    ring.style.width = ringW + 'px';
    ring.style.height = ringH + 'px';
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  document.addEventListener('mouseleave', () => { dot.classList.remove('visible'); ring.classList.remove('visible'); });
  document.addEventListener('mouseenter', () => { dot.classList.add('visible'); ring.classList.add('visible'); });
}

/* ═══ COUNT UP ANIMATION ═══ */
function initCountUp() {
  if (!('IntersectionObserver' in window)) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const duration = 1200;
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target;
      }
      requestAnimationFrame(update);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.count-up').forEach(el => obs.observe(el));
}

/* ═══ CONTACT FORM ═══ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const messageEl = document.getElementById('message');

    const name = nameEl?.value.trim() || '';
    const email = emailEl?.value.trim() || '';
    const message = messageEl?.value.trim() || '';
    const isAr = currentLang === 'ar';

    if (!name) {
      showToast(isAr ? '⚠️ من فضلك أدخل اسمك' : '⚠️ Please enter your name.', 'error');
      nameEl?.focus();
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast(isAr ? '⚠️ أدخل بريد إلكتروني صحيح' : '⚠️ Please enter a valid email.', 'error');
      emailEl?.focus();
      return;
    }
    if (!message) {
      showToast(isAr ? '⚠️ من فضلك أدخل رسالتك' : '⚠️ Please enter your message.', 'error');
      messageEl?.focus();
      return;
    }

    setLoading(true);

    try {
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        showToast(isAr ? '✅ تم إرسال الرسالة بنجاح!' : '✅ Message sent successfully!', 'success');
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      showToast(isAr ? '❌ حدث خطأ. حاول مرة أخرى.' : '❌ Something went wrong. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  });
}

/* ═══ HELPERS ═══ */
function showToast(msg, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.className = `toast ${type} show`;
  setTimeout(() => { toast.className = 'toast'; }, 4000);
}

function setLoading(on) {
  const btn = document.getElementById('submit-btn');
  if (!btn) return;
  btn.classList.toggle('loading', on);
  btn.disabled = on;
  const spinner = btn.querySelector('.spinner');
  const btnText = btn.querySelector('.btn-text');
  const sendIcon = btn.querySelector('.send-icon');
  if (spinner) spinner.style.display = on ? 'block' : 'none';
  if (btnText) btnText.style.display = on ? 'none' : 'inline';
  if (sendIcon) sendIcon.style.display = on ? 'none' : 'inline';
}