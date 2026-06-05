/**
 * 17th Dalkey Scouts - Main JavaScript
 * Mobile menu and interactive features
 */

(function() {
  'use strict';

  // ===================================
  // Initialize Facebook SDK
  // ===================================
  const initFacebook = function() {
    // Only load if Facebook feed exists on page
    const fbPage = document.querySelector('.fb-page');
    if (!fbPage) return;

    // Load Facebook SDK
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v18.0';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  };

  // ===================================
  // Header Shrink on Scroll
  // ===================================
  const initHeaderScroll = function() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      } else {
        header.style.boxShadow = '';
      }

      lastScroll = currentScroll;
    });
  };

  // ===================================
  // Lazy Load Images
  // ===================================
  const initLazyLoad = function() {
    if ('loading' in HTMLImageElement.prototype) {
      // Browser supports native lazy loading
      const images = document.querySelectorAll('img[data-src]');
      images.forEach(function(img) {
        img.src = img.dataset.src;
      });
    } else {
      // Fallback for older browsers
      const images = document.querySelectorAll('img[data-src]');

      const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(function(img) {
        imageObserver.observe(img);
      });
    }
  };

  // ===================================
  // Initialize Everything
  // ===================================
  const init = function() {
    // Wait for DOM
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        initFacebook();
        initHeaderScroll();
        initLazyLoad();
      });
    } else {
      // DOM already loaded
      initFacebook();
      initHeaderScroll();
      initLazyLoad();
    }
  };

  // Start
  init();

})();
