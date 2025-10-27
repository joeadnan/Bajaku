// Simple JS for nav toggle, smooth scroll, and contact form sample handling
document.addEventListener('DOMContentLoaded', function(){
  const nav = document.getElementById('main-nav');
  const toggle = document.getElementById('navToggle');
  const quoteBtn = document.getElementById('quoteBtn');

  toggle.addEventListener('click', () => {
    if (nav.style.display === 'flex') { nav.style.display = ''; }
    else { nav.style.display = 'flex'; nav.style.flexDirection = 'column'; }
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const id = this.getAttribute('href');
      if (id.length > 1) {
        e.preventDefault();
        document.querySelector(id).scrollIntoView({behavior:'smooth'});
        if (window.innerWidth <= 800) nav.style.display = '';
      }
    });
  });

  quoteBtn.addEventListener('click', () => {
    // Example action: open contact section
    document.querySelector('#contact').scrollIntoView({behavior:'smooth'});
  });

  // Contact form: prevent real submission and show a friendly message
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    if (!name || !email || !message) {
      alert('Harap isi semua field.');
      return;
    }
    alert('Terima kasih ' + name + '! Pesanmu telah dikirim (demo).');
    contactForm.reset();
  });
});
