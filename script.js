


const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const successMsg = document.getElementById('form-success-message-container');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        submitBtn.innerText = 'Sending...';

        // Uppdatera med dina ID:n från EmailJS
        emailjs.sendForm('service_5pako7m', 'template_uo1ucrv', this)
            .then(() => {
                contactForm.style.display = 'none';
                successMsg.classList.remove('hidden');
            }, (err) => {
                submitBtn.innerText = 'Send Message →';
                alert("Something went wrong, please try again.");
            });
    });
}
