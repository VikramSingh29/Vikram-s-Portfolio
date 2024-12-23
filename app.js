// Initialize AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-in-out', // Easing function
      once: true, // Animation happens only once
    });
  });
  

//   navbar links
const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('.nav-link')
navlinks.forEach(navlink => {
    navlink.addEventListener('click', (event) => {
    //   event.preventDefault();
      const targetId = navlink.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  navlinks.forEach(navlink => {
    navlink.addEventListener('click', (event) => {
      // Remove 'active' class from all links
      navlinks.forEach(link => link.classList.remove('active'));
  
      // Add 'active' class to the clicked link
      navlink.classList.add('active');
    });
  });

  window.addEventListener('scroll', () => {
    let currentSection = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });
  
    navlinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });



