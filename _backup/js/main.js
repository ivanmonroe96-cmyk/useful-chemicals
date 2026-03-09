/* ============================================
   UE Chemicals - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  // ---- Header scroll effect ----
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function() {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // ---- Mobile menu toggle ----
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('open');
    });

    // Close menu on link click
    nav.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          menuToggle.classList.remove('active');
          nav.classList.remove('open');
        }
      });
    });

    // Mobile dropdown toggle
    nav.querySelectorAll('.nav-dropdown').forEach(function(dropdown) {
      const link = dropdown.querySelector('.nav-link');
      if (link) {
        link.addEventListener('click', function(e) {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('open');
          }
        });
      }
    });
  }

  // ---- FAQ Accordion ----
  document.querySelectorAll('.faq-question').forEach(function(question) {
    question.addEventListener('click', function() {
      const item = this.parentElement;
      const wasActive = item.classList.contains('active');
      
      // Close all siblings
      item.parentElement.querySelectorAll('.faq-item').forEach(function(faq) {
        faq.classList.remove('active');
      });
      
      if (!wasActive) {
        item.classList.add('active');
      }
    });
  });

  // ---- Tabs ----
  document.querySelectorAll('.tab-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const tabGroup = this.closest('.tabs-container');
      if (!tabGroup) return;
      
      tabGroup.querySelectorAll('.tab-btn').forEach(function(b) {
        b.classList.remove('active');
      });
      tabGroup.querySelectorAll('.tab-content').forEach(function(c) {
        c.classList.remove('active');
      });
      
      this.classList.add('active');
      const target = tabGroup.querySelector('#' + this.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  // ---- Scroll to top button ----
  const scrollTopBtn = document.querySelector('.scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function() {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    });
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- Cookie banner ----
  const cookieBanner = document.querySelector('.cookie-banner');
  if (cookieBanner) {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (accepted) {
      cookieBanner.classList.add('hidden');
    }
    
    cookieBanner.querySelectorAll('[data-cookie]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (this.dataset.cookie === 'accept' || this.dataset.cookie === 'reject') {
          localStorage.setItem('cookiesAccepted', 'true');
          cookieBanner.classList.add('hidden');
        }
      });
    });
  }

  // ---- Form submission (prevent default) ----
  document.querySelectorAll('form').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        const original = btn.textContent;
        btn.textContent = 'SENT!';
        btn.style.background = '#4caf50';
        setTimeout(function() {
          btn.textContent = original;
          btn.style.background = '';
          form.reset();
        }, 2000);
      }
    });
  });

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- Intersection Observer for animations ----
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.feature-card, .product-card, .app-card, .step-card, .news-card, .chemical-block').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

});
