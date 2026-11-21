/**
 * Liberation War Archive (1971) - Simplified Main Script
 * Minimal, lightweight Vanilla JavaScript for essential interactions:
 * 1. Mobile navigation menu toggle
 * 2. Simple category & search filtering (Documents, Gallery, Interviews)
 * 3. Simple image lightbox (Gallery)
 * 4. Simple contact form submission message
 * 5. Back-to-top button
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      drawer.classList.toggle('open');
      hamburger.classList.toggle('active');
    });
    // Close on link click
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        drawer.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });
  }

  // 2. Simple Filter & Search Helper
  function initFilter(pillClass, itemClass, searchInputId, countId) {
    const pills = document.querySelectorAll(pillClass);
    const items = document.querySelectorAll(itemClass);
    const searchInput = document.getElementById(searchInputId);
    const countDisplay = document.getElementById(countId);
    if (!items.length) return;

    let selectedCat = 'all';

    function filterItems() {
      const q = searchInput ? searchInput.value.toLowerCase().trim() : '';
      let visibleCount = 0;

      items.forEach(item => {
        const cat = (item.getAttribute('data-category') || '').toLowerCase();
        const text = item.textContent.toLowerCase();
        const matchesCategory = (selectedCat === 'all' || cat.includes(selectedCat));
        const matchesSearch = (!q || text.includes(q));

        if (matchesCategory && matchesSearch) {
          item.style.display = '';
          visibleCount++;
        } else {
          item.style.display = 'none';
        }
      });

      if (countDisplay) {
        countDisplay.textContent = `Showing ${visibleCount} of ${items.length} records`;
      }
    }

    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        selectedCat = (pill.getAttribute('data-category') || 'all').toLowerCase();
        filterItems();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', filterItems);
    }
  }

  // Initialize filters on respective pages
  initFilter('.doc-category-pill', '.doc-card', 'docSearchInput', 'docResultsCount');
  initFilter('.interview-category-pill', '.interview-card', 'interviewSearchInput', 'interviewResultsCount');
  initFilter('.gallery-category-pill', '.gallery-item', 'gallerySearchInput', 'galleryResultsCount');

  // 3. Simple Image Lightbox (Gallery Page)
  window.openSimpleLightbox = (imgSrc, title, caption, source) => {
    const lightbox = document.getElementById('simpleLightbox');
    if (!lightbox) return;

    document.getElementById('lightboxImg').src = imgSrc;
    document.getElementById('lightboxTitle').textContent = title;
    document.getElementById('lightboxDesc').textContent = caption;
    document.getElementById('lightboxSource').textContent = source;

    const downloadLink = document.getElementById('lightboxDownload');
    if (downloadLink) {
      downloadLink.href = imgSrc;
    }

    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  window.closeSimpleLightbox = () => {
    const lightbox = document.getElementById('simpleLightbox');
    if (lightbox) {
      lightbox.style.display = 'none';
      document.body.style.overflow = '';
    }
  };

  // Close lightbox on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeSimpleLightbox();
    }
  });

  // 4. Simple Contact Form Submission
  const contactForm = document.getElementById('archiveContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const successBox = document.getElementById('formSuccessMsg');
      if (successBox) {
        const trackingNum = 'LWA-1971-' + Math.floor(1000 + Math.random() * 9000);
        document.getElementById('receiptTrackingId').textContent = trackingNum;
        successBox.style.display = 'block';
        contactForm.reset();
        successBox.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // 5. Back to Top Button
  const backBtn = document.querySelector('.back-to-top-btn');
  if (backBtn) {
    window.addEventListener('scroll', () => {
      backBtn.classList.toggle('visible', window.scrollY > 400);
    });
    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
