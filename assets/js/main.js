// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    
    if (target) {
      // Scroll to target
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update URL without page reload
      if (targetId !== '#') {
        history.pushState(null, null, targetId);
      } else {
        history.pushState(null, null, ' ');
      }
    }
  });
});

// Handle back/forward navigation
window.addEventListener('popstate', function() {
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

// Your existing accordion code
document.addEventListener("DOMContentLoaded", function() {
  const toggleButtons = document.querySelectorAll(".accordion-toggle");

  toggleButtons.forEach(btn => {
    btn.addEventListener("click", function() {
      const panel = this.nextElementSibling;
      const label = this.querySelector(".label-text");

      panel.classList.toggle("open");

      if (label) {
        const isOpen = panel.classList.contains("open");
        label.textContent = isOpen
          ? label.textContent.replace("Show", "Hide").replace("▾", "▲")
          : label.textContent.replace("Hide", "Show").replace("▲", "▾");
      }
    });
  });
});