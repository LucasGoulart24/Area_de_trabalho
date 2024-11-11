function updateTime() {
    const timeElement = document.getElementById('tempo');
    const now = new Date;
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    timeElement.textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();

// Abrir aplicativos
let myWindows;

function openWindows() {
    myWindows = window.open('https://www.google.com.br/?hl=pt-BR', '', 'width=900, height=900');
}