// shared-components.js
// Place this file in your root directory or a /js folder

// Dynamic path helper - detects if we're in a subfolder
function getBasePath() {
  const path = window.location.pathname;
  // If we're in /case-studies/, /articles/, /videos/, or /services/ subfolder, go up one level
  if (path.includes('/case-studies/') || path.includes('/articles/') || path.includes('/videos/') || path.includes('/services/')) {
    return '../';
  }
  // Otherwise we're at root level
  return '';
}

function getNavigationHTML(basePath) {
  return `
    <header class="container">
      <nav>
        <a href="${basePath}index.html" class="logo">
          <img src="${basePath}img/krlogo.svg" alt="Klaudia Rudna" />
          Klaudia Rudna
        </a>
        <div class="burger-menu" onclick="toggleMenu()">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul>
          <li><a href="${basePath}services.html" data-page="services">Services</a></li>
          <li><a href="${basePath}articles.html" data-page="articles">Articles</a></li>
          <li><a href="${basePath}case-studies.html" data-page="case-studies">Case Studies</a></li>
          <li><a href="${basePath}about.html" data-page="about">About</a></li>
          <li><a href="${basePath}contact.html" data-page="contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  `;
}

function getFooterHTML(basePath) {
  return `
    <footer id="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-main">
            <h2>Let's Talk</h2>
            <p><img class="icon-before-text" src="${basePath}img/icon-email.svg" alt="Email Icon"><a href="mailto:hello@klaudiarudna.com"> hello@klaudiarudna.com</a></p>
            <p><img class="icon-before-text" src="${basePath}img/icon-location.svg" alt="Location Icon"> Cheshire, UK</p>
          </div>
          
          <div class="footer-social">
            <h3>Follow</h3>
            <div class="social-icons">
              <a href="https://www.linkedin.com/in/klaudia-rudna-6465a1a2" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/rudnaklaudia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                </svg>
              </a>

              <a href="https://www.facebook.com/klaudia.rudna.73" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
                </svg>
              </a>
              <a href="https://x.com/KlaudiaRudna" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
            </div>
            <a href="https://klaudiarudna.substack.com/subscribe" class="footer-subscribe-btn" target="_blank" rel="noopener noreferrer">Subscribe to newsletter</a>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p class="small">&copy; 2024-2026 Klaudia Rudna. All rights reserved.</p>
          <div class="footer-links">
            <a href="${basePath}privacy-policy.html" class="footer-link">Privacy Policy</a>
            <a href="${basePath}terms-conditions.html" class="footer-link">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// Function to load navigation
function loadNavigation() {
  const navContainer = document.getElementById('nav-placeholder');
  if (navContainer) {
    const basePath = getBasePath();
    navContainer.innerHTML = getNavigationHTML(basePath);
    
    // Set active page based on data-active attribute on body
    const activePage = document.body.getAttribute('data-active-page');
    if (activePage) {
      const activeLink = document.querySelector(`nav a[data-page="${activePage}"]`);
      if (activeLink) {
        activeLink.classList.add('active-page');
      }
    }
  }
}

// Function to load footer
function loadFooter() {
  const footerContainer = document.getElementById('footer-placeholder');
  if (footerContainer) {
    const basePath = getBasePath();
    footerContainer.innerHTML = getFooterHTML(basePath);
  }
}

// Function to toggle mobile menu (keep your existing functionality)
function toggleMenu() {
  document.querySelector("nav ul").classList.toggle("active");
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  loadNavigation();
  loadFooter();
});
