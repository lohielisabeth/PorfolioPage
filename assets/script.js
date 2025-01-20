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
    window.location.href = 'about.html';
}

const projectLinks = document.querySelectorAll('.project');

projectLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = 'rgba(255, 184, 236, 0.7)'; 
        link.style.transform = 'scale(1.05)'; 
    });

    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = 'rgba(255, 184, 236, 0)'; 
        link.style.transform = ''; 
    });
});

function updateClock() {
    const now = new Date(); 
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false 
    };
    
    const timeString = now.toLocaleTimeString([], options);
    
    document.getElementById('clock').textContent = timeString;
}

updateClock();

setInterval(updateClock, 1000);

let inactivityTime = 0;
let timer; 

function startTimer() {
    timer = setTimeout(() => {
        alert("Aikakatkaisu"); 
    }, 15000); 
}

function resetTimer() {
    clearTimeout(timer); 
    inactivityTime = 0; 
    startTimer(); 
}

window.onload = () => {
    startTimer(); 
    const events = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];
    events.forEach(event => {
        document.addEventListener(event, resetTimer, false);
    });
};








