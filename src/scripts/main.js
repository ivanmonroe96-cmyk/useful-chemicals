// Header scroll effect
const uiLabels = (() => {
  try {
    return JSON.parse(document.body.dataset.uiLabels || '{}');
  } catch {
    return {};
  }
})();

const sendingLabel = uiLabels.formSending || 'Sending...';
const sentLabel = uiLabels.formSent || 'Sent!';
const errorLabel = uiLabels.formError || 'Error - try again';

const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });
  // Dropdown toggle on mobile
  nav.querySelectorAll('.nav-dropdown').forEach(dd => {
    dd.querySelector('.nav-link')?.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dd.classList.toggle('open');
      }
    });
  });
}

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    if (!item) return;
    const section = item.closest('.faq-list');
    if (section) {
      section.querySelectorAll('.faq-item').forEach(i => {
        if (i !== item) i.classList.remove('active');
      });
    }
    item.classList.toggle('active');
  });
});

// Tab system
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const group = btn.closest('.features-section') || btn.closest('section');
    if (!group) return;
    group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    group.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    const target = btn.getAttribute('data-tab');
    if (target) {
      const panel = group.querySelector(`#${target}`);
      if (panel) panel.classList.add('active');
    }
  });
});

// Scroll to top
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
  });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Cookie banner
const cookieBanner = document.getElementById('cookieBanner');
const acceptCookies = document.getElementById('acceptCookies');
const declineCookies = document.getElementById('declineCookies');
if (cookieBanner) {
  if (localStorage.getItem('cookiesAccepted')) {
    cookieBanner.classList.add('hidden');
  }
  acceptCookies?.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.classList.add('hidden');
  });
  declineCookies?.addEventListener('click', () => {
    cookieBanner.classList.add('hidden');
  });
}

// Form handling — generic quote forms (excludes #contactForm which has its own handler)
document.querySelectorAll('form:not(#contactForm)').forEach(form => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (!btn) return;
    const orig = btn.textContent;
    btn.textContent = sendingLabel;
    btn.setAttribute('disabled', 'true');

    const getFieldValue = (fieldName) => {
      const field = form.querySelector(`[name="${fieldName}"]`);
      return field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement
        ? field.value
        : '';
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: getFieldValue('name'),
          email: getFieldValue('email'),
          phone: getFieldValue('phone'),
          product: getFieldValue('product'),
          message: getFieldValue('message'),
        }),
      });
      if (res.ok) {
        btn.textContent = sentLabel;
        setTimeout(() => { btn.textContent = orig; btn.removeAttribute('disabled'); form.reset(); }, 2000);
      } else {
        btn.textContent = errorLabel;
        setTimeout(() => { btn.textContent = orig; btn.removeAttribute('disabled'); }, 2000);
      }
    } catch {
      btn.textContent = errorLabel;
      setTimeout(() => { btn.textContent = orig; btn.removeAttribute('disabled'); }, 2000);
    }
  });
});

// Search functionality
const searchToggle = document.getElementById('searchToggle');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const searchForm = document.getElementById('searchForm');
const sitePages = (() => {
  try {
    return JSON.parse(searchOverlay?.dataset.searchPages || '[]');
  } catch {
    return [];
  }
})();
const noResultsLabel = searchOverlay?.dataset.noResults || 'No results found.';

function openSearch() {
  searchOverlay?.classList.add('active');
  document.body.style.overflow = 'hidden';
  setTimeout(() => searchInput?.focus(), 200);
}

function closeSearch() {
  searchOverlay?.classList.remove('active');
  document.body.style.overflow = '';
  if (searchInput) searchInput.value = '';
  if (searchResults) searchResults.innerHTML = '';
}

searchToggle?.addEventListener('click', openSearch);
searchClose?.addEventListener('click', closeSearch);
searchOverlay?.addEventListener('click', (e) => {
  if (e.target === searchOverlay) closeSearch();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSearch();
});

searchInput?.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!searchResults) return;
  if (!q) { searchResults.innerHTML = ''; return; }

  const matches = sitePages.filter(p =>
    p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
  );

  if (matches.length === 0) {
    searchResults.innerHTML = `<p class="search-no-results">${noResultsLabel}</p>`;
  } else {
    searchResults.innerHTML = matches.map(p =>
      `<a href="${p.url}" class="search-result-item"><h4>${p.title}</h4><p>${p.description}</p></a>`
    ).join('');
  }
});

searchForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const firstResult = searchResults?.querySelector('.search-result-item');
  if (firstResult) firstResult.click();
});
