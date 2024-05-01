document.querySelectorAll('.navbar .a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        document.getElementById('menu-toggle').checked = false; // Cerrar el menú al hacer clic en un enlace
    });
});


function showPopup() {
    const contactHeading = document.getElementById('contact-heading');
    const iconEnvelope = document.getElementById('icon-envelope');
    contactHeading.innerText = 'Thank you!'; 
    iconEnvelope.classList.remove('fa-envelope')
    iconEnvelope.classList.add('fa-envelope-open')
    
    setTimeout(() => {

        iconEnvelope.classList.remove('fa-envelope-open')
        iconEnvelope.classList.add('fa-envelope')
        contactHeading.innerText = 'Contact Me'; // Restaurar el texto original después de 3 segundos
      }, 3000);
  }