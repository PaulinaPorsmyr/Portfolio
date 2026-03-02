// --- PÅSKÄGG 1: Klick på udda del (Footer) ---
// Vi använder footern. Ett klick här byter bakgrundsbild.
const footer = document.querySelector('footer');

if (footer) {
    footer.addEventListener('click', function() {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')";
        document.body.style.backgroundSize = "cover";
        console.log("Easter Egg 1: Background changed!");
    });
}

// --- PÅSKÄGG 2: Tangentbordskombination "1337" ---
let inputBuffer = "";
const secretCode = "1337";

document.addEventListener('keydown', (e) => {
    inputBuffer += e.key;
    
    // Håll buffern till samma längd som koden
    if (inputBuffer.length > secretCode.length) {
        inputBuffer = inputBuffer.substring(1);
    }

    if (inputBuffer === secretCode) {
        activateModal();
        inputBuffer = ""; // Reset
    }
});

function activateModal() {
    // Skapa modalen dynamiskt så den garanterat finns på alla sidor
    const modalHtml = `
        <div id="easterModal" class="egg-modal">
            <div class="egg-modal-content">
                <h2>LEET MODE ACTIVATED 🚀</h2>
                <p>Welcome to the secret layer of Paulina's portfolio.</p>
                <button id="closeEgg">Back to reality</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    const modal = document.getElementById('easterModal');
    modal.style.display = 'flex';

    document.getElementById('closeEgg').onclick = () => {
        modal.remove();
    };
}

