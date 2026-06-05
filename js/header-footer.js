/**
 * Header and Footer inclusion for 17th Dalkey Scouts
 * Works with both file:// and http protocols
 */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        // Inject Header
        const headerHTML = `
        <header class="header" role="banner">
          <div class="container header__container">
            <button id="mobile-menu-btn" class="nav__toggle" aria-label="Toggle navigation" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>

            <!-- Desktop Navigation -->
            <nav class="nav" role="navigation" aria-label="Main navigation">
              <ul class="nav__list">
                <li class="nav__item"><a href="index.html" class="nav__link">Home</a></li>
                <li class="nav__item"><a href="about.html" class="nav__link">About</a></li>
                <li class="nav__item nav__item--dropdown">
                  <a href="#" class="nav__link" aria-haspopup="true">Sections ▾</a>
                  <ul class="nav__dropdown">
                    <li><a href="beaver-scouts.html" class="nav__dropdown-item">Beaver Scouts (6-8)</a></li>
                    <li><a href="cub-scouts.html" class="nav__dropdown-item">Cub Scouts (9-11)</a></li>
                    <li><a href="scouts.html" class="nav__dropdown-item">Scouts (12-15)</a></li>
                    <li><a href="venture-scouts.html" class="nav__dropdown-item">Venture Scouts (15-17)</a></li>
                  </ul>
                </li>
                <li class="nav__item nav__item--dropdown">
                  <a href="#" class="nav__link" aria-haspopup="true">For Parents ▾</a>
                  <ul class="nav__dropdown">
                    <li><a href="registering.html" class="nav__dropdown-item">Enquire about you child joining</a></li>
                    <li><a href="volunteering.html" class="nav__dropdown-item">Volunteering</a></li>
                    <li><a href="policies.html" class="nav__dropdown-item">Group Policies</a></li>
                    <li><a href="images/17thBooklet2425c.pdf" class="nav__dropdown-item" target="_blank">Information Booklet (PDF) (2024)</a></li>
                  </ul>
                </li>
                <li class="nav__item"><a href="contact.html" class="nav__link">Contact</a></li>
              </ul>
            </nav>
          </div>

          <!-- Mobile Navigation -->
          <nav id="mobile-nav" class="mobile-nav">
            <ul class="mobile-nav__list">
              <li class="mobile-nav__item"><a href="index.html" class="mobile-nav__link">Home</a></li>
              <li class="mobile-nav__item"><a href="about.html" class="mobile-nav__link">About</a></li>
              <li class="mobile-nav__item">
                <button class="mobile-nav__link mobile-nav__dropdown-toggle">Sections ▼</button>
                <ul class="mobile-nav__dropdown">
                  <li><a href="beaver-scouts.html" class="mobile-nav__link mobile-nav__sublink">Beaver Scouts (6-8)</a></li>
                  <li><a href="cub-scouts.html" class="mobile-nav__link mobile-nav__sublink">Cub Scouts (9-11)</a></li>
                  <li><a href="scouts.html" class="mobile-nav__link mobile-nav__sublink">Scouts (12-15)</a></li>
                  <li><a href="venture-scouts.html" class="mobile-nav__link mobile-nav__sublink">Venture Scouts (15-17)</a></li>
                </ul>
              </li>
              <li class="mobile-nav__item">
                <button class="mobile-nav__link mobile-nav__dropdown-toggle">For Parents ▼</button>
                <ul class="mobile-nav__dropdown">
                  <li><a href="registering.html" class="mobile-nav__link mobile-nav__sublink">Enquire about you child joining</a></li>
                  <li><a href="volunteering.html" class="mobile-nav__link mobile-nav__sublink">Volunteering</a></li>
                  <li><a href="policies.html" class="mobile-nav__link mobile-nav__sublink">Group Policies</a></li>
                  <li><a href="images/17thBooklet2425c.pdf" class="mobile-nav__link mobile-nav__sublink" target="_blank">Information Booklet (PDF) (2024)</a></li>
                </ul>
              </li>
              <li class="mobile-nav__item"><a href="contact.html" class="mobile-nav__link">Contact</a></li>
            </ul>
          </nav>
        </header>
        `;

        // Inject Footer
        const footerHTML = `
        <footer class="footer" role="contentinfo">
          <div class="container">
            <div class="footer__content">
              <div class="footer__section">
                <h3 class="footer__section-title">17th Dalkey Scouts</h3>
                <p>Part of Scouting Ireland, providing adventure and friendship for young people in Dalkey, County Dublin.</p>
              </div>
              <div class="footer__section">
                <h3 class="footer__section-title">Quick Links</h3>
                <nav class="footer__links">
                  <a href="index.html" class="footer__link">Home</a>
                  <a href="about.html" class="footer__link">About Us</a>
                  <a href="registering.html" class="footer__link">How to Register</a>
                  <a href="contact.html" class="footer__link">Contact</a>
                </nav>
              </div>
              <div class="footer__section">
                <h3 class="footer__section-title">Sections</h3>
                <nav class="footer__links">
                  <a href="beaver-scouts.html" class="footer__link">Beaver Scouts</a>
                  <a href="cub-scouts.html" class="footer__link">Cub Scouts</a>
                  <a href="scouts.html" class="footer__link">Scouts</a>
                </nav>
              </div>
              <div class="footer__section">
                <h3 class="footer__section-title">Connect With Us</h3>
                <nav class="footer__links">
                  <a href="https://www.facebook.com/17thDalkey" target="_blank" rel="noopener noreferrer" class="footer__link">Facebook Page</a>
                  <a href="volunteering.html" class="footer__link">Become a Volunteer</a>
                </nav>
              </div>
            </div>
            <div class="footer__bottom">
              <p>&copy; <span id="year"></span> 17th Dalkey Scouts. All rights reserved.</p>
              <p>Part of <a href="https://www.scouts.ie" target="_blank" rel="noopener noreferrer" class="footer__link">Scouting Ireland</a></p>
            </div>
          </div>
        </footer>
        `;

        // Insert header and footer
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
        document.body.insertAdjacentHTML('beforeend', footerHTML);

        // Update copyright year
        const yearElement = document.getElementById('year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }

        // Mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileNav = document.getElementById('mobile-nav');

        if (mobileMenuBtn && mobileNav) {
            // Toggle mobile menu
            mobileMenuBtn.addEventListener('click', function() {
                mobileNav.classList.toggle('mobile-nav--active');
                const isExpanded = mobileNav.classList.contains('mobile-nav--active');
                mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
            });

            // Close menu when clicking regular links
            const regularLinks = mobileNav.querySelectorAll('.mobile-nav__link:not(.mobile-nav__dropdown-toggle)');
            regularLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    mobileNav.classList.remove('mobile-nav--active');
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                });
            });

            // Dropdown toggles
            const dropdownToggles = mobileNav.querySelectorAll('.mobile-nav__dropdown-toggle');
            dropdownToggles.forEach(function(toggle) {
                toggle.addEventListener('click', function() {
                    const dropdown = this.nextElementSibling;
                    if (dropdown && dropdown.classList.contains('mobile-nav__dropdown')) {
                        dropdown.classList.toggle('mobile-nav__dropdown--active');
                        const isActive = dropdown.classList.contains('mobile-nav__dropdown--active');
                        this.textContent = this.textContent.replace(isActive ? '▼' : '▲', isActive ? '▲' : '▼');
                    }
                });
            });
        }
    });

})();
