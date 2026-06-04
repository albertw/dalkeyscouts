/**
 * Header and Footer inclusion for 17th Dalkey Scouts
 * Works with both file:// and http protocols
 */

document.addEventListener('DOMContentLoaded', function() {
    // Inject Header
    const headerHTML = `
    <!-- Header & Navigation -->
    <header class="header" role="banner">
      <div class="container header__container">
        <button class="nav__toggle" aria-label="Toggle navigation" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class="nav" role="navigation" aria-label="Main navigation">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="index.html" class="nav__link">Home</a>
            </li>
            <li class="nav__item">
              <a href="about.html" class="nav__link">About</a>
            </li>
            <li class="nav__item nav__item--dropdown">
              <a href="#" class="nav__link" aria-haspopup="true">Sections ▾</a>
              <ul class="nav__dropdown">
                <li><a href="beaver-scouts.html" class="nav__dropdown-item">Beaver Scouts (6-8)</a></li>
                <li><a href="cub-scouts.html" class="nav__dropdown-item">Cub Scouts (9-11)</a></li>
                <li><a href="scouts.html" class="nav__dropdown-item">Scouts (12-15)</a></li>
              </ul>
            </li>
            <li class="nav__item nav__item--dropdown">
              <a href="#" class="nav__link" aria-haspopup="true">For Parents ▾</a>
              <ul class="nav__dropdown">
                <li><a href="registering.html" class="nav__dropdown-item">Enquire about you child joining</a></li>
                <li><a href="volunteering.html" class="nav__dropdown-item">Volunteering</a></li>
                <li><a href="policies.html" class="nav__dropdown-item">Group Policies</a></li>
                <li><a href="images/17thBooklet2425c.pdf" class="nav__dropdown-item" target="_blank">Information Booklet (PDF)</a></li>
              </ul>
            </li>
            <li class="nav__item">
              <a href="contact.html" class="nav__link">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    `;

    // Inject Footer
    const footerHTML = `
    <!-- Footer -->
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
              <a href="https://www.facebook.com/17thDalkey" target="_blank" rel="noopener noreferrer" class="footer__link">
                Facebook Page
              </a>
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

    // Insert header at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // Insert footer at the end of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Update copyright year
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
});
