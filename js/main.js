/* =============================================
   FAQ ACCORDION
   ============================================= */
document.querySelectorAll('.faq-question').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var item = this.parentElement;
    var answer = item.querySelector('.faq-answer');

    // Close other open items
    document.querySelectorAll('.faq-item.active').forEach(function(openItem) {
      if (openItem !== item) {
        openItem.classList.remove('active');
        openItem.querySelector('.faq-answer').style.maxHeight = null;
      }
    });

    // Toggle current
    item.classList.toggle('active');
    if (item.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = null;
    }
  });
});

/* =============================================
   STICKY CART BAR — show after scrolling past
   the main Add to Cart button
   ============================================= */
(function() {
  var stickyBar = document.getElementById('stickyCartBar');
  var addBtn = document.getElementById('addToCartBtn');

  if (!stickyBar || !addBtn) return;

  // Initially hidden
  stickyBar.style.transform = 'translateY(100%)';
  stickyBar.style.transition = 'transform 0.3s ease';

  window.addEventListener('scroll', function() {
    var btnRect = addBtn.getBoundingClientRect();
    if (btnRect.bottom < 0) {
      stickyBar.style.transform = 'translateY(0)';
    } else {
      stickyBar.style.transform = 'translateY(100%)';
    }
  });
})();

/* =============================================
   SMOOTH SCROLL for any anchor links
   ============================================= */
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
