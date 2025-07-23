/* tiny smooth-scroll for internal links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".accordion-toggle");

  toggleButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      const panel = this.nextElementSibling;
      const label = this.querySelector(".label-text");

      panel.classList.toggle("open");

      // Only update label text if label element exists
      if (label) {
        const isOpen = panel.classList.contains("open");
        label.textContent = isOpen
          ? label.textContent.replace("Show", "Hide").replace("▾", "▲")
          : label.textContent.replace("Hide", "Show").replace("▲", "▾");
      }
    });
  });
});