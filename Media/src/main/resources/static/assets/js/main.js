/**
* Template Name: TheEvent
* Template URL: https://bootstrapmade.com/theevent-conference-event-bootstrap-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });



  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });


})();

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 1000);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    });
  }



  

    const logo = document.getElementById("finLogo");

    document.addEventListener("mousemove", (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = (e.clientY / innerHeight - 0.5) * -30;
      logo.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    });

    document.addEventListener("mouseleave", () => {
      logo.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });




  const heading = document.querySelector('.light-follow-heading');

  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    heading.style.backgroundPosition = `${x}% ${y}%`;
  });

  // Touch fallback: center the light on mobile/tablet
  window.addEventListener('touchstart', () => {
    heading.style.backgroundPosition = '50% 50%';
  });



  const text = "From design to digital,engaging content and anchor videos we help your business shine online.";
  const target = document.getElementById("typewriter-text");
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      target.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 80); // Speed of typing in ms
    }
  }

  // Optional: start effect after a short delay
  window.addEventListener("load", () => {
    setTimeout(typeWriter, 500);
  });




  // Sparkling cursor effect
  document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.createElement('div');
    cursor.className = 'sparkle';
    document.body.appendChild(cursor);
    
    // Create a container for trail elements
    const trailContainer = document.createElement('div');
    trailContainer.style.position = 'fixed';
    trailContainer.style.top = '0';
    trailContainer.style.left = '0';
    trailContainer.style.width = '100%';
    trailContainer.style.height = '100%';
    trailContainer.style.pointerEvents = 'none';
    trailContainer.style.zIndex = '9998';
    document.body.appendChild(trailContainer);
    
    let trailElements = [];
    let lastX = 0;
    let lastY = 0;
    let trailTimer = null;
    
    // Main cursor movement
    document.addEventListener('mousemove', function(e) {
      // Update cursor position
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      // Create trail effect
      if (Math.abs(e.clientX - lastX) > 5 || Math.abs(e.clientY - lastY) > 5) {
        if (!trailTimer) {
          trailTimer = setTimeout(() => {
            createTrail(e.clientX, e.clientY);
            trailTimer = null;
          }, 20); // Adjust trail frequency
        }
        lastX = e.clientX;
        lastY = e.clientY;
      }
    });
    
    // Touch support
    document.addEventListener('touchmove', function(e) {
      const touch = e.touches[0];
      cursor.style.left = touch.clientX + 'px';
      cursor.style.top = touch.clientY + 'px';
      
      if (Math.abs(touch.clientX - lastX) > 5 || Math.abs(touch.clientY - lastY) > 5) {
        if (!trailTimer) {
          trailTimer = setTimeout(() => {
            createTrail(touch.clientX, touch.clientY);
            trailTimer = null;
          }, 30);
        }
        lastX = touch.clientX;
        lastY = touch.clientY;
      }
    });
    
    // Hide cursor when not moving
    document.addEventListener('mouseleave', function() {
      cursor.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', function() {
      cursor.style.opacity = '1';
    });
    
    // Create trail elements
    function createTrail(x, y) {
      const trail = document.createElement('div');
      trail.className = 'sparkle-trail';
      trail.style.left = x + 'px';
      trail.style.top = y + 'px';
      
      // Randomize trail appearance slightly
      const size = Math.random() * 4 + 3;
      trail.style.width = size + 'px';
      trail.style.height = size + 'px';
      
      // Random color (optional - you can remove for pure white)
      if (Math.random() > 0.7) {
        const hue = Math.random() * 60 + 180; // blue/cyan range
        trail.style.background = `hsla(${hue}, 100%, 80%, 0.7)`;
      }
      
      trailContainer.appendChild(trail);
      
      // Remove trail element after animation completes
      setTimeout(() => {
        trail.remove();
      }, 1000);
    }
    
    // Random sparkles around cursor
    setInterval(() => {
      if (cursor.style.opacity !== '0') {
        createRandomSparkle();
      }
    }, 300);
    
    function createRandomSparkle() {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle-trail';
      
      // Position randomly around cursor
      const cursorRect = cursor.getBoundingClientRect();
      const offsetX = (Math.random() - 0.5) * 40;
      const offsetY = (Math.random() - 0.5) * 40;
      
      sparkle.style.left = (cursorRect.left + cursorRect.width/2 + offsetX) + 'px';
      sparkle.style.top = (cursorRect.top + cursorRect.height/2 + offsetY) + 'px';
      
      // Make random sparkles slightly different
      sparkle.style.width = '8px';
      sparkle.style.height = '8px';
      sparkle.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
      
      if (Math.random() > 0.5) {
        sparkle.style.background = 'radial-gradient(circle, #fff 0%, transparent 70%)';
        sparkle.style.borderRadius = '50%';
      } else {
        sparkle.innerHTML = '✦';
        sparkle.style.fontSize = '23px';
        sparkle.style.background = 'transparent';
        sparkle.style.textAlign = 'center';
        sparkle.style.lineHeight = '8px';
      }
      
      trailContainer.appendChild(sparkle);
      
      // Remove after animation
      setTimeout(() => {
        sparkle.remove();
      }, 1000);
    }
  });

