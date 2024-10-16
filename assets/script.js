function projectClicked(projectUrl) {
    const projectElements = document.querySelectorAll('.project');
    
    projectElements.forEach(project => {
        project.style.opacity = 1; 
        project.classList.add('animate'); 
    });

    alert('Navigating to ' + projectUrl);
    setTimeout(() => {
        window.location.href = projectUrl;
    }, 500); 
}


function aboutmeClicked() {
    alert('Navigating to About Me');
    window.location.href = 'about.html'; // Siirry "About Me" -sivulle
}

// Hakee kaikki projektikortit
const projectLinks = document.querySelectorAll('.project');

// Käy läpi jokaisen projektikortin ja lisää tapahtumankuuntelijat
projectLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = 'rgba(255, 184, 236, 0.7)'; // Muuttaa taustaväriä
        link.style.transform = 'scale(1.05)'; // Suurennus
    });

    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = 'rgba(255, 184, 236, 0)'; // Palauttaa alkuperäisen taustavärin
        link.style.transform = ''; // Palauttaa alkuperäisen koon
    });
});

// Funktio kellon ajan päivittämiseksi
function updateClock() {
    const now = new Date(); // Hakee nykyisen ajan
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // 24 tunnin muoto
    };
    
    // Muuttaa ajan stringiksi
    const timeString = now.toLocaleTimeString([], options);
    
    // Päivittää kellon HTML-elementin sisällön
    document.getElementById('clock').textContent = timeString;
}

// Päivittää kello heti, kun sivu ladataan
updateClock();

// Päivittää kellon joka sekunti
setInterval(updateClock, 1000);


let inactivityTime = 0; // Muuttuja aikakatkaisuajalle
let timer; // Timer-muuttuja

// Funktio, joka käynnistää aikakatkaisun
function startTimer() {
    timer = setTimeout(() => {
        alert("Aikakatkaisu"); // Näyttää ilmoituksen
    }, 15000); // 15000 ms = 15 sekuntia
}

// Funktio, joka nollaa aikakatkaisun
function resetTimer() {
    clearTimeout(timer); // Pysäyttää aikakatkaisun
    inactivityTime = 0; // Nollaa aikakatkaisuajamittari
    startTimer(); // Käynnistää aikakatkaisun uudelleen
}

// Lisää tapahtumakuuntelijat vuorovaikutukseen
window.onload = () => {
    startTimer(); // Käynnistää aikakatkaisun sivun ladattaessa

    // Lista tapahtumista, jotka nollaavat aikakatkaisun
    const events = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];

    // Lisää tapahtumakuuntelijat
    events.forEach(event => {
        document.addEventListener(event, resetTimer, false);
    });
};








