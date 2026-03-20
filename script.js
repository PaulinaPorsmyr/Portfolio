
const contactForm = document.getElementById('contact-form');
const submitBtn   = document.getElementById('submit-btn');
const successMsg  = document.getElementById('form-success-message-container');

if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        submitBtn.innerText = 'Sending...';

        emailjs.sendForm('service_5pako7m', 'template_uo1ucrv', this)
            .then(() => {
                contactForm.style.display = 'none';
                successMsg.classList.remove('hidden');
            }, () => {
                submitBtn.innerText = 'Send Message →';
                alert('Something went wrong, please try again.');
            });
    });
}


const modal        = document.getElementById('project-modal');
const modalTitle   = document.getElementById('modal-title');
const modalDesc    = document.getElementById('modal-description');
const modalTags    = document.getElementById('modal-tags');
const modalGithub  = document.getElementById('modal-github');
const modalImg     = document.getElementById('modal-img');
const modalClose   = document.getElementById('modal-close-btn');


document.querySelectorAll('.info-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.project-card');

        modalTitle.textContent       = card.dataset.title;
        modalDesc.textContent        = card.dataset.description;
        modalGithub.href             = card.dataset.github;
        modalImg.src                 = card.dataset.img;
        modalImg.alt                 = card.dataset.title;

       
        modalTags.innerHTML = card.dataset.tags
            .split(',')
            .map(t => `<span class="tag">${t.trim()}</span>`)
            .join('');

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; 
    });
});


modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
});


document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}